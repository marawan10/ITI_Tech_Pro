// Exam Module - Handles exam logic and state
export class ExamManager {
    constructor() {
        this.currentExam = null;
        this.currentQuestionIndex = 0;
        this.answers = [];
        this.startTime = null;
        this.endTime = null;
        this.timer = null;
        this.topicManager = null;
    }

    async init() {
        // Initialize exam manager
        console.log('Exam Manager initialized');
    }

    setTopicManager(topicManager) {
        this.topicManager = topicManager;
    }

    async startExam(config) {
        const exam = {
            topicId: config.topicId,
            questionCount: config.questionCount,
            timeLimit: config.timeLimit,
            questions: [],
            answers: [],
            startTime: Date.now(),
            endTime: null
        };

        // Generate questions based on config
        exam.questions = await this.generateQuestions(config);
        
        if (exam.questions.length === 0) {
            throw new Error('No questions available for this topic. Please add questions first.');
        }
        
        this.currentExam = exam;
        this.currentQuestionIndex = 0;
        this.answers = new Array(exam.questions.length);
        this.startTimer();
        
        // Navigate to exam section
        window.techQuizApp.router.navigate('exam');
        this.displayCurrentQuestion();
        
        return exam;
    }

    async generateQuestions(config) {
        if (!this.topicManager) {
            console.error('Topic manager not set');
            return [];
        }

        const topic = this.topicManager.getTopic(config.topicId);
        if (!topic) {
            console.error('Topic not found:', config.topicId);
            return [];
        }

        let questions = [];
        
        if (topic.isGeneral) {
            // For general exam, get questions from all topics
            questions = this.topicManager.getAllQuestionsForGeneral();
        } else {
            // For specific topic, get questions from that topic
            questions = topic.questions;
        }

        // Shuffle questions and take the requested number
        const shuffled = this.shuffleArray([...questions]);
        return shuffled.slice(0, Math.min(config.questionCount, shuffled.length));
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    displayCurrentQuestion() {
        if (!this.currentExam || !this.currentExam.questions[this.currentQuestionIndex]) {
            return;
        }

        const question = this.currentExam.questions[this.currentQuestionIndex];
        
        // Update question display
        document.getElementById('question-number').textContent = `Question ${this.currentQuestionIndex + 1}`;
        document.getElementById('question-text').textContent = question.text;
        
        // Update question counter
        document.getElementById('question-counter').textContent = 
            `Question ${this.currentQuestionIndex + 1} of ${this.currentExam.questions.length}`;
        
        // Update progress bar
        const progress = ((this.currentQuestionIndex + 1) / this.currentExam.questions.length) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
        
        // Render options
        this.renderOptions(question);
        
        // Update navigation buttons
        this.updateNavigationButtons();
    }

    renderOptions(question) {
        const optionsContainer = document.getElementById('question-options');
        
        // Helper function to escape HTML
        const escapeHTML = (text) => {
            const div = document.createElement('div');
            div.textContent = text; // This escapes the HTML
            return div.innerHTML;
        };
        
        optionsContainer.innerHTML = question.options.map(option => `
            <label class="option-item">
                <input type="radio" name="question-${question.id}" value="${option.id}" 
                       ${this.answers[this.currentQuestionIndex] === option.id ? 'checked' : ''}>
                <span class="option-text">${escapeHTML(option.text)}</span>
            </label>
        `).join('');
    
        // Add event listeners to options
        optionsContainer.querySelectorAll('input[type="radio"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                this.answerQuestion(e.target.value);
            });
        });
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const submitBtn = document.getElementById('submit-btn');
        const finishBtn = document.getElementById('finish-btn');

        prevBtn.disabled = this.currentQuestionIndex === 0;
        
        // Show submit button on all questions except the last one
        if (this.currentQuestionIndex < this.currentExam.questions.length - 1) {
            nextBtn.style.display = 'inline-flex';
            submitBtn.style.display = 'inline-flex';
            finishBtn.style.display = 'none';
        } else {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'none';
            finishBtn.style.display = 'inline-flex';
        }
        
        // Update submit button text based on progress
        if (submitBtn.style.display !== 'none') {
            const answeredCount = this.answers.filter(answer => answer !== undefined).length;
            const totalQuestions = this.currentExam.questions.length;
            submitBtn.innerHTML = `<i class="fas fa-paper-plane"></i> Submit Exam (${answeredCount}/${totalQuestions} answered)`;
        }
    }

    startTimer() {
        if (this.currentExam && this.currentExam.timeLimit) {
            this.updateTimerDisplay();
            this.timer = setInterval(() => {
                this.updateTimerDisplay();
            }, 1000);
        }
    }

    updateTimerDisplay() {
        if (!this.currentExam) return;
        
        const elapsed = Date.now() - this.currentExam.startTime;
        const remaining = (this.currentExam.timeLimit * 60 * 1000) - elapsed;
        
        if (remaining <= 0) {
            this.finishExam();
            return;
        }
        
        const minutes = Math.floor(remaining / (1000 * 60));
        const seconds = Math.floor((remaining % (1000 * 60)) / 1000);
        
        document.getElementById('time-remaining').textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    nextQuestion() {
        if (this.currentExam && this.currentQuestionIndex < this.currentExam.questions.length - 1) {
            this.currentQuestionIndex++;
            this.displayCurrentQuestion();
        }
    }

    previousQuestion() {
        if (this.currentExam && this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayCurrentQuestion();
        }
    }

    answerQuestion(answer) {
        if (this.currentExam) {
            this.answers[this.currentQuestionIndex] = answer;
            // Update submit button text to reflect new answer count
            this.updateNavigationButtons();
        }
    }

    finishExam() {
        if (this.currentExam) {
            // Show custom confirmation modal
            return new Promise((resolve) => {
                const modal = document.getElementById('confirmation-modal');
                const confirmBtn = document.getElementById('confirm-submit');
                const cancelBtn = document.getElementById('cancel-submit');
                const closeBtn = document.getElementById('modal-close');
                
                const handleConfirm = () => {
                    modal.classList.remove('show');
                    this.currentExam.endTime = Date.now();
                    if (this.timer) {
                        clearInterval(this.timer);
                    }
                    
                    const results = this.calculateResults();
                    this.saveResults(results);
                    
                    // Navigate to results
                    window.techQuizApp.router.navigate('results');
                    window.techQuizApp.resultsManager.displayResults(results);
                    
                    // Clean up event listeners
                    confirmBtn.removeEventListener('click', handleConfirm);
                    cancelBtn.removeEventListener('click', handleCancel);
                    closeBtn.removeEventListener('click', handleCancel);
                    
                    resolve(results);
                };
                
                const handleCancel = () => {
                    modal.classList.remove('show');
                    // Clean up event listeners
                    confirmBtn.removeEventListener('click', handleConfirm);
                    cancelBtn.removeEventListener('click', handleCancel);
                    closeBtn.removeEventListener('click', handleCancel);
                    resolve(null);
                };
                
                // Add event listeners
                confirmBtn.addEventListener('click', handleConfirm);
                cancelBtn.addEventListener('click', handleCancel);
                closeBtn.addEventListener('click', handleCancel);
                
                // Show modal
                modal.classList.add('show');
            });
        }
        return null;
    }

    calculateResults() {
        if (!this.currentExam) return null;
        
        const correct = this.answers.filter((answer, index) => 
            answer === this.currentExam.questions[index].correctAnswer
        ).length;
        
        const total = this.currentExam.questions.length;
        const percentage = Math.round((correct / total) * 100);
        
        return {
            correct,
            total,
            percentage,
            answers: this.answers,
            questions: this.currentExam.questions,
            timeSpent: this.currentExam.endTime - this.currentExam.startTime,
            topicId: this.currentExam.topicId
        };
    }

    saveResults(results) {
        if (!this.currentExam) return;
        
        const examData = {
            ...this.currentExam,
            results,
            timestamp: Date.now()
        };
        
        // Save to localStorage
        const history = JSON.parse(localStorage.getItem('exam_history') || '[]');
        history.push(examData);
        localStorage.setItem('exam_history', JSON.stringify(history));
    }

    getExamHistory() {
        return JSON.parse(localStorage.getItem('exam_history') || '[]');
    }
}

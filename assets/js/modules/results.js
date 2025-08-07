// Results Module - Handles results display and review
export class ResultsManager {
    constructor() {
        this.currentResults = null;
    }

    async init() {
        console.log('Results Manager initialized');
    }

    displayResults(results) {
        this.currentResults = results;
        
        // Update score display
        document.getElementById('score-percentage').textContent = `${results.percentage}%`;
        document.getElementById('correct-count').textContent = results.correct;
        document.getElementById('total-count').textContent = results.total;
        
        // Update score text based on performance
        const scoreText = document.getElementById('score-text');
        let performanceMessage = '';
        
        if (results.percentage >= 90) {
            performanceMessage = 'Excellent! Outstanding performance!';
        } else if (results.percentage >= 80) {
            performanceMessage = 'Great job! Well done!';
        } else if (results.percentage >= 70) {
            performanceMessage = 'Good work! Keep practicing!';
        } else if (results.percentage >= 60) {
            performanceMessage = 'Not bad! Room for improvement.';
        } else {
            performanceMessage = 'Keep studying! You can do better!';
        }
        
        scoreText.innerHTML = `You scored <span id="correct-count">${results.correct}</span> out of <span id="total-count">${results.total}</span><br><small>${performanceMessage}</small>`;
        
        // Display detailed results
        this.displayDetailedResults(results);
        
        // Display wrong answers if any
        this.displayWrongAnswers(results);
        
        // Update score circle color based on performance
        const scoreCircle = document.querySelector('.score-circle');
        if (scoreCircle) {
            // Remove any existing inline styles and classes
            scoreCircle.removeAttribute('style');
            scoreCircle.classList.remove('excellent', 'good', 'poor');
            
            // Add appropriate class based on performance
            if (results.percentage >= 80) {
                scoreCircle.classList.add('excellent');
            } else if (results.percentage >= 60) {
                scoreCircle.classList.add('good');
            } else {
                scoreCircle.classList.add('poor');
            }
        }
    }

    displayDetailedResults(results) {
        const detailsContainer = document.getElementById('results-details');
        
        const timeSpent = Math.round(results.timeSpent / 1000 / 60); // Convert to minutes
        
        detailsContainer.innerHTML = `
            <div class="results-stats">
                <div class="stat-item">
                    <i class="fas fa-clock"></i>
                    <span>Time Spent: ${timeSpent} minutes</span>
                </div>
                <div class="stat-item">
                    <i class="fas fa-tachometer-alt"></i>
                    <span>Accuracy: ${results.percentage}%</span>
                </div>
                <div class="stat-item">
                    <i class="fas fa-chart-line"></i>
                    <span>Performance: ${this.getPerformanceLevel(results.percentage)}</span>
                </div>
            </div>
        `;
    }

    displayWrongAnswers(results) {
        const wrongAnswersSection = document.getElementById('wrong-answers-section');
        const wrongAnswersList = document.getElementById('wrong-answers-list');
        
        // Find wrong answers
        const wrongAnswers = [];
        results.questions.forEach((question, index) => {
            const userAnswer = results.answers[index];
            if (userAnswer !== question.correctAnswer) {
                wrongAnswers.push({
                    question: question,
                    userAnswer: userAnswer,
                    correctAnswer: question.correctAnswer,
                    questionNumber: index + 1
                });
            }
        });
        
        if (wrongAnswers.length > 0) {
            wrongAnswersSection.style.display = 'block';
            
            // Display all wrong answers (removed 20 question limit)
            wrongAnswersList.innerHTML = wrongAnswers.map(wrong => `
                <div class="wrong-answer-item">
                    <div class="wrong-answer-header">
                        <span class="question-number">Question ${wrong.questionNumber}</span>
                        <span class="wrong-badge">
                            <i class="fas fa-times"></i>
                            Wrong
                        </span>
                    </div>
                    <div class="question-content">
                        <p class="question-text">${this.escapeHtml(wrong.question.text)}</p>
                        <div class="answer-comparison">
                            <div class="user-answer">
                                <span class="answer-label">Your Answer:</span>
                                <span class="answer-text wrong">${this.escapeHtml(this.getOptionText(wrong.question, wrong.userAnswer))}</span>
                            </div>
                            <div class="correct-answer">
                                <span class="answer-label">Correct Answer:</span>
                                <span class="answer-text correct">${this.escapeHtml(this.getOptionText(wrong.question, wrong.correctAnswer))}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        } else {
            wrongAnswersSection.style.display = 'none';
        }
    }

    getOptionText(question, optionId) {
        const option = question.options.find(opt => opt.id === optionId);
        return option ? option.text : 'Not answered';
    }

    // Helper function to properly escape HTML content
    escapeHtml(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    getPerformanceLevel(percentage) {
        if (percentage >= 90) return 'Outstanding';
        if (percentage >= 80) return 'Excellent';
        if (percentage >= 70) return 'Good';
        if (percentage >= 60) return 'Average';
        return 'Needs Improvement';
    }

    startReview() {
        if (!this.currentResults) return;
        
        // Navigate back to exam section for review
        window.techQuizApp.router.navigate('exam');
        
        // Set up review mode in exam manager
        if (window.techQuizApp.examManager) {
            window.techQuizApp.examManager.startReviewMode(this.currentResults);
        }
    }

    getResultsHistory() {
        return JSON.parse(localStorage.getItem('exam_history') || '[]');
    }

    clearHistory() {
        localStorage.removeItem('exam_history');
    }
}

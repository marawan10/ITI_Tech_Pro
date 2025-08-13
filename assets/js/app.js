// Main Application Module
import { AppRouter } from './modules/router.js';
import { TopicManager } from './modules/topics.js';
import { ExamManager } from './modules/exam.js';
import { ResultsManager } from './modules/results.js';
import { StorageManager } from './modules/storage.js';
import { UIManager } from './modules/ui.js';

class TechQuizApp {
    constructor() {
        this.router = new AppRouter();
        this.topicManager = new TopicManager();
        this.examManager = new ExamManager();
        this.resultsManager = new ResultsManager();
        this.storageManager = new StorageManager();
        this.uiManager = new UIManager();
        
        this.currentSection = 'home';
        this.isInitialized = false;
        this.currentTopicId = null;
        this.isDarkMode = localStorage.getItem('techquiz_dark_mode') === 'true';
    }

    async init() {
        if (this.isInitialized) return;
        
        try {
            this.uiManager.showLoading();
            
            // Initialize all modules
            await this.topicManager.init();
            await this.examManager.init();
            await this.resultsManager.init();
            
            // Set topic manager in exam manager
            this.examManager.setTopicManager(this.topicManager);
            
            // Setup event listeners
            this.setupEventListeners();
            
            // Apply dark mode if enabled
            this.applyDarkMode();
            
            // Load initial state
            this.router.navigate('welcome');
            
            this.isInitialized = true;
            this.uiManager.hideLoading();
            
            console.log('TechQuiz Pro initialized successfully');
        } catch (error) {
            console.error('Failed to initialize app:', error);
            this.uiManager.showError('Failed to load application. Please refresh the page.');
        }
    }

    setupEventListeners() {
        // Dark mode toggle
        document.getElementById('dark-mode-toggle')?.addEventListener('click', () => {
            this.toggleDarkMode();
        });

        // Welcome button
        document.getElementById('enter-app-btn')?.addEventListener('click', () => {
            this.router.navigate('home');
        });

        // Topic cards
        document.addEventListener('click', (e) => {
            if (e.target.closest('.topic-card')) {
                const topicCard = e.target.closest('.topic-card');
                const topicId = topicCard.dataset.topicId;
                this.startTopicExam(topicId);
            }
        });

        // Configuration form
        document.getElementById('exam-config-form')?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.startConfiguredExam();
        });

        // Option button system for configuration
        this.setupOptionButtons();

        // Exam controls
        document.getElementById('prev-btn')?.addEventListener('click', () => {
            this.examManager.previousQuestion();
        });

        document.getElementById('next-btn')?.addEventListener('click', () => {
            this.examManager.nextQuestion();
        });

        document.getElementById('submit-btn')?.addEventListener('click', async () => {
            await this.examManager.finishExam();
        });

        document.getElementById('finish-btn')?.addEventListener('click', async () => {
            await this.examManager.finishExam();
        });

        // Results actions
        document.getElementById('review-btn')?.addEventListener('click', () => {
            this.resultsManager.startReview();
        });

        document.getElementById('new-exam-btn')?.addEventListener('click', () => {
            this.router.navigate('home');
        });
    }

    toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
        localStorage.setItem('techquiz_dark_mode', this.isDarkMode.toString());
        this.applyDarkMode();
    }

    applyDarkMode() {
        const body = document.body;
        const themeToggle = document.getElementById('dark-mode-toggle');
        const icon = themeToggle?.querySelector('i');
        
        if (this.isDarkMode) {
            body.setAttribute('data-theme', 'dark');
            if (icon) {
                icon.className = 'fas fa-sun';
            }
        } else {
            body.removeAttribute('data-theme');
            if (icon) {
                icon.className = 'fas fa-moon';
            }
        }
    }

    startTopicExam(topicId) {
        this.currentTopicId = topicId;
        const topic = this.topicManager.getTopic(topicId);
        if (!topic) return;

        // Pre-fill configuration with topic defaults
        const configForm = document.getElementById('exam-config-form');
        if (configForm) {
            const maxQuestions = topic.isGeneral ? 
                Math.min(50, this.topicManager.getAllQuestionsForGeneral().length) :
                Math.min(50, topic.questions.length);
            
            document.getElementById('question-count').value = Math.min(20, maxQuestions);
            document.getElementById('question-count-display').textContent = Math.min(20, maxQuestions);
        }

        this.router.navigate('config');
    }

    setupOptionButtons() {
        // Setup flexible input system
        this.setupNumberInputs();
        this.setupQuickButtons();
    }

    setupNumberInputs() {
        // Setup number input controls
        const numberInputs = document.querySelectorAll('.number-input');
        const numberBtns = document.querySelectorAll('.number-btn');

        numberInputs.forEach(input => {
            // Handle input change
            input.addEventListener('input', (e) => {
                const value = e.target.value;
                const inputId = e.target.id;
                const displayId = inputId === 'question-count' ? 'question-count-display' : 'time-limit-display';
                
                // Update display
                document.getElementById(displayId).textContent = value;
                
                // Update quick button states
                this.updateQuickButtonStates(inputId, value);
            });

            // Handle increase/decrease buttons
            const wrapper = input.closest('.number-input-wrapper');
            const increaseBtn = wrapper.querySelector('[data-action="increase"]');
            const decreaseBtn = wrapper.querySelector('[data-action="decrease"]');

            increaseBtn?.addEventListener('click', () => {
                const currentValue = parseInt(input.value) || 0;
                const max = parseInt(input.max) || 200;
                input.value = Math.min(currentValue + 1, max);
                input.dispatchEvent(new Event('input'));
            });

            decreaseBtn?.addEventListener('click', () => {
                const currentValue = parseInt(input.value) || 0;
                const min = parseInt(input.min) || 1;
                input.value = Math.max(currentValue - 1, min);
                input.dispatchEvent(new Event('input'));
            });
        });
    }

    setupQuickButtons() {
        // Setup quick selection buttons
        const quickButtons = document.querySelectorAll('.quick-btn');
        
        quickButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const value = e.target.dataset.value;
                const controlGroup = e.target.closest('.control-group');
                const input = controlGroup.querySelector('.number-input');
                const inputId = input.id;
                
                // Update number input
                input.value = value;
                input.dispatchEvent(new Event('input'));
                
                // Update quick button states
                this.updateQuickButtonStates(inputId, value);
            });
        });
    }

    updateQuickButtonStates(inputId, currentValue) {
        const controlGroup = document.querySelector(`#${inputId}`).closest('.control-group');
        const quickButtons = controlGroup.querySelectorAll('.quick-btn');
        
        quickButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.value === currentValue.toString()) {
                btn.classList.add('active');
            }
        });
    }

    startConfiguredExam() {
        const config = {
            topicId: this.currentTopicId,
            questionCount: parseInt(document.getElementById('question-count').value),
            timeLimit: parseInt(document.getElementById('time-limit').value)
        };

        if (!config.topicId) {
            this.uiManager.showError('Please select a topic');
            return;
        }

        this.examManager.startExam(config);
    }

    // Public API methods
    getTopics() {
        return this.topicManager.getAllTopics();
    }

    getExamHistory() {
        return this.storageManager.getExamHistory();
    }

    resetProgress() {
        this.storageManager.clearAllData();
        location.reload();
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.techQuizApp = new TechQuizApp();
    window.techQuizApp.init();
});

// Export for module usage
export default TechQuizApp;

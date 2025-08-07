// Storage Module - Handles local storage operations
export class StorageManager {
    constructor() {
        this.storageKey = 'techquiz_data';
    }

    // Generic storage methods
    save(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('Failed to save to localStorage:', error);
            return false;
        }
    }

    load(key, defaultValue = null) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : defaultValue;
        } catch (error) {
            console.error('Failed to load from localStorage:', error);
            return defaultValue;
        }
    }

    remove(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error('Failed to remove from localStorage:', error);
            return false;
        }
    }

    // App-specific storage methods
    saveExamHistory(examData) {
        const history = this.getExamHistory();
        history.push(examData);
        return this.save('exam_history', history);
    }

    getExamHistory() {
        return this.load('exam_history', []);
    }

    saveUserPreferences(preferences) {
        return this.save('user_preferences', preferences);
    }

    getUserPreferences() {
        return this.load('user_preferences', {});
    }

    clearAllData() {
        localStorage.clear();
    }
}

// Router Module - Handles navigation between sections
export class AppRouter {
    constructor() {
        this.sections = {
            welcome: 'welcome-section',
            home: 'home-section',
            config: 'config-section',
            exam: 'exam-section',
            results: 'results-section'
        };
        
        this.currentSection = null;
    }

    navigate(section) {
        if (!this.sections[section]) {
            console.error(`Section '${section}' not found`);
            return;
        }

        // Hide all sections
        Object.values(this.sections).forEach(sectionId => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.classList.remove('active');
            }
        });

        // Show target section
        const targetSection = document.getElementById(this.sections[section]);
        if (targetSection) {
            targetSection.classList.add('active');
            this.currentSection = section;
            
            // Update URL without page reload
            history.pushState({ section }, '', `#${section}`);
            
            // Trigger custom event
            window.dispatchEvent(new CustomEvent('sectionChange', { 
                detail: { section, previousSection: this.currentSection } 
            }));
        }
    }

    handlePopState() {
        window.addEventListener('popstate', (e) => {
            const section = e.state?.section || 'welcome';
            this.navigate(section);
        });
    }

    getCurrentSection() {
        return this.currentSection;
    }
}

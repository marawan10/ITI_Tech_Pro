# TechQuiz Pro - Technical Assessment Platform

A modern, responsive, and feature-rich technical MCQ assessment platform built with vanilla JavaScript, HTML5, and CSS3.

## 🚀 Features

- **Multiple Topics**: HTML, CSS, JavaScript, SQL, OOP, and C Programming
- **Modern UI**: Responsive design with animations and smooth transitions
- **Exam Configuration**: Customizable time limits, question counts, and difficulty levels
- **Real-time Progress**: Live progress tracking and timer
- **Performance Analytics**: Detailed results and performance statistics
- **Local Storage**: Persistent exam history and user preferences
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## 📁 Project Structure

```
TechQuiz-Pro/
├── index.html                 # Main HTML file
├── assets/
│   ├── css/
│   │   ├── main.css          # Main stylesheet
│   │   ├── animations.css    # CSS animations
│   │   └── components.css    # Reusable components
│   └── js/
│       ├── app.js            # Main application
│       └── modules/
│           ├── router.js     # Navigation router
│           ├── topics.js     # Topic management
│           ├── exam.js       # Exam logic
│           ├── results.js    # Results handling
│           ├── storage.js    # Local storage
│           └── ui.js         # UI interactions
└── README.md                 # Documentation
```

## 🎯 Getting Started

1. **Clone or Download** the project files
2. **Open** `index.html` in your web browser
3. **Start** using the application immediately - no build process required!

## 🛠️ Usage

### Home Page
- Browse available topics with interactive cards
- Click "Start Exam" on any topic to begin

### Configuration
- Select topic, question count, time limit, and difficulty
- Preview your configuration before starting

### Exam Mode
- Answer questions with immediate feedback
- Navigate between questions
- Track progress with real-time timer

### Results
- View detailed performance statistics
- Review incorrect answers
- Access exam history

## 🔧 Configuration

The platform supports various configuration options:

- **Topics**: HTML, CSS, JavaScript, SQL, OOP, C Programming
- **Question Count**: 5-50 questions per exam
- **Time Limit**: 5-120 minutes
- **Difficulty**: Mixed, Easy, Medium, Hard

## 📊 Data Storage

All data is stored locally in the browser's localStorage:
- Exam history and results
- User preferences
- Topic statistics

## 🎨 Customization

### Adding New Topics
1. Add topic data to `assets/js/modules/topics.js`
2. Update topic card template in `assets/js/modules/topics.js`
3. Add CSS styles for new topic colors

### Styling
- Modify CSS variables in `assets/css/main.css`
- Update animations in `assets/css/animations.css`
- Customize components in `assets/css/components.css`

## 🧪 Development

### Running Locally
```bash
# Simply open index.html in your browser
# No build tools or server required
```

### Adding New Features
1. Create new module in `assets/js/modules/`
2. Import and initialize in `assets/js/app.js`
3. Update UI components as needed

## 📝 Technical Details

- **Vanilla JavaScript**: ES6+ modules, no frameworks
- **CSS3**: Grid, Flexbox, animations, custom properties
- **HTML5**: Semantic markup, accessibility features
- **Responsive**: Mobile-first design approach
- **Performance**: Optimized for fast loading

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 🐛 Bug Reports

Please report any issues or bugs through the project's issue tracker.

## 📞 Support

For questions or support, please open an issue on the project repository.

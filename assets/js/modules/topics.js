// Topics Module - Manages topic data and cards
export class TopicManager {
    constructor() {
        this.topics = [
            {
                id: 'general',
                title: 'General Exam',
                description: 'Assessment covering all topics',
                icon: 'fas fa-globe',
                color: '#edf1e6ff',
                isGeneral: true,
                questions: [],
                stats: { total: 35, completed: 0, averageScore: 0 }
            },
            {
                id: 'html',
                title: 'HTML',
                description: 'Structure and semantics of web pages',
                icon: 'fab fa-html5',
                color: '#f97316',
                questions: [
                    {
                        id: 1,
                        text: 'What is HTML?',
                        options: [
                            { id: 'a', text: 'HyperText Markup Language' },
                            { id: 'b', text: 'HighText Machine Language' },
                            { id: 'c', text: 'HyperTool Multi Language' },
                            { id: 'd', text: 'HyperTransfer Markup Language' }
                        ],
                        correctAnswer: 'a'
                    },
                    {
                        id: 2,
                        text: 'What are HTML tags?',
                        options: [
                            { id: 'a', text: 'Scripts used to style content' },
                            { id: 'b', text: 'Elements enclosed in angle brackets to structure content' },
                            { id: 'c', text: 'Attributes that define element behavior' },
                            { id: 'd', text: 'Containers for metadata only' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 3,
                        text: 'What is the basic structure of an HTML document?',
                        options: [
                            { id: 'a', text: '<!DOCTYPE html><html><body><title></title></body></html>' },
                            { id: 'b', text: '<!DOCTYPE html><html><head><title>Page Title</title></head><body></body></html>' },
                            { id: 'c', text: '<html><head><body></body></head></html>' },
                            { id: 'd', text: '<body><html><title>Page Title</title></html></body>' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 4,
                        text: 'What is the difference between an element and a tag in HTML?',
                        options: [
                            { id: 'a', text: 'A tag is the content; an element is the attribute' },
                            { id: 'b', text: 'A tag is the syntax; an element includes tag, content, and end tag' },
                            { id: 'c', text: 'A tag is semantic; an element is stylistic' },
                            { id: 'd', text: 'A tag is a container; an element is a script' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 5,
                        text: 'What are attributes in HTML?',
                        options: [
                            { id: 'a', text: 'Tags that enclose other tags' },
                            { id: 'b', text: 'Extra information added to elements' },
                            { id: 'c', text: 'Inline styles for elements' },
                            { id: 'd', text: 'Scripts for interactivity' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 6,
                        text: 'How do you create a hyperlink in HTML?',
                        options: [
                            { id: 'a', text: '<link href="https://www.example.com">Visit Example</link>' },
                            { id: 'b', text: '<a src="https://www.example.com">Visit Example</a>' },
                            { id: 'c', text: '<a href="https://www.example.com">Visit Example</a>' },
                            { id: 'd', text: '<hyperlink url="https://www.example.com">Visit Example</hyperlink>' }
                        ],
                        correctAnswer: 'c'
                    },
                    {
                        id: 7,
                        text: 'What is the purpose of the <img> tag?',
                        options: [
                            { id: 'a', text: 'Embeds videos with a source path' },
                            { id: 'b', text: 'Displays images with src and alt attributes' },
                            { id: 'c', text: 'Creates hyperlinks to images' },
                            { id: 'd', text: 'Defines metadata for images' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 8,
                        text: 'What is the difference between block and inline elements?',
                        options: [
                            { id: 'a', text: 'Block elements are inline; inline elements take full width' },
                            { id: 'b', text: 'Block elements start on a new line and take full width; inline elements appear in line' },
                            { id: 'c', text: 'Block elements are semantic; inline elements are not' },
                            { id: 'd', text: 'Block elements are used for text; inline for images' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 9,
                        text: 'How do you create a list in HTML?',
                        options: [
                            { id: 'a', text: '<list><item>Item</item></list>' },
                            { id: 'b', text: '<ol><li>Item</li></ol> or <ul><li>Item</li></ul>' },
                            { id: 'c', text: '<ul><item>Item</item></ul>' },
                            { id: 'd', text: '<ol><item>Item</item></ol>' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 10,
                        text: 'What is the <form> tag used for?',
                        options: [
                            { id: 'a', text: 'To display images in a grid' },
                            { id: 'b', text: 'To collect user input and send data' },
                            { id: 'c', text: 'To create navigation menus' },
                            { id: 'd', text: 'To embed external scripts' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 11,
                        text: 'What is the purpose of the <br> tag?',
                        options: [
                            { id: 'a', text: 'Adds a horizontal rule' },
                            { id: 'b', text: 'Creates a line break' },
                            { id: 'c', text: 'Inserts a paragraph break' },
                            { id: 'd', text: 'Defines a section break' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 12,
                        text: 'How do you open a link in a new tab?',
                        options: [
                            { id: 'a', text: '<a href="url" newtab="true">Link</a>' },
                            { id: 'b', text: '<a href="url" target="_blank">Link</a>' },
                            { id: 'c', text: '<a href="url" tab="new">Link</a>' },
                            { id: 'd', text: '<a href="url" open="new">Link</a>' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 13,
                        text: 'What is the <title> tag used for?',
                        options: [
                            { id: 'a', text: 'Sets the page\'s background color' },
                            { id: 'b', text: 'Defines the title in the browser tab' },
                            { id: 'c', text: 'Creates a heading on the page' },
                            { id: 'd', text: 'Specifies the document\'s encoding' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 14,
                        text: 'How do you add a comment in HTML?',
                        options: [
                            { id: 'a', text: '// This is a comment' },
                            { id: 'b', text: '/* This is a comment */' },
                            { id: 'c', text: '<!-- This is a comment -->' },
                            { id: 'd', text: '# This is a comment' }
                        ],
                        correctAnswer: 'c'
                    },
                    {
                        id: 15,
                        text: 'What is the purpose of the <meta> tag?',
                        options: [
                            { id: 'a', text: 'Defines visible content' },
                            { id: 'b', text: 'Specifies metadata like charset or description' },
                            { id: 'c', text: 'Embeds external stylesheets' },
                            { id: 'd', text: 'Creates interactive elements' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 16,
                        text: 'How do you create a table in HTML?',
                        options: [
                            { id: 'a', text: '<table><row><cell>Head</cell></row></table>' },
                            { id: 'b', text: '<table><tr><th>Head</th></tr><tr><td>Data</td></tr></table>' },
                            { id: 'c', text: '<table><td><th>Head</th></td></table>' },
                            { id: 'd', text: '<table><tr><td>Head</td></tr></table>' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 17,
                        text: 'What is the difference between <head> and <body>?',
                        options: [
                            { id: 'a', text: '<head> contains visible content; <body> contains metadata' },
                            { id: 'b', text: '<head> contains metadata; <body> contains visible content' },
                            { id: 'c', text: '<head> is for scripts; <body> is for styles' },
                            { id: 'd', text: '<head> is for links; <body> is for images' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 18,
                        text: 'How do you specify character encoding in HTML?',
                        options: [
                            { id: 'a', text: '<meta encoding="UTF-8">' },
                            { id: 'b', text: '<meta charset="UTF-8">' },
                            { id: 'c', text: '<meta type="charset" value="UTF-8">' },
                            { id: 'd', text: '<meta encode="UTF-8">' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 19,
                        text: 'What is the use of the <strong> tag?',
                        options: [
                            { id: 'a', text: 'Displays text in italic with emphasis' },
                            { id: 'b', text: 'Displays bold text with strong importance' },
                            { id: 'c', text: 'Underlines text for emphasis' },
                            { id: 'd', text: 'Creates a hyperlink' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 20,
                        text: 'How do you create an email link in HTML?',
                        options: [
                            { id: 'a', text: '<a href="email:example@example.com">Email</a>' },
                            { id: 'b', text: '<a href="mailto:example@example.com">Email</a>' },
                            { id: 'c', text: '<a src="example@example.com">Email</a>' },
                            { id: 'd', text: '<a link="mailto:example@example.com">Email</a>' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 21,
                        text: 'What is the use of the <em> tag?',
                        options: [
                            { id: 'a', text: 'Displays bold text' },
                            { id: 'b', text: 'Emphasizes text, usually in italic' },
                            { id: 'c', text: 'Underlines text for importance' },
                            { id: 'd', text: 'Creates a subscript effect' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 22,
                        text: 'How do you create a checkbox in HTML?',
                        options: [
                            { id: 'a', text: '<input type="check" id="subscribe">' },
                            { id: 'b', text: '<input type="checkbox" id="subscribe"><label for="subscribe">Subscribe</label>' },
                            { id: 'c', text: '<checkbox id="subscribe">Subscribe</checkbox>' },
                            { id: 'd', text: '<input type="box" id="subscribe">' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 23,
                        text: 'What is the purpose of the <label> tag?',
                        options: [
                            { id: 'a', text: 'Styles form inputs' },
                            { id: 'b', text: 'Improves form accessibility by labeling inputs' },
                            { id: 'c', text: 'Submits form data' },
                            { id: 'd', text: 'Creates a dropdown menu' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 24,
                        text: 'How do you create a dropdown list in HTML?',
                        options: [
                            { id: 'a', text: '<dropdown><option>Apple</option></dropdown>' },
                            { id: 'b', text: '<select><option value="apple">Apple</option></select>' },
                            { id: 'c', text: '<list><item value="apple">Apple</item></list>' },
                            { id: 'd', text: '<select><value>Apple</value></select>' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 25,
                        text: 'What is the purpose of the <blockquote> tag?',
                        options: [
                            { id: 'a', text: 'Creates a short inline quote' },
                            { id: 'b', text: 'Used for long quotations, usually indented' },
                            { id: 'c', text: 'Defines a heading section' },
                            { id: 'd', text: 'Embeds external content' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 26,
                        text: 'What are semantic elements in HTML?',
                        options: [
                            { id: 'a', text: 'Tags that style content' },
                            { id: 'b', text: 'Tags that clearly define content meaning' },
                            { id: 'c', text: 'Tags that are deprecated' },
                            { id: 'd', text: 'Tags used only for forms' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 27,
                        text: 'How do you embed a video in HTML?',
                        options: [
                            { id: 'a', text: '<video src="video.mp4"></video>' },
                            { id: 'b', text: '<video controls><source src="video.mp4" type="video/mp4"></video>' },
                            { id: 'c', text: '<embed src="video.mp4" type="video">' },
                            { id: 'd', text: '<video href="video.mp4">Play</video>' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 28,
                        text: 'What is the purpose of the alt attribute in the <img> tag?',
                        options: [
                            { id: 'a', text: 'Specifies the image source' },
                            { id: 'b', text: 'Improves accessibility and shows text if image fails' },
                            { id: 'c', text: 'Defines the image size' },
                            { id: 'd', text: 'Links the image to a URL' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 29,
                        text: 'What is the use of <fieldset> and <legend> tags?',
                        options: [
                            { id: 'a', text: 'Create a navigation menu' },
                            { id: 'b', text: 'Group form elements with a caption' },
                            { id: 'c', text: 'Define a table structure' },
                            { id: 'd', text: 'Embed external content' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 30,
                        text: 'What is the purpose of the <noscript> tag?',
                        options: [
                            { id: 'a', text: 'Executes JavaScript code' },
                            { id: 'b', text: 'Displays message if JavaScript is disabled' },
                            { id: 'c', text: 'Hides content from browsers' },
                            { id: 'd', text: 'Defines a fallback stylesheet' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 31,
                        text: 'How do you include a JavaScript file in HTML?',
                        options: [
                            { id: 'a', text: '<script href="script.js"></script>' },
                            { id: 'b', text: '<script src="script.js"></script>' },
                            { id: 'c', text: '<js src="script.js"></js>' },
                            { id: 'd', text: '<link src="script.js" type="javascript">' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 32,
                        text: 'What is the difference between <b> and <strong>?',
                        options: [
                            { id: 'a', text: '<b> is semantic; <strong> is for styling' },
                            { id: 'b', text: '<b> is for bold styling; <strong> adds semantic importance' },
                            { id: 'c', text: '<b> is deprecated; <strong> is not' },
                            { id: 'd', text: '<b> is for text; <strong> is for images' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 33,
                        text: 'How do you create a multi-line input in HTML?',
                        options: [
                            { id: 'a', text: '<input type="textarea" rows="4">' },
                            { id: 'b', text: '<textarea rows="4" cols="50"></textarea>' },
                            { id: 'c', text: '<text rows="4" cols="50"></text>' },
                            { id: 'd', text: '<input type="multiline" rows="4">' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 34,
                        text: 'What is the purpose of the action attribute in a <form>?',
                        options: [
                            { id: 'a', text: 'Defines the form\'s style' },
                            { id: 'b', text: 'Specifies where to send form data' },
                            { id: 'c', text: 'Sets the form\'s input type' },
                            { id: 'd', text: 'Validates form inputs' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 35,
                        text: 'How do you create a numbered list in HTML?',
                        options: [
                            { id: 'a', text: '<ul><li>Item</li></ul>' },
                            { id: 'b', text: '<ol><li>Item</li></ol>' },
                            { id: 'c', text: '<list type="number"><li>Item</li></list>' },
                            { id: 'd', text: '<nl><li>Item</li></nl>' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 36,
                        text: 'What is the purpose of the <base> tag?',
                        options: [
                            { id: 'a', text: 'Sets the default font for the page' },
                            { id: 'b', text: 'Defines the base URL for relative links' },
                            { id: 'c', text: 'Specifies the page\'s encoding' },
                            { id: 'd', text: 'Creates a fallback for images' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 37,
                        text: 'How do you create a definition list in HTML?',
                        options: [
                            { id: 'a', text: '<dl><dt>Term</dt><dd>Definition</dd></dl>' },
                            { id: 'b', text: '<list><term>Term</term><def>Definition</def></list>' },
                            { id: 'c', text: '<dl><li>Term: Definition</li></dl>' },
                            { id: 'd', text: '<deflist><dt>Term</dt><dd>Definition</dd></deflist>' }
                        ],
                        correctAnswer: 'a'
                    },
                    {
                        id: 38,
                        text: 'What is the use of the enctype attribute in forms?',
                        options: [
                            { id: 'a', text: 'Specifies the form\'s submission method' },
                            { id: 'b', text: 'Defines encoding for form submission' },
                            { id: 'c', text: 'Sets the form\'s validation rules' },
                            { id: 'd', text: 'Links the form to a script' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 39,
                        text: 'How do you create a hidden input field in HTML?',
                        options: [
                            { id: 'a', text: '<input type="hidden" name="userID" value="123">' },
                            { id: 'b', text: '<input type="invisible" name="userID" value="123">' },
                            { id: 'c', text: '<hidden name="userID" value="123">' },
                            { id: 'd', text: '<input type="secret" name="userID" value="123">' }
                        ],
                        correctAnswer: 'a'
                    },
                    {
                        id: 40,
                        text: 'What is the purpose of the <address> tag?',
                        options: [
                            { id: 'a', text: 'Defines a hyperlink destination' },
                            { id: 'b', text: 'Displays contact information' },
                            { id: 'c', text: 'Specifies the page\'s base URL' },
                            { id: 'd', text: 'Creates an email link' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 41,
                        text: 'What is the <canvas> tag used for?',
                        options: [
                            { id: 'a', text: 'Embeds videos with controls' },
                            { id: 'b', text: 'Draws graphics with JavaScript' },
                            { id: 'c', text: 'Creates interactive forms' },
                            { id: 'd', text: 'Defines a static image' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 42,
                        text: 'What is the difference between <b> and <strong>, and <i> and <em>?',
                        options: [
                            { id: 'a', text: '<b> and <i> are semantic; <strong> and <em> are for styling' },
                            { id: 'b', text: '<b> and <i> are for styling; <strong> and <em> add semantic meaning' },
                            { id: 'c', text: '<b> and <strong> are identical; <i> and <em> are deprecated' },
                            { id: 'd', text: '<b> and <i> are for forms; <strong> and <em> are for text' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 43,
                        text: 'How do you embed SVG graphics in HTML?',
                        options: [
                            { id: 'a', text: '<svg><circle cx="50" cy="50" r="40"></circle></svg>' },
                            { id: 'b', text: '<img src="graphic.svg" type="svg">' },
                            { id: 'c', text: '<svg src="graphic.svg"></svg>' },
                            { id: 'd', text: '<embed type="svg" src="graphic.svg">' }
                        ],
                        correctAnswer: 'a'
                    },
                    {
                        id: 44,
                        text: 'What are data attributes in HTML?',
                        options: [
                            { id: 'a', text: 'Attributes for styling elements' },
                            { id: 'b', text: 'Custom attributes for storing data, accessed via JavaScript' },
                            { id: 'c', text: 'Attributes for form validation' },
                            { id: 'd', text: 'Attributes for linking external files' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 45,
                        text: 'What is the purpose of the <template> tag?',
                        options: [
                            { id: 'a', text: 'Defines a reusable stylesheet' },
                            { id: 'b', text: 'Holds reusable HTML blocks not rendered until used by JavaScript' },
                            { id: 'c', text: 'Creates a fallback for images' },
                            { id: 'd', text: 'Specifies metadata for the page' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 46,
                        text: 'What is the purpose of the rel attribute in the <link> tag?',
                        options: [
                            { id: 'a', text: 'Specifies the file\'s encoding' },
                            { id: 'b', text: 'Defines the relationship of the linked file' },
                            { id: 'c', text: 'Sets the link\'s destination URL' },
                            { id: 'd', text: 'Validates the linked resource' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 47,
                        text: 'How do you specify multiple languages in HTML?',
                        options: [
                            { id: 'a', text: '<link rel="alternate" hreflang="fr" href="example.fr.html">' },
                            { id: 'b', text: '<link lang="fr" href="example.fr.html">' },
                            { id: 'c', text: '<meta lang="fr" href="example.fr.html">' },
                            { id: 'd', text: '<link rel="language" hreflang="fr" href="example.fr.html">' }
                        ],
                        correctAnswer: 'a'
                    },
                    {
                        id: 48,
                        text: 'What is the purpose of the <output> tag?',
                        options: [
                            { id: 'a', text: 'Displays form input placeholders' },
                            { id: 'b', text: 'Shows calculation results' },
                            { id: 'c', text: 'Embeds external content' },
                            { id: 'd', text: 'Defines a form\'s action' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 49,
                        text: 'How do you make an element editable in HTML?',
                        options: [
                            { id: 'a', text: '<div editable="true">Edit me</div>' },
                            { id: 'b', text: '<div contenteditable="true">Edit me</div>' },
                            { id: 'c', text: '<div edit="true">Edit me</div>' },
                            { id: 'd', text: '<div modify="true">Edit me</div>' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 50,
                        text: 'What is the purpose of the <datalist> tag?',
                        options: [
                            { id: 'a', text: 'Creates a dropdown menu' },
                            { id: 'b', text: 'Provides auto-complete options for input fields' },
                            { id: 'c', text: 'Defines a list of hyperlinks' },
                            { id: 'd', text: 'Embeds external data files' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 51,
                        text: 'Can we display a web page inside another web page?',
                        options: [
                            { id: 'a', text: 'Yes, using the <embed> tag' },
                            { id: 'b', text: 'Yes, using the <iframe> tag' },
                            { id: 'c', text: 'No, it\'s not possible in HTML' },
                            { id: 'd', text: 'Yes, using the <object> tag' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 52,
                        text: 'What is the advantage of collapsing white space in HTML?',
                        options: [
                            { id: 'a', text: 'Increases file size for better performance' },
                            { id: 'b', text: 'Treats multiple spaces as one, improving code readability' },
                            { id: 'c', text: 'Adds extra spacing between elements' },
                            { id: 'd', text: 'Prevents browsers from rendering text' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 53,
                        text: 'What are HTML Entities?',
                        options: [
                            { id: 'a', text: 'Tags used for styling text' },
                            { id: 'b', text: 'Special codes to display reserved characters' },
                            { id: 'c', text: 'Attributes for form inputs' },
                            { id: 'd', text: 'Scripts for dynamic content' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 54,
                        text: 'What is the class attribute in HTML?',
                        options: [
                            { id: 'a', text: 'Defines a unique identifier for an element' },
                            { id: 'b', text: 'Assigns styles via CSS, reusable across elements' },
                            { id: 'c', text: 'Specifies a form\'s submission method' },
                            { id: 'd', text: 'Links to an external JavaScript file' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 55,
                        text: 'What is the difference between id and class attributes?',
                        options: [
                            { id: 'a', text: 'id is reusable; class is unique' },
                            { id: 'b', text: 'id must be unique; class can be reused' },
                            { id: 'c', text: 'id is for styling; class is for scripting' },
                            { id: 'd', text: 'id is deprecated; class is not' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 56,
                        text: 'What is multipart form data?',
                        options: [
                            { id: 'a', text: 'A method to validate form inputs' },
                            { id: 'b', text: 'An enctype value for uploading files' },
                            { id: 'c', text: 'A tag for grouping form elements' },
                            { id: 'd', text: 'A script for form submission' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 57,
                        text: 'What is the HTML layout structure?',
                        options: [
                            { id: 'a', text: '<header>, <footer>, <nav>, <article>, <section>, <aside>' },
                            { id: 'b', text: '<head>, <body>, <div>, <span>' },
                            { id: 'c', text: '<table>, <tr>, <td>, <th>' },
                            { id: 'd', text: '<form>, <input>, <label>' }
                        ],
                        correctAnswer: 'a'
                    },
                    {
                        id: 58,
                        text: 'How can you optimize website assets loading?',
                        options: [
                            { id: 'a', text: 'Increase file sizes and disable caching' },
                            { id: 'b', text: 'Use CDN, compression, minification, lazy loading, and parallel downloads' },
                            { id: 'c', text: 'Embed all assets in the HTML file' },
                            { id: 'd', text: 'Avoid external stylesheets and scripts' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 59,
                        text: 'What are various formatting tags in HTML?',
                        options: [
                            { id: 'a', text: '<header>, <footer>, <nav>' },
                            { id: 'b', text: '<b>, <i>, <strong>, <em>, <small>, <mark>, <del>, <ins>' },
                            { id: 'c', text: '<form>, <input>, <select>' },
                            { id: 'd', text: '<table>, <tr>, <td>' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 60,
                        text: 'What are the different kinds of Doctypes?',
                        options: [
                            { id: 'a', text: 'Strict, Transitional, Frameset' },
                            { id: 'b', text: 'HTML4, HTML5, XHTML' },
                            { id: 'c', text: 'Inline, Block, Flex' },
                            { id: 'd', text: 'Static, Dynamic, Responsive' }
                        ],
                        correctAnswer: 'a'
                    },
                    {
                        id: 61,
                        text: 'What is the difference between Cell Padding and Cell Spacing in tables?',
                        options: [
                            { id: 'a', text: 'Padding is space between cells; Spacing is inside the cell' },
                            { id: 'b', text: 'Padding is inside the cell; Spacing is between cells' },
                            { id: 'c', text: 'Padding is for text; Spacing is for images' },
                            { id: 'd', text: 'Padding is deprecated; Spacing is not' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 62,
                        text: 'How do you merge rows or columns in a table?',
                        options: [
                            { id: 'a', text: 'Use merge and combine attributes' },
                            { id: 'b', text: 'Use rowspan and colspan attributes' },
                            { id: 'c', text: 'Use rows and cols attributes' },
                            { id: 'd', text: 'Use join and span attributes' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 63,
                        text: 'Can inline elements be made block elements?',
                        options: [
                            { id: 'a', text: 'No, it\'s not possible' },
                            { id: 'b', text: 'Yes, using display: block; in CSS' },
                            { id: 'c', text: 'Yes, using block: true; in HTML' },
                            { id: 'd', text: 'Yes, using style: block; in HTML' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 64,
                        text: 'What are the position values in HTML/CSS?',
                        options: [
                            { id: 'a', text: 'static, relative, absolute, fixed, initial, inherit' },
                            { id: 'b', text: 'inline, block, flex, grid' },
                            { id: 'c', text: 'top, bottom, left, right' },
                            { id: 'd', text: 'visible, hidden, scroll, auto' }
                        ],
                        correctAnswer: 'a'
                    },
                    {
                        id: 65,
                        text: 'What are the display values in HTML/CSS?',
                        options: [
                            { id: 'a', text: 'static, relative, absolute, fixed' },
                            { id: 'b', text: 'inline, block, inline-block, flex, grid, none' },
                            { id: 'c', text: 'visible, hidden, collapse, auto' },
                            { id: 'd', text: 'top, bottom, left, right' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 66,
                        text: 'What is the difference between display: none and visibility: hidden?',
                        options: [
                            { id: 'a', text: 'display: none hides and keeps space; visibility: hidden removes space' },
                            { id: 'b', text: 'display: none hides and removes space; visibility: hidden hides but keeps space' },
                            { id: 'c', text: 'display: none is for text; visibility: hidden is for images' },
                            { id: 'd', text: 'display: none is deprecated; visibility: hidden is not' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 67,
                        text: 'How do you specify links in HTML?',
                        options: [
                            { id: 'a', text: '<a href="url" target="_blank">Link</a> with _blank, _self, _parent, _top' },
                            { id: 'b', text: '<link href="url" target="_blank">Link</link>' },
                            { id: 'c', text: '<a src="url" target="new">Link</a>' },
                            { id: 'd', text: '<hyperlink url="url" target="_blank">Link</hyperlink>' }
                        ],
                        correctAnswer: 'a'
                    },
                    {
                        id: 68,
                        text: 'What are the ways to add CSS in HTML?',
                        options: [
                            { id: 'a', text: 'Inline (style attribute), Internal (<style> tag), External (<link> tag)' },
                            { id: 'b', text: 'Inline (css attribute), Internal (<css> tag), External (<style> tag)' },
                            { id: 'c', text: 'Inline (style tag), Internal (<link> tag), External (<css> tag)' },
                            { id: 'd', text: 'Inline (class attribute), Internal (<script> tag), External (<a> tag)' }
                        ],
                        correctAnswer: 'a'
                    },
                    {
                        id: 69,
                        text: 'What is the difference between <link> and <a>?',
                        options: [
                            { id: 'a', text: '<link> creates clickable hyperlinks; <a> references external resources' },
                            { id: 'b', text: '<link> references external resources; <a> creates clickable hyperlinks' },
                            { id: 'c', text: '<link> is for forms; <a> is for navigation' },
                            { id: 'd', text: '<link> is deprecated; <a> is not' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 70,
                        text: 'Where should JavaScript be placed in HTML – <head> or <body>?',
                        options: [
                            { id: 'a', text: 'Libraries in <body>; content scripts in <head>' },
                            { id: 'b', text: 'Libraries and events in <head>; content scripts at bottom of <body>' },
                            { id: 'c', text: 'All scripts in <head> only' },
                            { id: 'd', text: 'All scripts in <body> only' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 71,
                        text: 'What is the relation between <header> and <h1> in HTML5?',
                        options: [
                            { id: 'a', text: '<header> cannot contain <h1>' },
                            { id: 'b', text: 'Each section can have its own <header> and <h1>' },
                            { id: 'c', text: '<header> replaces <h1> in HTML5' },
                            { id: 'd', text: '<h1> must be outside <header>' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 72,
                        text: 'What is the difference between <figure> and <img>?',
                        options: [
                            { id: 'a', text: '<figure> embeds images; <img> groups images with captions' },
                            { id: 'b', text: '<img> embeds images; <figure> groups images with captions' },
                            { id: 'c', text: '<figure> is for text; <img> is for videos' },
                            { id: 'd', text: '<img> is deprecated; <figure> is not' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 73,
                        text: 'How do you specify metadata in HTML5?',
                        options: [
                            { id: 'a', text: 'Use <meta> tag with name, content, charset, etc.' },
                            { id: 'b', text: 'Use <data> tag with value attributes' },
                            { id: 'c', text: 'Use <link> tag with rel attributes' },
                            { id: 'd', text: 'Use <script> tag with type attributes' }
                        ],
                        correctAnswer: 'a'
                    },
                    {
                        id: 74,
                        text: 'What is the difference between <datalist> and <select>?',
                        options: [
                            { id: 'a', text: '<select> allows user input; <datalist> is fixed options' },
                            { id: 'b', text: '<datalist> provides suggestions + user input; <select> is fixed options' },
                            { id: 'c', text: '<datalist> is for forms; <select> is for navigation' },
                            { id: 'd', text: '<select> is deprecated; <datalist> is not' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 75,
                        text: 'What is an Image Map in HTML?',
                        options: [
                            { id: 'a', text: 'A tag to embed multiple images' },
                            { id: 'b', text: 'Clickable areas on an image using <map> and <area> tags' },
                            { id: 'c', text: 'A grid layout for images' },
                            { id: 'd', text: 'A script to animate images' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 76,
                        text: 'How do you convert data to an HTML table?',
                        options: [
                            { id: 'a', text: '<table><tr><th>S.no.</th><th>Language</th><th>Used for</th></tr><tr><td>1</td><td>HTML</td><td>FrontEnd</td></tr></table>' },
                            { id: 'b', text: '<table><row><cell>S.no.</cell><cell>Language</cell></row></table>' },
                            { id: 'c', text: '<table><tr><td>S.no.</td><td>Language</td></tr></table>' },
                            { id: 'd', text: '<table><th>S.no.</th><th>Language</th></table>' }
                        ],
                        correctAnswer: 'a'
                    },
                    {
                        id: 77,
                        text: 'What is the difference between <meter> and <progress>?',
                        options: [
                            { id: 'a', text: '<meter> shows task completion; <progress> shows scalar value' },
                            { id: 'b', text: '<progress> shows task completion; <meter> shows scalar value' },
                            { id: 'c', text: '<meter> is for forms; <progress> is for images' },
                            { id: 'd', text: '<progress> is deprecated; <meter> is not' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 78,
                        text: 'Is drag and drop possible in HTML5?',
                        options: [
                            { id: 'a', text: 'No, it requires external plugins' },
                            { id: 'b', text: 'Yes, using draggable, ondrop, and ondragover attributes' },
                            { id: 'c', text: 'Yes, using <drag> and <drop> tags' },
                            { id: 'd', text: 'No, it\'s only possible with CSS' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 79,
                        text: 'What are the audio file types supported in HTML5?',
                        options: [
                            { id: 'a', text: 'MP3, WAV, OGG' },
                            { id: 'b', text: 'MP4, AVI, MOV' },
                            { id: 'c', text: 'FLAC, AAC, WMA' },
                            { id: 'd', text: 'MIDI, MP3, M4A' }
                        ],
                        correctAnswer: 'a'
                    },
                    {
                        id: 80,
                        text: 'What are the goals of the HTML5 specification?',
                        options: [
                            { id: 'a', text: 'Remove semantic tags and focus on styling' },
                            { id: 'b', text: 'Better structure, device/browser support, backward compatibility, replace plugins' },
                            { id: 'c', text: 'Replace CSS with HTML tags' },
                            { id: 'd', text: 'Focus only on mobile devices' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 81,
                        text: 'What is Web Storage in HTML5?',
                        options: [
                            { id: 'a', text: 'localStorage persists; sessionStorage clears after session' },
                            { id: 'b', text: 'localStorage clears after session; sessionStorage persists' },
                            { id: 'c', text: 'webStorage stores form data; sessionStorage stores images' },
                            { id: 'd', text: 'localStorage is deprecated; sessionStorage is not' }
                        ],
                        correctAnswer: 'a'
                    },
                    {
                        id: 82,
                        text: 'What is Microdata in HTML5?',
                        options: [
                            { id: 'a', text: 'A method to style elements' },
                            { id: 'b', text: 'Structured data for search engines using itemscope, itemtype, itemprop' },
                            { id: 'c', text: 'A tag for embedding videos' },
                            { id: 'd', text: 'A script for form validation' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 83,
                        text: 'Which tag is used for calculation results in HTML5?',
                        options: [
                            { id: 'a', text: '<result>' },
                            { id: 'b', text: '<output>' },
                            { id: 'c', text: '<calc>' },
                            { id: 'd', text: '<compute>' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 84,
                        text: 'What is MathML in HTML5?',
                        options: [
                            { id: 'a', text: 'A tag for styling mathematical text' },
                            { id: 'b', text: 'A tag to display math expressions using <math>' },
                            { id: 'c', text: 'A script for performing calculations' },
                            { id: 'd', text: 'A method to embed graphs' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 85,
                        text: 'What are Server-Sent Events in HTML5?',
                        options: [
                            { id: 'a', text: 'Client-side scripts for animations' },
                            { id: 'b', text: 'Server pushes updates via persistent connection using <eventsource>' },
                            { id: 'c', text: 'Events triggered by form submissions' },
                            { id: 'd', text: 'Methods to store data locally' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 86,
                        text: 'What are Web Workers in HTML5?',
                        options: [
                            { id: 'a', text: 'Tags for embedding external content' },
                            { id: 'b', text: 'Scripts running in background threads to avoid UI freezing' },
                            { id: 'c', text: 'Methods to handle form submissions' },
                            { id: 'd', text: 'Styles for responsive design' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 87,
                        text: 'How do you handle events in HTML?',
                        options: [
                            { id: 'a', text: 'Use CSS properties like hover and click' },
                            { id: 'b', text: 'Use JavaScript event attributes like onclick, onchange' },
                            { id: 'c', text: 'Use <event> tags with type attributes' },
                            { id: 'd', text: 'Use <script> tags with event attributes' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 88,
                        text: 'What are the new input types in HTML5?',
                        options: [
                            { id: 'a', text: 'text, password, checkbox, radio' },
                            { id: 'b', text: 'date, week, month, time, color, email, number, url, range' },
                            { id: 'c', text: 'image, video, audio, file' },
                            { id: 'd', text: 'button, submit, reset, hidden' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 89,
                        text: 'What are the new media tags in HTML5?',
                        options: [
                            { id: 'a', text: '<audio>, <video>, <source>, <embed>, <track>' },
                            { id: 'b', text: '<img>, <figure>, <figcaption>' },
                            { id: 'c', text: '<media>, <sound>, <movie>' },
                            { id: 'd', text: '<canvas>, <svg>, <graphic>' }
                        ],
                        correctAnswer: 'a'
                    },
                    {
                        id: 90,
                        text: 'Why is drag-and-drop important in HTML5?',
                        options: [
                            { id: 'a', text: 'It replaces CSS animations' },
                            { id: 'b', text: 'It improves usability and mimics OS functionality' },
                            { id: 'c', text: 'It simplifies form validation' },
                            { id: 'd', text: 'It embeds external content' }
                        ],
                        correctAnswer: 'b'
                    }
                ],
                stats: { total: 90, completed: 0, averageScore: 0 }
            },
            {
                id: 'css',
                title: 'CSS',
                description: 'Styling and layout of web pages',
                icon: 'fab fa-css3-alt',
                color: '#06b6d4',
                questions: [
                    {
                        id: 1,
                        text: 'What is CSS?',
                        options: [
                            { id: 'a', text: 'A scripting language for interactivity' },
                            { id: 'b', text: 'Cascading Style Sheets for styling web pages' },
                            { id: 'c', text: 'A markup language for structure' },
                            { id: 'd', text: 'A database query language' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 2,
                        text: 'Why do we use CSS?',
                        options: [
                            { id: 'a', text: 'To define database connections' },
                            { id: 'b', text: 'To save time, ensure easy maintenance, and improve SEO' },
                            { id: 'c', text: 'To add interactivity to web pages' },
                            { id: 'd', text: 'To structure HTML content' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 3,
                        text: 'What are the advantages of CSS?',
                        options: [
                            { id: 'a', text: 'Increases bandwidth usage and slows load times' },
                            { id: 'b', text: 'Reusable styles, consistent styling, faster development, reduced bandwidth' },
                            { id: 'c', text: 'Adds database functionality to web pages' },
                            { id: 'd', text: 'Simplifies HTML structure without styling' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 4,
                        text: 'What are the disadvantages of CSS?',
                        options: [
                            { id: 'a', text: 'Improves browser compatibility and security' },
                            { id: 'b', text: 'Compatibility issues, security limitations, unintended style changes' },
                            { id: 'c', text: 'Increases file size and complexity' },
                            { id: 'd', text: 'Prevents responsive design' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 5,
                        text: 'What is the current version of CSS?',
                        options: [
                            { id: 'a', text: 'CSS1' },
                            { id: 'b', text: 'CSS2' },
                            { id: 'c', text: 'CSS3' },
                            { id: 'd', text: 'CSS4' }
                        ],
                        correctAnswer: 'c'
                    },
                    {
                        id: 6,
                        text: 'How is CSS different from CSS3?',
                        options: [
                            { id: 'a', text: 'CSS3 is backward compatible; CSS supports animations' },
                            { id: 'b', text: 'CSS3 supports responsive design, animations, and modular design; CSS does not' },
                            { id: 'c', text: 'CSS is modular; CSS3 is not' },
                            { id: 'd', text: 'CSS supports 3D transforms; CSS3 does not' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 7,
                        text: 'Which of the following are CSS frameworks?',
                        options: [
                            { id: 'a', text: 'React, Angular, Vue' },
                            { id: 'b', text: 'Bootstrap, Foundation, Bulma, Tailwind CSS' },
                            { id: 'c', text: 'jQuery, Node.js, Express' },
                            { id: 'd', text: 'MySQL, MongoDB, PostgreSQL' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 8,
                        text: 'What is the syntax for CSS?',
                        options: [
                            { id: 'a', text: 'selector { property: value; }' },
                            { id: 'b', text: 'selector (property = value)' },
                            { id: 'c', text: 'selector: property = value;' },
                            { id: 'd', text: 'selector { value: property; }' }
                        ],
                        correctAnswer: 'a'
                    },
                    {
                        id: 9,
                        text: 'What are the different ways to apply CSS to a webpage?',
                        options: [
                            { id: 'a', text: 'Inline (`style` attribute), Internal (`<style>` tag), External (`<link>` tag)' },
                            { id: 'b', text: 'Inline (`css` attribute), Internal (`<css>` tag), External (`<script>` tag)' },
                            { id: 'c', text: 'Inline (`class` attribute), Internal (`<link>` tag), External (`<style>` tag)' },
                            { id: 'd', text: 'Inline (`id` attribute), Internal (`<div>` tag), External (`<a>` tag)' }
                        ],
                        correctAnswer: 'a'
                    },
                    {
                        id: 10,
                        text: 'Which type of CSS holds the highest priority?',
                        options: [
                            { id: 'a', text: 'External CSS' },
                            { id: 'b', text: 'Internal CSS' },
                            { id: 'c', text: 'Inline CSS' },
                            { id: 'd', text: 'Browser default CSS' }
                        ],
                        correctAnswer: 'c'
                    },
                    {
                        id: 11,
                        text: 'What are CSS selectors?',
                        options: [
                            { id: 'a', text: 'Attributes that define element behavior' },
                            { id: 'b', text: 'Target HTML elements to apply styles (e.g., element, ID, class)' },
                            { id: 'c', text: 'Scripts for dynamic content' },
                            { id: 'd', text: 'Tags for structuring content' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 12,
                        text: 'How can we add comments in CSS?',
                        options: [
                            { id: 'a', text: '// This is a comment' },
                            { id: 'b', text: '/* This is a comment */' },
                            { id: 'c', text: '<!-- This is a comment -->' },
                            { id: 'd', text: '# This is a comment' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 13,
                        text: 'What does the \'a\' in `rgba()` mean?',
                        options: [
                            { id: 'a', text: 'Alignment' },
                            { id: 'b', text: 'Alpha (transparency)' },
                            { id: 'c', text: 'Animation' },
                            { id: 'd', text: 'Attribute' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 14,
                        text: 'What are CSS HSL colors?',
                        options: [
                            { id: 'a', text: 'Hue, Saturation, Lightness' },
                            { id: 'b', text: 'Highlight, Shadow, Luminance' },
                            { id: 'c', text: 'Hue, Shade, Level' },
                            { id: 'd', text: 'Height, Saturation, Length' }
                        ],
                        correctAnswer: 'a'
                    },
                    {
                        id: 15,
                        text: 'What are CSS background properties?',
                        options: [
                            { id: 'a', text: '`background-color`, `background-image`, `background-repeat`, `background-attachment`, `background-position`' },
                            { id: 'b', text: '`border-style`, `border-width`, `border-color`' },
                            { id: 'c', text: '`margin`, `padding`, `border`' },
                            { id: 'd', text: '`color`, `text-align`, `text-decoration`' }
                        ],
                        correctAnswer: 'a'
                    },
                    {
                        id: 16,
                        text: 'What are CSS border properties?',
                        options: [
                            { id: 'a', text: '`border-style`, `border-width`, `border-color`' },
                            { id: 'b', text: '`background-color`, `background-image`, `background-repeat`' },
                            { id: 'c', text: '`margin`, `padding`, `outline`' },
                            { id: 'd', text: '`text-align`, `text-decoration`, `text-transform`' }
                        ],
                        correctAnswer: 'a'
                    },
                    {
                        id: 17,
                        text: 'What does `margin: 40px 100px 120px 80px` signify?',
                        options: [
                            { id: 'a', text: 'Top: 80px, Right: 120px, Bottom: 100px, Left: 40px' },
                            { id: 'b', text: 'Top: 40px, Right: 100px, Bottom: 120px, Left: 80px' },
                            { id: 'c', text: 'Top: 120px, Right: 80px, Bottom: 40px, Left: 100px' },
                            { id: 'd', text: 'Top: 100px, Right: 40px, Bottom: 80px, Left: 120px' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 18,
                        text: 'What is the difference between margin and padding?',
                        options: [
                            { id: 'a', text: 'Margin is inside the border; padding is outside' },
                            { id: 'b', text: 'Margin is outside the border; padding is inside' },
                            { id: 'c', text: 'Margin is for text; padding is for images' },
                            { id: 'd', text: 'Margin is deprecated; padding is not' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 19,
                        text: 'What is the CSS Box Model?',
                        options: [
                            { id: 'a', text: 'Content, Padding, Border, Margin' },
                            { id: 'b', text: 'Selector, Property, Value' },
                            { id: 'c', text: 'Inline, Block, Flex, Grid' },
                            { id: 'd', text: 'Hue, Saturation, Lightness' }
                        ],
                        correctAnswer: 'a'
                    },
                    {
                        id: 20,
                        text: 'What is the difference between CSS border and outline?',
                        options: [
                            { id: 'a', text: 'Border doesn’t affect layout; outline is part of box model' },
                            { id: 'b', text: 'Border is part of box model; outline doesn’t take space' },
                            { id: 'c', text: 'Border is for text; outline is for images' },
                            { id: 'd', text: 'Border is deprecated; outline is not' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 21,
                        text: 'How can we format text in CSS?',
                        options: [
                            { id: 'a', text: '`color`, `text-align`, `text-decoration`, `text-transform`, `text-indent`, `letter-spacing`, `line-height`, `text-shadow`' },
                            { id: 'b', text: '`border-style`, `border-width`, `border-color`' },
                            { id: 'c', text: '`background-color`, `background-image`, `background-repeat`' },
                            { id: 'd', text: '`position`, `z-index`, `float`' }
                        ],
                        correctAnswer: 'a'
                    },
                    {
                        id: 22,
                        text: 'What are the different CSS link states?',
                        options: [
                            { id: 'a', text: '`a:link`, `a:visited`, `a:hover`, `a:active`' },
                            { id: 'b', text: '`a:default`, `a:clicked`, `a:over`, `a:focus`' },
                            { id: 'c', text: '`a:open`, `a:closed`, `a:mouse`, `a:select`' },
                            { id: 'd', text: '`a:initial`, `a:final`, `a:hover`, `a:visited`' }
                        ],
                        correctAnswer: 'a'
                    },
                    {
                        id: 23,
                        text: 'Can we add an image as a list item marker in CSS?',
                        options: [
                            { id: 'a', text: 'No, only text is allowed' },
                            { id: 'b', text: 'Yes, using `list-style-image: url(\'image.png\')`' },
                            { id: 'c', text: 'Yes, using `list-image: url(\'image.png\')`' },
                            { id: 'd', text: 'Yes, using `marker-image: url(\'image.png\')`' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 24,
                        text: 'How can we hide an element in CSS?',
                        options: [
                            { id: 'a', text: '`display: block;` or `visibility: visible;`' },
                            { id: 'b', text: '`display: none;` or `visibility: hidden;`' },
                            { id: 'c', text: '`opacity: 1;` or `visibility: show;`' },
                            { id: 'd', text: '`position: absolute;` or `z-index: -1;`' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 25,
                        text: 'What is the difference between `display: none` and `visibility: hidden`?',
                        options: [
                            { id: 'a', text: '`display: none` hides and keeps space; `visibility: hidden` removes space' },
                            { id: 'b', text: '`display: none` hides and removes space; `visibility: hidden` hides but keeps space' },
                            { id: 'c', text: '`display: none` is for text; `visibility: hidden` is for images' },
                            { id: 'd', text: '`display: none` is deprecated; `visibility: hidden` is not' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 26,
                        text: 'Can we overlap elements in CSS?',
                        options: [
                            { id: 'a', text: 'No, elements cannot overlap' },
                            { id: 'b', text: 'Yes, using `position` and `z-index`' },
                            { id: 'c', text: 'Yes, using `float` and `margin`' },
                            { id: 'd', text: 'Yes, using `display: block`' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 27,
                        text: 'What are the various positioning properties in CSS?',
                        options: [
                            { id: 'a', text: '`inline`, `block`, `flex`, `grid`' },
                            { id: 'b', text: '`static`, `relative`, `absolute`, `fixed`, `sticky`' },
                            { id: 'c', text: '`visible`, `hidden`, `scroll`, `auto`' },
                            { id: 'd', text: '`top`, `bottom`, `left`, `right`' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 28,
                        text: 'What is CSS overflow?',
                        options: [
                            { id: 'a', text: 'Controls element alignment: `visible`, `hidden`, `scroll`, `auto`' },
                            { id: 'b', text: 'Controls content overflow: `visible`, `hidden`, `scroll`, `auto`' },
                            { id: 'c', text: 'Defines text styling: `bold`, `italic`, `underline`' },
                            { id: 'd', text: 'Manages element positioning: `static`, `relative`, `absolute`' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 29,
                        text: 'What does the CSS `float` property do?',
                        options: [
                            { id: 'a', text: 'Aligns text: `left`, `right`, `center`' },
                            { id: 'b', text: 'Floats elements: `left`, `right`, `none`, `inherit`' },
                            { id: 'c', text: 'Hides elements: `none`, `hidden`' },
                            { id: 'd', text: 'Positions elements: `absolute`, `fixed`' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 30,
                        text: 'What does `display: inline-block` do?',
                        options: [
                            { id: 'a', text: 'Hides the element and removes space' },
                            { id: 'b', text: 'Behaves like inline but respects width/height' },
                            { id: 'c', text: 'Stacks elements vertically' },
                            { id: 'd', text: 'Applies 3D transformations' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 31,
                        text: 'How can we vertically center text in CSS?',
                        options: [
                            { id: 'a', text: '`div { height: 200px; line-height: 200px; text-align: center; }`' },
                            { id: 'b', text: '`div { height: 200px; vertical-align: center; }`' },
                            { id: 'c', text: '`div { margin: auto; text-align: center; }`' },
                            { id: 'd', text: '`div { position: absolute; top: 50%; }`' }
                        ],
                        correctAnswer: 'a'
                    },
                    {
                        id: 32,
                        text: 'How can we center an image in CSS?',
                        options: [
                            { id: 'a', text: '`img { position: relative; margin: auto; }`' },
                            { id: 'b', text: '`img { position: absolute; margin: auto; top: 0; left: 0; right: 0; bottom: 0; }`' },
                            { id: 'c', text: '`img { display: block; text-align: center; }`' },
                            { id: 'd', text: '`img { vertical-align: middle; margin: auto; }`' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 33,
                        text: 'What are CSS combinators?',
                        options: [
                            { id: 'a', text: 'Properties for text styling' },
                            { id: 'b', text: 'Explain relationships between selectors: `~`, `+`, `>`, space' },
                            { id: 'c', text: 'Define animation sequences' },
                            { id: 'd', text: 'Control element positioning' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 34,
                        text: 'What are pseudo-classes in CSS?',
                        options: [
                            { id: 'a', text: 'Style parts of an element: `::before`, `::after`' },
                            { id: 'b', text: 'Define special states: `:hover`, `:active`, `:focus`, `:visited`' },
                            { id: 'c', text: 'Select elements by attributes: `[attr=value]`' },
                            { id: 'd', text: 'Apply 3D transformations' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 35,
                        text: 'What are pseudo-elements in CSS?',
                        options: [
                            { id: 'a', text: 'Define special states: `:hover`, `:active`' },
                            { id: 'b', text: 'Style parts of an element: `::before`, `::after`, `::first-letter`, `::first-line`' },
                            { id: 'c', text: 'Target elements by ID or class' },
                            { id: 'd', text: 'Control layout grids' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 36,
                        text: 'How can we add gradients in CSS?',
                        options: [
                            { id: 'a', text: '`background-color: gradient(red, blue);`' },
                            { id: 'b', text: '`background-image: linear-gradient(to right, red, blue);`' },
                            { id: 'c', text: '`color: gradient(red, blue);`' },
                            { id: 'd', text: '`border: gradient(red, blue);`' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 37,
                        text: 'Can we add 2D transformations in CSS?',
                        options: [
                            { id: 'a', text: 'Yes, using `translate()`, `rotate()`, `scale()`, `skewX()`, `skewY()`, `matrix()`' },
                            { id: 'b', text: 'No, only 3D transformations are supported' },
                            { id: 'c', text: 'Yes, using `position()`, `float()`, `margin()`' },
                            { id: 'd', text: 'Yes, using `color()`, `text-align()`, `font-size()`' }
                        ],
                        correctAnswer: 'a'
                    },
                    {
                        id: 38,
                        text: 'Can we add 3D transformations in CSS?',
                        options: [
                            { id: 'a', text: 'No, CSS only supports 2D transformations' },
                            { id: 'b', text: 'Yes, using `rotateX()`, `rotateY()`, `rotateZ()`' },
                            { id: 'c', text: 'Yes, using `translateX()`, `translateY()`' },
                            { id: 'd', text: 'Yes, using `float()`, `clear()`' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 39,
                        text: 'What are CSS transitions?',
                        options: [
                            { id: 'a', text: 'Define layout grids' },
                            { id: 'b', text: 'Animate changes in properties: `transition-property`, `transition-duration`' },
                            { id: 'c', text: 'Style text with shadows' },
                            { id: 'd', text: 'Control element visibility' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 40,
                        text: 'How can we animate using CSS?',
                        options: [
                            { id: 'a', text: 'Use `transform` with `position`' },
                            { id: 'b', text: 'Use `@keyframes` with `animation-*` properties' },
                            { id: 'c', text: 'Use `float` with `z-index`' },
                            { id: 'd', text: 'Use `display` with `visibility`' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 41,
                        text: 'What does the CSS `box-sizing` property do?',
                        options: [
                            { id: 'a', text: 'Controls text alignment' },
                            { id: 'b', text: 'Controls box width/height calculation: `content-box`, `border-box`' },
                            { id: 'c', text: 'Defines element visibility' },
                            { id: 'd', text: 'Manages font sizes' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 42,
                        text: 'How can we make a website responsive using CSS?',
                        options: [
                            { id: 'a', text: 'Use fixed pixel values for all elements' },
                            { id: 'b', text: 'Use media queries: `@media only screen and (max-width: 600px)`' },
                            { id: 'c', text: 'Use inline styles only' },
                            { id: 'd', text: 'Use `position: absolute` for all elements' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 43,
                        text: 'What is CSS Flexbox?',
                        options: [
                            { id: 'a', text: 'A 2D layout system for grids' },
                            { id: 'b', text: 'A layout model for 1D space: `display: flex`' },
                            { id: 'c', text: 'A method for text styling' },
                            { id: 'd', text: 'A system for animations' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 44,
                        text: 'What is CSS Grid?',
                        options: [
                            { id: 'a', text: 'A 1D layout model for rows' },
                            { id: 'b', text: 'A 2D layout system: `display: grid`' },
                            { id: 'c', text: 'A method for 3D transformations' },
                            { id: 'd', text: 'A system for text alignment' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 45,
                        text: 'What is the difference between Flexbox and Grid?',
                        options: [
                            { id: 'a', text: 'Flexbox is 2D; Grid is 1D' },
                            { id: 'b', text: 'Flexbox is 1D; Grid is 2D' },
                            { id: 'c', text: 'Flexbox is for text; Grid is for images' },
                            { id: 'd', text: 'Flexbox is deprecated; Grid is not' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 46,
                        text: 'What is the best way to include a CSS file?',
                        options: [
                            { id: 'a', text: 'Inline CSS with `style` attribute' },
                            { id: 'b', text: 'External CSS via `<link>` tag' },
                            { id: 'c', text: 'Internal CSS with `<style>` tag' },
                            { id: 'd', text: '`@import` in HTML' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 47,
                        text: 'How case-sensitive is CSS?',
                        options: [
                            { id: 'a', text: 'Completely case-sensitive' },
                            { id: 'b', text: 'Case-insensitive, but class/ID names, fonts, URLs are case-sensitive' },
                            { id: 'c', text: 'Case-sensitive only for properties' },
                            { id: 'd', text: 'Case-insensitive for all elements' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 48,
                        text: 'What do CSS animations allow?',
                        options: [
                            { id: 'a', text: 'Style changes over time without JavaScript' },
                            { id: 'b', text: 'Database connections for dynamic content' },
                            { id: 'c', text: 'Element positioning without CSS' },
                            { id: 'd', text: 'Form validation without scripts' }
                        ],
                        correctAnswer: 'a'
                    },
                    {
                        id: 49,
                        text: 'What is `@keyframes` used for?',
                        options: [
                            { id: 'a', text: 'Defines element positioning' },
                            { id: 'b', text: 'Defines steps in a CSS animation sequence' },
                            { id: 'c', text: 'Controls text styling' },
                            { id: 'd', text: 'Manages form inputs' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 50,
                        text: 'What are CSS counters?',
                        options: [
                            { id: 'a', text: 'Properties for text alignment' },
                            { id: 'b', text: 'Variables to track/display numeric values: `counter-reset`, `counter-increment`' },
                            { id: 'c', text: 'Methods for animations' },
                            { id: 'd', text: 'Selectors for attributes' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 51,
                        text: 'What is meant by the universal selector in CSS?',
                        options: [
                            { id: 'a', text: 'Selects elements by ID: `#id`' },
                            { id: 'b', text: 'Selects all elements: `*`' },
                            { id: 'c', text: 'Selects elements by class: `.class`' },
                            { id: 'd', text: 'Selects elements by attribute: `[attr]`' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 52,
                        text: 'What is Responsive Web Design (RWD)?',
                        options: [
                            { id: 'a', text: 'A fixed layout for desktop only' },
                            { id: 'b', text: 'Adapts content to screen sizes using flexible grids, images, media queries' },
                            { id: 'c', text: 'A method for animations' },
                            { id: 'd', text: 'A system for database integration' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 53,
                        text: 'What is the difference between class and ID selectors?',
                        options: [
                            { id: 'a', text: 'Class is unique; ID is reusable' },
                            { id: 'b', text: 'Class is reusable; ID is unique' },
                            { id: 'c', text: 'Class is for text; ID is for images' },
                            { id: 'd', text: 'Class is deprecated; ID is not' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 54,
                        text: 'How can we use pagination in CSS?',
                        options: [
                            { id: 'a', text: '`pagination: inline-block;`' },
                            { id: 'b', text: 'Style numbered navigation with classes: `.pagination`, `.pagination a`' },
                            { id: 'c', text: '`page-break: auto;`' },
                            { id: 'd', text: '`display: pagination;`' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 55,
                        text: 'What is CSS image reflection?',
                        options: [
                            { id: 'a', text: 'Use `box-shadow` for images' },
                            { id: 'b', text: 'Use `-webkit-box-reflect` for reflection effect' },
                            { id: 'c', text: 'Use `filter: blur` for images' },
                            { id: 'd', text: 'Use `transform: rotate` for reflection' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 56,
                        text: 'How can we create multiple columns of text in CSS?',
                        options: [
                            { id: 'a', text: '`column-count: 3; column-gap: 20px;`' },
                            { id: 'b', text: '`display: columns; gap: 20px;`' },
                            { id: 'c', text: '`text-columns: 3; spacing: 20px;`' },
                            { id: 'd', text: '`multi-column: 3; gap: 20px;`' }
                        ],
                        correctAnswer: 'a'
                    },
                    {
                        id: 57,
                        text: 'How can we give a shadow effect to text in CSS?',
                        options: [
                            { id: 'a', text: '`text-shadow: 2px 2px 5px gray;`' },
                            { id: 'b', text: '`box-shadow: 2px 2px 5px gray;`' },
                            { id: 'c', text: '`shadow: 2px 2px 5px gray;`' },
                            { id: 'd', text: '`text-effect: shadow 2px 2px 5px gray;`' }
                        ],
                        correctAnswer: 'a'
                    },
                    {
                        id: 58,
                        text: 'What is `!important` in CSS?',
                        options: [
                            { id: 'a', text: 'Defines a new selector' },
                            { id: 'b', text: 'Overrides all other declarations' },
                            { id: 'c', text: 'Applies a default style' },
                            { id: 'd', text: 'Validates CSS syntax' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 59,
                        text: 'What is specificity in CSS?',
                        options: [
                            { id: 'a', text: 'Determines animation duration' },
                            { id: 'b', text: 'Determines which rule applies based on hierarchy: Inline > ID > Class > Tag' },
                            { id: 'c', text: 'Controls element positioning' },
                            { id: 'd', text: 'Manages font sizes' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 60,
                        text: 'What are attribute selectors in CSS?',
                        options: [
                            { id: 'a', text: 'Select elements by position: `static`, `relative`' },
                            { id: 'b', text: 'Select elements by attributes: `[attr]`, `[attr=value]`, etc.' },
                            { id: 'c', text: 'Define pseudo-classes: `:hover`, `:active`' },
                            { id: 'd', text: 'Style text properties: `color`, `font-size`' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 61,
                        text: 'How do you specify units in CSS?',
                        options: [
                            { id: 'a', text: '`px`, `em`, `pt`, `%`, `vh`, `vw`' },
                            { id: 'b', text: '`cm`, `mm`, `in`, `ft`' },
                            { id: 'c', text: '`deg`, `rad`, `turn`' },
                            { id: 'd', text: '`ms`, `s`, `hz`' }
                        ],
                        correctAnswer: 'a'
                    },
                    {
                        id: 62,
                        text: 'How are CSS selectors matched?',
                        options: [
                            { id: 'a', text: 'Evaluated left to right, starting from the parent' },
                            { id: 'b', text: 'Evaluated right to left, starting from the key element' },
                            { id: 'c', text: 'Matched in random order' },
                            { id: 'd', text: 'Matched based on alphabetical order' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 63,
                        text: 'What is cascading in CSS?',
                        options: [
                            { id: 'a', text: 'Applying styles based on specificity, order, and `!important`' },
                            { id: 'b', text: 'Combining multiple stylesheets into one' },
                            { id: 'c', text: 'Animating elements with keyframes' },
                            { id: 'd', text: 'Aligning elements in a grid layout' }
                        ],
                        correctAnswer: 'a'
                    },
                    {
                        id: 64,
                        text: 'What property is used to change font face in CSS?',
                        options: [
                            { id: 'a', text: '`font-style: "Arial", sans-serif;`' },
                            { id: 'b', text: '`font-family: "Arial", sans-serif;`' },
                            { id: 'c', text: '`text-font: "Arial", sans-serif;`' },
                            { id: 'd', text: '`font-face: "Arial", sans-serif;`' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 65,
                        text: 'What is `z-index` in CSS?',
                        options: [
                            { id: 'a', text: 'Controls element transparency' },
                            { id: 'b', text: 'Defines stacking order along the Z-axis' },
                            { id: 'c', text: 'Sets element width and height' },
                            { id: 'd', text: 'Manages text alignment' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 66,
                        text: 'Is it important to test a webpage in different browsers?',
                        options: [
                            { id: 'a', text: 'No, all browsers render CSS identically' },
                            { id: 'b', text: 'Yes, browsers render CSS differently' },
                            { id: 'c', text: 'No, CSS is browser-agnostic' },
                            { id: 'd', text: 'Yes, but only for mobile browsers' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 67,
                        text: 'What are the limitations of CSS?',
                        options: [
                            { id: 'a', text: 'Supports parent selectors and full logic' },
                            { id: 'b', text: 'No parent selector, cross-browser issues, limited logic' },
                            { id: 'c', text: 'Cannot style text or images' },
                            { id: 'd', text: 'Only works with inline elements' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 68,
                        text: 'What’s the difference between reset CSS and normalize CSS?',
                        options: [
                            { id: 'a', text: 'Reset standardizes styles; normalize removes defaults' },
                            { id: 'b', text: 'Reset removes all default styling; normalize standardizes styles' },
                            { id: 'c', text: 'Reset is for text; normalize is for images' },
                            { id: 'd', text: 'Reset is deprecated; normalize is not' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 69,
                        text: 'Does margin-top or margin-bottom affect inline elements?',
                        options: [
                            { id: 'a', text: 'Yes, they always affect inline elements' },
                            { id: 'b', text: 'No, they do not affect inline elements' },
                            { id: 'c', text: 'Yes, but only in flex layouts' },
                            { id: 'd', text: 'No, unless `display: block` is applied' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 70,
                        text: 'Why use the `float` property in CSS?',
                        options: [
                            { id: 'a', text: 'To animate elements' },
                            { id: 'b', text: 'To align elements horizontally (left or right)' },
                            { id: 'c', text: 'To hide elements from the layout' },
                            { id: 'd', text: 'To center elements vertically' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 71,
                        text: 'What is a CSS preprocessor?',
                        options: [
                            { id: 'a', text: 'A tool for compressing CSS files' },
                            { id: 'b', text: 'Tools like SASS/SCSS, LESS, Stylus that extend CSS with variables, functions' },
                            { id: 'c', text: 'A method for validating CSS syntax' },
                            { id: 'd', text: 'A library for responsive design' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 72,
                        text: 'What are `vh` and `vw` in CSS?',
                        options: [
                            { id: 'a', text: '`vh`: 1% of viewport width; `vw`: 1% of viewport height' },
                            { id: 'b', text: '`vh`: 1% of viewport height; `vw`: 1% of viewport width' },
                            { id: 'c', text: '`vh`: vertical height; `vw`: vertical width' },
                            { id: 'd', text: '`vh`: viewport hue; `vw`: viewport weight' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 73,
                        text: 'How is opacity specified in CSS3?',
                        options: [
                            { id: 'a', text: '`opacity: 0.5;` (0 to 1), with IE fallback `filter: alpha(opacity=50)`' },
                            { id: 'b', text: '`visibility: 0.5;` (0 to 1)' },
                            { id: 'c', text: '`opacity: 50%;` with IE fallback `filter: opacity(50)`' },
                            { id: 'd', text: '`transparency: 0.5;` (0 to 1)' }
                        ],
                        correctAnswer: 'a'
                    },
                    {
                        id: 74,
                        text: 'What do the CSS selectors `div, p`, `div p`, `div ~ p`, `div + p`, `div > p` mean?',
                        options: [
                            { id: 'a', text: 'All select `div` and `p` elements' },
                            { id: 'b', text: '`div, p`: all `div` and `p`; `div p`: `p` inside `div`; `div ~ p`: `p` siblings after `div`; `div + p`: next `p` after `div`; `div > p`: direct child `p`' },
                            { id: 'c', text: 'All select direct children of `div`' },
                            { id: 'd', text: 'All select sibling elements' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 75,
                        text: 'What is the difference between CSS Grid and Flexbox?',
                        options: [
                            { id: 'a', text: 'Grid is 1D; Flexbox is 2D' },
                            { id: 'b', text: 'Grid is 2D (rows and columns); Flexbox is 1D (row or column)' },
                            { id: 'c', text: 'Grid is for text; Flexbox is for images' },
                            { id: 'd', text: 'Grid is deprecated; Flexbox is not' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 76,
                        text: 'When does DOM reflow occur?',
                        options: [
                            { id: 'a', text: 'Only when images are loaded' },
                            { id: 'b', text: 'When elements are inserted, removed, updated, or styles change' },
                            { id: 'c', text: 'Only during animations' },
                            { id: 'd', text: 'When media queries are applied' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 77,
                        text: 'How can you center a `div` inside another `div`?',
                        options: [
                            { id: 'a', text: '`display: block; margin: auto;`' },
                            { id: 'b', text: '`display: flex; justify-content: center; align-items: center;`' },
                            { id: 'c', text: '`position: relative; top: 50%; left: 50%;`' },
                            { id: 'd', text: '`text-align: center; vertical-align: middle;`' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 78,
                        text: 'What are the four types of `@media` properties?',
                        options: [
                            { id: 'a', text: '`all`, `screen`, `print`, `speech`' },
                            { id: 'b', text: '`desktop`, `mobile`, `tablet`, `tv`' },
                            { id: 'c', text: '`color`, `monochrome`, `grid`, `bitmap`' },
                            { id: 'd', text: '`inline`, `block`, `flex`, `grid`' }
                        ],
                        correctAnswer: 'a'
                    },
                    {
                        id: 79,
                        text: 'What is the CSS Grid system?',
                        options: [
                            { id: 'a', text: 'A 1D layout for aligning elements' },
                            { id: 'b', text: 'A 2D layout system for rows and columns' },
                            { id: 'c', text: 'A method for text styling' },
                            { id: 'd', text: 'A system for animations' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 80,
                        text: 'What does the `:root` pseudo-class do?',
                        options: [
                            { id: 'a', text: 'Targets the first element in a document' },
                            { id: 'b', text: 'Targets the top-level element, often for CSS variables' },
                            { id: 'c', text: 'Selects elements by class name' },
                            { id: 'd', text: 'Defines animation keyframes' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 81,
                        text: 'What is accessibility (a11y) in CSS?',
                        options: [
                            { id: 'a', text: 'Styling elements for animations' },
                            { id: 'b', text: 'Making web content usable for people with disabilities' },
                            { id: 'c', text: 'Optimizing images for faster loading' },
                            { id: 'd', text: 'Ensuring browser compatibility' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 82,
                        text: 'How do you reset a CSS property to its default?',
                        options: [
                            { id: 'a', text: '`reset: default;`' },
                            { id: 'b', text: '`initial`' },
                            { id: 'c', text: '`default: true;`' },
                            { id: 'd', text: '`revert`' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 83,
                        text: 'How does `calc()` work in CSS?',
                        options: [
                            { id: 'a', text: '`width: calc(100% - 50px);` for math operations' },
                            { id: 'b', text: '`calc: 100% - 50px;` for styling' },
                            { id: 'c', text: '`width: calc(100px + 50%);` for animations' },
                            { id: 'd', text: '`calc(width: 100% - 50px);` for layouts' }
                        ],
                        correctAnswer: 'a'
                    },
                    {
                        id: 84,
                        text: 'What are CSS custom properties (variables)?',
                        options: [
                            { id: 'a', text: 'Precompiled variables in SASS/LESS' },
                            { id: 'b', text: 'User-defined reusable values: `--main-color: blue;`' },
                            { id: 'c', text: 'Properties for text alignment' },
                            { id: 'd', text: 'Variables for JavaScript integration' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 85,
                        text: 'What is the difference between CSS variables and preprocessor variables?',
                        options: [
                            { id: 'a', text: 'CSS variables are precompiled; preprocessor variables cascade' },
                            { id: 'b', text: 'CSS variables cascade and can be changed via JS; preprocessor variables don’t' },
                            { id: 'c', text: 'CSS variables are for text; preprocessor variables are for layouts' },
                            { id: 'd', text: 'CSS variables are deprecated; preprocessor variables are not' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 86,
                        text: 'What does `* { box-sizing: border-box; }` do?',
                        options: [
                            { id: 'a', text: 'Applies text styling to all elements' },
                            { id: 'b', text: 'Includes padding and borders in element width/height' },
                            { id: 'c', text: 'Hides all elements' },
                            { id: 'd', text: 'Resets all margins to zero' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 87,
                        text: 'What is progressive rendering in CSS?',
                        options: [
                            { id: 'a', text: 'Rendering all content at once' },
                            { id: 'b', text: 'Rendering visible content quickly, e.g., lazy-loading images' },
                            { id: 'c', text: 'Applying animations to all elements' },
                            { id: 'd', text: 'Loading external scripts first' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 88,
                        text: 'Why use `translate()` instead of `position` for animations?',
                        options: [
                            { id: 'a', text: '`translate()` is CPU-accelerated' },
                            { id: 'b', text: '`translate()` is GPU-accelerated and avoids layout recalculations' },
                            { id: 'c', text: '`translate()` is for text styling' },
                            { id: 'd', text: '`translate()` is deprecated' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 89,
                        text: 'Does one CSS file block another from loading?',
                        options: [
                            { id: 'a', text: 'Yes, CSS files load sequentially' },
                            { id: 'b', text: 'No, browsers download stylesheets in parallel' },
                            { id: 'c', text: 'Yes, unless `@import` is used' },
                            { id: 'd', text: 'No, but only in modern browsers' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 90,
                        text: 'How do you detect if a browser supports a CSS feature?',
                        options: [
                            { id: 'a', text: 'Use `@media` queries' },
                            { id: 'b', text: 'Use `@supports` rule: `@supports (display: grid)`' },
                            { id: 'c', text: 'Use `feature: detect;`' },
                            { id: 'd', text: 'Use `browser-support: true;`' }
                        ],
                        correctAnswer: 'b'
                    },
                    {
                        id: 91,
                        text: 'How do you handle browser-specific CSS issues?',
                        options: [
                            { id: 'a', text: 'Use inline styles only' },
                            { id: 'b', text: 'Use Autoprefixer, reset/normalize, feature detection, test on devices' },
                            { id: 'c', text: 'Avoid CSS variables' },
                            { id: 'd', text: 'Use JavaScript for all styling' }
                        ],
                        correctAnswer: 'b'
                    }
                    ],
                stats: { total: 91, completed: 0, averageScore: 0 }
            },
            {
                id: 'javascript',
                title: 'JavaScript',
                description: 'Interactive web functionality and logic',
                icon: 'fab fa-js',
                color: '#fbbf24',
                questions: [
                    {
        id: 1,
        text: 'What are the different data types in JavaScript?',
        options: [
            { id: 'a', text: 'Number, String, Boolean, Object only' },
            { id: 'b', text: 'Number, String, Boolean, Null, Undefined, BigInt, Symbol, Object' },
            { id: 'c', text: 'Integer, Float, Char, Array' },
            { id: 'd', text: 'String, Number, Boolean, Function only' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 2,
        text: 'What is hoisting in JavaScript?',
        options: [
            { id: 'a', text: 'Moving variable initializations to the top' },
            { id: 'b', text: 'Moving variable and function declarations to the top of their scope' },
            { id: 'c', text: 'Converting variables to constants' },
            { id: 'd', text: 'Executing functions automatically' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 3,
        text: 'Why do we use the debugger keyword in JavaScript?',
        options: [
            { id: 'a', text: 'To log errors to the console' },
            { id: 'b', text: 'To pause execution for inspecting variables in debugging tools' },
            { id: 'c', text: 'To optimize code execution' },
            { id: 'd', text: 'To declare strict mode' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 4,
        text: 'What is the difference between == and === operators?',
        options: [
            { id: 'a', text: '== compares types; === compares values' },
            { id: 'b', text: '== compares values with coercion; === compares values and types' },
            { id: 'c', text: '== is for objects; === is for primitives' },
            { id: 'd', text: '== is strict; === is loose' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 5,
        text: 'What are the differences between var, let, and const?',
        options: [
            { id: 'a', text: 'var: block scope; let: function scope; const: global scope' },
            { id: 'b', text: 'var: function scope, hoisted; let: block scope, hoisted; const: block scope, non-reassignable' },
            { id: 'c', text: 'var: non-hoisted; let: hoisted; const: reassignable' },
            { id: 'd', text: 'var: block scope; let: global scope; const: function scope' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 6,
        text: 'What is implicit type coercion in JavaScript?',
        options: [
            { id: 'a', text: 'Manual type conversion' },
            { id: 'b', text: 'Automatic type conversion during operations' },
            { id: 'c', text: 'Defining variable types explicitly' },
            { id: 'd', text: 'Preventing type changes' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 7,
        text: 'Is JavaScript a statically typed or dynamically typed language?',
        options: [
            { id: 'a', text: 'Statically typed' },
            { id: 'b', text: 'Dynamically typed' },
            { id: 'c', text: 'Both statically and dynamically typed' },
            { id: 'd', text: 'Neither' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 8,
        text: 'What is the isNaN function in JavaScript?',
        options: [
            { id: 'a', text: 'Checks if a value is a number' },
            { id: 'b', text: 'Checks if a value is Not-a-Number after coercion' },
            { id: 'c', text: 'Converts a value to a number' },
            { id: 'd', text: 'Checks if a value is null' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 9,
        text: 'What is the difference between pass-by-value and pass-by-reference?',
        options: [
            { id: 'a', text: 'Primitives: pass-by-reference; Objects: pass-by-value' },
            { id: 'b', text: 'Primitives: pass-by-value; Objects: pass-by-reference' },
            { id: 'c', text: 'Both are pass-by-value' },
            { id: 'd', text: 'Both are pass-by-reference' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 10,
        text: 'What is an Immediately Invoked Function Expression (IIFE)?',
        options: [
            { id: 'a', text: 'A function that runs after a delay' },
            { id: 'b', text: 'A function that executes immediately after definition' },
            { id: 'c', text: 'A function that returns another function' },
            { id: 'd', text: 'A function that prevents hoisting' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 11,
        text: 'What is strict mode in JavaScript?',
        options: [
            { id: 'a', text: 'Allows implicit variable declarations' },
            { id: 'b', text: 'Enforces stricter parsing and error handling' },
            { id: 'c', text: 'Disables function hoisting' },
            { id: 'd', text: 'Enables global scope for all variables' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 12,
        text: 'What are higher-order functions and callbacks in JavaScript?',
        options: [
            { id: 'a', text: 'Higher-order: returns values; Callbacks: execute synchronously' },
            { id: 'b', text: 'Higher-order: take/return functions; Callbacks: functions passed as arguments' },
            { id: 'c', text: 'Higher-order: block-scoped; Callbacks: global-scoped' },
            { id: 'd', text: 'Higher-order: prevent errors; Callbacks: handle errors' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 13,
        text: 'What is the this keyword in JavaScript?',
        options: [
            { id: 'a', text: 'Refers to the global scope' },
            { id: 'b', text: 'Refers to the object invoking the function' },
            { id: 'c', text: 'Refers to the function itself' },
            { id: 'd', text: 'Refers to the parent function' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 14,
        text: 'What are call(), apply(), and bind() methods?',
        options: [
            { id: 'a', text: 'call/apply: set this and execute; bind: creates new function with set this' },
            { id: 'b', text: 'call: executes functions; apply: binds this; bind: returns values' },
            { id: 'c', text: 'call: returns functions; apply: executes loops; bind: sets scope' },
            { id: 'd', text: 'call/apply: create objects; bind: deletes objects' }
        ],
        correctAnswer: 'a'
    },
    {
        id: 15,
        text: 'What is the difference between exec() and test() methods?',
        options: [
            { id: 'a', text: 'exec: returns true/false; test: returns matched pattern' },
            { id: 'b', text: 'exec: returns matched pattern; test: returns true/false' },
            { id: 'c', text: 'exec: modifies strings; test: creates regex' },
            { id: 'd', text: 'exec: tests numbers; test: tests strings' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 16,
        text: 'What is currying in JavaScript?',
        options: [
            { id: 'a', text: 'Combining multiple functions into one' },
            { id: 'b', text: 'Transforming a function with multiple arguments into nested single-argument functions' },
            { id: 'c', text: 'Executing functions asynchronously' },
            { id: 'd', text: 'Binding this to a function' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 17,
        text: 'What are the advantages of using external JavaScript?',
        options: [
            { id: 'a', text: 'Increases page load time' },
            { id: 'b', text: 'Improves collaboration, reusability, and readability' },
            { id: 'c', text: 'Prevents code execution' },
            { id: 'd', text: 'Disables strict mode' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 18,
        text: 'What are scope and scope chain in JavaScript?',
        options: [
            { id: 'a', text: 'Scope: variable types; Scope chain: function execution order' },
            { id: 'b', text: 'Scope: variable accessibility; Scope chain: searching outer scopes' },
            { id: 'c', text: 'Scope: function declarations; Scope chain: object properties' },
            { id: 'd', text: 'Scope: global variables only; Scope chain: local variables' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 19,
        text: 'What are closures in JavaScript?',
        options: [
            { id: 'a', text: 'Functions that execute immediately' },
            { id: 'b', text: 'Functions retaining access to outer scope variables' },
            { id: 'c', text: 'Functions that prevent hoisting' },
            { id: 'd', text: 'Functions that bind this' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 20,
        text: 'What are some advantages of JavaScript?',
        options: [
            { id: 'a', text: 'Runs only on servers' },
            { id: 'b', text: 'Client/server execution, easy to learn, enhances interactivity' },
            { id: 'c', text: 'Requires static typing' },
            { id: 'd', text: 'Prevents DOM manipulation' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 21,
        text: 'What are object prototypes and inheritance in JavaScript?',
        options: [
            { id: 'a', text: 'Prototypes: create classes; Inheritance: uses classical model' },
            { id: 'b', text: 'Prototypes: blueprints for objects; Inheritance: via prototype chain' },
            { id: 'c', text: 'Prototypes: prevent inheritance; Inheritance: via objects' },
            { id: 'd', text: 'Prototypes: store variables; Inheritance: via functions' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 22,
        text: 'What are the types of errors in JavaScript?',
        options: [
            { id: 'a', text: 'Syntax, Reference, Logical' },
            { id: 'b', text: 'Compile-time, Runtime, Static' },
            { id: 'c', text: 'Type, Scope, Value' },
            { id: 'd', text: 'Global, Local, Block' }
        ],
        correctAnswer: 'a'
    },
    {
        id: 23,
        text: 'What is memoization in JavaScript?',
        options: [
            { id: 'a', text: 'Executing functions recursively' },
            { id: 'b', text: 'Caching function results to avoid recomputation' },
            { id: 'c', text: 'Binding this to functions' },
            { id: 'd', text: 'Creating IIFEs' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 24,
        text: 'What is recursion in JavaScript?',
        options: [
            { id: 'a', text: 'A function that executes immediately' },
            { id: 'b', text: 'A function that calls itself until a base condition' },
            { id: 'c', text: 'A function that binds this' },
            { id: 'd', text: 'A function that prevents hoisting' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 25,
        text: 'What is the use of a constructor function in JavaScript?',
        options: [
            { id: 'a', text: 'To delete objects' },
            { id: 'b', text: 'To create objects with shared properties/methods' },
            { id: 'c', text: 'To execute functions asynchronously' },
            { id: 'd', text: 'To prevent inheritance' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 26,
        text: 'What is the Document Object Model (DOM)?',
        options: [
            { id: 'a', text: 'A browser interface for JavaScript files' },
            { id: 'b', text: 'A tree-like representation for manipulating HTML/XML' },
            { id: 'c', text: 'A model for server-side JavaScript' },
            { id: 'd', text: 'A method for error handling' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 27,
        text: 'Which method retrieves a character from a specific index in a string?',
        options: [
            { id: 'a', text: 'substring()' },
            { id: 'b', text: 'charAt()' },
            { id: 'c', text: 'slice()' },
            { id: 'd', text: 'indexOf()' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 28,
        text: 'What is the Browser Object Model (BOM)?',
        options: [
            { id: 'a', text: 'A model for HTML manipulation' },
            { id: 'b', text: 'An interface for interacting with browser features' },
            { id: 'c', text: 'A model for error handling' },
            { id: 'd', text: 'A model for object creation' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 29,
        text: 'What is the difference between client-side and server-side JavaScript?',
        options: [
            { id: 'a', text: 'Client-side: runs on server; Server-side: runs in browser' },
            { id: 'b', text: 'Client-side: runs in browser; Server-side: runs on server' },
            { id: 'c', text: 'Client-side: static typing; Server-side: dynamic typing' },
            { id: 'd', text: 'Client-side: synchronous; Server-side: asynchronous' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 30,
        text: 'What are arrow functions in JavaScript?',
        options: [
            { id: 'a', text: 'Functions that bind their own this' },
            { id: 'b', text: 'Concise functions inheriting this from parent scope' },
            { id: 'c', text: 'Functions that prevent hoisting' },
            { id: 'd', text: 'Functions that execute recursively' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 31,
        text: 'What is the prototype design pattern in JavaScript?',
        options: [
            { id: 'a', text: 'Creates classes for inheritance' },
            { id: 'b', text: 'Creates objects by cloning a template object' },
            { id: 'c', text: 'Prevents object inheritance' },
            { id: 'd', text: 'Executes functions asynchronously' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 32,
        text: 'What are the rest parameter and spread operator in JavaScript?',
        options: [
            { id: 'a', text: 'Rest: spreads arrays; Spread: collects arguments' },
            { id: 'b', text: 'Rest: collects arguments into array; Spread: spreads arrays/objects' },
            { id: 'c', text: 'Rest: binds this; Spread: creates objects' },
            { id: 'd', text: 'Rest: executes functions; Spread: prevents hoisting' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 33,
        text: 'How many ways can you create an object in JavaScript?',
        options: [
            { id: 'a', text: 'Three' },
            { id: 'b', text: 'Six' },
            { id: 'c', text: 'One' },
            { id: 'd', text: 'Ten' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 34,
        text: 'What are promises in JavaScript?',
        options: [
            { id: 'a', text: 'Functions that execute synchronously' },
            { id: 'b', text: 'Objects handling asynchronous operations with states' },
            { id: 'c', text: 'Methods for object creation' },
            { id: 'd', text: 'Functions that prevent errors' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 35,
        text: 'What are classes in JavaScript?',
        options: [
            { id: 'a', text: 'Functions for error handling' },
            { id: 'b', text: 'Syntactic sugar for constructor functions' },
            { id: 'c', text: 'Methods for array manipulation' },
            { id: 'd', text: 'Objects for asynchronous tasks' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 36,
        text: 'What are generator functions in JavaScript?',
        options: [
            { id: 'a', text: 'Functions that execute synchronously' },
            { id: 'b', text: 'Functions that can pause and resume execution' },
            { id: 'c', text: 'Functions that bind this' },
            { id: 'd', text: 'Functions that prevent hoisting' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 37,
        text: 'What is a WeakSet in JavaScript?',
        options: [
            { id: 'a', text: 'A collection of any values' },
            { id: 'b', text: 'A collection of objects with weak references' },
            { id: 'c', text: 'A collection of primitive types' },
            { id: 'd', text: 'A collection of functions' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 38,
        text: 'What is a WeakMap in JavaScript?',
        options: [
            { id: 'a', text: 'A map of primitive keys and values' },
            { id: 'b', text: 'A map of object keys with weak references' },
            { id: 'c', text: 'A map of function keys' },
            { id: 'd', text: 'A map of array values' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 39,
        text: 'What is object destructuring in JavaScript?',
        options: [
            { id: 'a', text: 'Combining objects into arrays' },
            { id: 'b', text: 'Extracting object properties into variables' },
            { id: 'c', text: 'Creating new objects' },
            { id: 'd', text: 'Preventing object inheritance' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 40,
        text: 'What is the difference between prototypal and classical inheritance?',
        options: [
            { id: 'a', text: 'Prototypal: via classes; Classical: via objects' },
            { id: 'b', text: 'Prototypal: via prototype chain; Classical: via classes' },
            { id: 'c', text: 'Prototypal: synchronous; Classical: asynchronous' },
            { id: 'd', text: 'Prototypal: prevents inheritance; Classical: enables it' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 41,
        text: 'What is a JavaScript design pattern?',
        options: [
            { id: 'a', text: 'A method for error handling' },
            { id: 'b', text: 'Reusable solutions to common programming problems' },
            { id: 'c', text: 'A way to declare variables' },
            { id: 'd', text: 'A type of loop' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 42,
        text: 'What is the difference between Async/Await and Generators?',
        options: [
            { id: 'a', text: 'Async/Await: yields values; Generators: return Promises' },
            { id: 'b', text: 'Async/Await: returns Promises; Generators: yield values' },
            { id: 'c', text: 'Async/Await: synchronous; Generators: asynchronous' },
            { id: 'd', text: 'Async/Await: creates objects; Generators: bind this' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 43,
        text: 'What is the role of deferred scripts in JavaScript?',
        options: [
            { id: 'a', text: 'Execute scripts synchronously' },
            { id: 'b', text: 'Wait for HTML parsing before execution' },
            { id: 'c', text: 'Prevent script execution' },
            { id: 'd', text: 'Enable strict mode' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 44,
        text: 'What is the purpose of this code? (var scope = "global scope"; function check() { var scope = "local scope"; function f() { return scope; } return f; })',
        options: [
            { id: 'a', text: 'Demonstrates global scope' },
            { id: 'b', text: 'Demonstrates lexical scoping' },
            { id: 'c', text: 'Demonstrates function hoisting' },
            { id: 'd', text: 'Demonstrates strict mode' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 45,
        text: 'What is the output of this code? (const b = [1,2,3,4,5,6,7,8,9,10]; for (let i = 0; i < 10; i++) { setTimeout(() => console.log(b[i]), 1000); } for (var i = 0; i < 10; i++) { setTimeout(() => console.log(b[i]), 1000); })',
        options: [
            { id: 'a', text: '1 to 10, then 1 to 10' },
            { id: 'b', text: '1 to 10, then ten undefineds' },
            { id: 'c', text: 'Ten undefineds, then 1 to 10' },
            { id: 'd', text: 'No output' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 46,
        text: 'What is the difference between undefined and null in JavaScript?',
        options: [
            { id: 'a', text: 'undefined: empty value; null: unassigned variable' },
            { id: 'b', text: 'undefined: unassigned variable; null: empty value' },
            { id: 'c', text: 'undefined: object type; null: number type' },
            { id: 'd', text: 'Both are identical' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 47,
        text: 'What are the conventions for naming a variable in JavaScript?',
        options: [
            { id: 'a', text: 'Start with numbers, use spaces' },
            { id: 'b', text: 'Use camelCase, descriptive names, avoid keywords' },
            { id: 'c', text: 'Use only uppercase letters' },
            { id: 'd', text: 'Use special characters freely' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 48,
        text: 'What is the global object in JavaScript?',
        options: [
            { id: 'a', text: 'An object for DOM manipulation' },
            { id: 'b', text: 'An object containing all global variables/functions' },
            { id: 'c', text: 'An object for error handling' },
            { id: 'd', text: 'An object for array manipulation' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 49,
        text: 'What is the result of 10 + 2 + "9"?',
        options: [
            { id: 'a', text: '12' },
            { id: 'b', text: '"129"' },
            { id: 'c', text: '21' },
            { id: 'd', text: '"21"' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 50,
        text: 'What are function declarations vs function expressions?',
        options: [
            { id: 'a', text: 'Declarations: not hoisted; Expressions: hoisted' },
            { id: 'b', text: 'Declarations: hoisted; Expressions: not hoisted' },
            { id: 'c', text: 'Declarations: return values; Expressions: execute loops' },
            { id: 'd', text: 'Declarations: asynchronous; Expressions: synchronous' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 51,
        text: 'How would you implement a function to reverse a string?',
        options: [
            { id: 'a', text: 'slice().join()' },
            { id: 'b', text: 'split().reverse().join()' },
            { id: 'c', text: 'reverse().split()' },
            { id: 'd', text: 'join().slice()' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 52,
        text: 'What is the output of a function checking if a number is even or odd? (function EvenOrOddNum(num) { return num % 2 === 0 ? `${num} is even` : `${num} is odd`; }) for inputs 30 and 31',
        options: [
            { id: 'a', text: '"30 is odd", "31 is even"' },
            { id: 'b', text: '"30 is even", "31 is odd"' },
            { id: 'c', text: '"30 is even", "31 is even"' },
            { id: 'd', text: 'Error' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 53,
        text: 'What is the output of a function checking if a string contains a substring? (function findSubstring(mainString, substring) { return mainString.includes(substring); }) for "Learn JavaScript" and "JavaScript"',
        options: [
            { id: 'a', text: 'false' },
            { id: 'b', text: 'true' },
            { id: 'c', text: 'undefined' },
            { id: 'd', text: 'Error' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 54,
        text: 'How do you add a method to an object?',
        options: [
            { id: 'a', text: 'Use Object.create()' },
            { id: 'b', text: 'Assign a function to an object property' },
            { id: 'c', text: 'Use Object.hasOwn()' },
            { id: 'd', text: 'Use push()' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 55,
        text: 'How can you check if an object has a specific property?',
        options: [
            { id: 'a', text: 'Use Object.create()' },
            { id: 'b', text: 'Use Object.hasOwn()' },
            { id: 'c', text: 'Use push()' },
            { id: 'd', text: 'Use includes()' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 56,
        text: 'How do you create a new object using Object.create()?',
        options: [
            { id: 'a', text: 'Assign a function to a variable' },
            { id: 'b', text: 'Create an object with a specified prototype' },
            { id: 'c', text: 'Create an array' },
            { id: 'd', text: 'Execute a function immediately' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 57,
        text: 'How do you create an array in JavaScript?',
        options: [
            { id: 'a', text: 'Using curly braces {}' },
            { id: 'b', text: 'Using square brackets []' },
            { id: 'c', text: 'Using parentheses ()' },
            { id: 'd', text: 'Using angle brackets <>' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 58,
        text: 'What are array prototype methods?',
        options: [
            { id: 'a', text: 'Methods for object creation' },
            { id: 'b', text: 'Methods like push(), pop(), shift(), unshift() for arrays' },
            { id: 'c', text: 'Methods for error handling' },
            { id: 'd', text: 'Methods for string manipulation' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 59,
        text: 'How do you add or remove items from an array?',
        options: [
            { id: 'a', text: 'Use charAt() and slice()' },
            { id: 'b', text: 'Use push() to add, pop() to remove' },
            { id: 'c', text: 'Use Object.create()' },
            { id: 'd', text: 'Use includes()' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 60,
        text: 'What are the ways to clear an array in JavaScript?',
        options: [
            { id: 'a', text: 'Use push() and pop()' },
            { id: 'b', text: 'Set length to 0, use splice(), assign empty array' },
            { id: 'c', text: 'Use reverse() and join()' },
            { id: 'd', text: 'Use Object.create()' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 61,
        text: 'How do you remove duplicates from a JavaScript array?',
        options: [
            { id: 'a', text: 'Use push() and pop()' },
            { id: 'b', text: 'Use Set to convert array and back' },
            { id: 'c', text: 'Use slice() and join()' },
            { id: 'd', text: 'Use Object.create()' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 62,
        text: 'How would you use the spread operator to merge objects?',
        options: [
            { id: 'a', text: 'Use push() to combine objects' },
            { id: 'b', text: 'Use ... to copy properties into a new object' },
            { id: 'c', text: 'Use Object.create()' },
            { id: 'd', text: 'Use includes()' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 63,
        text: 'What is the output of this code? (const arr1 = [1, 2, 3]; const arr2 = [...arr1, 4, 5, 6]; console.log(arr2);)',
        options: [
            { id: 'a', text: '[4, 5, 6]' },
            { id: 'b', text: '[1, 2, 3, 4, 5, 6]' },
            { id: 'c', text: '[1, 2, 3]' },
            { id: 'd', text: 'Error' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 64,
        text: 'How do you log and monitor errors in a JavaScript application?',
        options: [
            { id: 'a', text: 'Use push() and pop()' },
            { id: 'b', text: 'Use try-catch, window.onerror, tools like Sentry' },
            { id: 'c', text: 'Use Object.create()' },
            { id: 'd', text: 'Use reverse() and join()' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 65,
        text: 'How do you use CSS style selectors with JavaScript?',
        options: [
            { id: 'a', text: 'Use push() to style elements' },
            { id: 'b', text: 'Use document.getElementById() to select and style' },
            { id: 'c', text: 'Use Object.create()' },
            { id: 'd', text: 'Use includes()' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 66,
        text: 'What is the difference between innerHTML and innerText?',
        options: [
            { id: 'a', text: 'innerHTML: plain text; innerText: HTML content' },
            { id: 'b', text: 'innerHTML: HTML content; innerText: plain text' },
            { id: 'c', text: 'innerHTML: modifies arrays; innerText: modifies objects' },
            { id: 'd', text: 'innerHTML: asynchronous; innerText: synchronous' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 67,
        text: 'What is the difference between window and document objects?',
        options: [
            { id: 'a', text: 'Window: HTML content; Document: browser features' },
            { id: 'b', text: 'Window: browser features; Document: HTML content' },
            { id: 'c', text: 'Window: array manipulation; Document: error handling' },
            { id: 'd', text: 'Window: synchronous; Document: asynchronous' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 68,
        text: 'What is asynchronous JavaScript?',
        options: [
            { id: 'a', text: 'Executes code sequentially' },
            { id: 'b', text: 'Handles tasks concurrently using callbacks, promises, async/await' },
            { id: 'c', text: 'Prevents DOM manipulation' },
            { id: 'd', text: 'Enforces strict mode' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 69,
        text: 'What are imports and exports in JavaScript?',
        options: [
            { id: 'a', text: 'Imports: execute functions; Exports: create objects' },
            { id: 'b', text: 'Imports: bring module code; Exports: share module code' },
            { id: 'c', text: 'Imports: manipulate DOM; Exports: handle errors' },
            { id: 'd', text: 'Imports: prevent hoisting; Exports: bind this' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 70,
        text: 'What are the ways to add JavaScript to an HTML file?',
        options: [
            { id: 'a', text: 'Internal <script>, external src, inline attributes' },
            { id: 'b', text: 'Only external src' },
            { id: 'c', text: 'Only inline attributes' },
            { id: 'd', text: 'Only internal <script>' }
        ],
        correctAnswer: 'a'
    },
    {
        id: 71,
        text: 'What are some popular JavaScript frameworks and their use cases?',
        options: [
            { id: 'a', text: 'Node.js: frontend; React: backend' },
            { id: 'b', text: 'Node.js: backend; React: single-page apps; Angular: web apps' },
            { id: 'c', text: 'Node.js: DOM manipulation; React: error handling' },
            { id: 'd', text: 'Angular: array manipulation; React: strict mode' }
        ],
        correctAnswer: 'b'
    }
                    
                ],
                stats: { total: 71, completed: 0, averageScore: 0 }
            },
            {
                id: 'sql',
                title: 'SQL',
                description: 'Database queries and data management',
                icon: 'fas fa-database',
                color: '#10b981',
                questions: [
                    {
        id: 1,
        text: 'What is SQL?',
        options: [
            { id: 'c', text: 'A scripting language for interactivity' },
            { id: 'a', text: 'A markup language for web pages' },
            { id: 'b', text: 'Structured Query Language for relational databases' },
            { id: 'd', text: 'A tool for data visualization' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 2,
        text: 'What is a database?',
        options: [
            { id: 'b', text: 'An organized collection of data stored electronically' },
            { id: 'a', text: 'A programming language for web apps' },
            { id: 'c', text: 'A tool for styling web pages' },
            { id: 'd', text: 'A file storage system' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 3,
        text: 'What are the main types of SQL commands?',
        options: [
            { id: 'c', text: 'SELECT, INSERT, UPDATE, DELETE only' },
            { id: 'b', text: 'DDL, DML, DCL, TCL' },
            { id: 'a', text: 'HTML, CSS, JavaScript' },
            { id: 'd', text: 'CREATE, ALTER, DROP only' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 4,
        text: 'What is the difference between CHAR and VARCHAR2 data types?',
        options: [
            { id: 'b', text: 'CHAR is fixed-length; VARCHAR2 is variable-length' },
            { id: 'a', text: 'CHAR is variable-length; VARCHAR2 is fixed-length' },
            { id: 'c', text: 'CHAR allows NULL; VARCHAR2 does not' },
            { id: 'd', text: 'CHAR is for numbers; VARCHAR2 is for text' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 5,
        text: 'What is a primary key?',
        options: [
            { id: 'a', text: 'A column allowing duplicate values' },
            { id: 'c', text: 'A column linking to another table' },
            { id: 'b', text: 'A unique identifier for each record, no NULLs' },
            { id: 'd', text: 'A default value for a column' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 6,
        text: 'What is a foreign key?',
        options: [
            { id: 'a', text: 'A unique identifier for a table' },
            { id: 'c', text: 'A column with default values' },
            { id: 'b', text: 'A column linking to a primary key in another table' },
            { id: 'd', text: 'A column allowing NULL values only' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 7,
        text: 'What is the purpose of the DEFAULT constraint?',
        options: [
            { id: 'c', text: 'Links tables together' },
            { id: 'a', text: 'Ensures unique values' },
            { id: 'b', text: 'Assigns a default value when none is provided' },
            { id: 'd', text: 'Prevents NULL values' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 8,
        text: 'What is normalization in databases?',
        options: [
            { id: 'a', text: 'Combining tables for performance' },
            { id: 'b', text: 'Organizing data to reduce redundancy and improve integrity' },
            { id: 'c', text: 'Adding duplicate data for faster queries' },
            { id: 'd', text: 'Creating virtual tables' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 9,
        text: 'What is denormalization, and when is it used?',
        options: [
            { id: 'a', text: 'Organizing data to reduce redundancy' },
            { id: 'b', text: 'Combining tables for performance when joins are slow' },
            { id: 'c', text: 'Creating indexes for faster queries' },
            { id: 'd', text: 'Removing all constraints' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 10,
        text: 'What is a query in SQL?',
        options: [
            { id: 'b', text: 'A statement to retrieve, update, or manipulate data' },
            { id: 'a', text: 'A command to create a table' },
            { id: 'c', text: 'A database backup tool' },
            { id: 'd', text: 'A method to define constraints' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 11,
        text: 'What are the different operators available in SQL?',
        options: [
            { id: 'b', text: 'SELECT, INSERT, UPDATE, DELETE' },
            { id: 'c', text: 'CREATE, ALTER, DROP, TRUNCATE' },
            { id: 'a', text: 'Arithmetic, Comparison, Logical, Set, Special' },
            { id: 'd', text: 'GRANT, REVOKE, COMMIT' }
        ],
        correctAnswer: 'a'
    },
    {
        id: 12,
        text: 'What is a view in SQL?',
        options: [
            { id: 'b', text: 'A virtual table created by a SELECT query' },
            { id: 'c', text: 'A stored procedure for logic' },
            { id: 'a', text: 'A physical table storing data' },
            { id: 'd', text: 'An index for faster queries' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 13,
        text: 'What is the purpose of the UNIQUE constraint?',
        options: [
            { id: 'c', text: 'Links tables together' },
            { id: 'b', text: 'Ensures all values in a column are distinct' },
            { id: 'a', text: 'Ensures a column allows NULL values' },
            { id: 'd', text: 'Sets a default value' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 14,
        text: 'What are the different types of joins in SQL?',
        options: [
            { id: 'a', text: 'INNER, LEFT, RIGHT, FULL, CROSS' },
            { id: 'c', text: 'UNION, INTERSECT, EXCEPT' },
            { id: 'b', text: 'SELECT, INSERT, UPDATE, DELETE' },
            { id: 'd', text: 'GROUP BY, ORDER BY, HAVING' }
        ],
        correctAnswer: 'a'
    },
    {
        id: 15,
        text: 'What is the difference between INNER JOIN and OUTER JOIN?',
        options: [
            { id: 'b', text: 'INNER JOIN returns matching rows; OUTER JOIN includes non-matching rows' },
            { id: 'a', text: 'INNER JOIN includes NULLs; OUTER JOIN does not' },
            { id: 'c', text: 'INNER JOIN is faster; OUTER JOIN is slower' },
            { id: 'd', text: 'INNER JOIN links tables; OUTER JOIN creates views' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 16,
        text: 'What is the purpose of the GROUP BY clause?',
        options: [
            { id: 'a', text: 'Sorts the result set' },
            { id: 'c', text: 'Filters individual rows' },
            { id: 'b', text: 'Groups identical data for aggregate calculations' },
            { id: 'd', text: 'Joins multiple tables' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 17,
        text: 'What are aggregate functions in SQL?',
        options: [
            { id: 'b', text: 'Functions like COUNT, SUM, AVG that return a single value' },
            { id: 'a', text: 'Functions to create tables' },
            { id: 'c', text: 'Functions to join tables' },
            { id: 'd', text: 'Functions to sort data' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 18,
        text: 'What is a subquery?',
        options: [
            { id: 'b', text: 'A query nested within another query' },
            { id: 'a', text: 'A query to create a table' },
            { id: 'c', text: 'A query to drop a table' },
            { id: 'd', text: 'A query to grant permissions' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 19,
        text: 'What is the difference between the WHERE and HAVING clauses?',
        options: [
            { id: 'b', text: 'WHERE filters rows; HAVING filters groups' },
            { id: 'c', text: 'WHERE is used in SELECT; HAVING is used in INSERT' },
            { id: 'a', text: 'WHERE filters groups; HAVING filters rows' },
            { id: 'd', text: 'WHERE sorts data; HAVING joins tables' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 20,
        text: 'What are indexes, and why are they used?',
        options: [
            { id: 'a', text: 'Objects to slow down queries' },
            { id: 'c', text: 'Objects to define table structure' },
            { id: 'b', text: 'Objects to speed up data retrieval' },
            { id: 'd', text: 'Objects to join tables' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 21,
        text: 'What is the difference between DELETE and TRUNCATE commands?',
        options: [
            { id: 'b', text: 'DELETE removes rows with logging; TRUNCATE removes all rows without logging' },
            { id: 'a', text: 'DELETE removes all rows; TRUNCATE removes specific rows' },
            { id: 'c', text: 'DELETE is faster; TRUNCATE is slower' },
            { id: 'd', text: 'DELETE creates indexes; TRUNCATE drops them' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 22,
        text: 'What is the purpose of the SQL ORDER BY clause?',
        options: [
            { id: 'a', text: 'Groups data' },
            { id: 'b', text: 'Sorts the result set' },
            { id: 'c', text: 'Filters rows' },
            { id: 'd', text: 'Joins tables' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 23,
        text: 'What are the differences between SQL and NoSQL databases?',
        options: [
            { id: 'a', text: 'SQL uses flexible schemas; NoSQL uses fixed schemas' },
            { id: 'b', text: 'SQL uses structured tables and ACID; NoSQL is schema-less and scalable' },
            { id: 'c', text: 'SQL is for analytics; NoSQL is for transactions' },
            { id: 'd', text: 'SQL is deprecated; NoSQL is modern' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 24,
        text: 'What is a table in SQL?',
        options: [
            { id: 'a', text: 'A virtual view of data' },
            { id: 'b', text: 'A structured collection of rows and columns' },
            { id: 'c', text: 'A stored procedure' },
            { id: 'd', text: 'An index for queries' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 25,
        text: 'What are the types of constraints in SQL?',
        options: [
            { id: 'a', text: 'SELECT, INSERT, UPDATE, DELETE' },
            { id: 'b', text: 'NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK, DEFAULT' },
            { id: 'c', text: 'INNER JOIN, LEFT JOIN, RIGHT JOIN' },
            { id: 'd', text: 'COUNT, SUM, AVG, MIN, MAX' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 26,
        text: 'What is a cursor in SQL?',
        options: [
            { id: 'a', text: 'A tool to create tables' },
            { id: 'b', text: 'A database object to traverse rows one at a time' },
            { id: 'c', text: 'A query to join tables' },
            { id: 'd', text: 'A constraint for data integrity' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 27,
        text: 'What is a trigger in SQL?',
        options: [
            { id: 'a', text: 'A query to retrieve data' },
            { id: 'b', text: 'SQL statements that execute on table events' },
            { id: 'c', text: 'A virtual table' },
            { id: 'd', text: 'An index for performance' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 28,
        text: 'What is the purpose of the SQL SELECT statement?',
        options: [
            { id: 'a', text: 'Deletes data from tables' },
            { id: 'b', text: 'Retrieves data from tables' },
            { id: 'c', text: 'Creates new tables' },
            { id: 'd', text: 'Grants permissions' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 29,
        text: 'What are NULL values in SQL?',
        options: [
            { id: 'a', text: 'Zero values' },
            { id: 'c', text: 'Empty strings' },
            { id: 'b', text: 'Missing or unknown values' },
            { id: 'd', text: 'Default values' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 30,
        text: 'What is a stored procedure?',
        options: [
            { id: 'a', text: 'A virtual table' },
            { id: 'c', text: 'An index for queries' },
            { id: 'b', text: 'A precompiled set of SQL statements' },
            { id: 'd', text: 'A constraint for data' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 31,
        text: 'What is the difference between DDL and DML commands?',
        options: [
            { id: 'a', text: 'DDL manipulates data; DML defines structure' },
            { id: 'b', text: 'DDL defines structure; DML manipulates data' },
            { id: 'c', text: 'DDL joins tables; DML sorts data' },
            { id: 'd', text: 'DDL is for views; DML is for indexes' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 32,
        text: 'What is the purpose of the ALTER command in SQL?',
        options: [
            { id: 'b', text: 'Modifies the structure of database objects' },
            { id: 'c', text: 'Deletes rows' },
            { id: 'a', text: 'Retrieves data' },
            { id: 'd', text: 'Grants permissions' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 33,
        text: 'What is a composite primary key?',
        options: [
            { id: 'a', text: 'A single column primary key' },
            { id: 'b', text: 'Two or more columns uniquely identifying a record' },
            { id: 'c', text: 'A foreign key linking tables' },
            { id: 'd', text: 'A default value for a column' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 34,
        text: 'How is data integrity maintained in SQL databases?',
        options: [
            { id: 'a', text: 'Using SELECT and ORDER BY' },
            { id: 'b', text: 'Using constraints, transactions, triggers, normalization' },
            { id: 'c', text: 'Using views and cursors' },
            { id: 'd', text: 'Using indexes and joins' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 35,
        text: 'What are the advantages of using stored procedures?',
        options: [
            { id: 'b', text: 'Improved performance, reduced traffic, enhanced security' },
            { id: 'a', text: 'Slower performance, increased network traffic' },
            { id: 'c', text: 'Creates virtual tables' },
            { id: 'd', text: 'Removes constraints' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 36,
        text: 'What is a UNION operation, and how is it used?',
        options: [
            { id: 'b', text: 'Combines result sets, removes duplicates' },
            { id: 'a', text: 'Joins tables side by side' },
            { id: 'c', text: 'Filters rows in a table' },
            { id: 'd', text: 'Sorts data in ascending order' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 37,
        text: 'What is the difference between UNION and UNION ALL?',
        options: [
            { id: 'b', text: 'UNION removes duplicates; UNION ALL includes them' },
            { id: 'a', text: 'UNION includes duplicates; UNION ALL removes them' },
            { id: 'c', text: 'UNION is faster; UNION ALL is slower' },
            { id: 'd', text: 'UNION joins tables; UNION ALL creates views' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 38,
        text: 'How does the CASE statement work in SQL?',
        options: [
            { id: 'a', text: 'Joins multiple tables' },
            { id: 'c', text: 'Creates indexes' },
            { id: 'b', text: 'Adds conditional logic in queries' },
            { id: 'd', text: 'Sorts data' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 39,
        text: 'What are scalar functions in SQL?',
        options: [
            { id: 'a', text: 'Functions to join tables' },
            { id: 'c', text: 'Functions to group data' },
            { id: 'b', text: 'Functions returning a single value, e.g., LEN(), ROUND()' },
            { id: 'd', text: 'Functions to create views' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 40,
        text: 'What is the purpose of the COALESCE function?',
        options: [
            { id: 'a', text: 'Joins tables' },
            { id: 'c', text: 'Sorts data' },
            { id: 'b', text: 'Returns the first non-NULL value from a list' },
            { id: 'd', text: 'Groups rows' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 41,
        text: 'What are the differences between SQL’s COUNT() and SUM() functions?',
        options: [
            { id: 'b', text: 'COUNT counts rows; SUM adds numeric values' },
            { id: 'a', text: 'COUNT sums values; SUM counts rows' },
            { id: 'c', text: 'COUNT is for text; SUM is for numbers' },
            { id: 'd', text: 'COUNT creates indexes; SUM joins tables' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 42,
        text: 'What is the difference between the NVL and NVL2 functions?',
        options: [
            { id: 'b', text: 'NVL replaces NULL with a value; NVL2 uses two outputs based on NULL' },
            { id: 'a', text: 'NVL returns non-NULL; NVL2 returns NULL' },
            { id: 'c', text: 'NVL is for numbers; NVL2 is for text' },
            { id: 'd', text: 'NVL groups data; NVL2 sorts data' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 43,
        text: 'How does the RANK() function differ from DENSE_RANK()?',
        options: [
            { id: 'a', text: 'RANK has no gaps; DENSE_RANK has gaps' },
            { id: 'b', text: 'RANK has gaps after duplicates; DENSE_RANK has no gaps' },
            { id: 'c', text: 'RANK is for text; DENSE_RANK is for numbers' },
            { id: 'd', text: 'RANK joins tables; DENSE_RANK sorts data' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 44,
        text: 'What is the difference between ROW_NUMBER() and RANK()?',
        options: [
            { id: 'a', text: 'ROW_NUMBER assigns same number for ties; RANK is unique' },
            { id: 'b', text: 'ROW_NUMBER assigns unique numbers; RANK assigns same for ties' },
            { id: 'c', text: 'ROW_NUMBER sorts data; RANK groups data' },
            { id: 'd', text: 'ROW_NUMBER creates views; RANK joins tables' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 45,
        text: 'What are common table expressions (CTEs) in SQL?',
        options: [
            { id: 'a', text: 'Permanent tables for data storage' },
            { id: 'c', text: 'Indexes for faster queries' },
            { id: 'b', text: 'Temporary result sets for query readability' },
            { id: 'd', text: 'Triggers for automation' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 46,
        text: 'What are window functions, and how are they used?',
        options: [
            { id: 'a', text: 'Functions to create tables' },
            { id: 'b', text: 'Functions for calculations over a set of rows' },
            { id: 'c', text: 'Functions to join tables' },
            { id: 'd', text: 'Functions to sort data' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 47,
        text: 'What is the difference between an index and a key in SQL?',
        options: [
            { id: 'a', text: 'Index enforces uniqueness; key speeds up queries' },
            { id: 'b', text: 'Index speeds up queries; key enforces uniqueness or relationships' },
            { id: 'c', text: 'Index joins tables; key creates views' },
            { id: 'd', text: 'Index is for text; key is for numbers' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 48,
        text: 'How does indexing improve query performance?',
        options: [
            { id: 'a', text: 'Increases storage usage' },
            { id: 'c', text: 'Joins tables efficiently' },
            { id: 'b', text: 'Allows faster data retrieval with less I/O' },
            { id: 'd', text: 'Sorts data automatically' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 49,
        text: 'What are the trade-offs of using indexes in SQL databases?',
        options: [
            { id: 'a', text: 'Faster writes, less storage' },
            { id: 'c', text: 'Joins tables, no storage impact' },
            { id: 'b', text: 'Faster reads, more storage, slower writes' },
            { id: 'd', text: 'Creates views, slows queries' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 50,
        text: 'What is the difference between clustered and non-clustered indexes?',
        options: [
            { id: 'b', text: 'Clustered sorts data physically, one per table; non-clustered uses pointers, multiple allowed' },
            { id: 'a', text: 'Clustered is logical; non-clustered is physical' },
            { id: 'c', text: 'Clustered is for text; non-clustered is for numbers' },
            { id: 'd', text: 'Clustered joins tables; non-clustered creates views' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 51,
        text: 'What are temporary tables, and how are they used?',
        options: [
            { id: 'a', text: 'Permanent tables for data storage' },
            { id: 'c', text: 'Indexes for faster queries' },
            { id: 'b', text: 'Session-scoped tables for intermediate results' },
            { id: 'd', text: 'Triggers for automation' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 52,
        text: 'What is a materialized view, and how does it differ from a standard view?',
        options: [
            { id: 'b', text: 'Materialized view stores data; standard view is virtual' },
            { id: 'a', text: 'Materialized view is virtual; standard view stores data' },
            { id: 'c', text: 'Materialized view joins tables; standard view sorts data' },
            { id: 'd', text: 'Materialized view is for text; standard view is for numbers' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 53,
        text: 'What is a sequence in SQL?',
        options: [
            { id: 'b', text: 'A database object generating unique numbers' },
            { id: 'a', text: 'A virtual table' },
            { id: 'c', text: 'A trigger for automation' },
            { id: 'd', text: 'An index for queries' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 54,
        text: 'What are the advantages of using sequences over identity columns?',
        options: [
            { id: 'b', text: 'Greater flexibility, dynamic adjustment, cross-table consistency' },
            { id: 'a', text: 'Slower performance, less flexibility' },
            { id: 'c', text: 'Joins tables efficiently' },
            { id: 'd', text: 'Creates virtual tables' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 55,
        text: 'How do constraints improve database integrity?',
        options: [
            { id: 'a', text: 'Speed up queries' },
            { id: 'b', text: 'Enforce rules for valid and consistent data' },
            { id: 'c', text: 'Join tables' },
            { id: 'd', text: 'Sort data' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 56,
        text: 'What is the difference between a local and a global temporary table?',
        options: [
            { id: 'a', text: 'Local is global-scoped; global is session-scoped' },
            { id: 'b', text: 'Local is session-scoped; global is visible to all sessions' },
            { id: 'c', text: 'Local is for text; global is for numbers' },
            { id: 'd', text: 'Local joins tables; global creates views' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 57,
        text: 'What is the purpose of the SQL MERGE statement?',
        options: [
            { id: 'a', text: 'Sorts data' },
            { id: 'b', text: 'Performs INSERT, UPDATE, DELETE in one statement' },
            { id: 'c', text: 'Creates indexes' },
            { id: 'd', text: 'Joins tables' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 58,
        text: 'How can you handle duplicates in a query without using DISTINCT?',
        options: [
            { id: 'a', text: 'Use ORDER BY' },
            { id: 'b', text: 'Use GROUP BY or ROW_NUMBER()' },
            { id: 'c', text: 'Use JOIN' },
            { id: 'd', text: 'Use CREATE TABLE' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 59,
        text: 'What is a correlated subquery?',
        options: [
            { id: 'a', text: 'A query that creates a table' },
            { id: 'b', text: 'A subquery referencing outer query columns' },
            { id: 'c', text: 'A query that joins tables' },
            { id: 'd', text: 'A query that sorts data' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 60,
        text: 'What are partitioned tables, and when should we use them?',
        options: [
            { id: 'a', text: 'Tables for sorting data' },
            { id: 'c', text: 'Tables for joining data' },
            { id: 'b', text: 'Tables split by column values for performance' },
            { id: 'd', text: 'Tables for creating views' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 61,
        text: 'What are the ACID properties of a transaction?',
        options: [
            { id: 'a', text: 'Atomicity, Consistency, Isolation, Durability' },
            { id: 'b', text: 'Accuracy, Completeness, Integrity, Dependability' },
            { id: 'c', text: 'Availability, Consistency, Isolation, Dependability' },
            { id: 'd', text: 'Atomicity, Completeness, Integration, Durability' }
        ],
        correctAnswer: 'a'
    },
    {
        id: 62,
        text: 'What are the differences between isolation levels in SQL?',
        options: [
            { id: 'a', text: 'All levels prevent dirty reads' },
            { id: 'b', text: 'Read Uncommitted allows dirty reads; Serializable prevents all issues' },
            { id: 'c', text: 'All levels allow phantom reads' },
            { id: 'd', text: 'Isolation levels only affect joins' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 63,
        text: 'What is the purpose of the WITH (NOLOCK) hint in SQL Server?',
        options: [
            { id: 'a', text: 'Locks the table for updates' },
            { id: 'b', text: 'Allows reading uncommitted data' },
            { id: 'c', text: 'Sorts data in ascending order' },
            { id: 'd', text: 'Creates an index' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 64,
        text: 'How do you handle deadlocks in SQL databases?',
        options: [
            { id: 'a', text: 'Increase query complexity' },
            { id: 'b', text: 'Retry, reduce lock contention, adjust isolation levels' },
            { id: 'c', text: 'Use SELECT * always' },
            { id: 'd', text: 'Drop all indexes' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 65,
        text: 'What is a database snapshot, and how is it used?',
        options: [
            { id: 'a', text: 'A dynamic table for updates' },
            { id: 'b', text: 'A read-only static view for reporting or recovery' },
            { id: 'c', text: 'An index for queries' },
            { id: 'd', text: 'A trigger for automation' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 66,
        text: 'What are the differences between OLTP and OLAP systems?',
        options: [
            { id: 'b', text: 'OLTP is transaction-focused, normalized; OLAP is analysis-focused, denormalized' },
            { id: 'a', text: 'OLTP is for analysis; OLAP is for transactions' },
            { id: 'c', text: 'OLTP is for joins; OLAP is for sorting' },
            { id: 'd', text: 'OLTP is schema-less; OLAP is structured' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 67,
        text: 'What is a live lock, and how does it differ from a deadlock?',
        options: [
            { id: 'b', text: 'Live lock works but makes no progress; deadlock waits indefinitely' },
            { id: 'c', text: 'Live lock joins tables; deadlock sorts data' },
            { id: 'a', text: 'Live lock waits indefinitely; deadlock works continuously' },
            { id: 'd', text: 'Live lock is for reads; deadlock is for writes' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 68,
        text: 'What is the purpose of the SQL EXCEPT operator?',
        options: [
            { id: 'a', text: 'Joins tables' },
            { id: 'b', text: 'Returns rows in first query not in second' },
            { id: 'c', text: 'Sorts data' },
            { id: 'd', text: 'Groups rows' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 69,
        text: 'How do you implement dynamic SQL, and what are its advantages and risks?',
        options: [
            { id: 'a', text: 'Static queries, no risks' },
            { id: 'b', text: 'Flexible queries with sp_executesql, risks SQL injection' },
            { id: 'c', text: 'Joins tables dynamically' },
            { id: 'd', text: 'Creates views automatically' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 70,
        text: 'What is the difference between horizontal and vertical partitioning?',
        options: [
            { id: 'c', text: 'Horizontal joins tables; vertical sorts data' },
            { id: 'a', text: 'Horizontal splits columns; vertical splits rows' },
            { id: 'b', text: 'Horizontal splits rows; vertical splits columns' },
            { id: 'd', text: 'Horizontal is for text; vertical is for numbers' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 71,
        text: 'What are the considerations for indexing very large tables?',
        options: [
            { id: 'b', text: 'Index queried columns, use appropriate types, maintain regularly' },
            { id: 'a', text: 'Index all columns' },
            { id: 'c', text: 'Avoid all indexes' },
            { id: 'd', text: 'Index only text columns' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 72,
        text: 'What is the difference between database sharding and partitioning?',
        options: [
            { id: 'a', text: 'Sharding is for single tables; partitioning is for multiple databases' },
            { id: 'b', text: 'Sharding splits databases across servers; partitioning splits tables in one database' },
            { id: 'c', text: 'Sharding joins tables; partitioning sorts data' },
            { id: 'd', text: 'Sharding is for text; partitioning is for numbers' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 73,
        text: 'What are best practices for writing optimized SQL queries?',
        options: [
            { id: 'a', text: 'Use SELECT * always' },
            { id: 'b', text: 'Avoid SELECT *, filter early, use indexes, tune with execution plans' },
            { id: 'c', text: 'Use cursors for all queries' },
            { id: 'd', text: 'Avoid joins completely' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 74,
        text: 'How can you monitor query performance in production?',
        options: [
            { id: 'a', text: 'Use SELECT * only' },
            { id: 'b', text: 'Analyze execution plans, track wait stats, use monitoring tools' },
            { id: 'c', text: 'Drop all indexes' },
            { id: 'd', text: 'Use cursors for monitoring' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 75,
        text: 'What are the trade-offs of using indexing vs. denormalization?',
        options: [
            { id: 'b', text: 'Indexing speeds reads, slows writes; denormalization speeds reads, adds redundancy' },
            { id: 'a', text: 'Indexing slows reads; denormalization speeds writes' },
            { id: 'c', text: 'Indexing joins tables; denormalization sorts data' },
            { id: 'd', text: 'Indexing is for text; denormalization is for numbers' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 76,
        text: 'How does SQL handle recursive queries?',
        options: [
            { id: 'a', text: 'Using ORDER BY' },
            { id: 'c', text: 'Using JOIN' },
            { id: 'b', text: 'Using Common Table Expressions (CTEs)' },
            { id: 'd', text: 'Using CREATE TABLE' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 77,
        text: 'What are the differences between transactional and analytical queries?',
        options: [
            { id: 'b', text: 'Transactional is write-heavy; analytical is read-heavy' },
            { id: 'a', text: 'Transactional is read-heavy; analytical is write-heavy' },
            { id: 'c', text: 'Transactional joins tables; analytical sorts data' },
            { id: 'd', text: 'Transactional creates views; analytical indexes data' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 78,
        text: 'How can you ensure data consistency across distributed databases?',
        options: [
            { id: 'a', text: 'Use SELECT * only' },
            { id: 'b', text: 'Use distributed transactions, replication, versioning' },
            { id: 'c', text: 'Drop all indexes' },
            { id: 'd', text: 'Use cursors for consistency' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 79,
        text: 'What is the purpose of the SQL PIVOT operator?',
        options: [
            { id: 'a', text: 'Joins tables' },
            { id: 'b', text: 'Converts row values into columns' },
            { id: 'c', text: 'Sorts data' },
            { id: 'd', text: 'Groups rows' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 80,
        text: 'What is a bitmap index, and how does it differ from a B-tree index?',
        options: [
            { id: 'a', text: 'Bitmap is for high-cardinality; B-tree is for low-cardinality' },
            { id: 'b', text: 'Bitmap is for low-cardinality; B-tree is for high-cardinality and ranges' },
            { id: 'c', text: 'Bitmap joins tables; B-tree sorts data' },
            { id: 'd', text: 'Bitmap creates views; B-tree indexes text' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 81,
        text: 'Write a query to find the second-highest salary of an employee in a table.',
        options: [
            { id: 'a', text: 'SELECT MAX(Salary) FROM Employee' },
            { id: 'b', text: 'SELECT MAX(Salary) FROM Employee WHERE Salary < (SELECT MAX(Salary) FROM Employee)' },
            { id: 'c', text: 'SELECT MIN(Salary) FROM Employee' },
            { id: 'd', text: 'SELECT Salary FROM Employee ORDER BY Salary DESC LIMIT 2' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 82,
        text: 'Write a query to retrieve employees who earn more than the average salary.',
        options: [
            { id: 'a', text: 'SELECT * FROM Employee WHERE Salary > (SELECT SUM(Salary) FROM Employee)' },
            { id: 'b', text: 'SELECT * FROM Employee WHERE Salary > (SELECT AVG(Salary) FROM Employee)' },
            { id: 'c', text: 'SELECT * FROM Employee ORDER BY Salary DESC' },
            { id: 'd', text: 'SELECT * FROM Employee WHERE Salary = (SELECT MAX(Salary) FROM Employee)' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 83,
        text: 'Write a query to fetch the duplicate values from a column in a table.',
        options: [
            { id: 'b', text: 'SELECT ColumnName, COUNT(*) FROM TableName GROUP BY ColumnName HAVING COUNT(*) > 1' },
            { id: 'a', text: 'SELECT ColumnName FROM TableName GROUP BY ColumnName' },
            { id: 'c', text: 'SELECT DISTINCT ColumnName FROM TableName' },
            { id: 'd', text: 'SELECT ColumnName FROM TableName ORDER BY ColumnName' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 84,
        text: 'Write a query to find the employees who joined in the last 30 days.',
        options: [
            { id: 'b', text: 'SELECT * FROM Employee WHERE JoiningDate > DATE_SUB(CURDATE(), INTERVAL 30 DAY)' },
            { id: 'a', text: 'SELECT * FROM Employee WHERE JoiningDate > CURDATE()' },
            { id: 'c', text: 'SELECT * FROM Employee ORDER BY JoiningDate DESC' },
            { id: 'd', text: 'SELECT * FROM Employee WHERE JoiningDate = CURDATE()' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 85,
        text: 'Write a query to fetch top 3 earning employees.',
        options: [
            { id: 'a', text: 'SELECT * FROM Employee WHERE Salary > (SELECT AVG(Salary) FROM Employee)' },
            { id: 'b', text: 'SELECT * FROM Employee ORDER BY Salary DESC LIMIT 3' },
            { id: 'c', text: 'SELECT * FROM Employee GROUP BY Salary' },
            { id: 'd', text: 'SELECT * FROM Employee WHERE Salary = (SELECT MAX(Salary) FROM Employee)' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 86,
        text: 'Write a query to delete duplicate rows in a table without using the ROWID keyword.',
        options: [
            { id: 'a', text: 'DELETE FROM Employee WHERE EmployeeID = (SELECT MAX(EmployeeID) FROM Employee)' },
            { id: 'b', text: 'DELETE FROM Employee WHERE EmployeeID NOT IN (SELECT MIN(EmployeeID) FROM Employee GROUP BY Column1, Column2)' },
            { id: 'c', text: 'DELETE FROM Employee ORDER BY EmployeeID' },
            { id: 'd', text: 'DELETE FROM Employee GROUP BY EmployeeID' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 87,
        text: 'Write a query to fetch common records from two tables.',
        options: [
            { id: 'a', text: 'SELECT * FROM TableA LEFT JOIN TableB ON TableA.ID = TableB.ID' },
            { id: 'b', text: 'SELECT * FROM TableA INNER JOIN TableB ON TableA.ID = TableB.ID' },
            { id: 'c', text: 'SELECT * FROM TableA UNION TableB' },
            { id: 'd', text: 'SELECT * FROM TableA WHERE ID IN (SELECT ID FROM TableB)' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 88,
        text: 'Write a query to fetch employees whose names start and end with ‘A’.',
        options: [
            { id: 'a', text: 'SELECT * FROM Employee WHERE Name LIKE \'A%\' OR Name LIKE \'%A\'' },
            { id: 'b', text: 'SELECT * FROM Employee WHERE Name LIKE \'A%\' AND Name LIKE \'%A\'' },
            { id: 'c', text: 'SELECT * FROM Employee WHERE Name = \'A\'' },
            { id: 'd', text: 'SELECT * FROM Employee WHERE Name LIKE \'A*A\'' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 89,
        text: 'Write a query to display all departments along with the number of employees in each.',
        options: [
            { id: 'b', text: 'SELECT DepartmentID, COUNT(*) AS EmployeeCount FROM Employee GROUP BY DepartmentID' },
            { id: 'a', text: 'SELECT DepartmentID FROM Employee GROUP BY DepartmentID' },
            { id: 'c', text: 'SELECT DepartmentID FROM Employee ORDER BY DepartmentID' },
            { id: 'd', text: 'SELECT DepartmentID, SUM(*) FROM Employee GROUP BY DepartmentID' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 90,
        text: 'Write a query to find employees who do not have managers.',
        options: [
            { id: 'a', text: 'SELECT * FROM Employee WHERE ManagerID = 0' },
            { id: 'b', text: 'SELECT * FROM Employee WHERE ManagerID IS NULL' },
            { id: 'c', text: 'SELECT * FROM Employee WHERE ManagerID = \'\'' },
            { id: 'd', text: 'SELECT * FROM Employee WHERE ManagerID IS NOT NULL' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 91,
        text: 'Write a query to fetch the 3rd and 4th highest salaries.',
        options: [
            { id: 'a', text: 'SELECT Salary FROM Employee ORDER BY Salary DESC LIMIT 3, 4' },
            { id: 'b', text: 'WITH SalaryRank AS (SELECT Salary, RANK() OVER (ORDER BY Salary DESC) AS Rank FROM Employee) SELECT Salary FROM SalaryRank WHERE Rank IN (3, 4)' },
            { id: 'c', text: 'SELECT Salary FROM Employee WHERE Salary IN (SELECT TOP 3 Salary FROM Employee)' },
            { id: 'd', text: 'SELECT Salary FROM Employee GROUP BY Salary HAVING COUNT(*) = 3' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 92,
        text: 'Write a query to transpose rows into columns.',
        options: [
            { id: 'b', text: 'SELECT MAX(CASE WHEN ColumnName = \'Condition1\' THEN Value END) AS Column1, MAX(CASE WHEN ColumnName = \'Condition2\' THEN Value END) AS Column2 FROM TableName' },
            { id: 'a', text: 'SELECT * FROM TableName GROUP BY ColumnName' },
            { id: 'c', text: 'SELECT * FROM TableName ORDER BY ColumnName' },
            { id: 'd', text: 'SELECT ColumnName FROM TableName PIVOT (SUM(Value) FOR ColumnName)' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 93,
        text: 'Write a query to fetch records updated within the last hour.',
        options: [
            { id: 'a', text: 'SELECT * FROM TableName WHERE UpdatedAt >= NOW()' },
            { id: 'b', text: 'SELECT * FROM TableName WHERE UpdatedAt >= NOW() - INTERVAL 1 HOUR' },
            { id: 'c', text: 'SELECT * FROM TableName ORDER BY UpdatedAt DESC' },
            { id: 'd', text: 'SELECT * FROM TableName WHERE UpdatedAt = NOW()' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 94,
        text: 'Write a query to list employees in departments that have fewer than 5 employees.',
        options: [
            { id: 'a', text: 'SELECT * FROM Employee WHERE DepartmentID < 5' },
            { id: 'b', text: 'SELECT * FROM Employee WHERE DepartmentID IN (SELECT DepartmentID FROM Employee GROUP BY DepartmentID HAVING COUNT(*) < 5)' },
            { id: 'c', text: 'SELECT * FROM Employee GROUP BY DepartmentID HAVING COUNT(*) > 5' },
            { id: 'd', text: 'SELECT * FROM Employee ORDER BY DepartmentID' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 95,
        text: 'Write a query to check if a table contains any records.',
        options: [
            { id: 'a', text: 'SELECT COUNT(*) FROM TableName' },
            { id: 'b', text: 'SELECT CASE WHEN EXISTS (SELECT * FROM TableName) THEN \'Has Records\' ELSE \'No Records\' END AS Status' },
            { id: 'c', text: 'SELECT * FROM TableName WHERE COUNT(*) > 0' },
            { id: 'd', text: 'SELECT TOP 1 * FROM TableName' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 96,
        text: 'Write a query to find employees whose salaries are higher than their managers.',
        options: [
            { id: 'a', text: 'SELECT * FROM Employee WHERE Salary > ManagerID' },
            { id: 'b', text: 'SELECT e.EmployeeID, e.Salary FROM Employee e JOIN Employee m ON e.ManagerID = m.EmployeeID WHERE e.Salary > m.Salary' },
            { id: 'c', text: 'SELECT * FROM Employee WHERE ManagerID IS NOT NULL' },
            { id: 'd', text: 'SELECT e.Salary FROM Employee e ORDER BY Salary DESC' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 97,
        text: 'Write a query to fetch alternating rows from a table.',
        options: [
            { id: 'a', text: 'SELECT * FROM Employee WHERE ROW_NUMBER() % 2 = 0' },
            { id: 'b', text: 'WITH RowNumbered AS (SELECT *, ROW_NUMBER() OVER (ORDER BY (SELECT NULL)) AS RowNum FROM Employee) SELECT * FROM RowNumbered WHERE RowNum % 2 = 0' },
            { id: 'c', text: 'SELECT * FROM Employee ORDER BY EmployeeID % 2' },
            { id: 'd', text: 'SELECT * FROM Employee GROUP BY EmployeeID HAVING EmployeeID % 2 = 0' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 98,
        text: 'Write a query to find departments with the highest average salary.',
        options: [
            { id: 'a', text: 'SELECT DepartmentID FROM Employee ORDER BY Salary DESC LIMIT 1' },
            { id: 'b', text: 'SELECT DepartmentID FROM Employee GROUP BY DepartmentID ORDER BY AVG(Salary) DESC LIMIT 1' },
            { id: 'c', text: 'SELECT DepartmentID, MAX(Salary) FROM Employee GROUP BY DepartmentID' },
            { id: 'd', text: 'SELECT DepartmentID FROM Employee WHERE Salary = (SELECT MAX(Salary) FROM Employee)' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 99,
        text: 'Write a query to fetch the nth record from a table.',
        options: [
            { id: 'b', text: 'WITH OrderedEmployees AS (SELECT *, ROW_NUMBER() OVER (ORDER BY (SELECT NULL)) AS RowNum FROM Employee) SELECT * FROM OrderedEmployees WHERE RowNum = n' },
            { id: 'a', text: 'SELECT * FROM Employee LIMIT n' },
            { id: 'c', text: 'SELECT * FROM Employee WHERE ROW_NUMBER() = n' },
            { id: 'd', text: 'SELECT * FROM Employee ORDER BY EmployeeID LIMIT n' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 100,
        text: 'Write a query to find employees hired in the same month of any year.',
        options: [
            { id: 'a', text: 'SELECT * FROM Employee WHERE JoiningDate = CURDATE()' },
            { id: 'b', text: 'SELECT * FROM Employee WHERE MONTH(JoiningDate) = MONTH(CURDATE())' },
            { id: 'c', text: 'SELECT * FROM Employee WHERE YEAR(JoiningDate) = YEAR(CURDATE())' },
            { id: 'd', text: 'SELECT * FROM Employee ORDER BY JoiningDate' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 101,
        text: 'What is Pattern Matching in SQL?',
        options: [
            { id: 'a', text: 'A method to join tables' },
            { id: 'b', text: 'Searching data using wildcards like % and _ with LIKE' },
            { id: 'c', text: 'Sorting data in ascending order' },
            { id: 'd', text: 'Grouping rows by a column' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 102,
        text: 'How to create empty tables with the same structure as another table?',
        options: [
            { id: 'a', text: 'CREATE TABLE Students_copy AS SELECT * FROM Students' },
            { id: 'b', text: 'SELECT * INTO Students_copy FROM Students WHERE 1 = 2' },
            { id: 'c', text: 'COPY TABLE Students TO Students_copy' },
            { id: 'd', text: 'CREATE TABLE Students_copy LIKE Students' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 103,
        text: 'What is a Recursive Stored Procedure?',
        options: [
            { id: 'a', text: 'A procedure that creates tables' },
            { id: 'b', text: 'A stored procedure that calls itself until a condition is met' },
            { id: 'c', text: 'A procedure that joins tables' },
            { id: 'd', text: 'A procedure that sorts data' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 104,
        text: 'What is a Stored Procedure?',
        options: [
            { id: 'a', text: 'A virtual table based on a query' },
            { id: 'b', text: 'A subroutine stored in the database for execution' },
            { id: 'c', text: 'An index for faster queries' },
            { id: 'd', text: 'A constraint for data integrity' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 105,
        text: 'What is Collation? What are the different types of Collation Sensitivity?',
        options: [
            { id: 'b', text: 'Rules for sorting/comparing data: case, accent, kana, width sensitivity' },
            { id: 'a', text: 'A method to join tables' },
            { id: 'c', text: 'A way to group data' },
            { id: 'd', text: 'A tool for indexing' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 106,
        text: 'What are the differences between OLTP and OLAP?',
        options: [
            { id: 'b', text: 'OLTP handles transactions, concurrency; OLAP handles complex queries, analytics' },
            { id: 'a', text: 'OLTP is for analysis; OLAP is for transactions' },
            { id: 'c', text: 'OLTP is schema-less; OLAP is structured' },
            { id: 'd', text: 'OLTP is for joins; OLAP is for sorting' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 107,
        text: 'What is OLTP?',
        options: [
            { id: 'a', text: 'A system for complex analytical queries' },
            { id: 'c', text: 'A system for indexing data' },
            { id: 'b', text: 'A system for transaction-oriented apps with concurrency' },
            { id: 'd', text: 'A system for creating views' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 108,
        text: 'What is a User-defined function? What are its various types?',
        options: [
            { id: 'b', text: 'User-written functions: scalar (single value) and table-valued (returns table)' },
            { id: 'a', text: 'A function to create tables' },
            { id: 'c', text: 'A function to join tables' },
            { id: 'd', text: 'A function to sort data' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 109,
        text: 'What is a UNIQUE constraint?',
        options: [
            { id: 'a', text: 'Ensures a column allows NULL values' },
            { id: 'b', text: 'Ensures all values in a column are unique' },
            { id: 'c', text: 'Links tables together' },
            { id: 'd', text: 'Sets a default value' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 110,
        text: 'What is a Query?',
        options: [
            { id: 'a', text: 'A command to create a table' },
            { id: 'b', text: 'A request for data from a database' },
            { id: 'c', text: 'A tool for indexing' },
            { id: 'd', text: 'A constraint for data' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 111,
        text: 'What is Data Integrity?',
        options: [
            { id: 'a', text: 'Sorting data in order' },
            { id: 'b', text: 'Accuracy and consistency of data using constraints' },
            { id: 'c', text: 'Joining tables' },
            { id: 'd', text: 'Creating views' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 112,
        text: 'What is the difference between Clustered and Non-clustered index?',
        options: [
            { id: 'b', text: 'Clustered orders data physically, one per table; non-clustered uses pointers' },
            { id: 'c', text: 'Clustered is for text; non-clustered is for numbers' },
            { id: 'a', text: 'Clustered is logical; non-clustered is physical' },
            { id: 'd', text: 'Clustered joins tables; non-clustered creates views' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 113,
        text: 'What is an Index? Explain its different types.',
        options: [
            { id: 'a', text: 'A tool to join tables' },
            { id: 'b', text: 'A structure for fast retrieval: unique, non-unique, clustered, non-clustered' },
            { id: 'c', text: 'A method to sort data' },
            { id: 'd', text: 'A constraint for default values' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 114,
        text: 'What is a Cross-Join?',
        options: [
            { id: 'a', text: 'Joins matching rows only' },
            { id: 'c', text: 'Joins a table to itself' },
            { id: 'b', text: 'Returns the Cartesian product of two tables' },
            { id: 'd', text: 'Sorts data from two tables' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 115,
        text: 'What is a Self-Join?',
        options: [
            { id: 'b', text: 'A table joined to itself using aliases' },
            { id: 'a', text: 'Joins two different tables' },
            { id: 'c', text: 'Combines result sets' },
            { id: 'd', text: 'Creates a virtual table' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 116,
        text: 'What is a Join? List its different types.',
        options: [
            { id: 'a', text: 'Sorts data: ASC, DESC' },
            { id: 'b', text: 'Combines rows: INNER, LEFT, RIGHT, FULL' },
            { id: 'c', text: 'Groups data: COUNT, SUM' },
            { id: 'd', text: 'Creates indexes: unique, non-unique' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 117,
        text: 'What is a Foreign Key?',
        options: [
            { id: 'a', text: 'A unique identifier for a table' },
            { id: 'b', text: 'A field referencing a primary key in another table' },
            { id: 'c', text: 'A default value for a column' },
            { id: 'd', text: 'An index for queries' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 118,
        text: 'What is a Subquery? What are its types?',
        options: [
            { id: 'a', text: 'A query to create tables' },
            { id: 'b', text: 'A query within a query: correlated, non-correlated' },
            { id: 'c', text: 'A query to sort data' },
            { id: 'd', text: 'A query to join tables' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 119,
        text: 'What is a Primary Key?',
        options: [
            { id: 'a', text: 'A column allowing duplicates' },
            { id: 'b', text: 'Uniquely identifies each row, one per table' },
            { id: 'c', text: 'Links to another table' },
            { id: 'd', text: 'Sets default values' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 120,
        text: 'What are Constraints in SQL?',
        options: [
            { id: 'a', text: 'Commands to sort data' },
            { id: 'b', text: 'Rules like NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY' },
            { id: 'c', text: 'Functions to group data' },
            { id: 'd', text: 'Indexes for queries' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 121,
        text: 'What are Tables and Fields?',
        options: [
            { id: 'a', text: 'Tables are indexes; fields are queries' },
            { id: 'b', text: 'Tables are data collections; fields are columns' },
            { id: 'c', text: 'Tables are views; fields are rows' },
            { id: 'd', text: 'Tables are constraints; fields are joins' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 122,
        text: 'What is the difference between SQL and MySQL?',
        options: [
            { id: 'a', text: 'SQL is a DBMS; MySQL is a language' },
            { id: 'b', text: 'SQL is a language; MySQL is a DBMS using SQL' },
            { id: 'c', text: 'SQL is for analytics; MySQL is for transactions' },
            { id: 'd', text: 'SQL is for indexing; MySQL is for joining' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 123,
        text: 'Which of the following are valid SQL constraints?',
        options: [
            { id: 'a', text: 'Not Null' },
            { id: 'b', text: 'Check' },
            { id: 'c', text: 'Unique' },
            { id: 'd', text: 'All of the above' }
        ],
        correctAnswer: 'd'
    },
    {
        id: 124,
        text: 'What is RDBMS? How is it different from DBMS?',
        options: [
            { id: 'a', text: 'RDBMS is non-relational; DBMS uses tables' },
            { id: 'b', text: 'RDBMS uses tables with relationships; DBMS may not' },
            { id: 'c', text: 'RDBMS is for analytics; DBMS is for transactions' },
            { id: 'd', text: 'RDBMS is for indexing; DBMS is for joining' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 125,
        text: 'What is DBMS?',
        options: [
            { id: 'a', text: 'A language for querying data' },
            { id: 'b', text: 'Software for managing databases' },
            { id: 'c', text: 'A tool for sorting data' },
            { id: 'd', text: 'A method for joining tables' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 126,
        text: 'SQL views are also known as?',
        options: [
            { id: 'a', text: 'Schema' },
            { id: 'b', text: 'Virtual Tables' },
            { id: 'c', text: 'Instance' },
            { id: 'd', text: 'None of the' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 127,
        text: 'What is the SELECT statement?',
        options: [
            { id: 'a', text: 'Deletes data from tables' },
            { id: 'b', text: 'Selects data from a database' },
            { id: 'c', text: 'Creates new tables' },
            { id: 'd', text: 'Grants permissions' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 128,
        text: 'What are some common clauses used with SELECT query in SQL?',
        options: [
            { id: 'b', text: 'WHERE, ORDER BY, GROUP BY, HAVING' },
            { id: 'a', text: 'CREATE, ALTER, DROP' },
            { id: 'c', text: 'INSERT, UPDATE, DELETE' },
            { id: 'd', text: 'GRANT, REVOKE, COMMIT' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 129,
        text: 'What are UNION, MINUS and INTERSECT commands?',
        options: [
            { id: 'a', text: 'Commands to create tables' },
            { id: 'b', text: 'Set operations: UNION combines, MINUS subtracts, INTERSECT finds common rows' },
            { id: 'c', text: 'Commands to sort data' },
            { id: 'd', text: 'Commands to join tables' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 130,
        text: 'What is Cursor? How to use a Cursor?',
        options: [
            { id: 'b', text: 'A pointer to traverse records: DECLARE, OPEN, FETCH, CLOSE, DEALLOCATE' },
            { id: 'a', text: 'A tool to create tables' },
            { id: 'c', text: 'A method to join tables' },
            { id: 'd', text: 'A constraint for data' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 131,
        text: 'What are Entities and Relationships?',
        options: [
            { id: 'a', text: 'Entities are queries; relationships are joins' },
            { id: 'b', text: 'Entities are objects; relationships are associations between them' },
            { id: 'c', text: 'Entities are indexes; relationships are constraints' },
            { id: 'd', text: 'Entities are views; relationships are sorts' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 132,
        text: 'List the different types of relationships in SQL.',
        options: [
            { id: 'b', text: 'One-to-One, One-to-Many, Many-to-Many, Self-Referencing' },
            { id: 'a', text: 'INNER, LEFT, RIGHT, FULL' },
            { id: 'c', text: 'COUNT, SUM, AVG, MAX' },
            { id: 'd', text: 'UNIQUE, NOT NULL, CHECK' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 133,
        text: 'What is an Alias in SQL?',
        options: [
            { id: 'a', text: 'A permanent table name' },
            { id: 'b', text: 'A temporary name for a table or column' },
            { id: 'c', text: 'A constraint for data' },
            { id: 'd', text: 'An index for queries' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 134,
        text: 'What is a View?',
        options: [
            { id: 'a', text: 'A physical table storing data' },
            { id: 'b', text: 'A virtual table based on an SQL query' },
            { id: 'c', text: 'A stored procedure' },
            { id: 'd', text: 'An index for performance' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 135,
        text: 'What is Normalization?',
        options: [
            { id: 'a', text: 'Adding redundancy for performance' },
            { id: 'b', text: 'Organizing data to reduce redundancy and improve integrity' },
            { id: 'c', text: 'Creating virtual tables' },
            { id: 'd', text: 'Joining multiple tables' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 136,
        text: 'What is Denormalization?',
        options: [
            { id: 'a', text: 'Reducing redundancy in tables' },
            { id: 'b', text: 'Adding redundancy to improve performance' },
            { id: 'c', text: 'Creating indexes' },
            { id: 'd', text: 'Sorting data' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 137,
        text: 'What are the various forms of Normalization?',
        options: [
            { id: 'c', text: 'COUNT, SUM, AVG, MAX' },
            { id: 'a', text: 'INNER, LEFT, RIGHT, FULL' },
            { id: 'b', text: '1NF, 2NF, 3NF, BCNF' },
            { id: 'd', text: 'UNIQUE, NOT NULL, CHECK' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 138,
        text: 'What are the TRUNCATE, DELETE and DROP statements?',
        options: [
            { id: 'a', text: 'TRUNCATE creates tables; DELETE sorts data; DROP joins tables' },
            { id: 'b', text: 'DELETE removes rows; TRUNCATE removes all rows; DROP removes table' },
            { id: 'c', text: 'TRUNCATE sorts data; DELETE creates tables; DROP groups data' },
            { id: 'd', text: 'DELETE indexes data; TRUNCATE joins tables; DROP creates views' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 139,
        text: 'What is the difference between DROP and TRUNCATE statements?',
        options: [
            { id: 'a', text: 'DROP removes data; TRUNCATE removes structure' },
            { id: 'b', text: 'DROP removes table and relationships; TRUNCATE removes data, keeps structure' },
            { id: 'c', text: 'DROP is for rows; TRUNCATE is for columns' },
            { id: 'd', text: 'DROP creates tables; TRUNCATE sorts data' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 140,
        text: 'What is the difference between DELETE and TRUNCATE statements?',
        options: [
            { id: 'b', text: 'DELETE removes rows with WHERE; TRUNCATE removes all rows, no WHERE' },
            { id: 'a', text: 'DELETE removes table; TRUNCATE removes rows' },
            { id: 'c', text: 'DELETE is faster; TRUNCATE is slower' },
            { id: 'd', text: 'DELETE creates indexes; TRUNCATE drops tables' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 141,
        text: 'What are Aggregate and Scalar functions?',
        options: [
            { id: 'a', text: 'Aggregate joins tables; Scalar sorts data' },
            { id: 'b', text: 'Aggregate operates on sets (COUNT, SUM); Scalar on single values (LEN, ROUND)' },
            { id: 'c', text: 'Aggregate creates views; Scalar indexes data' },
            { id: 'd', text: 'Aggregate is for text; Scalar is for numbers' }
        ],
        correctAnswer: 'b'
    }

                ],
                stats: { total: 141, completed: 0, averageScore: 0 }
            },
            {
                id: 'oop',
                title: 'OOP',
                description: 'Object-oriented programming concepts',
                icon: 'fas fa-cubes',
                color: '#ec4899',
                questions: [
                    {
id: 1,
text: 'What is OOP?',
options: [
{ id: 'a', text: 'A scripting language for web pages' },
{ id: 'b', text: 'A function-based programming paradigm' },
{ id: 'c', text: 'A database query language' },
{ id: 'd', text: 'A paradigm centered on objects and classes with encapsulation, inheritance, polymorphism, abstraction' }
],
correctAnswer: 'd'
},
{
id: 2,
text: 'What is the difference between Procedural Programming and OOP?',
options: [
{ id: 'a', text: 'Procedural supports inheritance; OOP does not' },
{ id: 'b', text: 'Procedural uses objects; OOP uses functions' },
{ id: 'c', text: 'Procedural is function-based, global data; OOP is object-based, encapsulated data' },
{ id: 'd', text: 'Procedural is bottom-up; OOP is top-down' }
],
correctAnswer: 'c'
},
{
id: 3,
text: 'Why use OOP?',
options: [
{ id: 'a', text: 'Only for small projects' },
{ id: 'b', text: 'Enables modularity, reusability, encapsulation, polymorphism, abstraction' },
{ id: 'c', text: 'Eliminates need for planning' },
{ id: 'd', text: 'Increases complexity and reduces reusability' }
],
correctAnswer: 'b'
},
{
id: 4,
text: 'What are the basic features of OOP?',
options: [
{ id: 'a', text: 'Functions, loops, conditionals' },
{ id: 'b', text: 'Variables, arrays, pointers' },
{ id: 'c', text: 'Queries, joins, indexes' },
{ id: 'd', text: 'Inheritance, encapsulation, polymorphism, abstraction' }
],
correctAnswer: 'd'
},
{
id: 5,
text: 'What is Encapsulation?',
options: [
{ id: 'a', text: 'Binding data and methods with restricted access' },
{ id: 'b', text: 'Allowing multiple classes to inherit' },
{ id: 'c', text: 'Overriding methods at runtime' },
{ id: 'd', text: 'Hiding implementation details' }
],
correctAnswer: 'a'
},
{
id: 6,
text: 'What is Abstraction? Which code demonstrates abstraction?',
options: [
{ id: 'a', text: 'class Car { String make; void setMake(String m) { make = m; } }' },
{ id: 'b', text: 'class Car { int speed = 60; }' },
{ id: 'c', text: 'class Car { abstract void startEngine(); }' },
{ id: 'd', text: 'class Car { void start() { System.out.println("Engine on"); } }' }
],
correctAnswer: 'c'
},
{
id: 7,
text: 'What is Method Overloading? Which code shows method overloading?',
options: [
{ id: 'a', text: 'class Calc { void add(int a, int b) { } }' },
{ id: 'b', text: 'class Calc extends Math { int add(int a, int b) { return a + b; } }' },
{ id: 'c', text: 'class Calc { int add(int a) { return a; } }' },
{ id: 'd', text: 'class Calc { int add(int a, int b) { return a + b; } double add(double a, double b) { return a + b; } }' }
],
correctAnswer: 'd'
},
{
id: 8,
text: 'What is Method Overriding?',
options: [
{ id: 'a', text: 'Using static methods in a class' },
{ id: 'b', text: 'Hiding data within a class' },
{ id: 'c', text: 'Subclass redefining a superclass method' },
{ id: 'd', text: 'Defining multiple methods with the same name in a class' }
],
correctAnswer: 'c'
},
{
id: 9,
text: 'What are the types of inheritance?',
options: [
{ id: 'a', text: 'Single, multiple, multilevel, multipath, hierarchical, hybrid' },
{ id: 'b', text: 'Abstract, concrete, final' },
{ id: 'c', text: 'Public, private, protected' },
{ id: 'd', text: 'Static, dynamic, virtual' }
],
correctAnswer: 'a'
},
{
id: 10,
text: 'What are the characteristics of OOP?',
options: [
{ id: 'a', text: 'Loops, conditionals, functions' },
{ id: 'b', text: 'Arrays, pointers, variables' },
{ id: 'c', text: 'Encapsulation, abstraction, inheritance, polymorphism' },
{ id: 'd', text: 'Indexes, queries, joins' }
],
correctAnswer: 'c'
},
{
id: 11,
text: 'Can you call a base class method without an instance?',
options: [
{ id: 'a', text: 'Yes, if it’s static or called via super/base in a subclass' },
{ id: 'b', text: 'No, always requires an instance' },
{ id: 'c', text: 'Only in abstract classes' },
{ id: 'd', text: 'Only if it’s private' }
],
correctAnswer: 'a'
},
{
id: 12,
text: 'What are the limitations of OOP?',
options: [
{ id: 'a', text: 'Not ideal for small problems, complex testing, needs planning' },
{ id: 'b', text: 'Eliminates modularity, reduces reusability' },
{ id: 'c', text: 'Only works in functional programming' },
{ id: 'd', text: 'Ideal for small problems, simple testing' }
],
correctAnswer: 'a'
},
{
id: 13,
text: 'What are Constructors?',
options: [
{ id: 'a', text: 'Methods to delete objects' },
{ id: 'b', text: 'Methods to override functions' },
{ id: 'c', text: 'Special methods to initialize objects' },
{ id: 'd', text: 'Methods to hide data' }
],
correctAnswer: 'c'
},
{
id: 14,
text: 'What are the types of constructors?',
options: [
{ id: 'a', text: 'Single, multiple, hierarchical' },
{ id: 'b', text: 'Abstract, concrete, virtual' },
{ id: 'c', text: 'Default, parameterized, copy, static, private' },
{ id: 'd', text: 'Public, private, protected' }
],
correctAnswer: 'c'
},
{
id: 15,
text: 'What is the difference between a class and a structure?',
options: [
{ id: 'a', text: 'Class has limited OOP support; structure has full support' },
{ id: 'b', text: 'Class supports full OOP, inheritance; structure has limited support, no inheritance' },
{ id: 'c', text: 'Class cannot have methods; structure can' },
{ id: 'd', text: 'Class is for functions; structure is for objects' }
],
correctAnswer: 'b'
},
{
id: 16,
text: 'What are access modifiers?',
options: [
{ id: 'a', text: 'Types of inheritance' },
{ id: 'b', text: 'Keywords controlling access: public, private, protected, internal' },
{ id: 'c', text: 'Methods to override functions' },
{ id: 'd', text: 'Tools for garbage collection' }
],
correctAnswer: 'b'
},
{
id: 17,
text: 'Which are common OOP languages?',
options: [
{ id: 'a', text: 'Java, Python, C++, JavaScript, Ruby' },
{ id: 'b', text: 'Bash, Perl, Shell' },
{ id: 'c', text: 'XML, JSON, YAML' },
{ id: 'd', text: 'HTML, CSS, SQL' }
],
correctAnswer: 'a'
},
{
id: 18,
text: 'What is Inheritance?',
options: [
{ id: 'a', text: 'Child class acquiring properties from parent class' },
{ id: 'b', text: 'Hiding data within a class' },
{ id: 'c', text: 'Creating virtual functions' },
{ id: 'd', text: 'Overloading methods' }
],
correctAnswer: 'a'
},
{
id: 19,
text: 'What is Hybrid Inheritance?',
options: [
{ id: 'a', text: 'Single class inheriting from multiple parents' },
{ id: 'b', text: 'Combination of two or more inheritance types' },
{ id: 'c', text: 'Inheritance without a parent class' },
{ id: 'd', text: 'Inheritance only in abstract classes' }
],
correctAnswer: 'b'
},
{
id: 20,
text: 'What is Hierarchical Inheritance?',
options: [
{ id: 'a', text: 'A chain of single inheritances' },
{ id: 'b', text: 'One class inherits from multiple parents' },
{ id: 'c', text: 'Multiple classes inherit from one parent' },
{ id: 'd', text: 'Inheritance without subclasses' }
],
correctAnswer: 'c'
},
{
id: 21,
text: 'What are the limitations of inheritance?',
options: [
{ id: 'a', text: 'Reduces coupling, simplifies hierarchy' },
{ id: 'b', text: 'Eliminates polymorphism' },
{ id: 'c', text: 'Prevents method overriding' },
{ id: 'd', text: 'Tight coupling, complex hierarchy, diamond problem' }
],
correctAnswer: 'd'
},
{
id: 22,
text: 'What is a Superclass?',
options: [
{ id: 'a', text: 'An abstract class only' },
{ id: 'b', text: 'A class with no methods' },
{ id: 'c', text: 'A class that inherits from another' },
{ id: 'd', text: 'The base class from which others inherit' }
],
correctAnswer: 'd'
},
{
id: 23,
text: 'What is a Subclass?',
options: [
{ id: 'a', text: 'A class that inherits from another class' },
{ id: 'b', text: 'A class with only static methods' },
{ id: 'c', text: 'A class that cannot be instantiated' },
{ id: 'd', text: 'A class with no parent' }
],
correctAnswer: 'a'
},
{
id: 24,
text: 'What is Polymorphism?',
options: [
{ id: 'a', text: 'Hiding data within a class' },
{ id: 'b', text: 'Processing objects differently based on type or class' },
{ id: 'c', text: 'Creating multiple classes' },
{ id: 'd', text: 'Preventing inheritance' }
],
correctAnswer: 'b'
},
{
id: 25,
text: 'What is Static Polymorphism (Compile-Time)?',
options: [
{ id: 'a', text: 'Achieved via garbage collection' },
{ id: 'b', text: 'Achieved via method overriding' },
{ id: 'c', text: 'Achieved via abstract classes' },
{ id: 'd', text: 'Achieved via method overloading' }
],
correctAnswer: 'd'
},
{
id: 26,
text: 'What is Dynamic Polymorphism (Runtime)?',
options: [
{ id: 'a', text: 'Achieved via method overriding' },
{ id: 'b', text: 'Achieved via method overloading' },
{ id: 'c', text: 'Achieved via static methods' },
{ id: 'd', text: 'Achieved via encapsulation' }
],
correctAnswer: 'a'
},
{
id: 27,
text: 'What is Operator Overloading?',
options: [
{ id: 'a', text: 'Overriding methods in a superclass' },
{ id: 'b', text: 'Hiding data in a class' },
{ id: 'c', text: 'Custom implementation of operators for user-defined types' },
{ id: 'd', text: 'Creating abstract classes' }
],
correctAnswer: 'c'
},
{
id: 28,
text: 'What is the difference between Overloading and Overriding?',
options: [
{ id: 'a', text: 'Overloading: same class, different parameters; overriding: subclass, same parameters' },
{ id: 'b', text: 'Overloading hides data; overriding creates classes' },
{ id: 'c', text: 'Overloading uses same parameters; overriding uses different' },
{ id: 'd', text: 'Overloading is runtime; overriding is compile-time' }
],
correctAnswer: 'a'
},
{
id: 29,
text: 'What is Data Abstraction?',
options: [
{ id: 'a', text: 'Showing essential features, hiding internal details' },
{ id: 'b', text: 'Binding data and methods' },
{ id: 'c', text: 'Overloading operators' },
{ id: 'd', text: 'Creating subclasses' }
],
correctAnswer: 'a'
},
{
id: 30,
text: 'How is Data Abstraction achieved?',
options: [
{ id: 'a', text: 'Using method overloading' },
{ id: 'b', text: 'Using access modifiers only' },
{ id: 'c', text: 'Using abstract classes and abstract methods' },
{ id: 'd', text: 'Using static methods' }
],
correctAnswer: 'c'
},
{
id: 31,
text: 'What is an Abstract Class?',
options: [
{ id: 'a', text: 'A class that supports multiple inheritance' },
{ id: 'b', text: 'A class with only concrete methods' },
{ id: 'c', text: 'A class with no methods' },
{ id: 'd', text: 'A class with at least one abstract method, cannot be instantiated' }
],
correctAnswer: 'd'
},
{
id: 32,
text: 'What is the difference between Abstraction and Encapsulation?',
options: [
{ id: 'a', text: 'Abstraction hides implementation; encapsulation hides data' },
{ id: 'b', text: 'Abstraction hides data; encapsulation hides implementation' },
{ id: 'c', text: 'Abstraction is for methods; encapsulation is for classes' },
{ id: 'd', text: 'Abstraction uses access modifiers; encapsulation uses interfaces' }
],
correctAnswer: 'a'
},
{
id: 33,
text: 'What are Virtual Functions?',
options: [
{ id: 'a', text: 'Methods that cannot be overridden' },
{ id: 'b', text: 'Functions meant to be overridden in derived classes' },
{ id: 'c', text: 'Static methods in a class' },
{ id: 'd', text: 'Methods for garbage collection' }
],
correctAnswer: 'b'
},
{
id: 34,
text: 'What is a Destructor?',
options: [
{ id: 'a', text: 'A method called when an object is destroyed for cleanup' },
{ id: 'b', text: 'A method to initialize objects' },
{ id: 'c', text: 'A method to hide data' },
{ id: 'd', text: 'A method to override functions' }
],
correctAnswer: 'a'
},
{
id: 35,
text: 'What is a Copy Constructor?',
options: [
{ id: 'a', text: 'A constructor to initialize variables' },
{ id: 'b', text: 'A constructor for abstract classes' },
{ id: 'c', text: 'A constructor for static objects' },
{ id: 'd', text: 'A constructor to create a copy of an existing object' }
],
correctAnswer: 'd'
},
{
id: 36,
text: 'What is finalize() in Java?',
options: [
{ id: 'a', text: 'A method for cleanup before garbage collection' },
{ id: 'b', text: 'A method to initialize objects' },
{ id: 'c', text: 'A method to create classes' },
{ id: 'd', text: 'A method for method overriding' }
],
correctAnswer: 'a'
},
{
id: 37,
text: 'What is Garbage Collection (GC)?',
options: [
{ id: 'a', text: 'Method overloading' },
{ id: 'b', text: 'Manual memory allocation' },
{ id: 'c', text: 'Creating abstract classes' },
{ id: 'd', text: 'Automatic memory management to reclaim unused memory' }
],
correctAnswer: 'd'
},
{
id: 38,
text: 'What is a Final Variable?',
options: [
{ id: 'a', text: 'A variable that can be reassigned' },
{ id: 'b', text: 'A variable for abstract classes' },
{ id: 'c', text: 'A variable assigned once, cannot be reassigned' },
{ id: 'd', text: 'A variable for method overriding' }
],
correctAnswer: 'c'
},
{
id: 39,
text: 'What is a Final Method?',
options: [
{ id: 'a', text: 'A method that cannot be overridden' },
{ id: 'b', text: 'A method that cannot be overloaded' },
{ id: 'c', text: 'A method only for static calls' },
{ id: 'd', text: 'A method used only in constructors' }
],
correctAnswer: 'a'
},
{
id: 40,
text: 'What is a Final Class?',
options: [
{ id: 'a', text: 'A class that cannot be inherited' },
{ id: 'b', text: 'A class with no methods' },
{ id: 'c', text: 'A class that cannot create objects' },
{ id: 'd', text: 'A class only for static methods' }
],
correctAnswer: 'a'
},
{
id: 41,
text: 'What is Multiple Inheritance?',
options: [
{ id: 'a', text: 'A class inheriting from multiple parents' },
{ id: 'b', text: 'A class implementing multiple interfaces' },
{ id: 'c', text: 'A class with multiple constructors' },
{ id: 'd', text: 'A class with multiple variables' }
],
correctAnswer: 'a'
},
{
id: 42,
text: 'Does Java support Multiple Inheritance?',
options: [
{ id: 'a', text: 'Yes, via classes' },
{ id: 'b', text: 'No, but supports it via interfaces' },
{ id: 'c', text: 'Yes, for all types' },
{ id: 'd', text: 'Only for static methods' }
],
correctAnswer: 'b'
},
{
id: 43,
text: 'What is an Interface?',
options: [
{ id: 'a', text: 'A class with implementation' },
{ id: 'b', text: 'A blueprint of a class containing abstract methods' },
{ id: 'c', text: 'A class with constructors' },
{ id: 'd', text: 'A static class' }
],
correctAnswer: 'b'
},
{
id: 44,
text: 'What is the difference between Abstract Class and Interface?',
options: [
{ id: 'a', text: 'Abstract class can have both abstract and concrete methods; interface has only abstract methods' },
{ id: 'b', text: 'Abstract class cannot have variables; interface can' },
{ id: 'c', text: 'Interface can have constructors; abstract class cannot' },
{ id: 'd', text: 'Interface supports multiple inheritance; abstract class does not' }
],
correctAnswer: 'a'
},
{
id: 45,
text: 'What is the use of the "this" keyword?',
options: [
{ id: 'a', text: 'Refers to the current instance of the class' },
{ id: 'b', text: 'Refers to the parent class' },
{ id: 'c', text: 'Refers to a static variable' },
{ id: 'd', text: 'Refers to an abstract method' }
],
correctAnswer: 'a'
},
{
id: 46,
text: 'What is the use of the "super" keyword?',
options: [
{ id: 'a', text: 'Calls a method in the same class' },
{ id: 'b', text: 'Refers to the parent class and can call its methods/constructors' },
{ id: 'c', text: 'Refers to static methods only' },
{ id: 'd', text: 'Refers to private variables' }
],
correctAnswer: 'b'
},
{
id: 47,
text: 'What is Method Hiding?',
options: [
{ id: 'a', text: 'When a static method in a subclass has the same signature as in the superclass' },
{ id: 'b', text: 'When an instance method is overridden' },
{ id: 'c', text: 'When a method is private' },
{ id: 'd', text: 'When a method is abstract' }
],
correctAnswer: 'a'
},
{
id: 48,
text: 'What is the difference between Method Overloading and Method Hiding?',
options: [
{ id: 'a', text: 'Overloading: same name, different parameters; Hiding: static method in subclass hides one in superclass' },
{ id: 'b', text: 'Overloading: runtime; Hiding: compile-time' },
{ id: 'c', text: 'Overloading hides data; Hiding creates new classes' },
{ id: 'd', text: 'Overloading is abstract; Hiding is final' }
],
correctAnswer: 'a'
},
{
id: 49,
text: 'What are Pure Virtual Functions?',
options: [
{ id: 'd', text: 'Methods for encapsulation' },
{ id: 'c', text: 'Static methods in a class' },
{ id: 'b', text: 'Methods without implementation in base class, defined in subclass' },
{ id: 'a', text: 'Methods with implementation in base class' }
],
correctAnswer: 'b'
},
{
id: 50,
text: 'What is the difference between a Class and a Method?',
options: [
{ id: 'b', text: 'Class is a blueprint; method is a function inside a class' },
{ id: 'a', text: 'Class is a function; method is a blueprint' },
{ id: 'd', text: 'Class is for inheritance; method is for abstraction' },
{ id: 'c', text: 'Class is for variables; method is for objects' }
],
correctAnswer: 'b'
},
{
id: 51,
text: 'What is the difference between an Abstract Class and an Interface?',
options: [
{ id: 'b', text: 'Abstract class can have concrete methods, single inheritance; interface has abstract methods, multiple inheritance' },
{ id: 'd', text: 'Abstract class is for variables; interface is for methods' },
{ id: 'a', text: 'Abstract class has only abstract methods; interface has concrete methods' },
{ id: 'c', text: 'Abstract class supports multiple inheritance; interface does not' }
],
correctAnswer: 'b'
},
{
id: 52,
text: 'What are the characteristics of an Abstract Class?',
options: [
{ id: 'a', text: 'Can be instantiated, only concrete methods' },
{ id: 'c', text: 'Supports multiple inheritance, no methods' },
{ id: 'b', text: 'Cannot be instantiated, may have abstract and concrete methods' },
{ id: 'd', text: 'Only used for static methods' }
],
correctAnswer: 'b'
},
{
id: 53,
text: 'What is Constructor Chaining?',
options: [
{ id: 'c', text: 'Overriding constructors' },
{ id: 'a', text: 'Calling methods from different classes' },
{ id: 'b', text: 'Calling one constructor from another using this or super' },
{ id: 'd', text: 'Hiding constructors' }
],
correctAnswer: 'b'
},
{
id: 54,
text: 'What is Coupling?',
options: [
{ id: 'b', text: 'Dependency between classes; loose is preferred' },
{ id: 'd', text: 'Creating abstract methods' },
{ id: 'a', text: 'High cohesion between methods' },
{ id: 'c', text: 'Hiding data in a class' }
],
correctAnswer: 'b'
},
{
id: 55,
text: 'Which operators cannot be overloaded?',
options: [
{ id: 'b', text: '., .*, ::, ?:' },
{ id: 'a', text: '+, -, *, /' },
{ id: 'c', text: '==, !=, <, >' },
{ id: 'd', text: '&&, ||, !' }
],
correctAnswer: 'b'
},
{
id: 56,
text: 'What is Cohesion?',
options: [
{ id: 'a', text: 'Dependency between classes' },
{ id: 'd', text: 'Overriding methods' },
{ id: 'c', text: 'Hiding data in a class' },
{ id: 'b', text: 'How closely related a class’s responsibilities are; high is desirable' }
],
correctAnswer: 'b'
},
{
id: 57,
text: 'What are levels of abstraction?',
options: [
{ id: 'b', text: 'Low-level: implementation details; high-level: conceptual models' },
{ id: 'd', text: 'Levels of method overriding' },
{ id: 'a', text: 'Types of inheritance' },
{ id: 'c', text: 'Types of access modifiers' }
],
correctAnswer: 'b'
},
{
id: 58,
text: 'What are the types of variables in OOP?',
options: [
{ id: 'c', text: 'Single, multiple, hierarchical' },
{ id: 'a', text: 'Public, private, protected' },
{ id: 'b', text: 'Primitive, reference, instance, static, local' },
{ id: 'd', text: 'Abstract, concrete, virtual' }
],
correctAnswer: 'b'
},
{
id: 59,
text: 'What is Garbage Collection in OOP?',
options: [
{ id: 'd', text: 'Creating abstract classes' },
{ id: 'a', text: 'Manual memory allocation' },
{ id: 'b', text: 'Automatic memory management to remove unused objects' },
{ id: 'c', text: 'Method overloading' }
],
correctAnswer: 'b'
},
{
id: 60,
text: 'Can you run Java without OOP?',
options: [
{ id: 'a', text: 'Yes, using static methods only' },
{ id: 'd', text: 'Yes, using procedural code' },
{ id: 'c', text: 'Yes, using interfaces only' },
{ id: 'b', text: 'No, Java is fully based on OOP' }
],
correctAnswer: 'b'
},
{
id: 61,
text: 'What is the output of this Java code involving inheritance and method visibility? (Assume a superclass Teacher with method teach() printing "This is a teacher" and a subclass MathsTeacher overriding teach() to print "This is a Maths teacher")',
options: [
{ id: 'b', text: 'This is a Maths teacher' },
{ id: 'c', text: 'No output' },
{ id: 'a', text: 'This is a teacher' },
{ id: 'd', text: 'Compile-time error' }
],
correctAnswer: 'b'
},
{
id: 62,
text: 'What is Object-Oriented Programming (OOP)?',
options: [
{ id: 'd', text: 'A scripting language for web pages' },
{ id: 'a', text: 'A paradigm based on functions and procedures' },
{ id: 'c', text: 'A database management system' },
{ id: 'b', text: 'A paradigm organizing software as objects with data and methods' }
],
correctAnswer: 'b'
},
{
id: 63,
text: 'What are other programming paradigms besides OOP?',
options: [
{ id: 'b', text: 'Imperative (procedural, OOP, parallel), declarative (logical, functional, database)' },
{ id: 'd', text: 'Public, private, protected' },
{ id: 'a', text: 'Relational, transactional, analytical' },
{ id: 'c', text: 'Static, dynamic, virtual' }
],
correctAnswer: 'b'
},
{
id: 64,
text: 'What is the difference between Structured Programming and OOP?',
options: [
{ id: 'c', text: 'Structured supports inheritance; OOP does not' },
{ id: 'a', text: 'Structured is object-based; OOP is procedure-based' },
{ id: 'b', text: 'Structured is top-down, procedure-based; OOP is bottom-up, object-based' },
{ id: 'd', text: 'Structured is data-focused; OOP is code-focused' }
],
correctAnswer: 'b'
},
{
id: 65,
text: 'What are common OOP languages?',
options: [
{ id: 'd', text: 'XML, JSON, YAML' },
{ id: 'c', text: 'Bash, Perl, Shell' },
{ id: 'b', text: 'C++, Java, Python, JavaScript, C#, Ruby' },
{ id: 'a', text: 'HTML, CSS, SQL' }
],
correctAnswer: 'b'
},
{
id: 66,
text: 'What are Access Specifiers?',
options: [
{ id: 'a', text: 'Types of inheritance' },
{ id: 'b', text: 'Tools for garbage collection' },
{ id: 'c', text: 'Keywords controlling access: private, protected, public' },
{ id: 'd', text: 'Methods for method overriding' }
],
correctAnswer: 'c'
},
{
id: 67,
text: 'What is the difference between Interface and Abstract Class?',
options: [
{ id: 'a', text: 'Interface supports single inheritance; Abstract class supports multiple' },
{ id: 'b', text: 'Interface is for variables; Abstract class is for methods' },
{ id: 'c', text: 'Interface: only abstract methods, multiple inheritance; Abstract class: both method types, single inheritance' },
{ id: 'd', text: 'Interface has concrete methods; Abstract class has only abstract methods' }
],
correctAnswer: 'c'
},
{
id: 68,
text: 'Do classes occupy memory?',
options: [
{ id: 'a', text: 'Only objects consume memory' },
{ id: 'b', text: 'Yes, classes consume memory like objects' },
{ id: 'c', text: 'Only abstract classes consume memory' },
{ id: 'd', text: 'Only static classes consume memory' }
],
correctAnswer: 'a'
},
{
id: 69,
text: 'Is object creation necessary for method access?',
options: [
{ id: 'a', text: 'Only for private methods' },
{ id: 'b', text: 'No, static methods can be accessed via class name' },
{ id: 'c', text: 'Yes, for all methods' },
{ id: 'd', text: 'Only for abstract methods' }
],
correctAnswer: 'b'
},
{
id: 70,
text: 'What is the difference between a class and a structure in C++?',
options: [
{ id: 'a', text: 'Class: private by default, supports OOP; structure: public by default, limited OOP' },
{ id: 'b', text: 'Class is for functions; structure is for objects' },
{ id: 'c', text: 'Class cannot have methods; structure can' },
{ id: 'd', text: 'Class: public by default; structure: private by default' }
],
correctAnswer: 'a'
},
{
id: 71,
text: 'What is a Constructor?',
options: [
{ id: 'a', text: 'A method to override functions' },
{ id: 'b', text: 'A method to delete objects' },
{ id: 'c', text: 'A method to hide data' },
{ id: 'd', text: 'A method to initialize a newly created object' }
],
correctAnswer: 'd'
},
{
id: 72,
text: 'What are the types of constructors in C++?',
options: [
{ id: 'a', text: 'Default, non-parameterized, parameterized, copy, move' },
{ id: 'b', text: 'Abstract, concrete, virtual' },
{ id: 'c', text: 'Public, private, protected' },
{ id: 'd', text: 'Single, multiple, hierarchical' }
],
correctAnswer: 'a'
},
{
id: 73,
text: 'Can constructors be overloaded?',
options: [
{ id: 'a', text: 'Only in interfaces' },
{ id: 'b', text: 'Only in abstract classes' },
{ id: 'c', text: 'Yes, constructors can be overloaded' },
{ id: 'd', text: 'No, only one constructor per class' }
],
correctAnswer: 'c'
},
{
id: 74,
text: 'Can destructors be overloaded?',
options: [
{ id: 'a', text: 'Only in abstract classes' },
{ id: 'b', text: 'Yes, like constructors' },
{ id: 'c', text: 'Only in derived classes' },
{ id: 'd', text: 'No, only one destructor per class' }
],
correctAnswer: 'd'
},
{
id: 75,
text: 'What is a Friend Function?',
options: [
{ id: 'a', text: 'A function for method overriding' },
{ id: 'b', text: 'A function for garbage collection' },
{ id: 'c', text: 'A function that can access private/protected members of a class' },
{ id: 'd', text: 'A function to initialize objects' }
],
correctAnswer: 'c'
},
{
id: 76,
text: 'What is a Friend Class?',
options: [
{ id: 'a', text: 'A class for method overloading' },
{ id: 'b', text: 'A class that can access private/protected members of another class' },
{ id: 'c', text: 'A class with only static methods' },
{ id: 'd', text: 'A class for abstract methods' }
],
correctAnswer: 'b'
},
{
id: 77,
text: 'What is a Virtual Function?',
options: [
{ id: 'a', text: 'A function meant to be overridden for dynamic resolution' },
{ id: 'b', text: 'A function that cannot be overridden' },
{ id: 'c', text: 'A static method in a class' },
{ id: 'd', text: 'A function for encapsulation' }
],
correctAnswer: 'a'
},
{
id: 78,
text: 'What is a Pure Virtual Function?',
options: [
{ id: 'a', text: 'A static function in a class' },
{ id: 'b', text: 'A function with implementation in base class' },
{ id: 'c', text: 'A function with no body, requires implementation in derived class' },
{ id: 'd', text: 'A function for method overloading' }
],
correctAnswer: 'c'
},
{
id: 79,
text: 'What is the Super Keyword?',
options: [
{ id: 'a', text: 'Creates abstract methods' },
{ id: 'b', text: 'Calls superclass methods or constructors' },
{ id: 'c', text: 'Refers to the current object' },
{ id: 'd', text: 'Handles exceptions' }
],
correctAnswer: 'b'
},
{
id: 80,
text: 'What is the this Keyword?',
options: [
{ id: 'a', text: 'Refers to the current object' },
{ id: 'b', text: 'Calls superclass methods' },
{ id: 'c', text: 'Creates static methods' },
{ id: 'd', text: 'Hides data in a class' }
],
correctAnswer: 'a'
},
{
id: 81,
text: 'What are Access Specifiers (Summary)?',
options: [
{ id: 'a', text: 'Private: within class; Protected: class and derived; Public: everywhere' },
{ id: 'b', text: 'Tools for inheritance' },
{ id: 'c', text: 'Types of polymorphism' },
{ id: 'd', text: 'Methods for method overriding' }
],
correctAnswer: 'a'
},
{
id: 82,
text: 'What is an Exception?',
options: [
{ id: 'c', text: 'A method to initialize objects' },
{ id: 'a', text: 'A syntax error' },
{ id: 'b', text: 'An abnormal event during program execution' },
{ id: 'd', text: 'A type of inheritance' }
],
correctAnswer: 'b'
},
{
id: 83,
text: 'What is Exception Handling?',
options: [
{ id: 'd', text: 'Hiding data in a class' },
{ id: 'a', text: 'Creating abstract classes' },
{ id: 'b', text: 'Catching and handling exceptions' },
{ id: 'c', text: 'Overloading methods' }
],
correctAnswer: 'b'
},
{
id: 84,
text: 'What is Garbage Collection?',
options: [
{ id: 'b', text: 'Automatic memory management for unused objects' },
{ id: 'a', text: 'Manual memory allocation' },
{ id: 'd', text: 'Creating abstract classes' },
{ id: 'c', text: 'Method overloading' }
],
correctAnswer: 'b'
},
{
id: 85,
text: 'Is Java fully object-oriented?',
options: [
{ id: 'a', text: 'No, it supports procedural programming' },
{ id: 'b', text: 'Yes, it requires OOP principles' },
{ id: 'c', text: 'Only for static methods' },
{ id: 'd', text: 'Only for interfaces' }
],
correctAnswer: 'b'
},
{
id: 86,
text: 'What is the output of this C++ code? (class Student { public: string name; }; int main() { Student student1; student1.name = "Rahul"; cout << student1.name; return 0; })',
options: [
{ id: 'b', text: 'Rahul' },
{ id: 'a', text: 'student1' },
{ id: 'c', text: 'No output' },
{ id: 'd', text: 'Compile-time error' }
],
correctAnswer: 'b'
},
{
id: 87,
text: 'What are programming paradigms other than OOP?',
options: [
{ id: 'b', text: 'Imperative (procedural, OOP, parallel), declarative (logical, functional, database)' },
{ id: 'd', text: 'Public, private, protected' },
{ id: 'a', text: 'Relational, transactional, analytical' },
{ id: 'c', text: 'Static, dynamic, virtual' }
],
correctAnswer: 'b'
},
{
id: 88,
text: 'What are major OOP languages?',
options: [
{ id: 'b', text: 'Java, C++, Python, JavaScript, PHP' },
{ id: 'd', text: 'XML, JSON, YAML' },
{ id: 'a', text: 'HTML, CSS, SQL' },
{ id: 'c', text: 'Bash, Perl, Shell' }
],
correctAnswer: 'b'
},
{
id: 89,
text: 'What is a class?',
options: [
{ id: 'd', text: 'A database table' },
{ id: 'b', text: 'A blueprint for objects with data and methods' },
{ id: 'a', text: 'An instance of an object' },
{ id: 'c', text: 'A function for procedures' }
],
correctAnswer: 'b'
},
{
id: 90,
text: 'What is an object?',
options: [
{ id: 'b', text: 'An instance of a class with state and behavior' },
{ id: 'a', text: 'A blueprint for classes' },
{ id: 'd', text: 'A database query' },
{ id: 'c', text: 'A static method' }
],
correctAnswer: 'b'
},
{
id: 91,
text: 'What is Abstraction?',
options: [
{ id: 'b', text: 'Showing essential features, hiding implementation' },
{ id: 'c', text: 'Overloading operators' },
{ id: 'a', text: 'Bundling data and methods' },
{ id: 'd', text: 'Creating subclasses' }
],
correctAnswer: 'b'
},
{
id: 92,
text: 'What are access specifiers?',
options: [
{ id: 'b', text: 'Keywords controlling access: public, private, protected' },
{ id: 'a', text: 'Methods for method overriding' },
{ id: 'd', text: 'Tools for garbage collection' },
{ id: 'c', text: 'Types of inheritance' }
],
correctAnswer: 'b'
},
{
id: 93,
text: 'What is the output of this C++ destructor code? (class base { public: ~base() { cout << "Destructor called"; } };)',
options: [
{ id: 'a', text: 'Destructor called' },
{ id: 'b', text: 'No output' },
{ id: 'c', text: 'base' },
{ id: 'd', text: 'Compile-time error' }
],
correctAnswer: 'a'
},
{
id: 94,
text: 'Is OOP mandatory in Java?',
options: [
{ id: 'a', text: 'Only for interfaces' },
{ id: 'b', text: 'Only for static methods' },
{ id: 'c', text: 'No, supports procedural programming' },
{ id: 'd', text: 'Yes, Java is fully OOP-based' }
],
correctAnswer: 'd'
},
{
id: 95,
text: 'How does C++ support Polymorphism?',
options: [
{ id: 'a', text: 'Only through abstract classes' },
{ id: 'b', text: 'Only through inheritance' },
{ id: 'c', text: 'Only through static methods' },
{ id: 'd', text: 'Compile-time: templates, overloading; Runtime: virtual functions' }
],
correctAnswer: 'd'
},
{
id: 96,
text: 'What is an example of Inheritance?',
options: [
{ id: 'a', text: 'Overloading methods' },
{ id: 'b', text: 'Creating virtual functions' },
{ id: 'c', text: 'Hiding data in a class' },
{ id: 'd', text: 'Vehicle base class with Car, Truck, Bus inheriting features' }
],
correctAnswer: 'd'
},
{
id: 97,
text: 'What is the output of C++ code with multiple inheritance constructor order? (Assume BaseClass1, BaseClass2, DerivedClass constructors print their names)',
options: [
{ id: 'a', text: 'DerivedClass only' },
{ id: 'b', text: 'BaseClass1, BaseClass2, DerivedClass' },
{ id: 'c', text: 'DerivedClass, BaseClass1, BaseClass2' },
{ id: 'd', text: 'No output' }
],
correctAnswer: 'b'
},
{
id: 98,
text: 'What is the output of Java code with static block execution order? (Assume blocks print b, c, a, and main prints 100)',
options: [
{ id: 'a', text: '100, a, b, c' },
{ id: 'b', text: 'b, c, a, 100' },
{ id: 'c', text: 'a, b, c, 100' },
{ id: 'd', text: 'No output' }
],
correctAnswer: 'b'
},
{
id: 99,
text: 'What is the output of C++ code with conversion constructor and operator overloading? (Assume prints i = 10, i = 20)',
options: [
{ id: 'a', text: 'i = 20, i = 10' },
{ id: 'b', text: 'Compile-time error' },
{ id: 'c', text: 'i = 10, i = 20' },
{ id: 'd', text: 'i = 10' }
],
correctAnswer: 'c'
},
{
id: 100,
text: 'What is the output of Java code with overloaded main method? (Assume main prints Main1)',
options: [
{ id: 'a', text: 'Main2' },
{ id: 'b', text: 'No output' },
{ id: 'c', text: 'Compile-time error' },
{ id: 'd', text: 'Main1' }
],
correctAnswer: 'd'
},
{
id: 101,
text: 'What is the output of C++ code with multilevel inheritance method call? (Assume class B overrides method to print Inside B)',
options: [
{ id: 'a', text: 'Inside B' },
{ id: 'b', text: 'No output' },
{ id: 'c', text: 'Compile-time error' },
{ id: 'd', text: 'Inside A' }
],
correctAnswer: 'a'
}
                ],
                stats: { total: 101, completed: 0, averageScore: 0 }
            },
            {
                id: 'c',
                title: 'C Programming',
                description: 'System programming and low-level concepts',
                icon: 'fas fa-terminal',
                color: '#6366f1',
                questions: [
                    {
        id: 1,
        text: 'Why is C called a mid-level programming language?',
        options: [
            { id: 'a', text: 'It only supports high-level constructs' },
            { id: 'b', text: 'It combines low-level and high-level features' },
            { id: 'c', text: 'It is only used for system programming' },
            { id: 'd', text: 'It lacks structured programming' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 2,
        text: 'Which of the following is NOT a basic data type in C?',
        options: [
            { id: 'a', text: 'int' },
            { id: 'b', text: 'float' },
            { id: 'c', text: 'string' },
            { id: 'd', text: 'char' }
        ],
        correctAnswer: 'c'
    },
    {
        id: 3,
        text: 'What are tokens in C?',
        options: [
            { id: 'a', text: 'Functions in the standard library' },
            { id: 'b', text: 'Smallest units meaningful to the compiler' },
            { id: 'c', text: 'Variable declarations only' },
            { id: 'd', text: 'Memory addresses' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 4,
        text: 'What is the scope of a local variable in C?',
        options: [
            { id: 'a', text: 'Entire program' },
            { id: 'b', text: 'Within its function or block' },
            { id: 'c', text: 'Across multiple files' },
            { id: 'd', text: 'Only in main()' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 5,
        text: 'What is the purpose of preprocessor directives in C?',
        options: [
            { id: 'a', text: 'Execute code at runtime' },
            { id: 'b', text: 'Process instructions before compilation' },
            { id: 'c', text: 'Optimize compiled code' },
            { id: 'd', text: 'Link libraries at runtime' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 6,
        text: 'What is the behavior of a static variable in C?',
        options: [
            { id: 'a', text: 'Reset each function call' },
            { id: 'b', text: 'Retains value between calls, defaults to 0' },
            { id: 'c', text: 'Accessible across files' },
            { id: 'd', text: 'Automatically freed after function ends' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 7,
        text: 'What is the difference between malloc() and calloc()?',
        options: [
            { id: 'a', text: 'malloc: initializes to 0; calloc: uninitialized' },
            { id: 'b', text: 'malloc: one block, uninitialized; calloc: multiple blocks, initialized to 0' },
            { id: 'c', text: 'malloc: stack allocation; calloc: heap allocation' },
            { id: 'd', text: 'malloc: slower; calloc: faster' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 8,
        text: 'What is a dangling pointer in C?',
        options: [
            { id: 'a', text: 'Points to unallocated memory' },
            { id: 'b', text: 'Points to freed or invalid memory' },
            { id: 'c', text: 'Points to a global variable' },
            { id: 'd', text: 'Points to stack memory' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 9,
        text: 'What is the output of sprintf(res, "%f", 32.23)?',
        options: [
            { id: 'a', text: '"32"' },
            { id: 'b', text: '"32.230000"' },
            { id: 'c', text: '32.23' },
            { id: 'd', text: 'Error' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 10,
        text: 'What is recursion in C?',
        options: [
            { id: 'a', text: 'A function that loops infinitely' },
            { id: 'b', text: 'A function that calls itself to solve subproblems' },
            { id: 'c', text: 'A function that allocates memory' },
            { id: 'd', text: 'A function that uses pointers' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 11,
        text: 'What is the key difference between global and local variables?',
        options: [
            { id: 'a', text: 'Global: block scope; Local: program scope' },
            { id: 'b', text: 'Global: program scope, defaults to 0; Local: block scope, garbage value' },
            { id: 'c', text: 'Global: stack; Local: heap' },
            { id: 'd', text: 'Global: temporary; Local: permanent' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 12,
        text: 'What is the primary use of pointers in C?',
        options: [
            { id: 'a', text: 'Store variable values' },
            { id: 'b', text: 'Store memory addresses for manipulation' },
            { id: 'c', text: 'Define functions' },
            { id: 'd', text: 'Prevent memory leaks' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 13,
        text: 'What does typedef do in C?',
        options: [
            { id: 'a', text: 'Declares a new variable' },
            { id: 'b', text: 'Creates an alias for a data type' },
            { id: 'c', text: 'Allocates memory' },
            { id: 'd', text: 'Defines a function' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 14,
        text: 'How can you create an infinite loop in C?',
        options: [
            { id: 'a', text: 'for(;;)' },
            { id: 'b', text: 'while(0)' },
            { id: 'c', text: 'do {} while(0)' },
            { id: 'd', text: 'for(i=0; i<10; i--)' }
        ],
        correctAnswer: 'a'
    },
    {
        id: 15,
        text: 'What is the difference between type casting and type conversion?',
        options: [
            { id: 'a', text: 'Casting: automatic; Conversion: explicit' },
            { id: 'b', text: 'Casting: explicit with operator; Conversion: automatic by compiler' },
            { id: 'c', text: 'Casting: for pointers only; Conversion: for integers only' },
            { id: 'd', text: 'Casting: less reliable; Conversion: more reliable' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 16,
        text: 'What is the purpose of header files in C?',
        options: [
            { id: 'a', text: 'Store executable code' },
            { id: 'b', text: 'Contain function declarations and macros for reuse' },
            { id: 'c', text: 'Optimize program execution' },
            { id: 'd', text: 'Manage memory allocation' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 17,
        text: 'What is the difference between a macro and a function?',
        options: [
            { id: 'a', text: 'Macro: compiled; Function: preprocessed' },
            { id: 'b', text: 'Macro: preprocessed, no error checking; Function: compiled, error-checked' },
            { id: 'c', text: 'Macro: slower; Function: faster' },
            { id: 'd', text: 'Macro: returns values; Function: modifies memory' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 18,
        text: 'How can you convert a string to a number in C?',
        options: [
            { id: 'a', text: 'Use printf()' },
            { id: 'b', text: 'Use sscanf() or atoi()' },
            { id: 'c', text: 'Use strlen()' },
            { id: 'd', text: 'Use malloc()' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 19,
        text: 'What is a structure in C?',
        options: [
            { id: 'a', text: 'A function that groups variables' },
            { id: 'b', text: 'A user-defined type grouping multiple data types' },
            { id: 'c', text: 'A pointer to memory' },
            { id: 'd', text: 'A predefined library function' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 20,
        text: 'What is a union in C?',
        options: [
            { id: 'a', text: 'Groups variables with separate memory' },
            { id: 'b', text: 'Stores multiple types in a single memory location' },
            { id: 'c', text: 'Allocates dynamic memory' },
            { id: 'd', text: 'Defines a function' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 21,
        text: 'What is an l-value in C?',
        options: [
            { id: 'a', text: 'A constant value' },
            { id: 'b', text: 'A memory location that can be assigned' },
            { id: 'c', text: 'A function return value' },
            { id: 'd', text: 'A temporary value' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 22,
        text: 'What is the difference between call by value and call by reference?',
        options: [
            { id: 'a', text: 'Value: modifies original; Reference: copies value' },
            { id: 'b', text: 'Value: copies value; Reference: modifies original via address' },
            { id: 'c', text: 'Value: uses pointers; Reference: uses variables' },
            { id: 'd', text: 'Value: slower; Reference: faster' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 23,
        text: 'What does the sleep() function do in C?',
        options: [
            { id: 'a', text: 'Terminates the program' },
            { id: 'b', text: 'Pauses the thread for a specified time' },
            { id: 'c', text: 'Allocates memory' },
            { id: 'd', text: 'Reads input' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 24,
        text: 'What is the purpose of the volatile keyword?',
        options: [
            { id: 'a', text: 'Enables compiler optimizations' },
            { id: 'b', text: 'Prevents compiler optimizations for external changes' },
            { id: 'c', text: 'Declares a constant variable' },
            { id: 'd', text: 'Allocates static memory' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 25,
        text: 'What is the output of the Fibonacci program for n=5? (0, 1, 1, 2, 3)',
        options: [
            { id: 'a', text: '0 1 2 3 4' },
            { id: 'b', text: '0 1 1 2 3' },
            { id: 'c', text: '1 1 2 3 5' },
            { id: 'd', text: '0 1 2 4 8' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 26,
        text: 'What is the output of a program checking if 17 is prime?',
        options: [
            { id: 'a', text: '17 is not a prime number' },
            { id: 'b', text: '17 is a prime number' },
            { id: 'c', text: 'Error' },
            { id: 'd', text: 'No output' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 27,
        text: 'What is the difference between source code and object code?',
        options: [
            { id: 'a', text: 'Source: machine-readable; Object: human-readable' },
            { id: 'b', text: 'Source: human-readable; Object: machine-readable' },
            { id: 'c', text: 'Source: compiled; Object: preprocessed' },
            { id: 'd', text: 'Source: system-specific; Object: portable' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 28,
        text: 'What is dynamic memory allocation in C?',
        options: [
            { id: 'a', text: 'Allocated at compile time on stack' },
            { id: 'b', text: 'Allocated at runtime on heap' },
            { id: 'c', text: 'Allocated in data segment' },
            { id: 'd', text: 'Allocated automatically' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 29,
        text: 'What is pass-by-reference in C?',
        options: [
            { id: 'a', text: 'Passing a copy of the variable' },
            { id: 'b', text: 'Passing the address to modify the original' },
            { id: 'c', text: 'Passing a constant value' },
            { id: 'd', text: 'Passing a function' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 30,
        text: 'How can memory leaks be avoided in C?',
        options: [
            { id: 'a', text: 'Use malloc() without free()' },
            { id: 'b', text: 'Use free() for every malloc() or calloc()' },
            { id: 'c', text: 'Use static variables' },
            { id: 'd', text: 'Use pointers without allocation' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 31,
        text: 'What are command-line arguments in C?',
        options: [
            { id: 'a', text: 'Variables declared in main()' },
            { id: 'b', text: 'Parameters passed to a program at runtime' },
            { id: 'c', text: 'Preprocessor directives' },
            { id: 'd', text: 'Library functions' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 32,
        text: 'What is the auto keyword in C?',
        options: [
            { id: 'a', text: 'Declares global variables' },
            { id: 'b', text: 'Default storage class for local variables' },
            { id: 'c', text: 'Allocates heap memory' },
            { id: 'd', text: 'Prevents variable access' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 33,
        text: 'What is the output of printf("Hello - World\\n") without a semicolon?',
        options: [
            { id: 'a', text: 'Compiler Error' },
            { id: 'b', text: 'Hello - World' },
            { id: 'c', text: 'No output' },
            { id: 'd', text: 'Hello' }
        ],
        correctAnswer: 'a'
    },
    {
        id: 34,
        text: 'What is the output of swapping 50 and 60 without a third variable?',
        options: [
            { id: 'a', text: 'var1 = 50, var2 = 60' },
            { id: 'b', text: 'var1 = 60, var2 = 50' },
            { id: 'c', text: 'var1 = 50, var2 = 50' },
            { id: 'd', text: 'Error' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 35,
        text: 'What is the output of checking if "abba" is a palindrome?',
        options: [
            { id: 'a', text: 'abba is not a Palindrome' },
            { id: 'b', text: 'abba is a Palindrome' },
            { id: 'c', text: 'Error' },
            { id: 'd', text: 'No output' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 36,
        text: 'What does the extern storage specifier do?',
        options: [
            { id: 'a', text: 'Limits variable scope to a function' },
            { id: 'b', text: 'Extends visibility across multiple files' },
            { id: 'c', text: 'Allocates dynamic memory' },
            { id: 'd', text: 'Prevents variable access' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 37,
        text: 'What is the purpose of format specifiers in printf()?',
        options: [
            { id: 'a', text: 'Allocate memory' },
            { id: 'b', text: 'Specify the type of data to print' },
            { id: 'c', text: 'Define functions' },
            { id: 'd', text: 'Handle errors' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 38,
        text: 'What is a near pointer in C?',
        options: [
            { id: 'a', text: 'Accesses memory beyond 64KB' },
            { id: 'b', text: '16-bit, limited to 64KB segment' },
            { id: 'c', text: '32-bit, normalized memory access' },
            { id: 'd', text: 'Used for dynamic allocation' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 39,
        text: 'Which function is NOT a standard file operation in C?',
        options: [
            { id: 'a', text: 'fopen()' },
            { id: 'b', text: 'fread()' },
            { id: 'c', text: 'fprint()' },
            { id: 'd', text: 'fclose()' }
        ],
        correctAnswer: 'c'
    },
    {
        id: 40,
        text: 'What is the output of a program checking if a linked list with nodes (10->12->14->16->head) is circular?',
        options: [
            { id: 'a', text: 'Not Circular' },
            { id: 'b', text: 'Circular' },
            { id: 'c', text: 'Error' },
            { id: 'd', text: 'No output' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 41,
        text: 'What is the output of merging sorted linked lists (5->10->15) and (2->3->20)?',
        options: [
            { id: 'a', text: '5 10 15 2 3 20' },
            { id: 'b', text: '2 3 5 10 15 20' },
            { id: 'c', text: '2 5 3 10 15 20' },
            { id: 'd', text: 'Error' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 42,
        text: 'What is the difference between getc() and getchar()?',
        options: [
            { id: 'a', text: 'getc: reads from stdin; getchar: reads from file' },
            { id: 'b', text: 'getc: reads from file; getchar: reads from stdin' },
            { id: 'c', text: 'getc: echoes input; getchar: does not' },
            { id: 'd', text: 'Both are identical' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 43,
        text: 'What is the value of 5["abxdef"] in C?',
        options: [
            { id: 'a', text: 'a' },
            { id: 'b', text: 'f' },
            { id: 'c', text: 'Error' },
            { id: 'd', text: 'x' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 44,
        text: 'What is a built-in function in C?',
        options: [
            { id: 'a', text: 'A user-defined function' },
            { id: 'b', text: 'A function from standard libraries like printf()' },
            { id: 'c', text: 'A macro definition' },
            { id: 'd', text: 'A preprocessor directive' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 45,
        text: 'What does the #line directive do in C?',
        options: [
            { id: 'a', text: 'Includes a file' },
            { id: 'b', text: 'Resets line number for debugging' },
            { id: 'c', text: 'Defines a macro' },
            { id: 'd', text: 'Optimizes code' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 46,
        text: 'Why does C not support function overloading?',
        options: [
            { id: 'a', text: 'It supports name mangling' },
            { id: 'b', text: 'It lacks name mangling for function differentiation' },
            { id: 'c', text: 'It uses dynamic typing' },
            { id: 'd', text: 'It requires pointers' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 47,
        text: 'What is the difference between const char* p and char const* p?',
        options: [
            { id: 'a', text: 'const char*: pointer is constant; char const*: character is constant' },
            { id: 'b', text: 'Both are identical, pointer to constant character' },
            { id: 'c', text: 'const char*: modifies character; char const*: modifies pointer' },
            { id: 'd', text: 'const char*: global; char const*: local' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 48,
        text: 'What is a pointer to pointer in C?',
        options: [
            { id: 'a', text: 'A pointer to a variable' },
            { id: 'b', text: 'A pointer to another pointer' },
            { id: 'c', text: 'A pointer to a function' },
            { id: 'd', text: 'A pointer to an array' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 49,
        text: 'Why is gets() considered unsafe?',
        options: [
            { id: 'a', text: 'It is slow' },
            { id: 'b', text: 'It risks buffer overflow' },
            { id: 'c', text: 'It cannot read input' },
            { id: 'd', text: 'It modifies pointers' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 50,
        text: 'What is the output of checking if 121 is a palindrome using recursion?',
        options: [
            { id: 'a', text: '121 is not a palindrome' },
            { id: 'b', text: '121 is a palindrome' },
            { id: 'c', text: 'Error' },
            { id: 'd', text: 'No output' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 51,
        text: 'Why is C considered a "mother language"?',
        options: [
            { id: 'a', text: 'It is the only language used for compilers' },
            { id: 'b', text: 'It influences many languages and is used in compilers' },
            { id: 'c', text: 'It is exclusively for web development' },
            { id: 'd', text: 'It lacks low-level features' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 52,
        text: 'Who developed C, and when?',
        options: [
            { id: 'a', text: 'Bjarne Stroustrup, 1985' },
            { id: 'b', text: 'Dennis Ritchie, 1972' },
            { id: 'c', text: 'Guido van Rossum, 1991' },
            { id: 'd', text: 'James Gosling, 1995' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 53,
        text: 'What is the main difference between a compiler and an interpreter?',
        options: [
            { id: 'a', text: 'Compiler: line-by-line; Interpreter: entire program' },
            { id: 'b', text: 'Compiler: entire program to machine code; Interpreter: line-by-line execution' },
            { id: 'c', text: 'Compiler: slower execution; Interpreter: faster execution' },
            { id: 'd', text: 'Compiler: runtime errors; Interpreter: compile-time errors' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 54,
        text: 'Which type of error occurs due to incorrect program logic?',
        options: [
            { id: 'a', text: 'Syntax error' },
            { id: 'b', text: 'Runtime error' },
            { id: 'c', text: 'Logical error' },
            { id: 'd', text: 'Compile-time error' }
        ],
        correctAnswer: 'c'
    },
    {
        id: 55,
        text: 'What is an example of a runtime error in C?',
        options: [
            { id: 'a', text: 'Missing semicolon' },
            { id: 'b', text: 'Division by zero' },
            { id: 'c', text: 'Incorrect loop logic' },
            { id: 'd', text: 'Undefined variable' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 56,
        text: 'How do data structures like linked lists benefit everyday applications?',
        options: [
            { id: 'a', text: 'They slow down data retrieval' },
            { id: 'b', text: 'They enable efficient data management in OS and databases' },
            { id: 'c', text: 'They prevent memory allocation' },
            { id: 'd', text: 'They are only used in web applications' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 57,
        text: 'How many control structures are there in C programming?',
        options: [
            { id: 'a', text: 'Two' },
            { id: 'b', text: 'Three' },
            { id: 'c', text: 'Four' },
            { id: 'd', text: 'Five' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 58,
        text: 'What is the output of quickSort on the array {10, 7, 8, 9, 1}?',
        options: [
            { id: 'a', text: '10 9 8 7 1' },
            { id: 'b', text: '1 7 8 9 10' },
            { id: 'c', text: '1 8 7 9 10' },
            { id: 'd', text: 'Error' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 59,
        text: 'What is the difference between a constant and a variable in C?',
        options: [
            { id: 'a', text: 'Constant: modifiable; Variable: fixed' },
            { id: 'b', text: 'Constant: fixed value; Variable: modifiable value' },
            { id: 'c', text: 'Constant: heap memory; Variable: stack memory' },
            { id: 'd', text: 'Constant: runtime; Variable: compile-time' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 60,
        text: 'What is the role of a pointer in C?',
        options: [
            { id: 'a', text: 'Stores a function definition' },
            { id: 'b', text: 'Stores the memory address of a variable' },
            { id: 'c', text: 'Declares a constant' },
            { id: 'd', text: 'Preprocesses code' }
        ],
        correctAnswer: 'b'
    },
                ],
                stats: { total: 60, completed: 0, averageScore: 0 }
            },
            {
                id: 'algorithmes',
                title: 'Algorithmes',
                description: 'Data structures and algorithms fundamentals',
                icon: 'fas fa-brain',
                color: '#7c3aed',
                questions: [
                    {
                        "id": 1,
                        "text": "Which sorting algorithm repeatedly swaps adjacent elements if they are in the wrong order?",
                        "options": [
                        { "id": "a", "text": "Selection Sort" },
                        { "id": "b", "text": "Insertion Sort" },
                        { "id": "c", "text": "Bubble Sort" },
                        { "id": "d", "text": "Merge Sort" }
                        ],
                        "correctAnswer": "c"
                        },
                        {
                        "id": 2,
                        "text": "Which search algorithm uses a Queue?",
                        "options": [
                        { "id": "a", "text": "DFS" },
                        { "id": "b", "text": "BFS" },
                        { "id": "c", "text": "Binary Search" },
                        { "id": "d", "text": "Linear Search" }
                        ],
                        "correctAnswer": "b"
                        },
                        {
                        "id": 3,
                        "text": "What is the time complexity of Bubble Sort in the worst case?",
                        "options": [
                        { "id": "a", "text": "O(n)" },
                        { "id": "b", "text": "O(log n)" },
                        { "id": "c", "text": "O(n log n)" },
                        { "id": "d", "text": "O(n²)" }
                        ],
                        "correctAnswer": "d"
                        },
                        {
                        "id": 4,
                        "text": "Which sorting algorithm always performs O(n²) comparisons regardless of input order?",
                        "options": [
                        { "id": "a", "text": "Bubble Sort" },
                        { "id": "b", "text": "Selection Sort" },
                        { "id": "c", "text": "Merge Sort" },
                        { "id": "d", "text": "Quick Sort" }
                        ],
                        "correctAnswer": "b"
                        },
                        {
                        "id": 5,
                        "text": "Which search method checks every element until it finds the target or reaches the end?",
                        "options": [
                        { "id": "a", "text": "Binary Search" },
                        { "id": "b", "text": "DFS" },
                        { "id": "c", "text": "BFS" },
                        { "id": "d", "text": "Linear Search" }
                        ],
                        "correctAnswer": "d"
                        },
                        {
                        "id": 6,
                        "text": "Which sorting algorithm is based on Divide and Conquer?",
                        "options": [
                        { "id": "a", "text": "Merge Sort" },
                        { "id": "b", "text": "Selection Sort" },
                        { "id": "c", "text": "Bubble Sort" },
                        { "id": "d", "text": "Insertion Sort" }
                        ],
                        "correctAnswer": "a"
                        },
                        {
                        "id": 7,
                        "text": "Which search algorithm works only on sorted data?",
                        "options": [
                        { "id": "a", "text": "Linear Search" },
                        { "id": "b", "text": "Binary Search" },
                        { "id": "c", "text": "DFS" },
                        { "id": "d", "text": "BFS" }
                        ],
                        "correctAnswer": "b"
                        },
                        {
                        "id": 8,
                        "text": "Which data structure does DFS use?",
                        "options": [
                        { "id": "a", "text": "Queue" },
                        { "id": "b", "text": "Stack" },
                        { "id": "c", "text": "Linked List" },
                        { "id": "d", "text": "Hash Table" }
                        ],
                        "correctAnswer": "b"
                        },
                        {
                        "id": 9,
                        "text": "Which sorting algorithm is best for nearly sorted arrays?",
                        "options": [
                        { "id": "a", "text": "Quick Sort" },
                        { "id": "b", "text": "Insertion Sort" },
                        { "id": "c", "text": "Merge Sort" },
                        { "id": "d", "text": "Heap Sort" }
                        ],
                        "correctAnswer": "b"
                        },
                        {
                        "id": 10,
                        "text": "What is the best-case time complexity of Insertion Sort?",
                        "options": [
                        { "id": "a", "text": "O(n)" },
                        { "id": "b", "text": "O(n²)" },
                        { "id": "c", "text": "O(n log n)" },
                        { "id": "d", "text": "O(1)" }
                        ],
                        "correctAnswer": "a"
                        },
                        {
                        "id": 11,
                        "text": "Which sorting algorithm selects the minimum element and swaps it with the first unsorted element?",
                        "options": [
                        { "id": "a", "text": "Selection Sort" },
                        { "id": "b", "text": "Insertion Sort" },
                        { "id": "c", "text": "Merge Sort" },
                        { "id": "d", "text": "Bubble Sort" }
                        ],
                        "correctAnswer": "a"
                        },
                        {
                        "id": 12,
                        "text": "Which algorithm guarantees finding the shortest path in an unweighted graph?",
                        "options": [
                        { "id": "a", "text": "DFS" },
                        { "id": "b", "text": "BFS" },
                        { "id": "c", "text": "Merge Sort" },
                        { "id": "d", "text": "Quick Sort" }
                        ],
                        "correctAnswer": "b"
                        },
                        {
                        "id": 13,
                        "text": "Which sorting algorithm is stable and requires extra memory?",
                        "options": [
                        { "id": "a", "text": "Merge Sort" },
                        { "id": "b", "text": "Heap Sort" },
                        { "id": "c", "text": "Quick Sort" },
                        { "id": "d", "text": "Selection Sort" }
                        ],
                        "correctAnswer": "a"
                        },
                        {
                        "id": 14,
                        "text": "Which of these is NOT a comparison-based sorting algorithm?",
                        "options": [
                        { "id": "a", "text": "Counting Sort" },
                        { "id": "b", "text": "Merge Sort" },
                        { "id": "c", "text": "Quick Sort" },
                        { "id": "d", "text": "Heap Sort" }
                        ],
                        "correctAnswer": "a"
                        },
                        {
                        "id": 15,
                        "text": "In BFS, nodes are visited in order of:",
                        "options": [
                        { "id": "a", "text": "Depth" },
                        { "id": "b", "text": "Level" },
                        { "id": "c", "text": "Random order" },
                        { "id": "d", "text": "Priority" }
                        ],
                        "correctAnswer": "b"
                        },
                        {
                        "id": 16,
                        "text": "Which sorting algorithm works by inserting each element into its correct position in the sorted part?",
                        "options": [
                        { "id": "a", "text": "Bubble Sort" },
                        { "id": "b", "text": "Insertion Sort" },
                        { "id": "c", "text": "Heap Sort" },
                        { "id": "d", "text": "Merge Sort" }
                        ],
                        "correctAnswer": "b"
                        },
                        {
                        "id": 17,
                        "text": "What is the worst-case time complexity of Merge Sort?",
                        "options": [
                        { "id": "a", "text": "O(n²)" },
                        { "id": "b", "text": "O(n log n)" },
                        { "id": "c", "text": "O(log n)" },
                        { "id": "d", "text": "O(n)" }
                        ],
                        "correctAnswer": "b"
                        },
                        {
                        "id": 18,
                        "text": "Which search algorithm explores as far as possible along each branch before backtracking?",
                        "options": [
                        { "id": "a", "text": "BFS" },
                        { "id": "b", "text": "DFS" },
                        { "id": "c", "text": "Binary Search" },
                        { "id": "d", "text": "Linear Search" }
                        ],
                        "correctAnswer": "b"
                        },
                        {
                        "id": 19,
                        "text": "Which sorting algorithm is known for “bubbling up” the largest element to the end?",
                        "options": [
                        { "id": "a", "text": "Bubble Sort" },
                        { "id": "b", "text": "Merge Sort" },
                        { "id": "c", "text": "Heap Sort" },
                        { "id": "d", "text": "Selection Sort" }
                        ],
                        "correctAnswer": "a"
                        },
                        {
                        "id": 20,
                        "text": "What is the auxiliary space complexity of Merge Sort?",
                        "options": [
                        { "id": "a", "text": "O(1)" },
                        { "id": "b", "text": "O(log n)" },
                        { "id": "c", "text": "O(n)" },
                        { "id": "d", "text": "O(n²)" }
                        ],
                        "correctAnswer": "c"
                        },
                        {
                        "id": 21,
                        "text": "Which sorting algorithm builds a heap and repeatedly extracts the maximum?",
                        "options": [
                        { "id": "a", "text": "Heap Sort" },
                        { "id": "b", "text": "Merge Sort" },
                        { "id": "c", "text": "Quick Sort" },
                        { "id": "d", "text": "Insertion Sort" }
                        ],
                        "correctAnswer": "a"
                        },
                        {
                        "id": 22,
                        "text": "Which search algorithm uses recursion naturally?",
                        "options": [
                        { "id": "a", "text": "BFS" },
                        { "id": "b", "text": "DFS" },
                        { "id": "c", "text": "Binary Search" },
                        { "id": "d", "text": "Both b and c" }
                        ],
                        "correctAnswer": "d"
                        },
                        {
                        "id": 23,
                        "text": "Which sorting algorithm is the fastest on average for large datasets if implemented well?",
                        "options": [
                        { "id": "a", "text": "Bubble Sort" },
                        { "id": "b", "text": "Quick Sort" },
                        { "id": "c", "text": "Insertion Sort" },
                        { "id": "d", "text": "Selection Sort" }
                        ],
                        "correctAnswer": "b"
                        },
                        {
                        "id": 24,
                        "text": "Which search algorithm divides the array into halves to find the target?",
                        "options": [
                        { "id": "a", "text": "DFS" },
                        { "id": "b", "text": "BFS" },
                        { "id": "c", "text": "Binary Search" },
                        { "id": "d", "text": "Linear Search" }
                        ],
                        "correctAnswer": "c"
                        },
                        {
                        "id": 25,
                        "text": "Which sorting algorithm is preferred when memory is very limited?",
                        "options": [
                        { "id": "a", "text": "Merge Sort" },
                        { "id": "b", "text": "Quick Sort" },
                        { "id": "c", "text": "Counting Sort" },
                        { "id": "d", "text": "Radix Sort" }
                        ],
                        "correctAnswer": "b"
                        },
                        {
                            "id": 26,
                            "text": "Which of the following sorting algorithms is NOT in-place by default?",
                            "options": [
                                { "id": "a", "text": "Quick Sort" },
                                { "id": "b", "text": "Merge Sort" },
                                { "id": "c", "text": "Heap Sort" },
                                { "id": "d", "text": "Insertion Sort" }
                            ],
                            "correctAnswer": "b"
                        },
                        {
                            "id": 27,
                            "text": "Which search algorithm is guaranteed to visit all vertices in a connected graph?",
                            "options": [
                                { "id": "a", "text": "DFS" },
                                { "id": "b", "text": "BFS" },
                                { "id": "c", "text": "Both a and b" },
                                { "id": "d", "text": "None of the above" }
                            ],
                            "correctAnswer": "c"
                        },
                        {
                            "id": 28,
                            "text": "What is the time complexity of BFS in a graph with V vertices and E edges?",
                            "options": [
                                { "id": "a", "text": "O(V)" },
                                { "id": "b", "text": "O(E)" },
                                { "id": "c", "text": "O(V + E)" },
                                { "id": "d", "text": "O(V × E)" }
                            ],
                            "correctAnswer": "c"
                        },
                        {
                            "id": 29,
                            "text": "Which sorting algorithm’s performance depends heavily on the choice of pivot?",
                            "options": [
                                { "id": "a", "text": "Merge Sort" },
                                { "id": "b", "text": "Quick Sort" },
                                { "id": "c", "text": "Heap Sort" },
                                { "id": "d", "text": "Counting Sort" }
                            ],
                            "correctAnswer": "b"
                        },
                        {
                            "id": 30,
                            "text": "Which of these is a stable sorting algorithm?",
                            "options": [
                                { "id": "a", "text": "Heap Sort" },
                                { "id": "b", "text": "Merge Sort" },
                                { "id": "c", "text": "Quick Sort" },
                                { "id": "d", "text": "Selection Sort" }
                            ],
                            "correctAnswer": "b"
                        },
                        {
                            "id": 31,
                            "text": "Which searching algorithm is most suitable for traversing a maze to find the shortest path?",
                            "options": [
                                { "id": "a", "text": "DFS" },
                                { "id": "b", "text": "BFS" },
                                { "id": "c", "text": "Binary Search" },
                                { "id": "d", "text": "Selection Sort" }
                            ],
                            "correctAnswer": "b"
                        },
                        {
                            "id": 32,
                            "text": "Which sorting algorithm requires the least swaps in the worst case?",
                            "options": [
                                { "id": "a", "text": "Selection Sort" },
                                { "id": "b", "text": "Insertion Sort" },
                                { "id": "c", "text": "Bubble Sort" },
                                { "id": "d", "text": "Quick Sort" }
                            ],
                            "correctAnswer": "a"
                        },
                        {
                            "id": 33,
                            "text": "What is the space complexity of Quick Sort in the average case (recursive)?",
                            "options": [
                                { "id": "a", "text": "O(n)" },
                                { "id": "b", "text": "O(log n)" },
                                { "id": "c", "text": "O(1)" },
                                { "id": "d", "text": "O(n log n)" }
                            ],
                            "correctAnswer": "b"
                        },
                        {
                            "id": 34,
                            "text": "Which search algorithm visits nodes level by level?",
                            "options": [
                                { "id": "a", "text": "DFS" },
                                { "id": "b", "text": "BFS" },
                                { "id": "c", "text": "Binary Search" },
                                { "id": "d", "text": "Depth Search" }
                            ],
                            "correctAnswer": "b"
                        },
                        {
                            "id": 35,
                            "text": "Counting Sort works best when:",
                            "options": [
                                { "id": "a", "text": "The range of numbers is small" },
                                { "id": "b", "text": "The numbers are very large" },
                                { "id": "c", "text": "The list is already sorted" },
                                { "id": "d", "text": "The data is stored in a tree" }
                            ],
                            "correctAnswer": "a"
                        },
                        {
                            "id": 36,
                            "text": "Which algorithm uses a “heapify” process?",
                            "options": [
                                { "id": "a", "text": "Merge Sort" },
                                { "id": "b", "text": "Quick Sort" },
                                { "id": "c", "text": "Heap Sort" },
                                { "id": "d", "text": "Counting Sort" }
                            ],
                            "correctAnswer": "c"
                        },
                        {
                            "id": 37,
                            "text": "Which is NOT a Divide and Conquer algorithm?",
                            "options": [
                                { "id": "a", "text": "Quick Sort" },
                                { "id": "b", "text": "Merge Sort" },
                                { "id": "c", "text": "Bubble Sort" },
                                { "id": "d", "text": "Binary Search" }
                            ],
                            "correctAnswer": "c"
                        },
                        {
                            "id": 38,
                            "text": "In DFS, if implemented using recursion, which data structure is used by the system?",
                            "options": [
                                { "id": "a", "text": "Queue" },
                                { "id": "b", "text": "Stack" },
                                { "id": "c", "text": "Array" },
                                { "id": "d", "text": "Graph" }
                            ],
                            "correctAnswer": "b"
                        },
                        {
                            "id": 39,
                            "text": "Which sorting algorithm has the same time complexity in best, worst, and average cases?",
                            "options": [
                                { "id": "a", "text": "Merge Sort" },
                                { "id": "b", "text": "Quick Sort" },
                                { "id": "c", "text": "Heap Sort" },
                                { "id": "d", "text": "Selection Sort" }
                            ],
                            "correctAnswer": "a"
                        },
                        {
                            "id": 40,
                            "text": "Which of these can achieve O(n) time complexity in the best case?",
                            "options": [
                                { "id": "a", "text": "Merge Sort" },
                                { "id": "b", "text": "Insertion Sort" },
                                { "id": "c", "text": "Heap Sort" },
                                { "id": "d", "text": "Quick Sort" }
                            ],
                            "correctAnswer": "b"
                        },
                        {
                            "id": 41,
                            "text": "Which algorithm can be made stable by modifying its swapping logic?",
                            "options": [
                                { "id": "a", "text": "Selection Sort" },
                                { "id": "b", "text": "Heap Sort" },
                                { "id": "c", "text": "Quick Sort" },
                                { "id": "d", "text": "All of the above" }
                            ],
                            "correctAnswer": "d"
                        },
                        {
                            "id": 42,
                            "text": "Which searching algorithm works efficiently on infinite streams of data?",
                            "options": [
                                { "id": "a", "text": "Binary Search" },
                                { "id": "b", "text": "Linear Search" },
                                { "id": "c", "text": "Exponential Search" },
                                { "id": "d", "text": "DFS" }
                            ],
                            "correctAnswer": "c"
                        },
                        {
                            "id": 43,
                            "text": "Which sorting algorithm is commonly used in internal (in-memory) sorting for large datasets?",
                            "options": [
                                { "id": "a", "text": "Quick Sort" },
                                { "id": "b", "text": "Bubble Sort" },
                                { "id": "c", "text": "Merge Sort" },
                                { "id": "d", "text": "Counting Sort" }
                            ],
                            "correctAnswer": "a"
                        },
                        {
                            "id": 44,
                            "text": "The auxiliary space for DFS using adjacency list representation is:",
                            "options": [
                                { "id": "a", "text": "O(V)" },
                                { "id": "b", "text": "O(V + E)" },
                                { "id": "c", "text": "O(log V)" },
                                { "id": "d", "text": "O(1)" }
                            ],
                            "correctAnswer": "b"
                        },
                        {
                            "id": 45,
                            "text": "Which of these algorithms is not comparison-based?",
                            "options": [
                                { "id": "a", "text": "Quick Sort" },
                                { "id": "b", "text": "Merge Sort" },
                                { "id": "c", "text": "Counting Sort" },
                                { "id": "d", "text": "Insertion Sort" }
                            ],
                            "correctAnswer": "c"
                        },
                        {
                            "id": 46,
                            "text": "If Quick Sort always picks the smallest element as the pivot, the time complexity becomes:",
                            "options": [
                                { "id": "a", "text": "O(n²)" },
                                { "id": "b", "text": "O(n log n)" },
                                { "id": "c", "text": "O(log n)" },
                                { "id": "d", "text": "O(n)" }
                            ],
                            "correctAnswer": "a"
                        },
                        {
                            "id": 47,
                            "text": "Which sorting algorithm divides the array into sorted and unsorted parts and picks from unsorted?",
                            "options": [
                                { "id": "a", "text": "Merge Sort" },
                                { "id": "b", "text": "Bubble Sort" },
                                { "id": "c", "text": "Selection Sort" },
                                { "id": "d", "text": "Heap Sort" }
                            ],
                            "correctAnswer": "c"
                        },
                        {
                            "id": 48,
                            "text": "Which search is optimal for finding the shortest path in a weighted graph with positive weights?",
                            "options": [
                                { "id": "a", "text": "BFS" },
                                { "id": "b", "text": "DFS" },
                                { "id": "c", "text": "Dijkstra’s Algorithm" },
                                { "id": "d", "text": "Binary Search" }
                            ],
                            "correctAnswer": "c"
                        },
                        {
                            "id": 49,
                            "text": "Which sorting method is stable and has O(n log n) complexity?",
                            "options": [
                                { "id": "a", "text": "Heap Sort" },
                                { "id": "b", "text": "Merge Sort" },
                                { "id": "c", "text": "Quick Sort" },
                                { "id": "d", "text": "Selection Sort" }
                            ],
                            "correctAnswer": "b"
                        },
                        {
                            "id": 50,
                            "text": "BFS uses which data structure?",
                            "options": [
                                { "id": "a", "text": "Queue" },
                                { "id": "b", "text": "Stack" },
                                { "id": "c", "text": "Array" },
                                { "id": "d", "text": "Priority Queue" }
                            ],
                            "correctAnswer": "a"
                        },
                        {
                            "id": 51,
                            "text": "Which sorting algorithm is the most efficient for sorting linked lists?",
                            "options": [
                                { "id": "a", "text": "Quick Sort" },
                                { "id": "b", "text": "Merge Sort" },
                                { "id": "c", "text": "Heap Sort" },
                                { "id": "d", "text": "Insertion Sort" }
                            ],
                            "correctAnswer": "b"
                        },
                        {
                            "id": 52,
                            "text": "Which search algorithm can be used to detect cycles in an undirected graph?",
                            "options": [
                                { "id": "a", "text": "BFS only" },
                                { "id": "b", "text": "DFS only" },
                                { "id": "c", "text": "Both BFS and DFS" },
                                { "id": "d", "text": "Neither BFS nor DFS" }
                            ],
                            "correctAnswer": "c"
                        },
                        {
                            "id": 53,
                            "text": "Which sorting algorithm has the lowest constant factors in practice for large datasets?",
                            "options": [
                                { "id": "a", "text": "Merge Sort" },
                                { "id": "b", "text": "Quick Sort" },
                                { "id": "c", "text": "Heap Sort" },
                                { "id": "d", "text": "Counting Sort" }
                            ],
                            "correctAnswer": "b"
                        },
                        {
                            "id": 54,
                            "text": "What is the auxiliary space complexity of recursive DFS in the worst case for a graph with V vertices?",
                            "options": [
                                { "id": "a", "text": "O(1)" },
                                { "id": "b", "text": "O(V)" },
                                { "id": "c", "text": "O(E)" },
                                { "id": "d", "text": "O(V + E)" }
                            ],
                            "correctAnswer": "b"
                        },
                        {
                            "id": 55,
                            "text": "Which sorting algorithm is guaranteed O(n log n) time and stable behavior?",
                            "options": [
                                { "id": "a", "text": "Quick Sort" },
                                { "id": "b", "text": "Heap Sort" },
                                { "id": "c", "text": "Merge Sort" },
                                { "id": "d", "text": "Selection Sort" }
                            ],
                            "correctAnswer": "c"
                        },
                        {
                            "id": 56,
                            "text": "Which algorithm is not suitable for linked list sorting due to poor performance?",
                            "options": [
                                { "id": "a", "text": "Merge Sort" },
                                { "id": "b", "text": "Quick Sort" },
                                { "id": "c", "text": "Insertion Sort" },
                                { "id": "d", "text": "Bubble Sort" }
                            ],
                            "correctAnswer": "b"
                        },
                        {
                            "id": 57,
                            "text": "Which search algorithm can be used to check graph connectivity efficiently?",
                            "options": [
                                { "id": "a", "text": "DFS" },
                                { "id": "b", "text": "BFS" },
                                { "id": "c", "text": "Both a and b" },
                                { "id": "d", "text": "None of the above" }
                            ],
                            "correctAnswer": "c"
                        },
                        {
                            "id": 58,
                            "text": "In Quick Sort, choosing a random pivot helps to:",
                            "options": [
                                { "id": "a", "text": "Reduce memory usage" },
                                { "id": "b", "text": "Avoid worst-case time complexity" },
                                { "id": "c", "text": "Increase comparisons" },
                                { "id": "d", "text": "Make it stable" }
                            ],
                            "correctAnswer": "b"
                        },
                        {
                            "id": 59,
                            "text": "Which sorting algorithm is best for external sorting (sorting large files on disk)?",
                            "options": [
                                { "id": "a", "text": "Quick Sort" },
                                { "id": "b", "text": "Merge Sort" },
                                { "id": "c", "text": "Heap Sort" },
                                { "id": "d", "text": "Bubble Sort" }
                            ],
                            "correctAnswer": "b"
                        },
                        {
                            "id": 60,
                            "text": "If a graph has V vertices and E edges, the time complexity of DFS is:",
                            "options": [
                                { "id": "a", "text": "O(V)" },
                                { "id": "b", "text": "O(V + E)" },
                                { "id": "c", "text": "O(V × E)" },
                                { "id": "d", "text": "O(E²)" }
                            ],
                            "correctAnswer": "b"
                        },
                        {
                            "id": 61,
                            "text": "Which algorithm can achieve O(n) time complexity for sorting when the data is uniformly distributed?",
                            "options": [
                                { "id": "a", "text": "Quick Sort" },
                                { "id": "b", "text": "Radix Sort" },
                                { "id": "c", "text": "Heap Sort" },
                                { "id": "d", "text": "Merge Sort" }
                            ],
                            "correctAnswer": "b"
                        },
                        {
                            "id": 62,
                            "text": "Which of the following is NOT a characteristic of BFS?",
                            "options": [
                                { "id": "a", "text": "Uses Queue" },
                                { "id": "b", "text": "Good for shortest path in unweighted graph" },
                                { "id": "c", "text": "May use recursion" },
                                { "id": "d", "text": "Visits level by level" }
                            ],
                            "correctAnswer": "c"
                        },
                        {
                            "id": 63,
                            "text": "In-place algorithms generally have space complexity:",
                            "options": [
                                { "id": "a", "text": "O(1)" },
                                { "id": "b", "text": "O(log n)" },
                                { "id": "c", "text": "O(n)" },
                                { "id": "d", "text": "O(n log n)" }
                            ],
                            "correctAnswer": "a"
                        },
                        {
                            "id": 64,
                            "text": "Which sorting algorithm works well when the input is a combination of sorted and unsorted data blocks?",
                            "options": [
                                { "id": "a", "text": "Quick Sort" },
                                { "id": "b", "text": "Merge Sort" },
                                { "id": "c", "text": "Tim Sort" },
                                { "id": "d", "text": "Heap Sort" }
                            ],
                            "correctAnswer": "c"
                        },
                        {
                            "id": 65,
                            "text": "Which searching method is best for extremely large but sorted datasets stored on disk?",
                            "options": [
                                { "id": "a", "text": "Linear Search" },
                                { "id": "b", "text": "Jump Search" },
                                { "id": "c", "text": "BFS" },
                                { "id": "d", "text": "DFS" }
                            ],
                            "correctAnswer": "b"
                        },
                        {
                            "id": 66,
                            "text": "Which sorting algorithm is based on building a binary tree structure?",
                            "options": [
                                { "id": "a", "text": "Quick Sort" },
                                { "id": "b", "text": "Heap Sort" },
                                { "id": "c", "text": "Merge Sort" },
                                { "id": "d", "text": "Counting Sort" }
                            ],
                            "correctAnswer": "b"
                        },
                        {
                            "id": 67,
                            "text": "The recurrence relation for Merge Sort’s time complexity is:",
                            "options": [
                                { "id": "a", "text": "T(n) = T(n - 1) + O(1)" },
                                { "id": "b", "text": "T(n) = 2T(n/2) + O(n)" },
                                { "id": "c", "text": "T(n) = T(n/2) + O(1)" },
                                { "id": "d", "text": "T(n) = T(n) + O(1)" }
                            ],
                            "correctAnswer": "b"
                        },
                        {
                            "id": 68,
                            "text": "Which sorting algorithm is generally fastest for small datasets?",
                            "options": [
                                { "id": "a", "text": "Bubble Sort" },
                                { "id": "b", "text": "Insertion Sort" },
                                { "id": "c", "text": "Heap Sort" },
                                { "id": "d", "text": "Merge Sort" }
                            ],
                            "correctAnswer": "b"
                        },
                        {
                            "id": 69,
                            "text": "Which search algorithm will find the solution faster if the solution is near the start node in a graph?",
                            "options": [
                                { "id": "a", "text": "BFS" },
                                { "id": "b", "text": "DFS" },
                                { "id": "c", "text": "Binary Search" },
                                { "id": "d", "text": "Radix Search" }
                            ],
                            "correctAnswer": "a"
                        },
                        {
                            "id": 70,
                            "text": "Which of the following statements is FALSE about Quick Sort?",
                            "options": [
                                { "id": "a", "text": "It is an in-place algorithm" },
                                { "id": "b", "text": "It is stable by default" },
                                { "id": "c", "text": "It has O(n log n) average complexity" },
                                { "id": "d", "text": "Pivot choice affects performance" }
                            ],
                            "correctAnswer": "b"
                        },
                        {
                            "id": 71,
                            "text": "Which algorithm sorts elements digit by digit?",
                            "options": [
                                { "id": "a", "text": "Counting Sort" },
                                { "id": "b", "text": "Radix Sort" },
                                { "id": "c", "text": "Heap Sort" },
                                { "id": "d", "text": "Quick Sort" }
                            ],
                            "correctAnswer": "b"
                        },
                        {
                            "id": 72,
                            "text": "Which graph traversal algorithm is better suited for topological sorting in DAGs?",
                            "options": [
                                { "id": "a", "text": "BFS (Kahn’s Algorithm)" },
                                { "id": "b", "text": "DFS" },
                                { "id": "c", "text": "Both a and b" },
                                { "id": "d", "text": "None of the above" }
                            ],
                            "correctAnswer": "c"
                        },
                        {
                            "id": 73,
                            "text": "In Heap Sort, after extracting the maximum element, what is the next step?",
                            "options": [
                                { "id": "a", "text": "Insert a new element" },
                                { "id": "b", "text": "Heapify the root" },
                                { "id": "c", "text": "Merge the heaps" },
                                { "id": "d", "text": "Rebuild from scratch" }
                            ],
                            "correctAnswer": "b"
                        },
                        {
                            "id": 74,
                            "text": "Which sorting algorithm performs the least comparisons in the best case scenario?",
                            "options": [
                                { "id": "a", "text": "Insertion Sort" },
                                { "id": "b", "text": "Merge Sort" },
                                { "id": "c", "text": "Quick Sort" },
                                { "id": "d", "text": "Selection Sort" }
                            ],
                            "correctAnswer": "a"
                        },
                        {
                            "id": 75,
                            "text": "Which search algorithm is optimal for unweighted shortest path AND can be modified to handle weights?",
                            "options": [
                                { "id": "a", "text": "DFS" },
                                { "id": "b", "text": "BFS → Dijkstra’s modification" },
                                { "id": "c", "text": "Binary Search" },
                                { "id": "d", "text": "Jump Search" }
                            ],
                            "correctAnswer": "b"
                        },
                ],
                stats: { total: 75, completed: 0, averageScore: 0 }
            },
            {
                id: 'flowchart',
                title: 'Flowchart',
                description: 'Flowchart symbols and diagramming concepts',
                icon: 'fas fa-project-diagram',
                color: '#10b981',
                questions: [
                    {
                        "id": 1,
                        "text": "Which symbol is used to represent the start or end of a flowchart?",
                        "options": [
                            { "id": "a", "text": "Rectangle" },
                            { "id": "b", "text": "Diamond" },
                            { "id": "c", "text": "Oval" },
                            { "id": "d", "text": "Parallelogram" }
                        ],
                        "correctAnswer": "c"
                    },
                    {
                        "id": 2,
                        "text": "In a flowchart, which shape represents a decision point?",
                        "options": [
                            { "id": "a", "text": "Oval" },
                            { "id": "b", "text": "Rectangle" },
                            { "id": "c", "text": "Diamond" },
                            { "id": "d", "text": "Circle" }
                        ],
                        "correctAnswer": "c"
                    },
                    {
                        "id": 3,
                        "text": "Which shape is used for an input/output operation in a flowchart?",
                        "options": [
                            { "id": "a", "text": "Rectangle" },
                            { "id": "b", "text": "Parallelogram" },
                            { "id": "c", "text": "Diamond" },
                            { "id": "d", "text": "Oval" }
                        ],
                        "correctAnswer": "b"
                    },
                    {
                        "id": 4,
                        "text": "Which shape is used for a process step in a flowchart?",
                        "options": [
                            { "id": "a", "text": "Rectangle" },
                            { "id": "b", "text": "Diamond" },
                            { "id": "c", "text": "Oval" },
                            { "id": "d", "text": "Parallelogram" }
                        ],
                        "correctAnswer": "a"
                    },
                    {
                        "id": 5,
                        "text": "The arrows in a flowchart are used to:",
                        "options": [
                            { "id": "a", "text": "Represent decision making" },
                            { "id": "b", "text": "Show start and end points" },
                            { "id": "c", "text": "Show direction of process flow" },
                            { "id": "d", "text": "Indicate data type" }
                        ],
                        "correctAnswer": "c"
                    },
                    {
                        "id": 6,
                        "text": "What is the main purpose of a flowchart?",
                        "options": [
                            { "id": "a", "text": "Writing code directly" },
                            { "id": "b", "text": "Representing algorithm logic visually" },
                            { "id": "c", "text": "Checking syntax" },
                            { "id": "d", "text": "Debugging" }
                        ],
                        "correctAnswer": "b"
                    },
                    {
                        "id": 7,
                        "text": "In a decision symbol (diamond), the outgoing arrows are usually labeled:",
                        "options": [
                            { "id": "a", "text": "Start / End" },
                            { "id": "b", "text": "True / False or Yes / No" },
                            { "id": "c", "text": "Input / Output" },
                            { "id": "d", "text": "Process / Data" }
                        ],
                        "correctAnswer": "b"
                    },
                    {
                        "id": 8,
                        "text": "Which symbol is used to represent connecting points when the flowchart continues elsewhere?",
                        "options": [
                            { "id": "a", "text": "Circle" },
                            { "id": "b", "text": "Rectangle" },
                            { "id": "c", "text": "Diamond" },
                            { "id": "d", "text": "Parallelogram" }
                        ],
                        "correctAnswer": "a"
                    },
                    {
                        "id": 9,
                        "text": "Which shape in a flowchart indicates the display of a result?",
                        "options": [
                            { "id": "a", "text": "Oval" },
                            { "id": "b", "text": "Parallelogram" },
                            { "id": "c", "text": "Diamond" },
                            { "id": "d", "text": "Rectangle" }
                        ],
                        "correctAnswer": "b"
                    },
                    {
                        "id": 10,
                        "text": "Which is NOT a common flowchart symbol?",
                        "options": [
                            { "id": "a", "text": "Oval" },
                            { "id": "b", "text": "Triangle" },
                            { "id": "c", "text": "Diamond" },
                            { "id": "d", "text": "Parallelogram" }
                        ],
                        "correctAnswer": "b"
                    },
                    {
                        "id": 11,
                        "text": "The rectangle in a flowchart represents:",
                        "options": [
                            { "id": "a", "text": "Start or End" },
                            { "id": "b", "text": "Decision" },
                            { "id": "c", "text": "Process" },
                            { "id": "d", "text": "Input/Output" }
                        ],
                        "correctAnswer": "c"
                    },
                    {
                        "id": 12,
                        "text": "What should be placed at the very beginning of any flowchart?",
                        "options": [
                            { "id": "a", "text": "Process" },
                            { "id": "b", "text": "Decision" },
                            { "id": "c", "text": "Start symbol" },
                            { "id": "d", "text": "Input/Output" }
                        ],
                        "correctAnswer": "c"
                    },
                    {
                        "id": 13,
                        "text": "Which flowchart symbol is used for mathematical calculations?",
                        "options": [
                            { "id": "a", "text": "Oval" },
                            { "id": "b", "text": "Rectangle" },
                            { "id": "c", "text": "Diamond" },
                            { "id": "d", "text": "Parallelogram" }
                        ],
                        "correctAnswer": "b"
                    },
                    {
                        "id": 14,
                        "text": "The parallelogram in a flowchart is typically used for:",
                        "options": [
                            { "id": "a", "text": "Process steps" },
                            { "id": "b", "text": "Start or End" },
                            { "id": "c", "text": "Input or Output" },
                            { "id": "d", "text": "Decision making" }
                        ],
                        "correctAnswer": "c"
                    },
                    {
                        "id": 15,
                        "text": "In a flowchart, if a decision symbol has two branches, they usually represent:",
                        "options": [
                            { "id": "a", "text": "Two different processes" },
                            { "id": "b", "text": "True and False outcomes" },
                            { "id": "c", "text": "Two start points" },
                            { "id": "d", "text": "Two input operations" }
                        ],
                        "correctAnswer": "b"
                    },
                    {
                        "id": 16,
                        "text": "Which of the following is the correct order in a flowchart?",
                        "options": [
                            { "id": "a", "text": "Start → Input → Decision → Process → End" },
                            { "id": "b", "text": "Start → Input → Process → Decision → Output → End" },
                            { "id": "c", "text": "Input → Process → Start → End" },
                            { "id": "d", "text": "Start → Output → Decision → End" }
                        ],
                        "correctAnswer": "b"
                    },
                    {
                        "id": 17,
                        "text": "Which symbol is used to merge multiple flows into one in a flowchart?",
                        "options": [
                            { "id": "a", "text": "Diamond" },
                            { "id": "b", "text": "Connector (Circle)" },
                            { "id": "c", "text": "Parallelogram" },
                            { "id": "d", "text": "Rectangle" }
                        ],
                        "correctAnswer": "b"
                    },
                    {
                        "id": 18,
                        "text": "The flowchart symbol for looping back to an earlier step is represented by:",
                        "options": [
                            { "id": "a", "text": "Oval" },
                            { "id": "b", "text": "Arrow connecting to a previous step" },
                            { "id": "c", "text": "Diamond only" },
                            { "id": "d", "text": "Parallelogram" }
                        ],
                        "correctAnswer": "b"
                    },
                    {
                        "id": 19,
                        "text": "In a flowchart, multiple decision points may lead to:",
                        "options": [
                            { "id": "a", "text": "Infinite loops" },
                            { "id": "b", "text": "Multiple outputs" },
                            { "id": "c", "text": "A single end point" },
                            { "id": "d", "text": "All of the above" }
                        ],
                        "correctAnswer": "d"
                    },
                    {
                        "id": 20,
                        "text": "Which shape is always used to start and end a flowchart?",
                        "options": [
                            { "id": "a", "text": "Diamond" },
                            { "id": "b", "text": "Rectangle" },
                            { "id": "c", "text": "Parallelogram" },
                            { "id": "d", "text": "Oval" }
                        ],
                        "correctAnswer": "d"
                    },
                    {
                        "id": 21,
                        "text": "What is the standard flow direction in most flowcharts?",
                        "options": [
                            { "id": "a", "text": "Right to left" },
                            { "id": "b", "text": "Top to bottom" },
                            { "id": "c", "text": "Bottom to top" },
                            { "id": "d", "text": "Diagonal" }
                        ],
                        "correctAnswer": "b"
                    },
                    {
                        "id": 22,
                        "text": "Which symbol is used when a process is pre-defined elsewhere?",
                        "options": [
                            { "id": "a", "text": "Predefined process (double-struck rectangle)" },
                            { "id": "b", "text": "Diamond" },
                            { "id": "c", "text": "Oval" },
                            { "id": "d", "text": "Parallelogram" }
                        ],
                        "correctAnswer": "a"
                    },
                    {
                        "id": 23,
                        "text": "The main advantage of using a flowchart before coding is:",
                        "options": [
                            { "id": "a", "text": "Saving time debugging later" },
                            { "id": "b", "text": "Reducing file size" },
                            { "id": "c", "text": "Increasing program speed automatically" },
                            { "id": "d", "text": "Avoiding syntax errors" }
                        ],
                        "correctAnswer": "a"
                    },
                    {
                        "id": 24,
                        "text": "Which of these is TRUE about a decision symbol in a flowchart?",
                        "options": [
                            { "id": "a", "text": "It must always have two exits" },
                            { "id": "b", "text": "It always comes before the process symbol" },
                            { "id": "c", "text": "It represents the start" },
                            { "id": "d", "text": "It cannot be connected to arrows" }
                        ],
                        "correctAnswer": "a"
                    },
                    {
                        "id": 25,
                        "text": "In programming, a flowchart is closest to which concept?",
                        "options": [
                            { "id": "a", "text": "Class diagram" },
                            { "id": "b", "text": "Algorithm" },
                            { "id": "c", "text": "Database schema" },
                            { "id": "d", "text": "Variable declaration" }
                        ],
                        "correctAnswer": "b"
                    }
                ],
                stats: { total: 25, completed: 0, averageScore: 0 }
            }
        ];
    }

    async init() {
        // Load topics from storage or use defaults
        const savedTopics = localStorage.getItem('techquiz_topics');
        if (savedTopics) {
            this.topics = JSON.parse(savedTopics);
        }
        
        // Update general exam stats with actual question count
        const generalTopic = this.topics.find(topic => topic.isGeneral);
        if (generalTopic) {
            const totalQuestions = this.getAllQuestionsForGeneral().length;
            generalTopic.stats.total = totalQuestions;
        }
        
        this.renderTopics();
    }

    renderTopics() {
        const grid = document.getElementById('topics-grid');
        if (!grid) return;

        grid.innerHTML = this.topics.map(topic => `
            <div class="topic-card ${topic.isGeneral ? 'general-exam' : ''}" data-topic-id="${topic.id}">
                <div class="topic-icon" style="color: ${topic.color}">
                    <i class="${topic.icon}"></i>
                </div>
                <h3 class="topic-title">${topic.title}</h3>
                <p class="topic-description">${topic.description}</p>
                <div class="topic-stats">
                    <span>${topic.stats.total} questions</span>
                    <span>${topic.stats.completed} completed</span>
                </div>
                <button class="btn btn-start-exam">
                    <i class="fas fa-play"></i>
                    Start Exam
                </button>
            </div>
        `).join('');
    }

    getTopic(topicId) {
        return this.topics.find(topic => topic.id === topicId);
    }

    getAllTopics() {
        return this.topics;
    }

    updateTopicStats(topicId, stats) {
        const topic = this.getTopic(topicId);
        if (topic) {
            topic.stats = { ...topic.stats, ...stats };
            this.saveTopics();
            this.renderTopics();
        }
    }

    saveTopics() {
        localStorage.setItem('techquiz_topics', JSON.stringify(this.topics));
    }

    getTopicQuestions(topicId) {
        const topic = this.getTopic(topicId);
        return topic ? topic.questions : [];
    }

    addQuestionsToTopic(topicId, questions) {
        const topic = this.getTopic(topicId);
        if (topic) {
            topic.questions = [...topic.questions, ...questions];
            topic.stats.total = topic.questions.length;
            this.saveTopics();
        }
    }

    // Get all questions for general exam
    getAllQuestionsForGeneral() {
        const allQuestions = [];
        this.topics.forEach(topic => {
            if (!topic.isGeneral && topic.questions.length > 0) {
                allQuestions.push(...topic.questions);
            }
        });
        return allQuestions;
    }
}





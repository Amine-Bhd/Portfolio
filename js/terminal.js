// Terminal typing and command handling functionality
const terminalText = document.getElementById('typing-text');
const commandLine = document.getElementById('command-line');
const commandInput = document.getElementById('command-input');

// Terminal content data
const messages = [
    { text: "Initializing system...", delay: 50 },
    { text: "Loading profile data...", delay: 50 },
    { text: "██████████████ 100%", delay: 30, style: "color: #0ff" },
    { text: "\n", delay: 200 },
    { text: "> Welcome to CYBER TERMINAL // ACCESS GRANTED", delay: 10, style: "color: #0f0; font-weight: bold" },
    { text: "\n\n", delay: 100 },
    { text: ">> SYSTEM USER PROFILE <<", delay: 10, style: "color: #b19cd9; text-decoration: underline" },
    { text: "\n", delay: 100 },
    { text: "> NAME: ", delay: 20 },
    { text: "BOUHADDOU AMINE", delay: 100, style: "color: #0ff; font-weight: bold" },
    { text: "", delay: 100, style: "color: #0f0; font-weight: bold" },
    { text: "\n", delay: 50 },
    { text: "> TITLE: ", delay: 20 },
    { text: "SOFTWARE ENGINEER", delay: 50, style: "color: #0ff" },
    { text: "\n", delay: 50 },
    { text: "> LOCATION: ", delay: 20 },
    { text: "MOROCCO", delay: 70, style: "color: #0ff" },
    { text: "\n", delay: 50 },
    { text: "> STATUS: ", delay: 20 },
    { text: "ACTIVE // FINAL YEAR STUDENT", delay: 50, style: "color: #0f0" },
    { text: "\n\n", delay: 100 },
    { text: ">> SKILL MATRIX <<", delay: 10, style: "color: #b19cd9; text-decoration: underline" },
    { text: "\n", delay: 100 },
    { text: "> PYTHON: ", delay: 20 },
    { text: "█████████▋ 90%", delay: 30, style: "color: #0ff" },
    { text: "\n", delay: 50 },
    { text: "> C#: ", delay: 20 },
    { text: "████████▊ 85%", delay: 30, style: "color: #0ff" },
    { text: "\n", delay: 50 },
    { text: "> PHP: ", delay: 20 },
    { text: "████████▋ 85%", delay: 30, style: "color: #0ff" },
    { text: "\n", delay: 50 },
    { text: "> HTML/CSS: ", delay: 20 },
    { text: "████████▊ 88%", delay: 30, style: "color: #0ff" },
    { text: "\n", delay: 50 },
    { text: "> DATA SCIENCE: ", delay: 20 },
    { text: "██████▋▍ 75%", delay: 30, style: "color: #0ff" },
    { text: "\n", delay: 50 },
    { text: "> WORDPRESS: ", delay: 20 },
    { text: "██████▋▋ 80%", delay: 30, style: "color: #0ff" },
    { text: "\n\n", delay: 100 },
    { text: ">> EDUCATION <<", delay: 10, style: "color: #b19cd9; text-decoration: underline" },
    { text: "\n", delay: 100 },
    { text: "> [2022-2025] BACHELOR IN SOFTWARE ENGINEERING - ESRMI", delay: 30 },
    { text: "\n", delay: 50 },
    { text: "> [2018-2021] BACHELOR IN NEUROSCIENCE - MOHAMMED V UNIVERSITY", delay: 30 },
    { text: "\n", delay: 50 },
    { text: "> [2016] BACCALAUREATE IN SCIENCE - RABAT", delay: 30 },
    { text: "\n\n", delay: 100 },
    { text: ">> PROJECT HISTORY <<", delay: 10, style: "color: #b19cd9; text-decoration: underline" },
    { text: "\n", delay: 100 },
    { text: "> [2023] E-COMMERCE WEBSITES - WORDPRESS DEVELOPER", delay: 30 },
    { text: "\n", delay: 50 },
    { text: "> [2023] NETFLIX MOVIES ANALYSIS - DATA SCIENTIST", delay: 30 },
    { text: "\n", delay: 50 },
    { text: "> [2024] CRUD APPLICATIONS - FULL STACK DEVELOPER", delay: 30 },
    { text: "\n\n", delay: 100 },
    { text: ">> CONTACT POINTS <<", delay: 10, style: "color: #b19cd9; text-decoration: underline" },
    { text: "\n", delay: 100 },
    { text: "> EMAIL: ", delay: 20 },
    { text: "aminebouhaddou1@gmail.com", delay: 30, style: "color: #0ff" },
    { text: "\n", delay: 50 },
    { text: "> GITHUB: ", delay: 20 },
    { text: "github.com/Amine-Bhd", delay: 30, style: "color: #0ff" },
    { text: "\n", delay: 50 },
    { text: "> LINKEDIN: ", delay: 20 },
    { text: "linkedin.com/in/amine-bouhaddou-50aa96304", delay: 30, style: "color: #0ff" },
    { text: "\n\n", delay: 100 },
    { text: "> Type 'help' for available commands", delay: 30, style: "color: #0f0" },
    { text: "\n", delay: 50 },
];

let currentMessageIndex = 0;
let currentCharIndex = 0;
let isTyping = true;

// Command processing function
function processCommand(command) {
    terminalText.appendChild(document.createElement('br'));
    
    const prompt = document.createElement('span');
    prompt.textContent = '> ';
    prompt.style.color = '#0f0';
    terminalText.appendChild(prompt);
    
    const cmdText = document.createElement('span');
    cmdText.textContent = command;
    cmdText.style.color = '#e0e0e0';
    terminalText.appendChild(cmdText);
    
    terminalText.appendChild(document.createElement('br'));
    
    const response = document.createElement('div');
    response.style.marginTop = '10px';
    
    command = command.toLowerCase().trim();
    
    switch(command) {
        case 'help':
            response.innerHTML = `Available commands:<br>
            - <span class="highlight">about</span>: Show detailed profile<br>
            - <span class="highlight">skills</span>: List technical skills<br>
            - <span class="highlight">education</span>: Show educational background<br>
            - <span class="highlight">projects</span>: Show project portfolio<br>
            - <span class="highlight">contact</span>: Show contact information<br>
            - <span class="highlight">languages</span>: Show language proficiency<br>
            - <span class="highlight">clear</span>: Clear the terminal<br>
            - <span class="highlight">exit</span>: Close terminal (just kidding)`;
            break;
            
        case 'about':
            response.innerHTML = `// SYSTEM USER PROFILE //<br><br>
            <span class="highlight">BOUHADDOU AMINE</span> is a software engineer with diverse expertise in:<br>
            - Software Development<br>
            - Data Science<br>
            - E-Commerce Solutions<br>
            - Web Development<br><br>
            Currently pursuing a Bachelor's degree in Software Engineering (Final Year) at ESRmi with a background in Neuroscience from Mohammed V University.`;
            break;
            
        case 'skills':
            response.innerHTML = `>> TECHNICAL PROWESS <<<br><br>
            <div class="skill-bar"><span class="skill-name">Python:</span> <span class="skill-level" style="width: 90%"></span></div>
            <div class="skill-bar"><span class="skill-name">C#:</span> <span class="skill-level" style="width: 85%"></span></div>
            <div class="skill-bar"><span class="skill-name">PHP:</span> <span class="skill-level" style="width: 85%"></span></div>
            <div class="skill-bar"><span class="skill-name">HTML/CSS:</span> <span class="skill-level" style="width: 88%"></span></div>
            <div class="skill-bar"><span class="skill-name">WordPress:</span> <span class="skill-level" style="width: 80%"></span></div>
            <div class="skill-bar"><span class="skill-name">Data Science:</span> <span class="skill-level" style="width: 75%"></span></div><br>
            <span class="highlight">TOOLS & TECHNOLOGIES:</span><br>
            - Database Management<br>
            - Version Control Systems<br>
            - Statistical Analysis<br>
            - Data Visualization`;
            break;
            
        case 'education':
            response.innerHTML = `>> EDUCATIONAL BACKGROUND <<<br><br>
            <span class="highlight">BACHELOR IN SOFTWARE ENGINEERING</span> (2022 - Present)<br>
            ESRmi<br>
            - Currently in final year, specializing in software development<br>
            - Expected graduation: 2025<br><br>
            <span class="highlight">BACHELOR IN NEUROSCIENCE</span> (2018 - 2021)<br>
            Mohammed V University in Rabat<br>
            - Comprehensive study of neuroscience fundamentals<br>
            - Successfully completed degree requirements<br><br>
            <span class="highlight">BACCALAUREATE IN SCIENCE</span> (2016)<br>
            <span class="highlight">PROFESSIONAL DEVELOPMENT:</span><br>
            Associate Data Scientist Certification (In Progress)<br>
            - DataCamp<br>
            - Completed 40% of comprehensive Python-based data science curriculum`;
            break;
            
        case 'projects':
            response.innerHTML = `>> PROJECT PORTFOLIO <<<br><br>
            <span class="highlight">E-COMMERCE WEBSITES</span><br>
            - Developed two complete e-commerce platforms using WordPress<br>
            - Implemented custom features and responsive design<br>
            - Managed product catalogs and payment integration<br><br>
            <span class="highlight">DATA SCIENCE PROJECTS</span><br>
            1. Netflix Movies Analysis<br>
            - Conducted data analysis on Netflix movie trends<br>
            - Applied statistical methods for pattern recognition<br><br>
            2. NYC Public School Test Results<br>
            - Analyzed academic performance metrics<br>
            - Created visualizations to represent educational trends<br><br>
            3. Nobel Prize Winners Analysis<br>
            - Developed interactive visualizations of historical data<br>
            - Identified patterns in laureate demographics<br><br>
            <span class="highlight">SOFTWARE DEVELOPMENT</span><br>
            1. CRUD Applications<br>
            - Developed form-based application using C#<br>
            - Created web-based CRUD system using HTML/CSS/PHP<br><br>
            2. Tic-Tac-Toe CLI Game<br>
            - Developed command-line game from scratch using Python<br>
            - Implemented game logic and user interface`;
            break;
            
        case 'contact':
            response.innerHTML = `>> SECURE CONTACT CHANNELS <<<br><br>
            <div class="contact-item">Email: <a href="mailto:aminebouhaddou1@gmail.com">aminebouhaddou1@gmail.com</a></div>
            <div class="contact-item">GitHub: <a href="https://github.com/Amine-Bhd" target="_blank">github.com/Amine-Bhd</a></div>
            <div class="contact-item">LinkedIn: <a href="https://linkedin.com/in/amine-bouhaddou-50aa96304" target="_blank">linkedin.com/in/amine-bouhaddou-50aa96304</a></div>`;
            break;
            
        case 'languages':
            response.innerHTML = `>> LANGUAGE PROFICIENCY <<<br><br>
            <div class="skill-bar"><span class="skill-name">Arabic:</span> <span class="skill-level" style="width: 100%"></span> <span style="color: #0ff">Native</span></div>
            <div class="skill-bar"><span class="skill-name">French:</span> <span class="skill-level" style="width: 95%"></span> <span style="color: #0ff">Fluent</span></div>
            <div class="skill-bar"><span class="skill-name">English:</span> <span class="skill-level" style="width: 90%"></span> <span style="color: #0ff">Fluent</span></div>`;
            break;
            
        case 'clear':
            terminalText.innerHTML = '';
            commandInput.value = '';
            return;
            
        case 'exit':
            response.innerHTML = `<span style="color: #f44">Access Denied: Terminal cannot be closed from this session.</span>`;
            break;
            
        default:
            response.innerHTML = `<span style="color: #f44">Command not found: ${command}</span><br>
            Type <span class="highlight">'help'</span> for available commands.`;
    }
    
    terminalText.appendChild(response);
    terminalText.appendChild(document.createElement('br'));
    commandLine.scrollIntoView();
}

// Typing animation function
function typeNextCharacter() {
    if (currentMessageIndex >= messages.length) {
        isTyping = false;
        commandLine.classList.remove('hidden');
        commandInput.focus();
        return;
    }
    
    const currentMessage = messages[currentMessageIndex];
    const textToType = currentMessage.text;
    
    if (currentCharIndex < textToType.length) {
        const char = textToType.charAt(currentCharIndex);
        const span = document.createElement('span');
        span.textContent = char;
        
        if (currentMessage.style) {
            span.style = currentMessage.style;
        }
        
        terminalText.appendChild(span);
        currentCharIndex++;
        
        setTimeout(typeNextCharacter, currentMessage.delay);
    } else {
        currentMessageIndex++;
        currentCharIndex = 0;
        setTimeout(typeNextCharacter, 100);
    }
}

// Setup event listeners
commandInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const command = this.value;
        this.value = '';
        
        if (command.trim() !== '') {
            processCommand(command);
        }
    }
});

// Initialize typing effect on page load
window.addEventListener('load', typeNextCharacter);
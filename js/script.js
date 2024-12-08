const gridContainer = document.getElementById('ar-grid');
for (let i = 0; i < 1600; i++) {
    const cell = document.createElement('div');
    cell.classList.add('ar-grid-cell');
    gridContainer.appendChild(cell);
}

// Section Navigation
document.querySelectorAll('.section-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.section-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.section-text').forEach(section => section.style.display = 'none');

        button.classList.add('active');
        document.getElementById(button.getAttribute('data-section')).style.display = 'block';
    });
});

// 3D Hover Effect
const container = document.getElementById('profile-container');
container.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = container.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    container.style.transform = `
                rotateX(${y * 10}deg) 
                rotateY(${-x * 10}deg)
                translateZ(20px)
            `;
});
function generateCodeLines() {
    const codeBackground = document.getElementById('code-background');
    const codeSnippets = [
        'function augmentReality() {',
        'const aiModel = new MachineLearning();',
        'const arDevice = createARDevice();',
        'return innovate(aiModel, arDevice);',
        '}',
        'const data = fetchRealTimeData();',
        'processData(data);',
        'renderVisualization();'
    ];

    for (let i = 0; i < 50; i++) {
        const codeLine = document.createElement('div');
        codeLine.classList.add('code-line');
        codeLine.style.left = `${Math.random() * 100}%`;
        codeLine.style.animationDuration = `${Math.random() * 30 + 10}s`;
        codeLine.style.opacity = `${Math.random() * 0.3}`;
        codeLine.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        codeBackground.appendChild(codeLine);
    }
}

// Hiệu ứng thanh kỹ năng
function animateSkillProgress() {
    const skillBars = document.querySelectorAll('.skill-progress-bar');
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-progress');
        bar.style.width = `${width}%`;
    });
}

// Mở modal chi tiết dự án
function openProjectModal(title, description) {
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('project-modal-title');
    const modalDescription = document.getElementById('project-modal-description');

    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modal.style.display = 'flex';
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.style.display = 'none';
}

// Khởi tạo các hiệu ứng khi trang tải
window.onload = () => {
    generateCodeLines();
    animateSkillProgress();

    // Thêm sự kiện cho các dự án
    const projects = document.querySelectorAll('.project-card');
    projects.forEach(project => {
        project.addEventListener('click', () => {
            const title = project.querySelector('h4').textContent;
            const description = project.querySelector('p').textContent;
            openProjectModal(title, description);
        });
    });
};
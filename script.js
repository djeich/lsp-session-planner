// Workshop Templates
const WORKSHOP_TEMPLATES = {
    warmup: {
        name: 'Warm-up Session',
        phases: [
            { name: 'Introduction', duration: 10, description: 'Welcome and session overview' },
            { name: 'Skills Building', duration: 15, description: 'Basic brick connection exercises' },
            { name: 'Simple Metaphor', duration: 20, description: 'Build something that represents your role' },
            { name: 'Sharing', duration: 15, description: 'Share and discuss builds' },
            { name: 'Wrap-up', duration: 10, description: 'Key takeaways and next steps' }
        ]
    },
    skills: {
        name: 'Skills Building',
        phases: [
            { name: 'Introduction', duration: 15, description: 'LSP methodology overview' },
            { name: 'Basic Skills', duration: 20, description: 'Fundamental building techniques' },
            { name: 'Metaphor Practice', duration: 25, description: 'Creating simple metaphors' },
            { name: 'Advanced Techniques', duration: 30, description: 'Complex building challenges' },
            { name: 'Group Build', duration: 25, description: 'Collaborative building exercise' },
            { name: 'Reflection', duration: 15, description: 'Learning consolidation' }
        ]
    },
    vision: {
        name: 'Vision Building',
        phases: [
            { name: 'Context Setting', duration: 15, description: 'Project goals and expectations' },
            { name: 'Individual Vision', duration: 30, description: 'Personal vision building' },
            { name: 'Sharing Round', duration: 25, description: 'Present individual visions' },
            { name: 'Shared Vision', duration: 35, description: 'Build collective vision' },
            { name: 'Action Planning', duration: 25, description: 'Next steps and commitments' }
        ]
    },
    strategy: {
        name: 'Strategy Session',
        phases: [
            { name: 'Current State', duration: 25, description: 'Build present situation' },
            { name: 'Future State', duration: 30, description: 'Build desired future' },
            { name: 'Challenges', duration: 25, description: 'Identify obstacles' },
            { name: 'Solutions', duration: 35, description: 'Develop strategies' },
            { name: 'Integration', duration: 25, description: 'Connect solutions' },
            { name: 'Action Plan', duration: 20, description: 'Define next steps' }
        ]
    }
};

// State Management
let currentWorkshop = {
    name: 'New Workshop',
    phases: []
};
let currentPhaseIndex = -1;
let timerInterval = null;
let remainingTime = 0;
let isTimerRunning = false;

// DOM Elements
const timeline = document.getElementById('timeline');
const currentPhaseElement = document.getElementById('currentPhase');
const timerElement = document.getElementById('timer');
const modal = document.getElementById('phaseModal');
const phaseForm = document.getElementById('phaseForm');

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    setupDragAndDrop();
    requestNotificationPermission();
});

// Event Listeners Setup
function setupEventListeners() {
    // New Workshop Button
    document.getElementById('newWorkshop').addEventListener('click', () => {
        currentWorkshop = { name: 'New Workshop', phases: [] };
        updateTimeline();
    });

    // Add Phase Button
    document.getElementById('addPhase').addEventListener('click', () => {
        openModal();
    });

    // Phase Form Submission
    phaseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('phaseName').value;
        const duration = parseInt(document.getElementById('phaseDuration').value);
        const description = document.getElementById('phaseDescription').value;

        addPhase({ name, duration, description });
        closeModal();
        phaseForm.reset();
    });

    // Cancel Phase Button
    document.getElementById('cancelPhase').addEventListener('click', closeModal);

    // Timer Controls
    document.getElementById('startTimer').addEventListener('click', startTimer);
    document.getElementById('pauseTimer').addEventListener('click', pauseTimer);
    document.getElementById('resetTimer').addEventListener('click', resetTimer);

    // Template Buttons
    document.querySelectorAll('.template-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const template = WORKSHOP_TEMPLATES[btn.dataset.template];
            loadTemplate(template);
        });
    });

    // Save/Load Template
    document.getElementById('saveTemplate').addEventListener('click', saveWorkshop);
    document.getElementById('loadTemplate').addEventListener('click', loadWorkshop);
}

// Timeline Management
function updateTimeline() {
    timeline.innerHTML = '';
    currentWorkshop.phases.forEach((phase, index) => {
        const phaseElement = createPhaseElement(phase, index);
        timeline.appendChild(phaseElement);
    });
}

function createPhaseElement(phase, index) {
    const div = document.createElement('div');
    div.className = 'phase-item';
    div.draggable = true;
    div.dataset.index = index;

    div.innerHTML = `
        <div>
            <strong>${phase.name}</strong> (${phase.duration}m)
            <div class="phase-description">${phase.description || ''}</div>
        </div>
        <div class="phase-controls">
            <button class="btn secondary" onclick="editPhase(${index})">
                <i class="fas fa-edit"></i>
            </button>
            <button class="btn secondary" onclick="deletePhase(${index})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `;

    return div;
}

// Phase Management
function addPhase(phase) {
    currentWorkshop.phases.push(phase);
    updateTimeline();
}

function editPhase(index) {
    const phase = currentWorkshop.phases[index];
    document.getElementById('phaseName').value = phase.name;
    document.getElementById('phaseDuration').value = phase.duration;
    document.getElementById('phaseDescription').value = phase.description || '';
    
    openModal(() => {
        currentWorkshop.phases[index] = {
            name: document.getElementById('phaseName').value,
            duration: parseInt(document.getElementById('phaseDuration').value),
            description: document.getElementById('phaseDescription').value
        };
        updateTimeline();
    });
}

function deletePhase(index) {
    if (confirm('Are you sure you want to delete this phase?')) {
        currentWorkshop.phases.splice(index, 1);
        updateTimeline();
    }
}

// Timer Management
function startTimer() {
    if (currentPhaseIndex === -1) {
        currentPhaseIndex = 0;
    }

    if (currentPhaseIndex >= currentWorkshop.phases.length) {
        alert('Workshop completed!');
        return;
    }

    if (!isTimerRunning) {
        isTimerRunning = true;
        if (remainingTime === 0) {
            remainingTime = currentWorkshop.phases[currentPhaseIndex].duration * 60;
        }
        updateTimerDisplay();
        timerInterval = setInterval(updateTimer, 1000);
    }
}

function pauseTimer() {
    isTimerRunning = false;
    clearInterval(timerInterval);
}

function resetTimer() {
    pauseTimer();
    if (currentPhaseIndex >= 0 && currentPhaseIndex < currentWorkshop.phases.length) {
        remainingTime = currentWorkshop.phases[currentPhaseIndex].duration * 60;
        updateTimerDisplay();
    }
}

function updateTimer() {
    if (remainingTime > 0) {
        remainingTime--;
        updateTimerDisplay();
        
        // Notification at 1 minute remaining
        if (remainingTime === 60) {
            notifyUser('1 minute remaining in current phase!');
        }
    } else {
        pauseTimer();
        notifyUser('Phase completed!');
        
        // Move to next phase
        currentPhaseIndex++;
        if (currentPhaseIndex < currentWorkshop.phases.length) {
            remainingTime = currentWorkshop.phases[currentPhaseIndex].duration * 60;
            updateTimerDisplay();
            notifyUser(`Starting next phase: ${currentWorkshop.phases[currentPhaseIndex].name}`);
        } else {
            notifyUser('Workshop completed!');
            currentPhaseElement.textContent = 'Workshop completed!';
        }
    }
}

function updateTimerDisplay() {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    if (currentPhaseIndex >= 0 && currentPhaseIndex < currentWorkshop.phases.length) {
        currentPhaseElement.textContent = currentWorkshop.phases[currentPhaseIndex].name;
    }
}

// Template Management
function loadTemplate(template) {
    currentWorkshop = {
        name: template.name,
        phases: [...template.phases]
    };
    updateTimeline();
}

// Local Storage Management
function saveWorkshop() {
    const saveOptions = document.createElement('div');
    saveOptions.innerHTML = `
        <div class="save-options">
            <h3>Save Workshop Template</h3>
            <p>Choose how you'd like to save your template:</p>
            <button id="downloadTemplate" class="btn secondary">
                <i class="fas fa-download"></i> Download as JSON
            </button>
            <button id="emailTemplate" class="btn secondary">
                <i class="fas fa-envelope"></i> Email to Myself
            </button>
        </div>
    `;

    // Show save options in a modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modalContent.appendChild(saveOptions);
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'btn secondary';
    closeBtn.innerHTML = '<i class="fas fa-times"></i> Close';
    closeBtn.onclick = () => modal.remove();
    modalContent.appendChild(closeBtn);
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Download functionality
    document.getElementById('downloadTemplate').onclick = () => {
        const templateData = {
            name: currentWorkshop.name,
            phases: currentWorkshop.phases,
            exportDate: new Date().toISOString()
        };

        const dataStr = JSON.stringify(templateData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        
        const downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.download = `lsp-workshop-${templateData.name.toLowerCase().replace(/\s+/g, '-')}.json`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(url);
    };

    // Email functionality
    document.getElementById('emailTemplate').onclick = () => {
        const templateData = {
            name: currentWorkshop.name,
            phases: currentWorkshop.phases
        };

        const emailBody = `
Workshop Template: ${templateData.name}

${templateData.phases.map(phase => 
    `${phase.name} (${phase.duration} minutes)
    ${phase.description || 'No description provided'}
`).join('\n\n')}

Total Duration: ${templateData.phases.reduce((total, phase) => total + phase.duration, 0)} minutes

Generated by LSP Session Planner & Timer
`;

        const mailtoLink = `mailto:?subject=LSP Workshop Template: ${templateData.name}&body=${encodeURIComponent(emailBody)}`;
        window.location.href = mailtoLink;
    };
}

// Load functionality now supports file upload
function loadWorkshop() {
    const loadOptions = document.createElement('div');
    loadOptions.innerHTML = `
        <div class="load-options">
            <h3>Load Workshop Template</h3>
            <p>Upload a previously saved template:</p>
            <input type="file" id="templateFile" accept=".json" style="display: none;">
            <button id="uploadTemplate" class="btn secondary">
                <i class="fas fa-file-upload"></i> Choose Template File
            </button>
            <p class="template-hint">Only .json files exported from this tool are supported</p>
        </div>
    `;

    // Show load options in a modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modalContent.appendChild(loadOptions);
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'btn secondary';
    closeBtn.innerHTML = '<i class="fas fa-times"></i> Close';
    closeBtn.onclick = () => modal.remove();
    modalContent.appendChild(closeBtn);
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // File upload handling
    const fileInput = document.getElementById('templateFile');
    const uploadBtn = document.getElementById('uploadTemplate');
    
    uploadBtn.onclick = () => fileInput.click();
    
    fileInput.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const template = JSON.parse(e.target.result);
                    if (template.name && Array.isArray(template.phases)) {
                        currentWorkshop = template;
                        updateTimeline();
                        modal.remove();
                    } else {
                        alert('Invalid template format');
                    }
                } catch (error) {
                    alert('Error loading template: Invalid file format');
                }
            };
            reader.readAsText(file);
        }
    };
}

// Modal Management
function openModal(onSave) {
    modal.style.display = 'block';
    if (onSave) {
        phaseForm.onsubmit = (e) => {
            e.preventDefault();
            onSave();
            closeModal();
            phaseForm.reset();
        };
    }
}

function closeModal() {
    modal.style.display = 'none';
    phaseForm.onsubmit = null;
    phaseForm.reset();
}

// Drag and Drop
function setupDragAndDrop() {
    timeline.addEventListener('dragover', (e) => {
        e.preventDefault();
        const draggable = document.querySelector('.dragging');
        const afterElement = getDragAfterElement(timeline, e.clientY);
        if (afterElement == null) {
            timeline.appendChild(draggable);
        } else {
            timeline.insertBefore(draggable, afterElement);
        }
    });
}

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.phase-item:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// Notifications
function requestNotificationPermission() {
    if ('Notification' in window) {
        Notification.requestPermission();
    }
}

function notifyUser(message) {
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('LSP Workshop', { body: message });
    }
}
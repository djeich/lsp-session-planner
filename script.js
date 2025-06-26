// Workshop Templates with detailed activity descriptions
const WORKSHOP_TEMPLATES = {
    warmup: {
        name: 'Warm-up Session',
        phases: [
            {
                name: 'Introduction',
                duration: 10,
                description: 'Welcome and session overview',
                detailedGuide: `
                    • Welcome participants and arrange seating
                    • Introduce LSP methodology and its core principles
                    • Set ground rules: everyone builds, everyone shares
                    • Explain the importance of metaphorical thinking
                    • Address any initial questions or concerns`
            },
            {
                name: 'Skills Building',
                duration: 15,
                description: 'Basic brick connection exercises',
                detailedGuide: `
                    • Start with simple builds (2-3 minutes each):
                    • Build a tower as high as possible
                    • Create something that moves
                    • Make a bridge between two points
                    • Focus on getting comfortable with the bricks
                    • Encourage experimentation with different connections`
            },
            {
                name: 'Simple Metaphor',
                duration: 20,
                description: 'Build something that represents your role',
                detailedGuide: `
                    • Ask participants to build a model representing their role
                    • Prompt: "Build a model that shows how you see your role in your organization"
                    • Give 7-8 minutes for building
                    • Remind them to focus on metaphorical rather than literal representation
                    • Encourage use of colors and shapes to represent feelings and concepts`
            },
            {
                name: 'Sharing',
                duration: 15,
                description: 'Share and discuss builds',
                detailedGuide: `
                    • Each person shares their model (2-3 minutes each)
                    • Use the "builder holds the meaning" principle
                    • Ask probing questions to deepen understanding
                    • Encourage others to ask questions
                    • Look for patterns and connections between models`
            },
            {
                name: 'Wrap-up',
                duration: 10,
                description: 'Key takeaways and next steps',
                detailedGuide: `
                    • Summarize key insights from the session
                    • Discuss how metaphors helped understanding
                    • Preview next steps or future sessions
                    • Collect feedback on the experience
                    • End with a quick reflection round`
            }
        ]
    },
    skills: {
        name: 'Skills Building',
        phases: [
            {
                name: 'Introduction',
                duration: 15,
                description: 'LSP methodology overview',
                detailedGuide: `
                    • Explain the science behind LSP (hand-mind connection)
                    • Share the core process: Build → Share → Reflect
                    • Demonstrate basic building techniques
                    • Explain the role of metaphors in LSP
                    • Set expectations for the session`
            },
            {
                name: 'Basic Skills',
                duration: 20,
                description: 'Fundamental building techniques',
                detailedGuide: `
                    • Start with basic construction challenges:
                    • Build something tall (structural integrity)
                    • Create something that balances
                    • Make connections between different pieces
                    • Focus on brick manipulation and basic techniques
                    • Share quick insights about each build`
            },
            {
                name: 'Metaphor Practice',
                duration: 25,
                description: 'Creating simple metaphors',
                detailedGuide: `
                    • Introduce metaphorical thinking with simple exercises:
                    • "Build your morning mood"
                    • "Create your ideal workspace"
                    • "Show what success looks like"
                    • Practice translating concepts into physical models
                    • Encourage creative use of colors and shapes`
            },
            {
                name: 'Advanced Techniques',
                duration: 30,
                description: 'Complex building challenges',
                detailedGuide: `
                    • Move to more complex metaphorical challenges:
                    • Build a model showing team dynamics
                    • Create a representation of your biggest challenge
                    • Show the relationship between different stakeholders
                    • Focus on connecting ideas and concepts
                    • Practice modifying models based on insights`
            },
            {
                name: 'Group Build',
                duration: 25,
                description: 'Collaborative building exercise',
                detailedGuide: `
                    • Facilitate a shared building experience:
                    • Define a common challenge or theme
                    • Each person builds their perspective
                    • Create connections between individual models
                    • Develop a shared narrative
                    • Practice landscape development`
            },
            {
                name: 'Reflection',
                duration: 15,
                description: 'Learning consolidation',
                detailedGuide: `
                    • Review all skills learned
                    • Discuss how to apply these in future sessions
                    • Share tips for facilitating others
                    • Address remaining questions
                    • Plan next steps for skill development`
            }
        ]
    },
    vision: {
        name: 'Vision Building',
        phases: [
            {
                name: 'Context Setting',
                duration: 15,
                description: 'Project goals and expectations',
                detailedGuide: `
                    • Frame the vision-building challenge
                    • Share relevant background information
                    • Define scope and constraints
                    • Explain the process and timeline
                    • Set ground rules for the session`
            },
            {
                name: 'Individual Vision',
                duration: 30,
                description: 'Personal vision building',
                detailedGuide: `
                    • Guide participants through personal vision creation:
                    • "Build your ideal future state"
                    • Focus on aspirational elements
                    • Include key success factors
                    • Consider various stakeholders
                    • Add elements of time and scale`
            },
            {
                name: 'Sharing Round',
                duration: 25,
                description: 'Present individual visions',
                detailedGuide: `
                    • Each person presents their vision (3-4 minutes)
                    • Use appreciative inquiry techniques
                    • Identify common themes
                    • Document key insights
                    • Look for alignment opportunities`
            },
            {
                name: 'Shared Vision',
                duration: 35,
                description: 'Build collective vision',
                detailedGuide: `
                    • Facilitate collective vision creation:
                    • Identify common elements from individual visions
                    • Build connections between models
                    • Create shared landscape
                    • Address conflicts or differences
                    • Develop unified narrative`
            },
            {
                name: 'Action Planning',
                duration: 25,
                description: 'Next steps and commitments',
                detailedGuide: `
                    • Transform vision into actionable steps:
                    • Identify key initiatives
                    • Assign responsibilities
                    • Set timelines
                    • Define success metrics
                    • Plan follow-up sessions`
            }
        ]
    },
    strategy: {
        name: 'Strategy Session',
        phases: [
            {
                name: 'Current State',
                duration: 25,
                description: 'Build present situation',
                detailedGuide: `
                    • Guide participants to model current reality:
                    • Map key stakeholders and relationships
                    • Identify current challenges
                    • Show resource allocation
                    • Represent market position
                    • Include external factors`
            },
            {
                name: 'Future State',
                duration: 30,
                description: 'Build desired future',
                detailedGuide: `
                    • Create models of desired future:
                    • Define success criteria
                    • Show improved stakeholder relationships
                    • Represent new opportunities
                    • Include competitive advantages
                    • Build aspirational elements`
            },
            {
                name: 'Challenges',
                duration: 25,
                description: 'Identify obstacles',
                detailedGuide: `
                    • Model barriers to success:
                    • Build internal challenges
                    • Show external threats
                    • Identify resource gaps
                    • Represent risks
                    • Show dependencies`
            },
            {
                name: 'Solutions',
                duration: 35,
                description: 'Develop strategies',
                detailedGuide: `
                    • Create solution models:
                    • Build potential approaches
                    • Show resource allocation
                    • Represent timelines
                    • Include success metrics
                    • Model implementation steps`
            },
            {
                name: 'Integration',
                duration: 25,
                description: 'Connect solutions',
                detailedGuide: `
                    • Combine solutions into coherent strategy:
                    • Link different approaches
                    • Show dependencies
                    • Create implementation sequence
                    • Address potential conflicts
                    • Build support systems`
            },
            {
                name: 'Action Plan',
                duration: 20,
                description: 'Define next steps',
                detailedGuide: `
                    • Transform strategy into action:
                    • Define immediate next steps
                    • Assign responsibilities
                    • Set milestones
                    • Plan review points
                    • Document commitments`
            }
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
        <div class="drag-handle">
            <i class="fas fa-grip-vertical"></i>
        </div>
        <div class="phase-content">
            <strong>${phase.name}</strong> (${phase.duration}m)
            <div class="phase-description">${phase.description || ''}</div>
        </div>
        <div class="phase-controls">
            <button class="btn info" onclick="showDetailedGuide(currentWorkshop.phases[${index}])">
                <i class="fas fa-info-circle"></i>
            </button>
            <button class="btn secondary" onclick="editPhase(${index})">
                <i class="fas fa-edit"></i>
            </button>
            <button class="btn secondary" onclick="deletePhase(${index})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `;

    // Add drag event listeners to phase items
    div.addEventListener('dragstart', (e) => {
        div.classList.add('dragging');
        e.dataTransfer.setData('type', 'phase');
        e.dataTransfer.setData('index', index);
    });

    div.addEventListener('dragend', () => {
        div.classList.remove('dragging');
        // Update the workshop phases order based on DOM order
        const newOrder = Array.from(document.querySelectorAll('.phase-item')).map(item => 
            currentWorkshop.phases[parseInt(item.dataset.index)]
        );
        currentWorkshop.phases = newOrder;
        updateTimeline();
    });

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
    if (!currentWorkshop) {
        currentWorkshop = {
            name: template.name,
            phases: []
        };
    }
    // Append new phases instead of replacing
    currentWorkshop.phases = [...currentWorkshop.phases, ...template.phases];
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
            <button id="downloadPDFBtn" class="btn secondary">
                <i class="fas fa-file-pdf"></i> Download as PDF
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

    // Download JSON functionality
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
        downloadLink.download = `lsp-workshop-${templateData.name?.toLowerCase().replace(/\s+/g, '-') || 'untitled'}.json`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(url);
        modal.remove();
    };

    // PDF Download functionality
    document.getElementById('downloadPDFBtn').onclick = () => {
        downloadPDF();
        modal.remove();
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
    const timeline = document.getElementById('timeline');
    const templateButtons = document.querySelectorAll('.template-btn');

    templateButtons.forEach(btn => {
        btn.addEventListener('dragstart', (e) => {
            btn.classList.add('dragging');
            e.dataTransfer.setData('text/plain', btn.dataset.template);
            e.dataTransfer.setData('type', 'template');
        });

        btn.addEventListener('dragend', () => {
            btn.classList.remove('dragging');
        });
    });

    timeline.addEventListener('dragover', (e) => {
        e.preventDefault();
        timeline.classList.add('drag-over');
        const draggable = document.querySelector('.dragging');
        if (draggable && draggable.classList.contains('phase-item')) {
            const afterElement = getDragAfterElement(timeline, e.clientY);
            if (afterElement == null) {
                timeline.appendChild(draggable);
            } else {
                timeline.insertBefore(draggable, afterElement);
            }
        }
    });

    timeline.addEventListener('dragleave', () => {
        timeline.classList.remove('drag-over');
    });

    timeline.addEventListener('drop', (e) => {
        e.preventDefault();
        timeline.classList.remove('drag-over');
        
        const type = e.dataTransfer.getData('type');
        if (type === 'template') {
            const templateName = e.dataTransfer.getData('text/plain');
            const template = WORKSHOP_TEMPLATES[templateName];
            if (template) {
                loadTemplate(template);
            }
        }
    });
}

// Helper function to determine where to place dragged element
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

// Add function to show detailed guide
function showDetailedGuide(phase) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content activity-guide';
    
    modalContent.innerHTML = `
        <h2>${phase.name}</h2>
        <div class="activity-meta">
            <span class="duration"><i class="fas fa-clock"></i> ${phase.duration} minutes</span>
        </div>
        <p class="activity-description">${phase.description}</p>
        <div class="detailed-guide">
            <h3>Facilitation Guide</h3>
            <div class="guide-content">
                ${phase.detailedGuide}
            </div>
        </div>
        <button class="btn secondary close-modal">
            <i class="fas fa-times"></i> Close
        </button>
    `;
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    modalContent.querySelector('.close-modal').onclick = () => {
        modal.remove();
    };
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

function downloadPDF() {
    if (!currentWorkshop || !currentWorkshop.phases || currentWorkshop.phases.length === 0) {
        alert('Please add some phases to your workshop first!');
        return;
    }

    // Create PDF document
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(20);
    doc.setTextColor(0, 109, 183); // LEGO blue
    doc.text('LSP Workshop Plan', 20, 20);

    // Add workshop name
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text(`Workshop: ${currentWorkshop.name || 'Untitled Workshop'}`, 20, 35);

    // Add total duration
    const totalDuration = currentWorkshop.phases.reduce((sum, phase) => sum + phase.duration, 0);
    doc.setFontSize(12);
    doc.text(`Total Duration: ${totalDuration} minutes`, 20, 45);

    // Add current date
    const date = new Date().toLocaleDateString();
    doc.text(`Created: ${date}`, 20, 55);

    // Prepare table data
    const tableData = currentWorkshop.phases.map((phase, index) => [
        (index + 1).toString(),
        phase.name,
        `${phase.duration}m`,
        phase.description,
        phase.detailedGuide || ''
    ]);

    // Add table
    doc.autoTable({
        startY: 65,
        head: [['#', 'Phase', 'Duration', 'Description', 'Facilitation Guide']],
        body: tableData,
        theme: 'grid',
        headStyles: {
            fillColor: [0, 109, 183],
            textColor: [255, 255, 255],
            fontStyle: 'bold'
        },
        columnStyles: {
            0: { cellWidth: 10 },
            1: { cellWidth: 30 },
            2: { cellWidth: 20 },
            3: { cellWidth: 40 },
            4: { cellWidth: 90 }
        },
        styles: {
            overflow: 'linebreak',
            cellPadding: 5
        },
        didDrawPage: function(data) {
            // Add footer
            doc.setFontSize(10);
            doc.setTextColor(128);
            doc.text('Generated by LSP Session Planner', doc.internal.pageSize.getWidth() - 60, doc.internal.pageSize.getHeight() - 10);
        }
    });

    // Save PDF
    const fileName = `${currentWorkshop.name || 'lsp-workshop'}-${date.replace(/\//g, '-')}.pdf`;
    doc.save(fileName);
}

// Update saveTemplate function to include PDF download option
function saveTemplate() {
    if (!currentWorkshop || !currentWorkshop.phases || currentWorkshop.phases.length === 0) {
        alert('Please add some phases to your workshop first!');
        return;
    }

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    
    modal.innerHTML = `
        <div class="modal-content">
            <h2>Save Workshop Template</h2>
            <div class="form-group">
                <label for="templateName">Template Name:</label>
                <input type="text" id="templateName" value="${currentWorkshop.name || ''}" placeholder="Enter template name">
            </div>
            <div class="form-buttons">
                <button class="btn primary" onclick="downloadJSON()">
                    <i class="fas fa-file-download"></i> Download as JSON
                </button>
                <button class="btn primary" onclick="downloadPDF()">
                    <i class="fas fa-file-pdf"></i> Download as PDF
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Add the missing downloadJSON function
function downloadJSON() {
    const templateName = document.getElementById('templateName')?.value || currentWorkshop.name || 'untitled';
    const templateData = {
        name: templateName,
        phases: currentWorkshop.phases,
        exportDate: new Date().toISOString()
    };

    const dataStr = JSON.stringify(templateData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = `lsp-workshop-${templateName.toLowerCase().replace(/\s+/g, '-')}.json`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(url);
    
    // Close the modal
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}
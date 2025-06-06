const quizQuestions = [
    {
      question: "What is the primary purpose of the LEGO® SERIOUS PLAY® method in organizational settings?",
      answers: {
        a: "To create decorative models for the office",
        b: "To unlock knowledge and insights through metaphorical model-building",
        c: "To teach employees how to build with LEGO bricks",
        d: "To provide a fun break from regular meetings"
      },
      correctAnswer: "b",
      explanation: "LSP is designed to unlock knowledge and insights that might be difficult to access through conventional methods, using metaphorical model-building as a tool for deeper understanding and communication."
    },
    {
      question: "What is the correct sequence of a typical LSP workshop?",
      answers: {
        a: "Skills building → Challenge → Building → Sharing → Reflection",
        b: "Introduction → Building → Sharing → Conclusion",
        c: "Skills building → Challenge → Individual building → Sharing → Group discussion → Reflection",
        d: "Challenge → Building → Sharing → Next challenge"
      },
      correctAnswer: "c",
      explanation: "A well-structured LSP workshop follows this sequence to ensure participants are prepared and can effectively engage in the process."
    },
    {
      question: "As an LSP facilitator, what should you do when a participant says 'I'm not creative' or 'I can't build'?",
      answers: {
        a: "Skip their turn and move to the next person",
        b: "Build a model for them to demonstrate",
        c: "Reassure them that LSP is not about artistic ability and everyone can build metaphorically",
        d: "Give them a pre-built model to use"
      },
      correctAnswer: "c",
      explanation: "LSP is based on the principle that everyone can build metaphorically. The facilitator's role is to create psychological safety and emphasize that artistic ability is not required."
    },
    {
      question: "What is the 'hand-mind connection' principle in LSP?",
      answers: {
        a: "It's about improving manual dexterity",
        b: "The hands' neural connection to the brain enables new insights during building",
        c: "It refers to hand-eye coordination",
        d: "It's about learning to build faster"
      },
      correctAnswer: "b",
      explanation: "The hand-mind connection is a key principle of LSP, recognizing that hands are connected to 70-80% of our brain cells, enabling new insights during the building process."
    },
    {
      question: "How should a facilitator handle a participant who dominates group discussions during sharing?",
      answers: {
        a: "Allow them to continue as they might have the best insights",
        b: "Interrupt them immediately",
        c: "Use time management techniques and ensure equal sharing time for all participants",
        d: "Ask them to leave the session"
      },
      correctAnswer: "c",
      explanation: "Good facilitation ensures equal participation. Using time management techniques helps maintain balance while respecting all contributions."
    },
    {
      question: "What is the recommended approach for introducing complex challenges in an LSP workshop?",
      answers: {
        a: "Present all challenges at once to save time",
        b: "Start with simple warm-up challenges and gradually increase complexity",
        c: "Skip warm-ups with experienced groups",
        d: "Let participants choose their preferred challenge"
      },
      correctAnswer: "b",
      explanation: "Building confidence through progressive complexity ensures participants remain engaged and confident in their ability to tackle more complex challenges."
    },
    {
      question: "When facilitating model sharing, what is the best practice?",
      answers: {
        a: "The facilitator should interpret the models for the group",
        b: "Only the most articulate participants should share",
        c: "The model builder tells their story while others listen, then questions can follow",
        d: "Skip sharing to save time"
      },
      correctAnswer: "c",
      explanation: "The builder owns the meaning of their model. The facilitator's role is to ensure they can share their story without interruption before opening for questions."
    },
    {
      question: "What is the purpose of the 'skills building' phase in LSP?",
      answers: {
        a: "To identify the most skilled builders",
        b: "To familiarize participants with basic LEGO techniques and build confidence",
        c: "To create impressive models",
        d: "To test participants' creativity"
      },
      correctAnswer: "b",
      explanation: "Skills building helps participants become comfortable with the bricks and the process of building metaphorically, regardless of their previous LEGO experience."
    },
    {
      question: "How should a facilitator handle a participant who consistently builds literal rather than metaphorical models?",
      answers: {
        a: "Exclude them from future challenges",
        b: "Ask probing questions to help them think metaphorically and provide examples",
        c: "Tell them they're doing it wrong",
        d: "Have other participants rebuild their models"
      },
      correctAnswer: "b",
      explanation: "Through gentle guidance and probing questions, facilitators can help participants develop their metaphorical thinking skills."
    },
    {
      question: "What is the best way to conclude an LSP workshop?",
      answers: {
        a: "End immediately after the last build",
        b: "Take photos of all models and clean up",
        c: "Facilitate a reflection on key insights, learning, and next steps",
        d: "Have participants vote on the best models"
      },
      correctAnswer: "c",
      explanation: "A proper conclusion helps participants consolidate their insights and identify actionable next steps from the workshop."
    }
  ];
  
  function updateProgress() {
    const answered = document.querySelectorAll('input[type="radio"]:checked').length;
    const total = quizQuestions.length;
    const progress = (answered / total) * 100;
    document.querySelector('.progress').style.width = `${progress}%`;
    document.querySelector('.progress-text').textContent = `${Math.round(progress)}% Complete`;
  }
  
  function buildQuiz() {
    const quizContainer = document.getElementById("quiz");
    const output = [];
  
    quizQuestions.forEach((q, index) => {
      const answers = [];
      for (const key in q.answers) {
        answers.push(
          `<label class="answer-option">
            <input type="radio" name="question${index}" value="${key}" onchange="updateProgress()">
            ${key.toUpperCase()}: ${q.answers[key]}
          </label>`
        );
      }
  
      output.push(
        `<div class="question-container">
          <div class="question-number">Question ${index + 1}</div>
          <div class="question">${q.question}</div>
          <div class="answers">${answers.join("")}</div>
          <div class="explanation" id="explanation${index}" style="display: none;"></div>
        </div>`
      );
    });
  
    quizContainer.innerHTML = output.join("");
    updateProgress();
  }
  
  function showResults() {
    const answerContainers = document.querySelectorAll(".answers");
    const explanationContainers = document.querySelectorAll(".explanation");
    let score = 0;
  
    quizQuestions.forEach((q, index) => {
      const answerContainer = answerContainers[index];
      const explanationContainer = explanationContainers[index];
      const selected = document.querySelector(`input[name=question${index}]:checked`);
      const userAnswer = selected ? selected.value : undefined;
  
      if (userAnswer === q.correctAnswer) {
        score++;
        answerContainer.style.color = "#2ecc71";
        explanationContainer.style.color = "#2ecc71";
        explanationContainer.innerHTML = `✓ Correct! ${q.explanation}`;
      } else {
        answerContainer.style.color = "#e74c3c";
        explanationContainer.style.color = "#e74c3c";
        explanationContainer.innerHTML = `✗ Incorrect. The correct answer is ${q.correctAnswer.toUpperCase()}. ${q.explanation}`;
      }
      explanationContainer.style.display = "block";
    });
  
    const resultsContainer = document.getElementById("results");
    const percentage = (score / quizQuestions.length) * 100;
    let feedback = "";
    
    if (percentage === 100) {
      feedback = "Excellent! You have a thorough understanding of LSP facilitation.";
    } else if (percentage >= 80) {
      feedback = "Great job! You have a strong grasp of LSP principles.";
    } else if (percentage >= 60) {
      feedback = "Good effort! Consider reviewing the LSP Open Source materials to strengthen your knowledge.";
    } else {
      feedback = "We recommend reviewing the LSP Open Source materials before facilitating sessions.";
    }
    
    resultsContainer.innerHTML = `
      <div class="results-summary">
        <h3>Quiz Results</h3>
        <p>You got ${score} out of ${quizQuestions.length} correct (${percentage}%)</p>
        <p>${feedback}</p>
      </div>
    `;
  
    // Show restart button and hide submit button
    document.getElementById("submit").style.display = "none";
    document.getElementById("restart").style.display = "block";
  
    // Scroll to results
    resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  
  function restartQuiz() {
    // Clear all selections and explanations
    document.querySelectorAll('input[type="radio"]').forEach(input => input.checked = false);
    document.querySelectorAll('.explanation').forEach(exp => exp.style.display = "none");
    document.querySelectorAll('.answers').forEach(ans => ans.style.color = "inherit");
    
    // Clear results
    document.getElementById("results").innerHTML = "";
    
    // Reset progress bar
    updateProgress();
    
    // Show submit button and hide restart button
    document.getElementById("submit").style.display = "block";
    document.getElementById("restart").style.display = "none";
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  document.getElementById("submit").addEventListener("click", showResults);
  document.getElementById("restart").addEventListener("click", restartQuiz);
  
  buildQuiz();
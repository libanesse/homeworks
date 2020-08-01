var questions = [
    {
      question: "Commonly used data types DO NOT include:",
      options: [
        "Strings",
        "Boolians",
        "Alerts",
        "Numbers"
      ],
      answer: "Numbers"
    },
    {
      question: "The Condition in an If/Else statement is enclosed within ___",
      options: [
        "Qoutes",
        "Curly Brackets",
        "paranthesis",
        "square brackets",
      ],
      answer: "Curly Brackets"
    },
    {
      question: "Arrays in JavaScript can be used to store ___.",
      options: [
        "Numbers and Strings",
        "other arrays",
        "booleans",
        "All of the above",
  
      ],
      answer: "other arrays"
    },
    {
      question: "String values must be enclosed within ___ when being assinged to variables",
      options: [
        "commas",
        "curly brackets",
        "quotes",
        "parantheses",
  
      ],
      answer: "parantheses"
    },
  
    {
      question: "A very useful tool used during development and debugging for printing content to the debugger is:",
      options: [
        "JavaScript",
        "terminal/bash",
        "for loops",
        "console log",
  
      ],
      answer: "console log"
    }
  ];
  
  var score = 0;
  var currentQuestion = -1;
  var timeLeft = 0;
  var timer;
  var characters = document.getElementById("questions");
  
  var qcc = document.getElementById("quizBody");
  function start() {
    timeLeft = 75;
    document.getElementById("timeLeft").innerHTML = timeLeft;
    characters.style.display = "block";
    qcc.style.display = "none";
    timer = setInterval(function () {
      timeLeft--;
      document.getElementById("timeLeft").innerHTML = timeLeft;
  
      if (timeLeft <= 0) {
        clearInterval(timer);
        endGame();
      }
    }, 1000);
  
    next();
  }
  
  function endGame() {
  
    clearInterval(timer);
     
  
    var quizContent =
      `
  
  <h3> you got ` +
      score +
      `  correct!</h3>
  <button onclick="setScore()">score!</button>`;
    console.log(quizContent);
  
    document.getElementById("quiz").innerHTML = quizContent;
  }
  
  function setScore() {
    localStorage.setItem("highscore", score);
    setScore();
  }
  
  function clearScore() {
    localStorage.setItem("highscore", "");
  
    resetGame();
  }
  
  function resetGame() {
    clearInterval(timer);
    score = 0;
    currentQuestion = -1;
    timeLeft = 0;
    timer = null;
  
    document.getElementById("timeLeft").innerHTML = timeLeft;
  
    var quizContent = `
  
  <button onclick="start()">Start!</button>`;
  
    document.getElementById("quizBody").innerHTML = quizContent;
  }
  
  function incorrect() {
    timeLeft -= 10;
    console.log('incorrect')
    document.getElementById("questions");
    document.getElementById("wrong").style.display = "block"
    next();
    
    setTimeout(function () { document.getElementById("wrong").style.display = "none"; }, 3000);
  }
  
  function correct() {
    
    console.log("correct"),
    document.getElementById("questions");
      document.getElementById("right").style.display = "block"
    next();
  
    setTimeout(function () { document.getElementById("right").style.display = "none"; }, 3000);
  }
  
  function next() {
    currentQuestion++;
  
    if (currentQuestion > questions.length - 1) {
      endGame();
  
    }
    else {
      var quizContent = "<h2>" + questions[currentQuestion].question + "</h2>";
  
      for (
        var buttonLoop = 0;
        buttonLoop < questions[currentQuestion].options.length;
        buttonLoop++
      ) {
        var buttonClick = '<button onclick="[ANS]">[CHOICE]</button>';
        buttonClick = buttonClick.replace(
          "[CHOICE]",
          questions[currentQuestion].options[buttonLoop]
        );
        if (
          questions[currentQuestion].options[buttonLoop] ==
          questions[currentQuestion].answer
        ) {
          buttonClick = buttonClick.replace("[ANS]", "correct()");
        } else {
          buttonClick = buttonClick.replace("[ANS]", "incorrect()");
        }
        quizContent += buttonClick;
      }
  
      characters.innerHTML = quizContent;
    }
  }
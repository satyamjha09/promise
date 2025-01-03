


const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correct: 2
    },
    {
      question: "Which programming language is primarily used for web development?",
      options: ["Python", "JavaScript", "C++", "Java"],
      correct: 1
    },
    {
      question: "What is the square root of 64?",
      options: ["6", "8", "10", "12"],
      correct: 1
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      options: ["William Wordsworth", "William Shakespeare", "John Milton", "Charles Dickens"],
      correct: 1
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Venus", "Mars", "Jupiter"],
      correct: 2
    }
  ];

  const answerElm = document.querySelectorAll('.answer');
  
  const [questionElm,  option_1, option_2, option_3, option_4] = document.querySelectorAll("#question, .option_1, .option_2, .option_3, .option_4");
  const submitBtn = document.getElementById('submit');
  let currentQuiz = 0;
  let score = 0;
  // step 3: load Quiz  Function
  const loadQuiz = () => {
    const {question, options} = quizData[currentQuiz];
    console.log(question);
    console.log(options);

    questionElm.innerText = question;
    options.forEach((currOptions , index) => window[`option_${index + 1}`].innerText = currOptions)

  }

  loadQuiz();

  // step - 4

  const getSelectionOption = () => {
    let answerElement =  Array.from(questionElm);
    return answerElement.findIndex((curElem, index) => curElem.checked);
   
  }

  const deselectedAnswer = () => {
    questionElm.forEach((currElement) => currElement.checked = false);
  }

  submitBtn.addEventListener("click" , () => {
    const selectedOptionsIndex = getSelectionOption();

    console.log(selectedOptionsIndex);

    if(selectedOptionsIndex === quizData[currentQuiz].correct){
        score = score + 1;
    }

    currentQuiz++;
    
    if(currentQuiz < quizData.length) {
        deselectedAnswer();
        loadQuiz();
    }
  })



 

  
// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Which of these is not a type of entrepreneurship?",
    answer: "Intrapreneurship",
    options: [
      "Large scale entrepreneurship",
      "Intrapreneurship",
      "Small business entrepreneurship",
      "Scalable entrepreneurship"
    ]
  },
    {
    numb: 2,
    question: "Which of these actions of an entrepreneur will most likely result in creative destruction?",
    answer: "Developing a new product",
    options: [
      "Taking over a competitor's business",
      "Issuing shares to individuals and institutions",
      "Developing a new product",
      "Lowering prices of your product or service"
    ]
  },
    {
    numb: 3,
    question: "According to Schumpeter, innovative entrepreneurs would:",
    answer: "Get absorbed within larger innovative businesses",
    options: [
      "Get absorbed within larger innovative businesses",
      "Not survive and disappear from the market",
      "Thrive in the market",
      "Get absorbed within non-innovative businesses"
    ]
  },
    {
    numb: 4,
    question: "Which of these is not a challenge for the entrepreneur?",
    answer: "Formulating rules and regulations relating to conducting entrepreneurship in their country",
    options: [
      "Managing the cash flow of their business",
      "Recruiting new employees",
      "Choosing the product or service to sell in the market",
      "Formulating rules and regulations relating to conducting entrepreneurship in their country"
    ]
  },
    {
    numb: 5,
    question: "Which of these theories involve taking a moderate amount of risk as a function of skill and not chance?",
    answer: "Need for affiliation",
    options: [
      "Need for affiliation",
      "Need for achievement",
      "Need for authority",
      "Need for independence"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];

setTimeout(() => {
  const box = document.getElementById('box');

  // 👇️ removes element from DOM
  box.style.display = 'none';

  // 👇️ hides element (still takes up space on page)
  // box.style.visibility = 'hidden';
}, 5000);

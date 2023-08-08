// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [quiz, setQuiz] = useState(true);
  const [quizTwo, setQuizTwo] = useState(false);
  const [quizThree, setQuizThree] = useState(false);
  const [quizFour, setQuizFour] = useState(false);
  const [quizFive, setQuizFive] = useState(false);
  const [quizSix, setQuizSix] = useState(false);
  const [quizSeven, setQuizSeven] = useState(false);
  const [quizEight, setQuizEight] = useState(false);
  const [quizNine, setQuizNine] = useState(false);
  const [quizTen, setQuizTen] = useState(false);
  const [quizEleven, setQuizEleven] = useState(false);

  const handleShowQuiz = () => {
    setQuiz(true);
    setQuizTwo(false);
    setQuizEleven(false);
  };
  const handleShowQuizTwo = () => {
    setQuiz(false);
    setQuizTwo(true);
  };
  const handleShowQuizThree = () => {
    setQuizTwo(false);
    setQuizThree(true);
  };
  const handleShowQuizFour = () => {
    setQuizThree(false);
    setQuizFour(true);
  };
  const handleShowQuizFive = () => {
    setQuizFour(false);
    setQuizFive(true);
  };
  const handleShowQuizSix = () => {
    setQuizFive(false);
    setQuizSix(true);
  };
  const handleShowQuizSeven = () => {
    setQuizSix(false);
    setQuizSeven(true);
  };
  const handleShowQuizEight = () => {
    setQuizSeven(false);
    setQuizEight(true);
  };
  const handleShowQuizNine = () => {
    setQuizEight(false);
    setQuizNine(true);
  };
  const handleShowQuizTen = () => {
    setQuizNine(false);
    setQuizTen(true);
  };
  const handleShowQuizEleven = () => {
    setQuizTen(false);
    setQuizEleven(true);
  };

  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
  };

  // ARRAY OF QUESTIONS
  const Faq = [
    {
      qa: "What is the capital of France?",
      answera: "Paris",
      notcorrecta: "London",
      notcorrectb: "Rome",
      notcorrectc: "Madrid",
    },
    {
      qb: "What is the largest mammal?",
      answerb: "The blue whale",
      notcorrectba: "Shark",
      notcorrectbc: "Bat",
      notcorrectbd: "Kangaroo",

    },
    {
      qc: "Who painted the Mona Lisa?",
      answerc: "Leonardo da Vinci.",
      notcorrectca: "Vincent van Gogh",
      notcorrectcb: "Micheangelo",
      notcorrectcd: "Pablo Picasso",

    },
    {
      qd: "What is the chemical symbol for gold?",
      answerd: "Au",
      notcorrectda: "Ag",
      notcorrectdb: "Cu",
      notcorrectdc: " Fe",
    },
    {
      qe: "How many continents are there?",
      answere: "Seven",
      notcorrectea: "Thirteen",
      notcorrecteb: "Nine",
      notcorrectec: "Five",
    },
    {
      qf: "What is the tallest mountain in the world?",
      answerf: "Mount Everest",
      notcorrectfa: "Mount Kilimanjaro",
      notcorrectfb: "Mount Logan",
      notcorrectfc: "Mount Vinson",
    },
    {
      qg: 'Who wrote the play "Romeo and Juliet"?',
      answerg: "William Shakespeare",
      notcorrectga: "Daniel Walker",
      notcorrectgb: "Ayo Davis",
      notcorrectgc: "Stone Ricco",
    },
    {
      qh: "What is the largest planet in our solar system?",
      answerh: "Jupiter",
      notcorrectha: "Pluto",
      notcorrecthb: "Mars",
      notcorrecthc: "Saturn",
    },
    {
      qi: "Who invented the telephone?",
      answeri: "Alexander Graham Bell",
      notcorrectia: "Vincent van Gogh",
      notcorrectib: "Tony Blaire",
      notcorrectic: "Ladeh Ladeh",
    },
    {
      qj: "What is the symbol for the element oxygen?",
      answerj: "O",
      notcorrectja: "M",
      notcorrectjb: "NO",
      notcorrectjc: " P",
    },
  ];

  const firstqa = Faq[0];
  const secondqb = Faq[1];
  const thirdqc = Faq[2];
  const fourthqd = Faq[3];
  const fifthqe = Faq[4];
  const sixthqf = Faq[5];
  const seventhqg = Faq[6];
  const eightqh = Faq[7];
  const ninthqi = Faq[8];
  const tenthtqj = Faq[9];

  return (
    <div>
      {quiz && (
        //question 1
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-5">
                <h1 className="text-center">Quiz Time!</h1>
                <h3>Question 1</h3>
                <p>
                  <b>
                    {firstqa.qa}
                  </b>
                </p>
                <input type="radio" name="country" /> {firstqa.answera} <br />
                <input type="radio" name="country" /> {firstqa.notcorrecta} <br />
                <input type="radio" name="country" /> {firstqa.notcorrectb} <br />
                <input type="radio" name="country" /> {firstqa.notcorrectc} <br /><br />


                <button
                  className="btn btn-success mx-4"
                  onClick={handleShowQuizTwo}
                >
                  Next
                </button>
                <br />
                <br />
              </div>

              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      )}

      {quizTwo && (
        //question 2
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-5">
                <h1 className="text-center">Quiz Time!</h1>
                <h3>Question 2</h3>
                <p>
                  <b>
                    {secondqb.qb}
                  </b>
                </p>
                <input type="radio" name="mammals" /> {secondqb.answerb} <br />
                <input type="radio" name="mammals" /> {secondqb.notcorrectba} <br />
                <input type="radio" name="mammals"/> {secondqb.notcorrectbc} <br />
                <input type="radio" name="mammals"/> {secondqb.notcorrectbd} <br /><br />
                
                <br />
                <br />
                <button
                  className="btn btn-success mx-4"
                  onClick={handleShowQuizThree}
                >
                  Next
                </button>
                <br />
                <br />
              </div>

              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      )}

      {quizThree && (
        //question 3
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-5">
                <h1 className="text-center">Quiz Time!</h1>
                <h3>Question 3</h3>
                <p>
                  <b>
                    {thirdqc.qc}
                  </b>
                </p>
                <input type="radio" name="artist" /> {thirdqc.answerc} <br />
                <input type="radio" name="artist" /> {thirdqc.notcorrectca} <br />
                <input type="radio" name="artist" /> {thirdqc.notcorrectcb} <br />
                <input type="radio" name="artist" /> {thirdqc.notcorrectcd} <br /><br />
                <button
                  className="btn btn-success mx-4"
                  onClick={handleShowQuizFour}
                >
                  Next
                </button>
              </div>

              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      )}
      {quizFour && (
        //question 4
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-5">
                <h1 className="text-center">Quiz Time!</h1>
                <h3>Question 4</h3>
                <p>
                  <b>
                    {fourthqd.qd}
                  </b>
                </p>
                <input type="radio" name="element" /> {fourthqd.answerd} <br />
                <input type="radio" name="element" /> {fourthqd.notcorrectda} <br />
                <input type="radio" name="element" /> {fourthqd.notcorrectdb} <br />
                <input type="radio" name="element" /> {fourthqd.notcorrectdc} <br /><br />
                <button
                  className="btn btn-success mx-4"
                  onClick={handleShowQuizFive}
                >
                  Next
                </button>
                <br />
                <br />
              </div>

              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      )}
      {quizFive && (
        //question 5
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-5">
                <h1 className="text-center">Quiz Time!</h1>
                <h3>Question 5</h3>
                
                <p>
                  <b>
                    {fifthqe.qe}
                  </b>
                </p>
                <input type="radio" name="continent" /> {fifthqe.answere} <br />
                <input type="radio" name="continent" /> {fifthqe.notcorrectea} <br />
                <input type="radio" name="continent" /> {fifthqe.notcorrecteb} <br />
                <input type="radio" name="continent" /> {fifthqe.notcorrectec} <br /><br />
                <br />
                <button
                  className="btn btn-success mx-4"
                  onClick={handleShowQuizSix}
                >
                  Next
                </button>
                <br />
                <br />
              </div>

              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      )}

      {quizSix && (
        //question 6
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-5">
                <h1 className="text-center">Quiz Time!</h1>
                <h3>Question 6</h3>
                <p>
                  <b>
                    {sixthqf.qf}
                  </b>
                </p>
                <input type="radio" name="mountain" /> {sixthqf.answerf} <br />
                <input type="radio" name="mountain" /> {sixthqf.notcorrectfa} <br />
                <input type="radio" name="mountain" /> {sixthqf.notcorrectfb} <br />
                <input type="radio" name="mountain" /> {sixthqf.notcorrectfc} <br /><br />
                <button
                  className="btn btn-success mx-4"
                  onClick={handleShowQuizSeven}
                >
                  Next
                </button>
                <br />
                <br />
              </div>

              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      )}

      {quizSeven && (
        //question 7
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-5">
                <h1 className="text-center">Quiz Time!</h1>
                <h3>Question 7</h3>
                <p>
                  <b>
                    {seventhqg.qg}
                  </b>
                </p>
                <input type="radio" name="play" /> {seventhqg.answerg} <br />
                <input type="radio" name="play" /> {seventhqg.notcorrectga} <br />
                <input type="radio" name="play" /> {seventhqg.notcorrectgb} <br />
                <input type="radio" name="play" /> {seventhqg.notcorrectgc} <br /><br />
                <button
                  className="btn btn-success mx-4"
                  onClick={handleShowQuizEight}
                >
                  Next
                </button>
                <br />
                <br />
              </div>

              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      )}

      {quizEight && (
        //question 8
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-5">
                <h1 className="text-center">Quiz Time!</h1>
                <h3>Question 8</h3>
                <p>
                  <b>
                    {eightqh.qh}
                  </b>
                </p>
                <input type="radio" name="planet" /> {eightqh.answerh} <br />
                <input type="radio" name="planet" /> {eightqh.notcorrectha} <br />
                <input type="radio" name="planet" /> {eightqh.notcorrecthb} <br />
                <input type="radio" name="planet" /> {eightqh.notcorrecthc} <br /><br />
                <button
                  className="btn btn-success mx-4"
                  onClick={handleShowQuizNine}
                >
                  Next
                </button>
                <br />
                <br />
              </div>

              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      )}

      {quizNine && (
        //question 9
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-5">
                <h1 className="text-center">Quiz Time!</h1>
                <h3>Question 9</h3>
               
                <p>
                  <b>
                    {ninthqi.qi}
                  </b>
                </p>
                <input type="radio" name="inventor" /> {ninthqi.answeri} <br />
                <input type="radio" name="inventor" /> {ninthqi.notcorrectia} <br />
                <input type="radio" name="inventor" /> {ninthqi.notcorrectib} <br />
                <input type="radio" name="inventor" /> {ninthqi.notcorrectic} <br /><br />
                <br />
                <button
                  className="btn btn-success mx-4"
                  onClick={handleShowQuizTen}
                >
                  Next
                </button>
                <br />
                <br />
              </div>

              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      )}

      {quizTen && (
        //question 10
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-5">
                <h1 className="text-center">Quiz Time!</h1>
                <h3>Question 10</h3>
                <p>
                  <b>
                    {tenthtqj.qj}
                  </b>
                </p>
                <input type="radio" name="symbol" /> {tenthtqj.answerj} <br />
                <input type="radio" name="symbol" /> {tenthtqj.notcorrectja} <br />
                <input type="radio" name="symbol" /> {tenthtqj.notcorrectjb} <br />
                <input type="radio" name="symbol" /> {tenthtqj.notcorrectjc} <br /><br />
                <button
                  className="btn btn-success mx-4"
                  onClick={handleShowQuizEleven}
                >
                  Submit
                </button>
                <br />
                <br />
              </div>

              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      )}

      {quizEleven && (
        //Submission
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-5">
                <div>
                  <button
                    className="btn btn-success mx-4"
                    onClick={handleShowQuiz}
                  >
                    Thanks For Solving The Quiz. GREAT JOB!
                  </button>
                </div>
              </div>

              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

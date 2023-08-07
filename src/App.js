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
                  <b>What is the capital city of France?</b>
                </p>
                <input type="radio" name="country" value="paris" /> Paris <br />
                <input type="radio" name="country" value="rome" /> Rome <br />
                <input type="radio" name="country" value="london" /> London{" "}
                <br />
                <input type="radio" name="country" value="madrid" /> Madrid{" "}
                <br /> <br />{" "}
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
                  <b>Which planet is known as the "Red Planet"?</b>
                </p>
                <input type="radio" name="planet" value="venus" /> Venus <br />
                <input type="radio" name="planet" value="mars" /> Mars <br />
                <input
                  type="radio"
                  name="planet"
                  value="jupiter"
                /> Jupiter <br />
                <input type="radio" name="planet" value="saturn" /> Saturn{" "}
                <br />
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
                  <b>Who is the author of the "Harry Potter" book series?</b>
                </p>
                <input type="radio" name="author" value="j.r.r tolkien" />{" "}
                J.R.R. Tolkien <br />
                <input type="radio" name="author" value="j.k rowling" /> J.K.
                Rowling <br />
                <input type="radio" name="author" value="stephen king" />{" "}
                Stephen King <br />
                <input
                  type="radio"
                  name="author"
                  value="george r.r martin"
                />{" "}
                George R.R. Martin <br />
                <br />
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
                  <b>What is the chemical symbol for water?</b>
                </p>
                <input type="radio" name="symbol" value="wo " /> WO <br />
                <input type="radio" name="symbol" value="ho " /> HO <br />
                <input type="radio" name="symbol" value="co " /> CO <br />
                <input type="radio" name="symbol" value="h2o " /> H2O <br />
                <br />
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
                    Which famous scientist formulated the theory of relativity?
                  </b>
                </p>
                <input type="radio" name="scientist" value="isaac newton " />{" "}
                Isaac Newton <br />
                <input
                  type="radio"
                  name="scientist"
                  value="albert einstein "
                />{" "}
                Albert Einstein <br />
                <input
                  type="radio"
                  name="scientist"
                  value="marie curie "
                />{" "}
                Marie Curie <br />
                <input
                  type="radio"
                  name="scientist"
                  value="galileo galilei "
                />{" "}
                Galileo Galilei <br />
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
                  <b>Which mammal can fly?</b>
                </p>
                <input type="radio" name="mammal" value="bat " /> Bat <br />
                <input
                  type="radio"
                  name="mammal"
                  value=" penguin "
                /> Penguin <br />
                <input
                  type="radio"
                  name="mammal"
                  value=" kangaroo "
                /> Kangaroo <br />
                <input
                  type="radio"
                  name="mammal"
                  value="elephant "
                /> Elephant <br />
                <br />
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
                  <b>What is the largest ocean on Earth?</b>
                </p>
                <input type="radio" name="ocean" value="atlantic ocean " />{" "}
                Atlantic Ocean <br />
                <input type="radio" name="ocean" value="indian ocean " /> Indian
                Ocean <br />
                <input type="radio" name="ocean" value="arctic ocean " /> Arctic
                Ocean <br />
                <input type="radio" name="ocean" value="pacific ocean " />{" "}
                Pacific Ocean <br />
                <br />
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
                  <b>Who painted the Mona Lisa?</b>
                </p>
                <input type="radio" name="artist" value="pablo picasso  " />{" "}
                Pablo Picasso <br />
                <input
                  type="radio"
                  name="artist"
                  value="leonardo da vinci   "
                />{" "}
                Leonardo da Vinci <br />
                <input
                  type="radio"
                  name="artist"
                  value="vincent van gogh   "
                />{" "}
                Vincent van Gogh <br />
                <input type="radio" name="artist" value="michelangelo  " />{" "}
                Michelangelo <br />
                <br />
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
                  <b>Which country is known as the "Land of the Rising Sun"?</b>
                </p>
                <input type="radio" name="country" value="china   " /> China{" "}
                <br />
                <input
                  type="radio"
                  name="country"
                  value=" japan  "
                /> Japan <br />
                <input type="radio" name="country" value=" south korea" /> South
                Korea <br />
                <input
                  type="radio"
                  name="country"
                  value="thailand"
                /> Thailand <br />
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
                  <b>What is the chemical symbol for gold?</b>
                </p>
                <input type="radio" name="symbol" value="au " /> Au <br />
                <input type="radio" name="symbol" value="ag " /> Ag <br />
                <input type="radio" name="symbol" value="fe " /> Fe <br />
                <input type="radio" name="symbol" value="cu " /> Cu <br />
                <br />
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

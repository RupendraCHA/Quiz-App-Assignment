import React, { useEffect, useState } from 'react'
import { MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit"
import "./App.css"
import Quiz from './components/Quiz/Quiz.jsx'
import { data } from "./data.jsx"
import Start from './components/Start/Start.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const [name, setName] = useState(null)
  const [questionNumber, setQuestionNumber] = useState(1)
  const [timeOut, setTimeOut] = useState(false)
  const [showName, setShowName] = useState(true)
  const [hide, setHide] = useState(true)
  const [showQuestion, setShowQuestion] = useState(false)

  const handleGoBackBtnClick = () => {
    setShowName(true)
    setHide(true)
    setShowQuestion(false)
    setQuestionNumber(1)
  }
  const handleQuitGame = () => {
    setHide(false)
    setShowName(false)
    setShowQuestion(false)
  }

  // let questionIndex = 0

  useEffect(() => {
    // Read the URL parameters to set the initial question index
    const urlParams = new URLSearchParams(window.location.search);

    const questionIndex = urlParams.get('questionIndex');

    if (questionIndex) {
      setQuestionNumber(parseInt(questionIndex, 10));
      setShowQuestion(true)
      setShowName(false)
      setHide(true)
    }
  }, []);

  return (<>
    <ToastContainer />
    <div className='App'>
      {showName && <Start setName={setName} setShowQuestion={setShowQuestion} setTimeOut={setTimeOut} setShowName={setShowName} />}
      <MDBRow>
        <MDBCol md="12">
          <div className='main'>
            {!hide && <div className='text-center'>
              <p className='completed'>Quiz ended.</p>
              <h4 className='earned'>Thank you <span>{name}</span> for taking the Quiz, You are attempted <span>{questionNumber - 1}/{data.length}</span> Questions.</h4>
              {/* <p className='earned count'>Correct : {rightCount}, Wrong : {wrongCount}</p> */}
              <MDBBtn id='back-btn'
                onClick={handleGoBackBtnClick}
              >Play Again</MDBBtn>
            </div>}
            {showQuestion && <div style={{ height: "100%" }}>
              {!showName && <h2 className='player'>Hi <span>{name}</span>, Welcome to the Quiz: </h2>}
              <Quiz
                data={data}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
                setTimeOut={setTimeOut}
                name={name}
              />
              <p className='answered-questions'>Answered Questions: {questionNumber - 1}/{data.length}</p>
              <MDBCol md="3" style={{ width: "100%", textAlign: "center", marginBottom: "40px" }}>
                <MDBBtn md="3" id='back-btn-exit'
                  onClick={handleGoBackBtnClick}
                >Exit</MDBBtn>
                <MDBBtn md="3" id='back-btn-quit'
                  onClick={handleQuitGame}
                >Quit</MDBBtn>
              </MDBCol>
            </div>}


          </div>

        </MDBCol>

      </MDBRow>

    </div >
  </>
  )
}

export default App

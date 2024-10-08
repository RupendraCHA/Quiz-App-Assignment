import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import QRCode from 'react-qr-code';
import "./Quiz.css"

const Quiz = (props) => {



    const { data, questionNumber, setQuestionNumber,
        setTimeOut, name } = props

    const qrValue = `https://quizapp1rb.onrender.com//?questionIndex=${questionNumber}//?name=${name}`;

    const [question, setQuestion] = useState(null)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [className, setClassName] = useState("answer")


    useEffect(() => {
        setQuestion(data[questionNumber - 1])
    }, [data, questionNumber])

    const delay = (duration, callback) => {
        setTimeout(() => {
            if (questionNumber === data.length) {
                callback()
                return setTimeOut(true)
            } else {
                callback()
            }

        }, duration)
    }

    const handleClick = (item) => {
        setSelectedAnswer(item)
        setClassName("answer active")
        delay(3000, () => {
            setClassName(item.correct ? "answer correct" : "answer wrong")
        })

        delay(5000, () => {
            if (item.correct) {
                setQuestionNumber((prev) => prev + 1)
                setSelectedAnswer(null)
                toast.success(`Congratulations ${name}, You are given CORRECT answer`)
            }
            else {
                setQuestionNumber((prev) => prev + 1)
                setSelectedAnswer(null)
                toast.error(`${name}, You are given WRONG answer`)
            }
        })
    }

    return (
        <div className='quiz'>
            <div className='question'>
                {question?.question}
            </div>

            <div className='answers'>
                {question?.answers.map((item, index) => (
                    <div key={index} className={selectedAnswer === item ? className : 'answer'}
                        onClick={() => !selectedAnswer && handleClick(item)}
                    >
                        {item.text}
                    </div>
                ))}
            </div>
            <div className='text-center qr-code-container'>
                <p>*Scan the QR Code to view the question</p>
                <QRCode value={qrValue} size={150} className='qr-code' />
            </div>
        </div>
    )
}

export default Quiz

import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import "./Quiz.css"

const Quiz = (props) => {

    const { data, questionNumber, setQuestionNumber,
        setTimeOut, name } = props

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
                toast.success(`Awesome ${name}, You are given Correct answer`)
            }
            else {
                setQuestionNumber((prev) => prev + 1)
                setSelectedAnswer(null)
                toast.error(`${name}, You are given wrong answer`)
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
        </div>
    )
}

export default Quiz

import React, { useState } from 'react'
import styles from './styles.module.css'
import {data as wholeData} from '../../data/data'

const Quiz = () => {
    const [dataIndex, setDataIndex] = useState(0)
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const data = wholeData[dataIndex]
    const [selectedOption, setselectedOption] = useState('1')
    const correctAnswer = data.correctAnswer
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitted(true)
        if(correctAnswer === selectedOption){
            setCorrectAnswers(correctAnswer => correctAnswer+1)
        }
    }

    const handleNext = () => {

        if(dataIndex +1 < wholeData.length){
            setIsSubmitted(false)
            setselectedOption('1')
            setDataIndex(dataIndex=>dataIndex+1)
        }
    }

    return (
        <div className={styles.quizcontainer}>
            <p className={styles.answer}>Correct answers: {correctAnswers}/{wholeData.length}</p>
           <h2 className={styles.question}>{data.question}</h2>

           <form
           onSubmit={handleSubmit}
           className={styles.form}
           >
        {data.answers.map(({id,question})=> (
            <label
            className={(isSubmitted && correctAnswer === id) ?
                styles.correct : (isSubmitted && correctAnswer !== id && selectedOption !== correctAnswer) ? 
                styles.wrong : styles.radio}
            key={id}>
                <input 
                disabled={isSubmitted}
                value={id}
                type="radio"
                onChange={e=>setselectedOption(e.target.value)}
                checked={selectedOption === id}
                 />
                    {question}
            </label>
            
        ))}
        <p className={styles.answer}>

        {(isSubmitted ) && (
    correctAnswer === selectedOption ? 'Correct answer! :)': 'Sorry, wrong answer :('    
        )
    }
        </p>
     { !isSubmitted &&  <button
     
     className={styles.submit}
     >
            Submit
        </button>
        }
           </form>
        {isSubmitted &&   <button
        className={styles.next}
        onClick={handleNext}>
         {dataIndex + 1 === wholeData.length ? 'That\'s all. Thanks for playing!' : 'Next ➔'   }
        </button>}
        </div>
    )
}

export default Quiz
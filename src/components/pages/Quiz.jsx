import { Link } from "react-router-dom";
import { useState } from "react";
import Confetti from "react-confetti";
import { quiz } from "../../constant";


const Quiz = ({progress, setProgress}) => {

    const[useConfetti, setUseConfetti] = useState(false);
    const[activeQuestions, setActiveQuestions] = useState(0)
    const[selectedAnswers, setSelectedAnswers] = useState('')
    const[result, setResult] = useState({
        score : 0,
        correctAnswers: 0,
        wrongAnswers: 0,
    })

    const onClick = () => {
    setActiveQuestions((prev) => prev + 1)
    }

    const handleClick = () => {
        if (!isNaN(progress)) {
            setProgress(progress  + 1);
        } else {
            setProgress(100); 
            
        }

        setUseConfetti(true)
        setTimeout(() => setUseConfetti(false), 8000);
    }

    const { questions } = quiz

    const {question, choices } = questions[activeQuestions]

    return ( 
    <>

        <h1 className="text-center text-xl text-white">Quiz</h1>

        <h2>{question}</h2>
        <ul>
            {choices.map((item) => (
                <li>{item}</li>
            ))}
        </ul>

        <button className="bg-green-500 border py-2 px-5 rounded-md focus:outline-none focus:shaodw-outline hover:bg-neutral-700" onClick={onClick}>Next Question</button>

{useConfetti && <Confetti width="1300px" height="990px" />}

<div className="flex justify-around">
                    <div className=' p-5  sm:p-5'>
                        <Link to='/expression'>
                        <button className='bg-green-500 border py-2 px-5 rounded-md focus:outline-none focus:shadow-outline hover:bg-neutral-700'>Previous</button>
                        </Link>
                    </div>
    
                    <div className=' p-5  sm:p-5'>
                        <Link to='/quiz'>
                        <button className='bg-green-500 border py-2 px-5 rounded-md focus:outline-none focus:shadow-outline hover:bg-neutral-700' onClick={handleClick}>Finish</button>
                        </Link>
                    </div>
                </div>
    </>
     );
}
 
export default Quiz;
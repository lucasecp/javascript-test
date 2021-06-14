import React from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {questions} from '../../questions'
import './style.css' 

export default function Home(){
    const [answer, setAnswer] = React.useState('');
    const [currentQuestion, setQuestion] = React.useState(1);
    const [test, setTest] = React.useState(0)
    const [showResult, setShowResult] = React.useState(false)

    function handleSubmit(e){
        e.preventDefault();
        if(answer.length && answer === questions[currentQuestion -1].rightAnswer) setTest(test + 1)
        if(currentQuestion  < questions.length ) setQuestion(currentQuestion + 1);
        else setShowResult(true)
        setAnswer('')
    }
    function handleChange({target}){
     setAnswer(target.value)
    }
   return(
    <>
    <Header/>
   { !showResult && <form onSubmit={handleSubmit}>
       <h2>{currentQuestion}) {questions[currentQuestion-1].name}    </h2>
 
       {questions[currentQuestion-1].options.map((question,index) =>
       <div key={index}>
     <label htmlFor={index} >
           <input type="radio" value={question} id={index} name={currentQuestion} onChange={handleChange}
           checked={question === answer}/>
               {question}
    </label>
       </div>
      )}
      <button disabled={!answer.length}>{currentQuestion < questions.length ? 'Próximo' : 'Finalizar'}</button>
    </form>
     }
  { showResult && <p>Você acertou {test} de {questions.length}</p> }
    <Footer/>
    </>
   )
}
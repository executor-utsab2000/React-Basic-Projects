import React, { useEffect, useState } from 'react'
import './Game.css'

const Game = () => {
  
  
    const elements = [ '❓' , '😺'   , '😻' , '😇'  , '😃'  , '😅'  , '😎'  , '😈'  , '😊'  , '😍' , '😏'   ]
    // console.log(elements.length);
    

    const [initial1 , setInitial1] = useState(0)    // for 3 random numbers : randon Number 1
    const [initial2 , setInitial2] = useState(0)    // for 3 random numbers : randon Number 2
    const [initial3 , setInitial3] = useState(0)    // for 3 random numbers : randon Number 3
    
    
    const [score , setUpdatedScore] =useState(0) //score dynamic Variable
    const [clickCounter , setClickCounter] =useState(0)
  

    const click =() =>{
        setInitial1 (Math.floor(Math.random()*10)+1) ;
        setInitial2 (Math.floor(Math.random()*10)+1) ;
        setInitial3 (Math.floor(Math.random()*10)+1) ;
       

        // console.log(initial1 , initial2 , initial3 );  


        setClickCounter(clickCounter + 1) //counting the no of times clicked
    }
    
    // using useEffect to trigger the function on state change
    useEffect(() => {
        if( initial1 === initial2 && initial2 === initial3 && initial1 !== 0  ){
            setUpdatedScore ( score + 10) ; 
        }
        
        else if ((initial1 === initial2 || initial2 === initial3 || initial3 === initial1) && initial1 !== 0 && initial2 !== 0 && initial3 !== 0) {
            setUpdatedScore(score + 5)
        }
        
        else{
            setUpdatedScore ( score + 0 )
        }
    
        
    } , [ initial1 , initial2 , initial3])
    

    // for reseting after 15 times
    const reset = () =>{
        setClickCounter(0)
        setUpdatedScore (0)
    }
  
     
    



    return (
    <>

    <div className="container-fluid">
    <div className="container">
        <div className="row  w-100">
            
            
            <div className="col-12 text-center">
                <span className="header">💸 Cassio Game 💸 </span>
            </div>

            <div className="col-12 d-flex justify-content-center  justify-content-lg-end my-4 my-lg-0 ">
                <span className='score'>{score}</span>
            </div>

            <hr className='my-4'/>

            <div className="col-12 px-5">
            <div className='gameBox'>
                <div className="row">
                    <div className="col-4 itemHolders">{elements[initial1]}</div>
                    <div className="col-4 itemHolders">{elements[initial2]}</div>
                    <div className="col-4 ">{elements[initial3]}</div>
                </div>
                </div>
    
            </div>




        <div className="col-12 d-flex justify-content-center mt-4">
            {clickCounter == 15 ?  <button onClick={reset}>Reset</button> :<button onClick={click}>Click me</button> }       
        </div>


        <div className="col-12 clickCounter mt-3 text-center">
            No of times Clicked : <span> {clickCounter} </span>  <br />
            No of clicks Remaining : <span> {15-clickCounter} </span> 
        </div>



        <hr className='my-4'/>


        <div className="col-12 mt-5">
            <span className="rules">
                <ol>
                    <li>
                        If two Matches <span className="rulesScore">5 points </span> will be given .
                    </li>
                    <li>
                        If three Matches <span className="rulesScore">10 points </span> will be given .
                    </li>
                    <li>
                        Total No of Chances  <span className="rulesScore">15 </span> .
                    </li>

                </ol>
            </span>
        </div>

        </div>
    </div>
    </div>  

    </>
  )
}

export default Game ;

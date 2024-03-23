/* stone-paper-scissors-byexecutor */

import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";

import "./Game.css";

const Game = () => {
  const imgArray = [
    "pics/question.svg", //0
    "pics/paper.svg", //1
    "pics/rock.svg", //2
    "pics/scissors.svg", //3
  ];
  const userImgArray = [
    "pics/paper.svg", //1
    "pics/rock.svg", //2
    "pics/scissors.svg", //3
  ];

  const [gameState, setGameState] = useState({
    userScore: 0,
    computerScore: 0,
    userImg: 0,
    computerImg: 0,
    clickCounter: 0,
    isDisabledBtn: false,
    // toastShown : false
  });

  const [isDark, SetIsDark] = useState(false);




  const clickIncrement = (imgIndex) => {
    setGameState((prev) => ({ ...prev, userImg: imgIndex + 1 })); // for matching index with computer image
    setGameState((prev) => ({
      ...prev,
      computerImg: Math.floor(Math.random() * 3) + 1,
    })); // for generating random no from 1 to 3 to generate random image
    setGameState((prev) => ({ ...prev, clickCounter: prev.clickCounter + 1 })); // increment of click
  };




  //checking
  useEffect(() => {
    if (gameState.userImg === gameState.computerImg) {
      setGameState((prev) => ({ ...prev, userImg: gameState.userImg + 0 }));
      setGameState((prev) => ({
        ...prev,
        computerScore: gameState.computerScore + 0,
      }));
    } else if (
      (gameState.userImg === 1 && gameState.computerImg === 2) ||
      (gameState.userImg === 2 && gameState.computerImg === 3) ||
      (gameState.userImg === 3 && gameState.computerImg === 1)
    ) {
      setGameState((prev) => ({ ...prev, userScore: gameState.userScore + 1 }));
    } else if (
      (gameState.userImg === 2 && gameState.computerImg === 1) ||
      (gameState.userImg === 3 && gameState.computerImg === 2) ||
      (gameState.userImg === 1 && gameState.computerImg === 3)
    ) {
      setGameState((prev) => ({
        ...prev,
        computerScore: gameState.computerScore + 1,
      }));
    }
  }, [gameState.clickCounter, gameState.computerImg, gameState.userImg]);





  // toaster Appear
  useEffect(() => {
    if (gameState.clickCounter === 20) {
      setGameState((prev) => ({ ...prev, isDisabledBtn: true }));
    }
  }, [gameState.clickCounter]);



  // console.log(gameState.isDisabledBtn);




  useEffect(() => {
    if (gameState.isDisabledBtn === true) {  
      // setGameState((prev)=>({...prev , isDisabledBtn : true }))
      // setGameState((prev)=>({...prev , toastShown : true }))

      if (gameState.userScore > gameState.computerScore) {
        toast("Congratulations !! You Won...🥳🥳🥳");
        // console.log(gameState.userScore);
        // console.log(gameState.computerScore);
      } else if (gameState.userScore < gameState.computerScore) {
        toast("Opps !! You Lost...😭😭😭");
        // console.log(gameState.userScore);
        // console.log(gameState.computerScore);
      } else if (
        gameState.userScore === gameState.computerScore &&
        gameState.userScore != 0 &&
        gameState.computerScore != 0
      ) {
        toast("Match Tied...🤝🤝🤝");
        // console.log(gameState.userScore);
        // console.log(gameState.computerScore);
      }
    }
  }, [gameState.isDisabledBtn]);




  // welcome
  useEffect(() => {
    toast("Welcome !!  👋👋👋");
  }, []);




  const reset = () => {
    setGameState((previous) => ({
      ...previous,
      userScore: 0,
      computerScore: 0,
      userImg: 0,
      computerImg: 0,
      clickCounter: 0,
      isDisabledBtn: false,
    }));
  };



  const themeChanger = () => {
    SetIsDark(!isDark);
  };



  // conditional rendeing of body background Color
  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "#303F9F" : "#81D4FA";

    return () => (document.body.backgroundColor = "#303F9F");
  }, [isDark]);




  
  return (
    <>
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 d-flex justify-content-end mt-4 mb-2 pe-3 pe-lg-5">
              {isDark ? (
                <button className=" btnTheme light" onClick={themeChanger}>           
                  <LightModeIcon />
                </button>
              ) : (
                <button className=" btnTheme dark" onClick={themeChanger}>                  
                  <ModeNightIcon />
                </button>
              )}
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <p className="gameName">Stone Paper Scissor</p>
                <p className="icons mb-5">
                  <img src="pics/rock.svg" alt="" className="nameSvg" />
                  <img src="pics/paper.svg" alt="" className="nameSvg" />
                  <img src="pics/scissors.svg" alt="" className="nameSvg" />
                </p>
                <p className="inputTimes">
                  <span className="me-4 mt-3">Total Chances : 20 </span>
                </p>
                <hr className="hr1" />
              </div>

              <div className="col-12 d-flex justify-content-between text-center">
                <div className="scoreDiv">
                  <p
                    className="scoreHeader"
                    style={isDark ? { color: "#FFEB3B" } : { color: "black" }}
                  >
                    User Score
                  </p>
                  <div className="scoreCard">{gameState.userScore}</div>
                </div>

                <div className="scoreDiv">
                  <p
                    className="scoreHeader"
                    style={isDark ? { color: "#FFEB3B" } : { color: "black" }}
                  >
                    Computer Score
                  </p>
                  <div className="scoreCard">{gameState.computerScore}</div>
                </div>
              </div>

              <div className="col-12 mt-5 mb-3">
                <div className="container w-75">
                  <div className="row">
                    <div className="col-12 d-flex justify-content-between text-center">
                      <div className="imgDisplay">
                        {userImgArray.map((imgSrc, index) => {
                          return (
                            <button
                              key={index}
                              onClick={() => clickIncrement(index)}
                              disabled={gameState.isDisabledBtn}
                            >
                              {/* passing the index as parameter so that i can access it on top => line-- 29 */}
                              <img
                                src={imgSrc}
                                alt=""
                                className="mainImgChange"
                              />
                            </button>
                          );
                        })}
                      </div>

                      <div className="imgDisplay align-self-center">
                        <img
                          src={imgArray[gameState.computerImg]}
                          alt=""
                          className="mainImgChange"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 d-flex justify-content-center mt-s5">            
                {gameState.clickCounter === 20 && <button className="reset" onClick={reset}> Reset </button>}          {/* using short circuit evaluation to render data */}
              </div>

              <div
                className="col-12 text-center mt-5"
                style={{ lineHeight: "10px" }}
              >
                <p
                  className="txtlast"
                  style={isDark ? { color: "#FFEB3B" } : { color: "black" }}
                >
                  Total Time Clicked :
                  <span className="text-danger"> {gameState.clickCounter}</span>
                </p>
                <p
                  className="txtlast"
                  style={isDark ? { color: "#FFEB3B" } : { color: "black" }}
                >
                  Total Time Remaining:
                  <span className="text-danger">
                    
                    {20 - gameState.clickCounter}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Game;

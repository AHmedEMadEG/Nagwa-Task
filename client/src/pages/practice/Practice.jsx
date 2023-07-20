import { useEffect, useRef, useState } from "react";
import "./practice.scss";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Practice = () => {
  // STATES
  const [words, setWords] = useState([]);
  const [wordNum, setWordNum] = useState(0);
  const [score, setScore] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  // REFs
  const btnRefs = useRef([]);

  // useNavigate HOOK
  const navigate = useNavigate();


  useEffect(() => {
    axios.get("http://localhost:8800/api/words")
      .then((recData) => {
        setWords(recData.data);
      })
      .catch(err => console.log(err))
  }
    , []);

  const clicked = (answer, index) => {
    setIsClicked(true);
    // changing BG-C of the clicked BTN
    btnRefs.current[index].style.backgroundColor = (answer === words[wordNum].pos) ? 'green' : 'red';
    // if right answer, increment the score by 1
    (answer === words[wordNum].pos) && setScore(score + 1);

    setTimeout(() => {
      // next word in 1 sec
      setWordNum(wordNum + 1);
      setIsClicked(false);
      // Reset background color of all buttons
      btnRefs.current.forEach((btnRef) => {
        btnRef.style.backgroundColor = '';
      });
    }, 1000);
  }
  // Redirect to Rank Page after the 10th word
  wordNum === 10 && navigate('/rank', { state: { score: (score / 10) * 100 } });
  return (
    <div className="container">
      <div className="wrapper">
        <div className="word">
          {words[wordNum]?.word}
        </div>
        <div className="answers">
          <button disabled={isClicked} ref={(ref) => (btnRefs.current[0] = ref)} onClick={() => clicked("noun", 0)}>NOUN</button>
          <button disabled={isClicked} ref={(ref) => (btnRefs.current[1] = ref)} onClick={() => clicked("verb", 1)}>VERB</button>
          <button disabled={isClicked} ref={(ref) => (btnRefs.current[2] = ref)} onClick={() => clicked("adjective", 2)}>ADJECTIVE</button>
          <button disabled={isClicked} ref={(ref) => (btnRefs.current[3] = ref)} onClick={() => clicked("adverb", 3)}>ADVERB</button>
        </div>
      </div>
      <div className="progress-bar">
        <div style={{ width: `${wordNum * 65}px`, transition: 'width 1s' }} className="progress">
        </div>
      </div>
    </div>
  )
}

export default Practice
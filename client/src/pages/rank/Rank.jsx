import { Link, useLocation } from "react-router-dom";
import "./rank.scss";
import { useEffect, useState } from "react";
import axios from "axios";


const Rank = () => {
  // get the score
  const location = useLocation();
  const score = location.state?.score;
  // states
  const [rank, setRank] = useState(0);

  useEffect(() => {
    axios.post("http://localhost:8800/api/rank", {finalScore: score})
      .then((recData) => {
        setRank(recData.data);
      })
      .catch(err => console.log(err))
  }, [score])
  return (
    <div className="container">
      <div className="rank">
        your Rank is: {rank}
      </div>
      <div className="try-again">
        <Link to='/' className="link">TRY AGAIN!</Link>
      </div>
    </div>
  )
}

export default Rank
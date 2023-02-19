function Score({ date, score }) {

    return (
      <div className="score-item">
        <p>Date: {date}</p>
        <p>Score: {score}</p>
      </div>
    );
  }
  
  export default Score;
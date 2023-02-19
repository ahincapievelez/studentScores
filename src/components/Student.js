import Score from "./Score";

function Student({ name, bio, scores }) {

    let ScoreComponent = scores.map((score) => {
        return (
            <Score date={score.date} score={score.score}/>
        )
    });

    return (
    <div className="student">
      <h1>{name}</h1>
      <p>{bio}</p>
      <div className="score">
        {ScoreComponent}
      </div>
    </div>
    );
  }
  
  export default Student;
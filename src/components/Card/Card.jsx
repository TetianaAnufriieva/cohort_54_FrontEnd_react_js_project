import "./styles.css";
import {person} from "../../homeworks/Homework_02/data"; 

function Card() {
  return (
    <div className="card_component">
      <img className="card_avatar" src={person.avatarURL} alt="Gomer"></img>
      <h3 className="card_title"><span className="info_title">Full name: </span>{person.fullName} </h3>
      <p className="card_info"><span className="info_title">Profession:</span> {person.proffesion}</p>
      <p className="card_info"><span className="info_title">Hobbies:</span> {person.hobbies} </p>
    </div>
  );
}

export default Card;

import "./styles.css";
import { person } from "../../homeworks/Homework_02/data";

// props - это объект, с помощью которого мы передаем данные из родительского компонента в дочерний
function Card({avatarURL = "", firstName = "Name", lastName = "Last Name", job = "-", hobby = "-"}) {
  return (
    <div className="card_component">
      <img className="card_avatar" src={avatarURL} alt="User Avatar"></img>
      <h3 className="card_title">
        <span className="info_title">Full name: </span>
        {`${firstName} ${lastName}`}
      </h3>
      <p className="card_info">
        <span className="info_title">Profession:</span> {job}
      </p> 
      <p className="card_info">
        <span className="info_title">Hobbies:</span> {hobby}
      </p>
    </div>
  );
}

export default Card;

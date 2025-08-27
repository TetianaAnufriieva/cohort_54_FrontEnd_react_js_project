import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";

import "./styles.css";

function Lesson_03() {
  const homer_Simpson = {
    avatarURL: "https://pngimg.com/uploads/simpsons/simpsons_PNG4.png",
    firstName: "Homer",
    lastName: "Simpson",
    job: "safety Inspector at Springfield Nuclear Power Plant",
    hobby:
      "eating donuts, watching TV, bowling, drinking beer at Moe’s Tavern, spending time with family",
  };

  const marge_Simpson = {
    avatarURL:
      "https://whatsondisneyplus.com/wp-content/uploads/2021/09/marge.png",
    firstName: "Marge",
    lastName: "Simpson",
    job: "No Job",
    hobby: "cooking",
  };

  const bart_Simpson = {
    avatarURL:
      "https://i.pinimg.com/originals/23/13/fe/2313fe6d8bb0fc1934d4b3a517a63593.jpg",
    firstName: "Bart",
    lastName: "Simpson",
    job: "No job",
    hobby: "skating",
  };

  // Как мы делали раньше на базовом курсе
  // const button = document.querySelector("#get_button");
  // button.addEventListener('click', () => {
  //   console.log("Button works");

  // });

  // Как сейчас:
  //создаю функцию
  const getUser = () => {
    console.log("Button works");
  };

  return (
    <div className="homework03_page_wrapper">
      <Card
        // Если ключей в объекте props более 10, то лучше передавать не ключи, а целый объект
        avatarURL={homer_Simpson.avatarURL}
        firstName={homer_Simpson.firstName}
        lastName={homer_Simpson.lastName}
        job={homer_Simpson.job}
        hobby={homer_Simpson.hobby}
      />
      <Card
        avatarURL={marge_Simpson.avatarURL}
        firstName={marge_Simpson.firstName}
        lastName={marge_Simpson.lastName}
        job={marge_Simpson.job}
        hobby={marge_Simpson.hobby}
      />
      <Card
        avatarURL={bart_Simpson.avatarURL}
        firstName={bart_Simpson.firstName}
        lastName={bart_Simpson.lastName}
        job={bart_Simpson.job}
        hobby={bart_Simpson.hobby}
      />
      <div className="button_container">
        <Button onClick={getUser} buttonName="Get User" />
        <Button
          onClick={() => {
            console.log("Send Request");
          }}
          buttonName="Send Request"
        />
        <Button>
          <img
            className="icon"
            src="https://png.pngtree.com/png-clipart/20230801/original/pngtree-hand-pointer-finger-up-vector-picture-image_7756133.png"
          />
        </Button>
        {/* <button id = "get_button">Get</button> */}

        {/* <button onClick={getUser}>Get</button>  */}
      </div>
    </div>
  );
}

export default Lesson_03;

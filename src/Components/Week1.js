import React from "react";
import profile from "../../src/images/Screenshot 2024-02-09 155607.png";

const MyProfile = () => {};
function Week1() {
  return (
    <div className="Week1">
      <h1>!!Hello World!!</h1>
      <hr></hr>
      <b>
        Name : Yalla Jnan Devi Satya Prasad<br></br>
        Roll Number : 2211CS010605<br></br>
        Sem Id : G7A-34<br></br>
        Group : 7A
      </b>
      <hr></hr>
      <h1>My Profile</h1>
      <MyProfile />
      <img
        src={profile}
        style={{
          height: "200px",
          widht: "200px",
          borderRadius: "100px",
          border: "5px solid #000000",
        }}
        alt="My profile picture"
      ></img>
      <p>
        <b>
          Myself Yalla Jnan Devi Satya Prasad of Roll Number 2211CS010605<br />
          I am currently studying Btech 2nd year in Malla Reddy University<br />
          Am a student enrolled in CSE General course.<br />
          IDLYYYYY<br />
          My schooling is done in Chennai, and completed inter from Narayana College <br />
        </b>
      </p>
    </div>
  );
}

export default Week1;

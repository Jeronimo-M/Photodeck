
import { Link } from "react-router-dom";
import { baseURL, config } from "../services";

function Photodeck(props) {
  const { username, userText, photoURL } = props.photodeck.fields;

  return (
    <div>
      <h3>{username}</h3>
      <h4>{userText}</h4>
      <p>{photoURL} Photo URL here</p>
      <button>Pictorialize!</button>
      {/* <Link to={`/edit/${props.photodeck.id}`}>
        <button>Delete!</button>
      </Link> */}
    </div>
  )   
}

export default Photodeck;

//
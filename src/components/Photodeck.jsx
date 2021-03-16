import { baseURL, config } from "../services";
import axios from "axios";

function Photodeck(props) {
  const { username, userText, photoURL } = props.photodeck.fields;

  const deletePost = async () => {
    const photodeckURL = `${baseURL}/${props.photodeck.id}`;
    await axios.delete(photodeckURL, config);
    props.setToggleFetch((curr) => !curr);
  }

  return (
    <div>
      <h3>{username}</h3>
      <h4>{userText}</h4>
      <p>{photoURL}</p>
      <button onClick={deletePost}>Delete!</button>
    </div>
  )   
}
      
export default Photodeck;


      



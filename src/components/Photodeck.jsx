import { baseURL, config } from "../services";
import axios from "axios";
import { useParams } from "react-router";

function Photodeck(props) {
  const { username, userText, photoURL } = props.photodeck.fields;
  const { id } = useParams();

  const deletePost = async () => {
    const photodeckURL = `${baseURL}/${props.photodeck.id}`;
    console.log(props.photodeck.id)
    await axios.delete(photodeckURL, config);
    props.setToggleFetch((curr) => !curr);
  }

  return (
    <div key={id}>
      <h3>{username}</h3>
      <h4>{userText}</h4>
      <a href="`${photoURL}`"><img src={photoURL} alt="image"></img></a>
      <button onClick={deletePost}>Delete!</button>
    </div>
  )   
}
      
export default Photodeck;


      



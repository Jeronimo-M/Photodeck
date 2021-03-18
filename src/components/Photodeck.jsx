import { baseURL, config } from "../services";
import axios from "axios";
import { useParams } from "react-router";
import Like from "./Like";

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
      <a href="`${photoURL}`"><img src={photoURL} alt="post"></img></a>
      <h1>{username}</h1>
      <h2>{userText}</h2>
      <Like />
      <button onClick={deletePost}>Delete!</button>
    </div>
  )   
}
      
export default Photodeck;


      



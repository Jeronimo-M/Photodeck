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
    <div key={id} id="photo-post-container">
      <div className="post">
      <a href="`${photoURL}`"><img src={photoURL} alt="post" id="image"></img></a>
      
        <div id="button-container">
          <Like id="home-buttons" />
          <button onClick={deletePost} id="home-buttons">Delete!</button>
        </div>
        
        <div id="user-info-container">
          <h1 className="user-info">{username}</h1>
          <h2 className="user-info">{userText}</h2>
        </div>

      </div>
      <div className="post-divider"></div>
      
      
      
    </div>
  )   
}

export default Photodeck;

      

      
      


      



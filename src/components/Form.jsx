import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";

function Form(props) {
  const [username, setUsername] = useState("");
  const [userText, setUserText] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    if (params.id && props.photodeck.length > 0) {
      const photodeck = props.photodeck.find((photodeck) =>
        photodeck.id === params.id);
      if (photodeck) {
        setUsername(photodeck.fields.username);
        setUserText(photodeck.fields.userText);
        setPhotoURL(photodeck.fields.photoURL);
      }
    }
  }, [props.photodeck, params.id])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username,
      userText,
      photoURL,
    }
    if (params.id) {
      const airtableRecordURL = `${baseURL}/${params.id}`;
      await axios.put(airtableRecordURL, { fields: newPost }, config)
    } else {
      await axios.post(baseURL, { fields: newPost }, config)
    }
    props.setToggleFetch((curr) => !curr);
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        required
        id="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="userText">Description:</label>
      <input
        required
        id="userText"
        type="text"
        value={userText}
        onChange={(e) => setUserText(e.target.value)}
      />
      <label htmlFor="photoURL">Upload Photo URL Here:</label>
      <input
        required
        id="photoURL"
        type="text"
        value={photoURL}
        onChange={(e) => setPhotoURL(e.target.value)}
      />
      <button type="submit">Pictorialize!</button>
    </form>
  )
}

export default Form;





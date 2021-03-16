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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username,
      userText,
      photoURL,
    }
  }



}

export default Form;
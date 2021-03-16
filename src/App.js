import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { baseURL, config } from "./services";
import './App.css';
import axios from "axios";
import Photodeck from "./components/Photodeck";
import Navbar from "./components/Navbar";


function App() {
  const [photodeck, setPhotodeck] = useState([]);

  useEffect(() => {
    const grabAirtable = async () => {
      const resp = await axios.get(baseURL, config);
      console.log(resp.data)
      setPhotodeck(resp.data.records);
    
    };
    grabAirtable();
  }, []);
  
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <div className="photodeck-container">

        </div>
      </Route>
    </div>
  );
}

export default App;

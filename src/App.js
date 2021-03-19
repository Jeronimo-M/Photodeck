import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { baseURL, config } from "./services";
import Form from "./components/Form";
import axios from "axios";
import Photodeck from "./components/Photodeck";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';



function App() {
  const [photodeck, setPhotodeck] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);

  useEffect(() => {
    const grabAirtable = async () => {
      const resp = await axios.get(baseURL, config);
      console.log(resp.data)
      setPhotodeck(resp.data.records);
    };
    grabAirtable();
  }, [toggleFetch]);
    
  
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Route exact path="/">
        <div className="photodeck-container">
          {photodeck.map((photodeck) => (
            <Photodeck
              key={photodeck.id}
              photodeck={photodeck}
              setToggleFetch={setToggleFetch}
              />
            
              ))}
             
        </div>
      </Route>
      <Route path="/new">
        <Form photodeck={photodeck} setToggleFetch={setToggleFetch} />
      </Route>
      <Footer />
    </div>
  );
}
              

export default App;

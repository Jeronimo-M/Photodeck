import { Link } from "react-router-dom";

function Navbar() {
  return (
    
    <div id="navbar">
      
      <nav>
        <Link to="/" id="navlink">Home </Link>
        <Link to="/new" id="navlink"> Pic Me!</Link>
      </nav>
    </div>
  )
}

export default Navbar
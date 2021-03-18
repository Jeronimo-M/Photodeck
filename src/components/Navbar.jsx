import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div id="navbar">

      <nav>
        <Link to="/">Home </Link>
        <Link to="/new"> Pictorialize!</Link>
      </nav>
    </div>
  )
}

export default Navbar
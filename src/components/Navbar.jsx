import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav id="navbar">
      <Link to="/">Home </Link>
      <Link to="/new"> Pictorialize!</Link>
    </nav>
  )
}

export default Navbar
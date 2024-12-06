import { Link } from "react-router-dom"

function Header() {

    return (
      <header>
        <h1>Header</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/bag">Bag</Link></li>
        </ul>
      </header>
    )
  }
  
  export default Header
  
  
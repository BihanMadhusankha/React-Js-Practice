// import { useState } from "react"
import reactLogo from '../assets/react.svg'


export default function Nav() {
    // const [count, setCount] = useState(0);
  return (
    <div className="container">
        <nav className="navbar navbar-expand-lg bg-body-white">
  <div className="container-fluid">
    <img src={reactLogo}alt="" />
    {/* <a className="navbar-brand" href="#"></a>  */}
    <span>ICET Engineering</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto ">
        <li className="nav-item btn">
          <a className="nav-link active" aria-current="page" >Home</a>
        </li>
        <li className="nav-item btn">
          <a className="nav-link" href="#">Lecturs</a>
        </li>
        <li className="nav-item btn">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item btn">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

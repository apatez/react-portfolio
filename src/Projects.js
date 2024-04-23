import React from "react";
import { Link } from "react-router-dom";

function Projects() {
    return (
    <div className="container">
    <h3>Here are some of my favorite projects:</h3>
    <div className="row">
    <div className="column">
    <div className="card" style={{width: "18rem"}}>
  <img src="" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Restaurant Reservtion App</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://restaurant-reservation-frontend-psi.vercel.app/dashboard" className="btn btn-primary stretched-link">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="column">
    <div className="card" style={{width: "18rem"}}>
  <img src="" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Movie Database</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary stretched-link">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="column">
    <div className="card" style={{width: "18rem"}}>
  <img src="" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Flashcard App</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary stretched-link">Go somewhere</a>
  </div>
</div>
    </div>
    </div>
</div>
    )
}
  


export default Projects;
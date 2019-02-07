import React, { Component } from 'react';
import "../Carousel/Carousel.css";


class Carousel extends Component {

    render() {
        return (
            <div className="carousel">
        
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"  ></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
              <div className="carousel-inner">
                 <div className="carousel-item active">
                  <img src="https://images.pexels.com/photos/443356/pexels-photo-443356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className="d-block w-100" alt="..."></img>
                  <div class="carousel-caption d-none d-md-block">
                     <h1>Are you spending your earnings wisely?</h1>
                      <p>Did you know the average person spends (this much %) of their paycheck in rent?</p>
                  </div>
                 </div>
                 <div className="carousel-item">
                  <img src="https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className="d-block w-100" alt="..."></img>
                  <div class="carousel-caption d-none d-md-block">
                     <h1>Is your commute back home worth it?</h1>
                      <p>Did you know the average person spends (this much %) of their paycheck in rent?</p>
                  </div>
                 </div>
                 <div className="carousel-item">
                  <img src="https://images.pexels.com/photos/414144/pexels-photo-414144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className="d-block w-100" alt="..."></img>
                  <div class="carousel-caption d-none d-md-block">
                     <h1>Why pay rent for a house you're barely in?</h1>
                      <p>Did you know the average person spends (this much %) of their paycheck in rent?</p>
                  </div>
                 </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
            
            </div>
         );
     }
}

export default Carousel;
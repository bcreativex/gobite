import React from 'react'

export default function Carousel() {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:'contain !important'}}>
        
        <div className="carousel-inner" id='carousel'>
          <div className='carousel-caption' style={{zIndex:'10'}}>
          <form className="d-flex">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0 text-white bg-success" type="submit">Search</button>
          </form>
          </div>
          <div className="carousel-item active">
            <img src="https://picsum.photos/id/17/900/700" className="d-block w-100" style={{filter: "brightness(30%)"}} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://picsum.photos/id/18/900/700" className="d-block w-100" style={{filter: "brightness(30%)"}} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://picsum.photos/id/19/900/700" className="d-block w-100" style={{filter: "brightness(30%)"}} alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

//carousel
import { Link } from "react-router-dom";

const ImageCarousel = () => {
  return (
    <>
      {/* Inline styles for custom indicators and caption background */}
      <style>{`
        .carousel-indicators button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: crimson;
          border: none;
          margin: 0 4px;
          opacity: 0.6;
          transition: opacity 0.3s ease;
        }

        .carousel-indicators button.active {
          opacity: 1;
        }

        .carousel-caption {
          background-color: rgba(0, 0, 0, 0.6); /* semi-transparent black */
          padding: 10px;
          border-radius: 8px;
        }
      `}</style>

      <section className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div className="carousel slide" data-bs-ride="carousel" id="mycarousel">

            {/* Carousel Indicators */}
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#mycarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#mycarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#mycarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#mycarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/yoghurt1.jpg" alt="" className="d-block w-100" height="300px" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Delicious Yoghurt 1</h5>
                  <p>Creamy and refreshing</p>
                </div>
              </div>

              <div className="carousel-item">
                <img src="images/yoghurt2.jpg" alt="" className="d-block w-100" height="300px" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Delicious Yoghurt 2</h5>
                  <p>Made with natural ingredients</p>
                </div>
              </div>

              <div className="carousel-item">
                <img src="images/yoghurt3.jpg" alt="" className="d-block w-100" height="300px" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Delicious Yoghurt 3</h5>
                  <p>Rich in flavor and goodness</p>
                </div>
              </div>

              <div className="carousel-item">
                <img src="images/yoghurt4.jpg" alt="" className="d-block w-100" height="300px" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Delicious Yoghurt 4</h5>
                  <p>Perfect for every occasion</p>
                </div>
              </div>
            </div>

            <Link to="#mycarousel" className="carousel-control-prev" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </Link>

            <Link to="#mycarousel" className="carousel-control-next" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </Link>
          </div>
        </div>
        <div className="col-md-1"></div>
      </section>
    </>
  );
};

export default ImageCarousel;

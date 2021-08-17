import React from "react";
import { Link } from "react-router-dom";

class Images extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        images: []
      };
    }

    componentDidMount() {
        const url = "/api/v1/images/index";
        fetch(url)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then(response => this.setState({ images: response }))
          .catch(() => this.props.history.push("/"));
    }

    render() {
        const { images } = this.state;
        const allImages = images.map((image, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="card mb-4">
              <img
                src={image.image}
                className="card-img-top"
                alt={`${image.uploader_name} image`}
              />
              <div className="card-body">
                <h5 className="card-title">{image.uploader_name}</h5>
                <Link to={`/image/${image.id}`} className="btn custom-button">
                  View Image
                </Link>
              </div>
            </div>
          </div>
        ));
        const noImage = (
          <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
            <h4>
              No images yet. Why not <Link to="/new_image">create one</Link>
            </h4>
          </div>
        );
    
        return (
          <>
            <section className="jumbotron jumbotron-fluid text-center">
              <div className="container py-5">
                <h1 className="display-4">Images for every occasion</h1>
                <p className="lead text-muted">
                  We’ve pulled together our most popular images, our latest
                  additions, and our editor’s picks, so there’s sure to be something
                  tempting for you to try.
                </p>
              </div>
            </section>
            <div className="py-5">
              <main className="container">
                <div className="text-right mb-3">
                  <Link to="/image" className="btn custom-button">
                    Create New Image
                  </Link>
                </div>
                <div className="row">
                  {images.length > 0 ? allImages : noImage}
                </div>
                <Link to="/" className="btn btn-link">
                  Home
                </Link>
              </main>
            </div>
          </>
        );
      }
  
  }
  export default Images;
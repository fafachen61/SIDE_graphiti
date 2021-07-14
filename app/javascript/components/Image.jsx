import React from "react";
import { Link } from "react-router-dom";

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = { image: { category: "" } };

    this.addHtmlEntities = this.addHtmlEntities.bind(this);
    this.deleteImage = this.deleteImage.bind(this);
  }

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    const url = `/api/v1/show/${id}`;

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ image: response }))
      .catch(() => this.props.history.push("/images"));
  }

  addHtmlEntities(str) {
    return String(str)
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
  }

  deleteImage() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    const url = `/api/v1/destroy/${id}`;
    const token = document.querySelector('meta[name="csrf-token"]').content;

    fetch(url, {
      method: "DELETE",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(() => this.props.history.push("/images"))
      .catch(error => console.log(error.message));
  }

  render() {
    const { image } = this.state;
    let test_str = 'bbf'
    let category_list = "No category available";
    if (image.category.length > 0) {
      category_list = image.category
        .split(",")
        .map((each_category, index) => (
          <li key={index} className="list-group-item">
            {each_category}
          </li>
        ));
    }
    const imageInstruction = this.addHtmlEntities(image.instruction);

    return (
      <div className="">
        <div className="hero position-relative d-flex align-items-center justify-content-center">
          <img
            src={image.image}
            alt={`${image.uploader_name} image`}
            className="img-fluid position-absolute"
          />
          <div className="overlay bg-dark position-absolute" />
          <h1 className="display-4 position-relative text-white">
            {image.uploader_name}
          </h1>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <ul className="list-group">
                <h5 className="mb-2">Categories</h5>
                {category_list}
              </ul>
            </div>
            <div className="col-sm-12 col-lg-7">
                <h5 className="mb-2">Test Row</h5>   
            </div>
            <div className="col-sm-12 col-lg-2">
              <button type="button" className="btn btn-danger" onClick={this.deleteImage}>
                Delete Image
              </button>
            </div>
          </div>
          <Link to="/images" className="btn btn-link">
            Back to images
          </Link>
        </div>
      </div>
    );
  }
}

export default Image;
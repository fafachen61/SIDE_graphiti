import React from "react";
import { Link } from "react-router-dom";

class NewImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploader_name: "",
      discription: "",
      creator_name: "",
      image: "",
      category: "",
      access_level: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
  }

  stripHtmlEntities(str) {
    return String(str)
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    console.log('subbed');
    const url = "/api/v1/images/create";
    const { uploader_name, discription, creator_name, image, category, access_level } = this.state;

    if (uploader_name.length == 0 ||  category.length == 0 || access_level.length == 0){
        console.log('zero detect')
        return
    }   

    const body = {
      uploader_name,
      discription, 
      creator_name, 
      image, 
      category, 
      access_level
    };

    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        console.log(response)
        throw new Error("Network response was not ok.");
      })
      .then(response => this.props.history.push(`/image/${response.id}`))
      .catch(error => console.log(error.message));
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h1 className="font-weight-normal mb-5">
              Add a new image to our awesome image collection.
            </h1>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="image_uploader_Name">Image uploader name</label>
                <input
                  type="text"
                  name="uploader_name"
                  id="image_uploader_Name"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="image_Categories">Categories</label>
                <input
                  type="text"
                  name="category"
                  id="image_Categories"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
                <small id="categoriesHelp" className="form-text text-muted">
                  Separate each category with a comma.
                </small>
              </div>
              <label htmlFor="image_Access_level">access_level</label>
              <textarea
                className="form-control"
                id="image_Access_level"
                name="access_level"
                rows="5"
                required
                onChange={this.onChange}
              />
              <label htmlFor="image_image_url">image url</label>
              <textarea
                className="form-control"
                id="image_image_url"
                name="image"
                rows="5"
                required
                onChange={this.onChange}
              />
              <button type="submit" className="btn custom-button mt-3">
                Create Image
              </button>
              <Link to="/images" className="btn btn-link mt-3">
                Back to images
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewImage;
import React, { Component } from "react";

export class Newitems extends Component {
   
  render() {
    let  {title , description , imageurl , newsUrl }=this.props
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src={!imageurl?"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fillustrations%2Fnews-headlines-newsletter-636978%2F&psig=AOvVaw2FKObuTeurHLhv23BhK00d&ust=1633179535495000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNCE-IGiqfMCFQAAAAAdAAAAABAD":imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}...
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newitems;

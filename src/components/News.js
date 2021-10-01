import React, { Component } from "react";
import Newitems from "./Newitems";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      article: [],
      loading: false,
      page:1,

    };
  }

  async componentDidMount(){
    let url = "&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles: parsedData.articles, totalArticles: parsedData.totalresults})
  }

  handleNextClick= async ()=>{
    if( this.state.page+1 > Math.ceil(this.state.totalresults/20)){


    }
    else{

      let url = `&page=${this.state.page + 1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({
        page: this.state.page + 1,
        article: parsedData.articles
      }
      )
    }
  }
  handlePrevClick= async ()=>{
    let url = `&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      page: this.state.page - 1,
      article: parsedData.articles
    }
    )
  }


  render() {
    return (
      <div className="container my-3">
        <h1>News app top headlines</h1>
        <div className="row">
          {this.state.article.map((element)=>{
            return <div className="col-sm-4" key={element.url}>
            <Newitems
              title={element.title?element.title:""}
              description={element.description?element.description:""}
              imageurl={element.urlToImage}
              newsUrl={element.url}
            />
          </div>
          })}
          
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark"  onClick={this.handlePrevClick}>&larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;

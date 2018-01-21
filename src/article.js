import React, {Component} from 'react'


export default class Article extends Component {

   handleError = (self) => {
    self.target.style.display = 'none';
  }
  translate =() => {

  }

  render() {
  const art = this.props.article;

  return (
    <li>
      <a href={art.url}><h3>{art.title}</h3></a>
      <img src={art.urlToImage} onError={this.handleError.bind(this)} />
      <p>{art.description}</p>
      <p>{art.src}</p>
          {/*  <button onClick={this.translate}>translate</button> */}
  </li>
  )
}
}

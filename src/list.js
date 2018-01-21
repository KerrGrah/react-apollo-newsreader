import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
//import Image from './image';
import Article from './article';
import countries from './countries';

/*
const testImg = (url) => {
  let img = new Image()
    img.src = url
    img.onload = () => {
      console.log(img);
      return img
    }
}*/

const List = ({data: {articles}}) => {
//  console.log(articles);
  if (!articles) return <p>Loading...</p>;
  let counter = 0
  return (
    <ul>
       {articles && articles.map(art => (
         (art.urlToImage || art.description ) && <Article article={art} key={counter++}/> ))}
     </ul>
  )
}


export default graphql(gql`
  query articles {
  articles {
    url
    title
    urlToImage
    description
    src
  }
}
`)(List);

import React, {Component} from 'react'

export default class Image extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      img: ""
    }
  }
  Img = () => {
      console.log(this.props.src);
    var img = new Image();
    img.addEventListener('load', function() {
        this.setState(() => {
          return {loaded: true,
        img: img}
      })
  })
      img.src = this.props.src;

}

 componentWillMount() {
//  console.log("componentWillMount");
    this.Img()
}

render() {

    return this.state.img

}
}

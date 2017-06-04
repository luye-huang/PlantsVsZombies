/**
 * Created by luye on 2017/6/4.
 */
import React from 'react';
export default class Bullet extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   x : this.props.x,
    // }
  }
  
  render() {
    // const {}
    const bulletStyle = {
      bullet: {
        position: 'absolute',
        backgroundColor: 'black',
        width: '10px',
        height: '10px'
      }
    };
    bulletStyle.bullet.left = this.props.x - 20 + 'px';
    bulletStyle.bullet.top = this.props.y - 20 + 'px';
    return (<div style={bulletStyle.bullet}>
      b</div>)
  }
}
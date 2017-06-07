/**
 * Created by luye on 2017/6/4.
 */
import React from 'react';
import {BULLET_TOP_OFFSET} from '../config/layout';
export default class Bullet extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    const bulletStyle = {
      bullet: {
        position: 'absolute',
        backgroundColor: 'black',
        width: '10px',
        height: '10px'
      }
    };
    bulletStyle.bullet.left = this.props.x - 20 + 'px';
    bulletStyle.bullet.top = this.props.y - BULLET_TOP_OFFSET + 'px';
    return (<div style={bulletStyle.bullet}>
      b</div>)
  }
}
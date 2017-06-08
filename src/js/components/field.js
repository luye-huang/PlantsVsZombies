/**
 * Created by luye on 2017/6/4.
 */
import React from 'react';
import {observer, inject} from 'mobx-react';
import Bullet from './bullet';
import Pit from './pit';
import {SHOOTING_RANGE} from '../config/layout';
@inject(['lawnStore']) @observer
export default class Field extends React.Component {
  constructor(props) {
    super(props);
    this.lawnStore = this.props.lawnStore;
  }

  render() {
    console.log(SHOOTING_RANGE);
    let bullets = this.lawnStore.bullets.filter((bullet)=>bullet.x < SHOOTING_RANGE && bullet.finished != true);
    bullets = bullets.map((bullet) => {
      return (<Bullet x={bullet.x} y={bullet.y}/>)
    });
    const fieldStyle = {
      field: {
        position: 'absolute',
        display: 'flex',
        flexFlow: 'row wrap',
        top: '10px',
        left: '110px',
        width: '400px',
        height: '90%',
        padding: '10px 10px 20px'
      }
    };
    const pits = (new Array(25)).fill(2).map((item, index) => {
      return <Pit index={index} lane={Math.floor(index / 5)}/>
    });
    return (<div style={fieldStyle.field}>{pits}field{bullets}</div>);
  }
}
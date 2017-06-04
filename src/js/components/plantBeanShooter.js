/**
 * Created by luye on 2017/6/4.
 */
import React from 'react';
import {inject, observer} from 'mobx-react';
import Bullet from './bullet';
@inject(['bulletsStore']) @observer
@inject(['dragStore']) @observer
export default class BeanShooter extends React.Component{
  constructor(props){
    super(props);
    this.dragStore = this.props.dragStore;
    this.dragStart = this.dragStore.dragStart.bind(this.dragStore);
    this.fire = this.props.bulletsStore.fire.bind(this.props.bulletsStore);
  }
  render(){
    const beanShooterStyle = {
      beanShooter:{
        width: '50px',
        height:'70px',
        backgroundColor:'green'
      }
    }
    return(<div style={beanShooterStyle.beanShooter} draggable={true} onDragStart={this.dragStart} onDragEnd={this.fire}>beanshooter</div>)
  }
}

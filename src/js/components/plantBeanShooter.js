/**
 * Created by luye on 2017/6/4.
 */
import React from 'react';
import {inject, observer} from 'mobx-react';
import {BEAN_SHOOTER} from '../config/pricing';
@inject(['bulletsStore']) @observer
@inject(['dragStore']) @observer
@inject(['energyStore']) @observer
export default class BeanShooter extends React.Component{
  constructor(props){
    super(props);
    this.dragStore = this.props.dragStore;
    this.energyStore = this.props.energyStore;
    this.dragStart = this.dragStore.dragStart.bind(this.dragStore);
    this.fire = this.props.bulletsStore.fire.bind(this.props.bulletsStore);
  }
  // dropped(){
  //   this.props.bulletsStore.fire();
  // }
  render(){
    const beanShooterStyle = {
      beanShooter:{
        width: '50px',
        height:'70px',
        backgroundColor:'green'
      }
    }
    return(<div style={beanShooterStyle.beanShooter} draggable={this.energyStore.deposit>=BEAN_SHOOTER?true:false} onDragStart={this.dragStart} onDragEnd={this.fire}>beanshooter</div>)
  }
}

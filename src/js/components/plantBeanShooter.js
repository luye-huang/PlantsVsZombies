/**
 * Created by luye on 2017/6/4.
 */
import React from 'react';
import {inject, observer} from 'mobx-react';
import {BEAN_SHOOTER} from '../config/plantsInfo';
@inject(['lawnStore']) @observer
@inject(['energyStore']) @observer
export default class BeanShooter extends React.Component{
  constructor(props){
    super(props);
    this.lawnStore = this.props.lawnStore;
    this.energyStore = this.props.energyStore;
    this.dragStart = this.energyStore.dragStart.bind(this.energyStore);
    // inter-store data calculation and component-store param sent
    this.fire = this.lawnStore.fire.bind({bullets:this.lawnStore, energy:this.energyStore, price: BEAN_SHOOTER.price});
  }
  render(){
    const beanShooterStyle = {
      beanShooter:{
        width: '50px',
        height:'70px',
        backgroundColor:'green'
      }
    }
    return(<div style={beanShooterStyle.beanShooter} draggable={this.energyStore.deposit>=BEAN_SHOOTER.price?true:false} onDragStart={this.dragStart} onDragEnd={this.fire}>beanshooter</div>)
  }
}

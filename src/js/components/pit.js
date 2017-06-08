/**
 * Created by luye on 2017/6/4.
 */
import React from 'react';
import {observer, inject} from 'mobx-react';
import Bullet from './bullet';
@inject(['energyStore']) @observer
export default class Pit extends React.Component{
  constructor(props){
    super(props);
    this.energyStore = this.props.energyStore;
    this.allowDrop = this.energyStore.allowDrop;
    this.dropStart = this.energyStore.dropStart.bind(this.energyStore);
    this.dropEnd = this.energyStore.dropEnd;
  }
  render(){
    const pitStyle = {
      pit:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffc107',
        width:'60px',
        height:'80px',
        margin: '10px'
      }
    };
    return(<div style={pitStyle.pit} onDrop={this.dropStart} onDragOver={this.allowDrop}>
      <div>pit{this.props.lane}</div>
      {/*{this.dragStore.fire?(<Bullet/>):null}*/}
    </div>);
  }
}
/**
 * Created by luye on 2017/6/4.
 */
import React from 'react';
import {observer, inject} from 'mobx-react';
import Bullet from './bullet';
@inject(['bulletsStore']) @observer
@inject(['dragStore']) @observer
@inject(['pitStore']) @observer
export default class Pit extends React.Component{
  constructor(props){
    super(props);
    this.dragStore = this.props.dragStore;
    this.allowDrop = this.dragStore.allowDrop;
    this.dropStart = this.dragStore.dropStart.bind(this.dragStore);
    this.dropEnd = this.dragStore.dropEnd;
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
/**
 * Created by luye on 2017/6/1.
 */
import React from 'react';
import {observer,inject} from "mobx-react";
import Channel from './channel';
@inject(['lawnStore']) @observer
export default class Lawn extends React.Component{
  constructor(props){
    super(props);
    this.store = this.props.lawnStore;
  }
  render(){
    const lawnStyle ={
      ground:{
        backgroundColor: 'green',
        height: '100%'
      }
    }
    console.log(this.store.zombies.length);
    return(<div style={lawnStyle.ground}>
      <Channel zombie = {this.store.zombies}>{this.store.zombies.length}</Channel>
      <Channel zombie = {this.store.zombies}>{this.store.zombies.length}</Channel>
      lawn</div>);
  }
}
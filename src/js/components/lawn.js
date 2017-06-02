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
    return(<div style={lawnStyle.ground}>
      <Channel>{this.store.aa}</Channel>
      lawn</div>);
  }
}
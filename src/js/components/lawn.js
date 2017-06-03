/**
 * Created by luye on 2017/6/1.
 */
import React from 'react';
import {observer,inject} from "mobx-react";
import Channel from './channel';
import Zombie from "./zombie";
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
      },
      zombie:{
      
      }
    }
    const z = this.store.zombies.map((ele, index)=>{return (<Zombie index={index}/>)})
    // debugger
    return(<div style={lawnStyle.ground}>
      {/*{*/}
        {/*this.store.zombies.map(()=>{return (<Zombie/>)})*/}
      {/*}*/}
      {z}
      <Channel>{this.store.zombies.length}</Channel>
      <Channel zombies = {this.store.zombies}>{this.store.zombies.length}</Channel>
      lawn</div>);
  }
}
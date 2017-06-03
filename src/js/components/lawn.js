/**
 * Created by luye on 2017/6/1.
 */
import React from 'react';
import {observer,inject} from "mobx-react";
import Shop from './shop';
import SunlightBoard from './sunlight';
import Energy from './energy';
import Channel from './channel';
import Zombie from "./zombie";
import Entry from "../entry";
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
    const zombies = this.store.zombies.map((ele, index)=>{return (<Zombie index={index}/>)})
    // debugger
    return(<div style={lawnStyle.ground}>
      <SunlightBoard/>
      <Energy/>
      {/*{*/}
        {/*this.store.zombies.map(()=>{return (<Zombie/>)})*/}
      {/*}*/}
      {zombies}
      <Channel>{this.store.zombies.length}</Channel>
      <Channel zombies = {this.store.zombies}>{this.store.zombies.length}</Channel>
      lawn</div>);
  }
}
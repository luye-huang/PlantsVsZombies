/**
 * Created by luye on 2017/6/1.
 */
import React from 'react';
import {observer,inject} from "mobx-react";
import Shop from './shop';
import SunlightBoard from './sunlight';
import Energy from './energy';
import Field from './field';
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
        height: '100%',
        // paddingLeft: '100px'
      }
    }
    const zombies = this.store.zombies.map((ele, index)=>{return (<Zombie index={index} lane={ele.lane}/>)})
    // debugger
    return(<div style={lawnStyle.ground}>
      <SunlightBoard/>
      <Shop/>
      <Energy/>
      <Field></Field>
      {zombies}
      lawn</div>);
  }
}
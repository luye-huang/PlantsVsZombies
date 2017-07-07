/**
 * Created by luye on 2017/6/1.
 */
import React from 'react';
import {observer,inject} from "mobx-react";
// import PureRenderMixin from 'react-addons-pure-render-mixin';
import Shop from './shop';
import SunlightBoard from './sunlight';
import Energy from './energy';
import Field from './field';
import Zombie from "./zombie";
@inject(['lawnStore']) @observer
export default class Lawn extends React.PureComponent{
  constructor(props){
    super(props);
    this.store = this.props.lawnStore;
    // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    const lawnStyle ={
      ground:{
        backgroundColor: 'green',
        height: '100%',
      }
    };
    const zombies = this.store.zombies.map((ele, index)=>{return (<Zombie index={index} hp={ele.hp} lane={ele.lane}/>)});
    return(<div style={lawnStyle.ground}>
      <SunlightBoard/>
      <Shop/>
      <Energy/>
      <Field></Field>
      {zombies}
      lawn</div>);
  }
}
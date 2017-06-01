/**
 * Created by luye on 2017/6/1.
 */
import React from 'react';
import {observer,inject} from "mobx-react";
@inject(['lawnStore']) @observer
export default class Lawn extends React.Component{
  constructor(props){
    super(props);
    this.store = this.props.lawnStore;
  }
  render(){
    return(<div>lawn</div>);
  }
}
/**
 * Created by luye on 2017/6/3.
 */
import React from 'react';
import {observer, inject} from 'mobx-react';
@inject(['energyStore']) @observer
@inject(['sunlightStore']) @observer
export default class Energy extends React.Component{
  constructor(props){
    super(props);
    this.energyStore = this.props.energyStore;
    this.sunlightStore = this.props.sunlightStore;
    this.pick = this.energyStore.pick.bind(this.energyStore);
  }
  
  // pick(){
  //   debugger
  //   this.sunlightStore.pick.call(this.sunlightStore);
  //   this.energyStore.pick.call(this.energyStore);
  // }
  //
  render(){
    // const lightStyle
    console.log('energy');
    lightStyle.light.left = this.energyStore.x + 'px';
    lightStyle.light.top = this.energyStore.y + 'px';
    lightStyle.light.display = this.energyStore.display;
    return(<div style={lightStyle.light} onClick={this.pick}>+25</div>)
  }
}

export const lightStyle = {
  light:{
    position: 'absolute',
    left: '50px',
    width:'30px',
    height: '30px',
    zIndex: '200'
  }
}
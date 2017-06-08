/**
 * Created by luye on 2017/6/3.
 */
import React from 'react';
import {inject, observer} from 'mobx-react';
@inject(['energyStore']) @observer
export default class Sunlight extends React.Component{
  constructor(props){
    super(props);
    this.energyStore = this.props.energyStore;
  }
  render(){
    const sunlightStyle = {
      board:{
        position: 'absolute',
        backgroundColor: 'blue',
        width: '30px',
        height: '30px'
      }
    }
    return(<div style={sunlightStyle.board}>{this.energyStore.deposit}</div>)
  }
}
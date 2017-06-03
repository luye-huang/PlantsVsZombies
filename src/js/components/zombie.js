/**
 * Created by luye on 2017/6/3.
 */
import React from 'react';
import {inject, observer} from 'mobx-react';

@inject(['channelStore']) @observer
@inject(['lawnStore']) @observer
export default class Zombie extends React.Component{
  constructor(props){
    super(props);
    this.store1 = this.props.channelStore;
    this.store2 = this.props.lawnStore;
  }
  render(){
    const zombieStyle = {
      channel:{
        position: 'absolute',
        backgroundColor: 'red',
        width: '40px',
        height: '40px',
        right: '0px'
      }
    }
    zombieStyle.channel.right = this.store1.timer + 'px';
    return(<div style={zombieStyle.channel}>zombie!</div>);
  }
}
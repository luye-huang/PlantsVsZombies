/**
 * Created by luye on 2017/6/3.
 */
import React from 'react';
import {inject, observer} from 'mobx-react';
import {ZOMBIE_TOP_OFFSET} from '../config/layout';

@inject(['channelStore']) @observer
@inject(['lawnStore']) @observer
@inject(['zombieStore']) @observer
export default class Zombie extends React.Component{
  constructor(props){
    super(props);
    this.lawnStore = this.props.lawnStore;
    this.store1 = this.props.channelStore;
    this.store2 = this.props.zombieStore;
  }
  render(){
    const zombieStyle = {
      channel:{
        position: 'absolute',
        backgroundColor: 'red',
        width: '40px',
        height: '40px',
        right: '0px',
        top: '0px'
      }
    }
    zombieStyle.channel.left = this.lawnStore.zombies[this.props.index].x - 20 + 'px';
    zombieStyle.channel.top = this.lawnStore.zombies[this.props.index].y + ZOMBIE_TOP_OFFSET + 'px';
    return(<div style={zombieStyle.channel}>zombie {this.props.index} ** {this.props.lane}</div>);
  }
}
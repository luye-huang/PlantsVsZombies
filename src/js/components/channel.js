/**
 * Created by luye on 2017/6/1.
 */
import React from 'react';
import {inject, observer} from 'mobx-react';
import Zombie from './zombie';

@inject(['channelStore']) @observer
@inject(['lawnStore']) @observer
export default class Channel extends React.Component{
  constructor(props){
    super(props);
    this.store1 = this.props.channelStore;
    this.store2 = this.props.lawnStore;
  }
  render(){
    let timer = 0;
    const channelStyle = {
      channel:{
        backgroundColor: 'yellow',
        width: '100%',
        height: '80px',
        // right: '0px'
      }
    }
    return(<div style={channelStyle.channel}>{this.store2.zombies.length}{this.store1.timer}
    </div>);
  }
}

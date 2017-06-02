/**
 * Created by luye on 2017/6/1.
 */
import React from 'react';
import {inject, observer} from 'mobx-react';

@inject(['channelStore']) @observer
@inject(['lawnStore']) @observer
export default class Channel extends React.Component{
  constructor(props){
    super(props);
    this.store2 = this.props.lawnStore;
  }
  render(){
    const channelStyle = {
      channel:{
        backgroundColor: 'yellow',
        width: '100%',
        height: '80px'
      }
    }
    return(<div style={channelStyle.channel}>{this.store2.zombies.length}</div>);
  }
}

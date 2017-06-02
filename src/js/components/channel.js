/**
 * Created by luye on 2017/6/1.
 */
import React from 'react';
import {inject, observer} from 'mobx-react';
@inject(['channelStore']) @observer
export default class Channel extends React.Component{
  constructor(){
    super();
  }
  render(){
    const channelStyle = {
      channel:{
        backgroundColor: 'yellow',
        width: '100%',
        height: '80px'
      }
    }
    return(<div style={channelStyle.channel}>cc</div>);
  }
}

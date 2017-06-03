/**
 * Created by luye on 2017/6/4.
 */
import React from 'react';
import {observer, inject} from 'mobx-react';

export default class Field extends React.Component{
  constructor(){
    super();
  }
  render(){
    const fieldStyle = {
      field:{
        position:'absolute',
        top: '10px',
        left: '110px',
        width: '100%',
        height: '100%'
      }
    };
    return(<div style={fieldStyle.field}>field</div>);
  }
}
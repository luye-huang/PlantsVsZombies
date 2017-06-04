/**
 * Created by luye on 2017/6/4.
 */
import React from 'react';
import {observer, inject} from 'mobx-react';
import Pit from './pit';

export default class Field extends React.Component{
  constructor(){
    super();
  }
  render(){
    const fieldStyle = {
      field:{
        position:'absolute',
        display: 'flex',
        flexFlow: 'row wrap',
        top: '10px',
        left: '110px',
        width: '50%',
        height: '90%',
        padding: '10px 10px 20px'
      }
    };
    const pits = (new Array(25)).fill(2).map((item)=>{return <Pit/>});
    return(<div style={fieldStyle.field}>{pits}field</div>);
  }
}
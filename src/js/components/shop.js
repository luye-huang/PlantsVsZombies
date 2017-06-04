/**
 * Created by luye on 2017/6/3.
 */
import React from 'react';
import BeanShooter from './plantBeanShooter';
export default class Sunlight extends React.Component{
  constructor(){
    super();
  }
  render(){
    const shopStyle = {
      shop:{
        position: 'relative',
        display:'inline-block',
        backgroundColor: 'crimson',
        width: '100px',
        height:'300px',
        top: '30px'
      }
    };
    return (<div style={shopStyle.shop}>
      <BeanShooter/>
      shop</div>);
  }
}
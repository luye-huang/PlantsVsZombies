/**
 * Created by luye on 2017/5/27.
 */
import {observer,inject} from "mobx-react";
import {observable,action,computed,autorun} from "mobx";
import React,{Component} from "react";
import {render} from "react-dom";

@inject(['newStore']) @observer //引入需要的store，然后组件就可以在props中访问
export default class New extends Component{
  constructor(props) {
    super(props);
    this.store=this.props.newStore; //访问注入的store
    this.changeValue=this.store.changeValue.bind(this.store,event) //访问mobx中的事件,store中的事件
  }
  render(){
    return(
      <div>
        <input type='tel' name='val1' onKeyUp={this.changeValue}/>+
        <input type='tel' name='val2' onKeyUp={this.changeValue}/>=
        <span>{this.store.sum}</span>
      </div>
    )
  }
}
/**
 * Created by luye on 2017/6/4.
 */
import {observable, action} from 'mobx';
export default class Drag{
  // @observable ele
  constructor(){
    this.ele = 'w';
  }
  
  @action dragStart(event){
    this.ele = event.target;
    console.log(event.target);
  }
  
  @action allowDrop(event){
    event.preventDefault();
  }
  
  @action dropStart(event){
    event.target.appendChild(this.ele);
  }
  
  @action dropEnd(event){
  
  }
}
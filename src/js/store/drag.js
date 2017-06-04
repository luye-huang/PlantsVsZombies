/**
 * Created by luye on 2017/6/4.
 */
import {observable, action} from 'mobx';
export default class Drag{
  @observable bullets;
  @observable fire;
  @observable index;
  constructor(){
    this.ele = 'w';
    // this.bullets = [];
    // this.fire = false;
    // this.index = 0;
  }
  
  @action dragStart(event){
    this.ele = event.target;
  }
  
  @action allowDrop(event){
    event.preventDefault();
  }
  
  @action dropStart(event){
    event.target.appendChild(this.ele);
    // console.log(event.clientX);
    // console.log(index);
    // this.fire = true;
  }
  
  @action dropEnd(event){
  
  }
}
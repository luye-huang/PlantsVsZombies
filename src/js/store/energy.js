/**
 * Created by luye on 2017/6/3.
 */
import {observable, action} from 'mobx';
export default class Energy {
  @observable deposit;
  @observable display;
  @observable x;
  @observable y;
  constructor() {
    this.deposit = 200;
    this.ele = 'w';
    this.x = 100 + Math.random() * 100;
    this.y = 100 + Math.random() * 100;
  }
  @action pick(){
    this.deposit += 25;
    this.display = 'none';
   console.log(666);
  }
  @action dragStart(event){
    this.ele = event.target;
  }
  @action allowDrop(event){
    event.preventDefault();
  }

  @action dropStart(event){
    event.target.appendChild(this.ele);
  }
}
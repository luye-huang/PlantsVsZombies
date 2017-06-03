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
    this.deposit = 0;
    this.x = 100 + Math.random() * 100;
    this.y = 100 + Math.random() * 100;
  }
  
  @action pick(){
    this.deposit += 25;
    this.display = 'none';
   console.log(666);
  }
}
/**
 * Created by luye on 2017/6/3.
 */
import {observable, action} from 'mobx';
export default class sunlight {
  @observable light;
  constructor() {
    this.light = 0;
  }
  @action pick(){
    this.light += 25;
  }
}

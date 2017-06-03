/**
 * Created by luye on 2017/6/1.
 */
import {observable, action} from 'mobx';
export default class zombieStore{
  @observable zombies;
  @observable x;
  constructor(){
    this.zombies = [];
    this.hp = 100;
    this.x = 0;
    this.y = 0;
    this.type = 1;
   
  }
  // @action get num(){
  //
  // }
}
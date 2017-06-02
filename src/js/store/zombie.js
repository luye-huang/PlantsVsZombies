/**
 * Created by luye on 2017/6/1.
 */
import {observable, action} from 'mobx';
export default class zombieStore{
  @observable zombies;
  @observable aa;
  constructor(){
    this.aa = 0;
    this.zombies = []
  }
  // @action get num(){
  //
  // }
}
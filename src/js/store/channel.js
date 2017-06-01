/**
 * Created by luye on 2017/6/1.
 */
import {observable, action} from 'mobx';
export default class channelStore{
  @observable zombies;
  constructor(){
    this.zombies = [];
  }
}
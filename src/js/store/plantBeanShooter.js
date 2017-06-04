/**
 * Created by luye on 2017/6/4.
 */
import {action, observable} from 'mobx';
export default class BeanShooter{
  @observable bullets;
  constructor(){
    this.bullets = [];
  }
  
}

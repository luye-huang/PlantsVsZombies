/**
 * Created by luye on 2017/6/1.
 */
import {observable, action} from 'mobx';
export default class lawnStore{
  @observable zombies;
  @observable aa;
  constructor(){
    this.aa = 0;
    this.zombies = [];
    // this.zombies.push(333);
    setInterval(() => {
      const y = Math.floor(Math.random()*5) * 100;
      if(this.zombies.length<10){
        this.zombies.push({type:0,x:0,y:y,hp:100})
      }
    }, 2000);
    setInterval(() => {this.zombies.forEach((zombie)=>zombie.x++)}, 300);
  }
  // @action get num(){
  //
  // }
}

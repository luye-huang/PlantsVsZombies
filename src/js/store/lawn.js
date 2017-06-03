/**
 * Created by luye on 2017/6/1.
 */
import {observable, action} from 'mobx';
export default class lawnStore {
  @observable zombies;
  
  constructor() {
    this.zombies = [];
    // const creatingZombies = setInterval(() => {
    //   const lane = Math.random() * 5;
    //   const y = Math.floor(lane) * 100;
    //   if (this.zombies.length < 10) {
    //     this.zombies.push({type: 0, x: 0, y: y, lane: lane, hp: 100, alive: true})
    //   }
    // }, 3000);
    // const movingZombies = setInterval(() => {
    //   this.zombies.forEach((zombie) => zombie.x++)
    // }, 200);
    // const creatingLight =
  }
  
  // @action get num(){
  //
  // }
}

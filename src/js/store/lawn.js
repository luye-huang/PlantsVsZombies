/**
 * Created by luye on 2017/6/1.
 */
import {observable, action} from 'mobx';
import {LANE_WIDTH} from '../config/layout';
import {ZOMBIE_COUNT} from '../config/zombieInfo';
export default class lawnStore {
  @observable zombies;
  
  constructor() {
    this.zombies = [];
    console.log(document.body.clientWidth);
    const creatingZombies = setInterval(() => {
      const lane = Math.random() * 5;
      const y = Math.floor(lane) * LANE_WIDTH;
      if (this.zombies.length < ZOMBIE_COUNT) {
        this.zombies.push({type: 0, x: document.body.clientWidth, y: y, lane: Math.floor(lane), hp: 100, alive: true})
      }
    }, 5000);
    const movingZombies = setInterval(() => {
      this.zombies.forEach((zombie) => zombie.x--)
    }, 200);
    // const creatingLight =
  }
  
  // @action get num(){
  //
  // }
}

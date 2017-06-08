/**
 * Created by luye on 2017/6/1.
 */
import {observable, action} from 'mobx';
import {LANE_WIDTH, SHOOTING_RANGE} from '../config/layout';
import {BEAN_SHOOTER} from '../config/plantsInfo';
import {ZOMBIE_COUNT} from '../config/zombieInfo';
import {ZOMBIE_REGULAR_SPEED} from '../config/zombieInfo';
const uuid = require('node-uuid');
export default class lawnStore {
  @observable bullets;
  @observable zombies;

  constructor() {
    this.bullets = [];
    this.frontBullets = [];
    this.zombies = [];
    this.luckyZombies = [];
    const movingBullets = setInterval(() => {
      this.bullets = this.bullets.filter(bullet=>bullet.active && bullet.x < SHOOTING_RANGE);
      // this.bullets[1]&&console.log(this.bullets[1].x);
      this.bullets.forEach((bullet) => bullet.x += 3);
      this.findFrontBullets();
    }, 100);
    console.log(document.body.clientWidth);
    const creatingZombies = setInterval(() => {
      const lane = Math.random() * 5;
      const y = Math.floor(lane) * LANE_WIDTH;
      if (this.zombies.length < ZOMBIE_COUNT) {
        this.zombies.push({
          id: uuid.v4(),
          type: 0,
          x: document.body.clientWidth,
          y: y,
          lane: Math.floor(lane),
          hp: 100,
          active: true
        });
      }
    }, 5000);
    const movingZombies = setInterval(() => {
      this.zombies = this.zombies.filter(z=>z.active && z.hp > 0);
      this.zombies.forEach((zombie) => zombie.x -= ZOMBIE_REGULAR_SPEED);
      this.findLuckZombies();
    }, 250);
  }

  findFrontBullets() {
    for (let i = 0; i < 5; i++) {
      this.frontBullets[i] = this.bullets.filter(function (z) {
        return z.lane == i;
      }).sort((a, b)=>b.x - a.x)[0];
    }
    this.killingSpree();
  }

  findLuckZombies() {
    for (let i = 0; i < 5; i++) {
      this.luckyZombies[i] = this.zombies.filter(function (z) {
        return z.lane == i;
      }).sort((a, b)=>a.x - b.x)[0];
    }
  }

  killingSpree() {
    for (let i = 0; i < 5; i++) {
      if (this.luckyZombies[i] && this.frontBullets[i] && this.luckyZombies[i].x < this.frontBullets[i].x) {
        this.frontBullets[i].active = false;
        this.luckyZombies[i].hp -= this.frontBullets[i].power;
        this.keepThemFresh();
      }
    }
  }

  keepThemFresh() {
    this.bullets = this.bullets.filter(bullet=>bullet.active && bullet.x < SHOOTING_RANGE);
    this.zombies = this.zombies.filter(zombie=>zombie.active && zombie.hp > 0);
  }

  @action fire(event) {
    const lane = Math.floor((event.clientY - 40) / 140);
    const x = event.clientX;
    this.energy.deposit -= this.price;
    // 越来越密?
    setInterval(() => {
      this.bullets.bullets.push({
        x: x,
        y: lane * LANE_WIDTH + 100,
        lane: lane,
        power: BEAN_SHOOTER.power,
        active: true
      });
    }, 5000);
  }
}

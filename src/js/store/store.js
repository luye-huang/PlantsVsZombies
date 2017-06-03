/**
 * Created by luye on 2017/5/27.
 */
import NewStore from "./new.js";
import LawnStore from './lawn';
import ChannelStore from './channel';
import EnergyStore from './energy';
import ZombieStore from './zombie';
import SunlightStore from './sunlight';

export default {
  newStore:new NewStore(),
  lawnStore: new LawnStore(),
  channelStore: new ChannelStore(),
  energyStore: new EnergyStore(),
  zombieStore: new ZombieStore(),
  sunlightStore: new SunlightStore()
}
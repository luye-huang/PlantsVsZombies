/**
 * Created by luye on 2017/5/27.
 */
import ChannelStore from './channel';
import DragStore from './drag';
import EnergyStore from './energy';
import LawnStore from './lawn';
import PitStore from './pit';
import ShopStore from './shop';
import SunlightStore from './sunlight';
import ZombieStore from './zombie';

export default {
  lawnStore: new LawnStore(),
  channelStore: new ChannelStore(),
  dragStore: new DragStore(),
  energyStore: new EnergyStore(),
  pitStore: new PitStore(),
  zombieStore: new ZombieStore(),
  shopStore: new ShopStore(),
  sunlightStore: new SunlightStore()
}
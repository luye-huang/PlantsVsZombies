/**
 * Created by luye on 2017/5/27.
 */
import ChannelStore from './channel';
import EnergyStore from './energy';
import LawnStore from './lawn';
import ShopStore from './shop';
import SunlightStore from './sunlight';
import ZombieStore from './zombie';

export default {
  lawnStore: new LawnStore(),
  channelStore: new ChannelStore(),
  energyStore: new EnergyStore(),
  zombieStore: new ZombieStore(),
  shopStore: new ShopStore(),
  sunlightStore: new SunlightStore()
}
/**
 * Created by luye on 2017/5/27.
 */
import NewStore from "./new.js";
import LawnStore from './lawn';
import ChannelStore from './channel';
import ZombieStore from './zombie';

export default {
  newStore:new NewStore(),
  lawnStore: new LawnStore(),
  channelStore: new ChannelStore(),
  zombieStore: new ZombieStore()
}
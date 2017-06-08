/**
 * Created by luye on 2017/5/27.
 */
import EnergyStore from './energy';
import LawnStore from './lawn';

export default {
  lawnStore: new LawnStore(),
  energyStore: new EnergyStore()
}
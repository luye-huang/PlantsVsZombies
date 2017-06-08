/**
 * Created by luye on 2017/5/27.
 */
import BeanShooterStore from './plantBeanShooter';
import BulletsStore from './bullets';
import DragStore from './drag';
import EnergyStore from './energy';
import LawnStore from './lawn';
import SunlightStore from './sunlight';

export default {
  beanShooterStore: new BeanShooterStore(),
  bulletsStore: new BulletsStore(),
  lawnStore: new LawnStore(),
  dragStore: new DragStore(),
  energyStore: new EnergyStore(),
  sunlightStore: new SunlightStore()
}
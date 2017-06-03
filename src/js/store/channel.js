/**
 * Created by luye on 2017/6/1.
 */
import {observable, action} from 'mobx';
export default class channelStore{
  @observable zombies;
  @observable timer;
  constructor(){
    this.zombies = [];
    this.timer = 0;
    // setTimeout(()=>this.timer++, 1000)
    setInterval(()=>this.timer++,1000)
  }
  @action createZombie(s,e){ //当促发action的时候，改变对应的数据
    let tar=e.currentTarget;
    let val=Math.abs(tar.value);
    if(tar.name=='val1'){
      this.inputValue1=val;
    }else if(tar.name=='val2'){
      this.inputValue2=val;
    }
  }
}
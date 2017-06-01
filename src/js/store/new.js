/**
 * Created by luye on 2017/5/27.
 */
import { observer } from "mobx-react";
import { observable, action, computed ,autorun} from "mobx";
export default class NewStore {
  @observable inputValue1; //注册监听的数据
  @observable inputValue2;
  @observable childValue;
  constructor() {
    this.inputValue1=0;
    this.inputValue2=0;//初始化数据的值
    this.fullValue=0;
    this.childValue=0;
  }
  @action changeValue(s,e){ //当促发action的时候，改变对应的数据
    let tar=e.currentTarget;
    let val=Math.abs(tar.value);
    if(tar.name=='val1'){
      this.inputValue1=val;
    }else if(tar.name=='val2'){
      this.inputValue2=val;
    }
  }
  
  @computed get sum(){  //computed 是自动监听登记的数据，如果对应数据有改变就自动执行该函数，然后返回数据给接收的接口
    this.fullValue=this.inputValue1+this.inputValue2;
    console.log(this.fullValue)
    return this.fullValue;
  }
  @action childEvent(){
    this.childValue=this.childValue+3;
  }
}
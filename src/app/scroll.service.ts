import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';


@Injectable({
  providedIn: 'root'
})
export class ScrollServiceService {

  scrollTop:Subject<number>=new Subject();
  constructor(){};
  controlNodes=[];     //储存所有的scrollControl
  name:string='bb';
  getAbsoluteTop(node){   //获得scrollControl的绝对高度。
      let top=node.offsetTop;
      if(node.offsetParent) top+=this.getAbsoluteTop(node.offsetParent);
      return top;
  }
}

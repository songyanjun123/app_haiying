import { Component, OnInit } from '@angular/core';
import { AccountService } from '../app.service';  //引用service模块
@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.less']
})
export class CommonComponent implements OnInit {

  public dataList: any;
  public getUser: any;
  public pindex: number = 1;
  public nullArr: any[] = [];
  constructor(public service: AccountService) {
    this.getUser = JSON.parse(localStorage.getItem("user"));
    this.service.GetUserComment({ __userid: this.getUser.Id, __pindex: this.pindex }).then(Response => {
      this.dataList = Response;
      this.dataList = JSON.parse(this.dataList.DataJson);
      for (let item in this.dataList) {
        this.nullArr.push(this.dataList[item]);
      }
      console.log(this.nullArr);
    });
  }

  ngOnInit() {
  }
  getMore() {
    this.pindex++;
    this.service.GetUserComment({ __userid: this.getUser.Id, __pindex: this.pindex }).then(Response => {
      this.dataList = Response;
      this.dataList = JSON.parse(this.dataList.DataJson);
      for (let item in this.dataList) {
        this.nullArr.push(this.dataList[item]);
      }

    });
  }

}

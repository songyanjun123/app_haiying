import { Component, OnInit } from '@angular/core';
import { AccountService } from '../app.service';  //引用service模块

@Component({
  selector: 'app-fov',
  templateUrl: './fov.component.html',
  styleUrls: ['./fov.component.less']
})
export class FovComponent implements OnInit {

  public dataList: any;
  public getUser: any;
  public pindex: number = 1;
  public nullArr: any[] = [];
  constructor(public service: AccountService) {
    this.getUser = JSON.parse(localStorage.getItem("user"));
    this.service.GetAppHistory({ __userid: this.getUser.Id, __pindex: this.pindex }).then(Response => {
      this.dataList = Response;
      this.dataList = JSON.parse(this.dataList.DataJson);
      for (let item in this.dataList) {
        this.nullArr.push(this.dataList[item]);
      }
    });
  }

  ngOnInit() {
  }
  getMore() {
    this.pindex++;
    this.service.GetAppHistory({ __userid: this.getUser.Id, __pindex: this.pindex }).then(Response => {
      this.dataList = Response;
      this.dataList = JSON.parse(this.dataList.DataJson);
      for (let item in this.dataList) {
        this.nullArr.push(this.dataList[item]);
      }

    });
  }

}

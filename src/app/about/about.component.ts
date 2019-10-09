import { Component, OnInit } from '@angular/core';
import { AccountService } from '../app.service';  //引用service模块
import { Router, NavigationExtras } from "@angular/router";//路由模块

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }
  logout(){
    localStorage.clear();
    this.router.navigateByUrl('login');    
  }
}

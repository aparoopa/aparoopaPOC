import { Component, OnInit,Renderer2 } from '@angular/core';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
import {DetailsService} from '../details.service';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {
  orderlist: any;
  constructor(public detailsservice: DetailsService,private location: Location,
    private renderer: Renderer2,public router: Router) {
    this.renderer.setStyle(document.body, 'background-image', 'url("/assets/newbg.jpg")');
   }

  ngOnInit() {

    console.log("Entering orderdetails page")
    this.detailsservice.getOrderDetails()
                     .subscribe((userData) => this.orderlist = userData,
                       error => {
                       console.log(error.status);
                       if (error.status!= 304){
                         alert("Webservices not working")
                       }
  });
  }
  back(){
    this.location.back();
  }
  logout(){
    this.router.navigate(['']);
  }

}

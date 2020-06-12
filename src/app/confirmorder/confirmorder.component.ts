import { Component, OnInit,Renderer2 } from '@angular/core';
import {DetailsService} from '../details.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmorder',
  templateUrl: './confirmorder.component.html',
  styleUrls: ['./confirmorder.component.css']
})
export class ConfirmorderComponent implements OnInit {
  prodName: any;
  data: any;
  orders: any;

  constructor(public detailsservice: DetailsService,private route : ActivatedRoute
    ,public router: Router,private renderer: Renderer2 ) {
      this.renderer.setStyle(document.body, 'background-image', 'url("/assets/newbg.jpg")');
     }

  ngOnInit() {
    this.prodName = this.route.snapshot.params['id'];
   console.log("product" + this.prodName);
    
  }
  confirm() {
    this.detailsservice.getOrderConfirm()
    .subscribe((response) =>  this.data = response, 
    error =>{ 
      if (error.status!= 200){
        alert("Webservices not working")
      }
     });
    this.router.navigate(['/orderaccepted']);
  }
  audit(){
    console.log("Enetring into audit section");
    this.router.navigate(['/orderdetails']);
  }
  logout(){
    this.router.navigate(['']);
  }
  }


  


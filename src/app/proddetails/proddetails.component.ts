import { Component, OnInit,Renderer2 } from '@angular/core';
import {DetailsService} from '../details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proddetails',
  templateUrl: './proddetails.component.html',
  styleUrls: ['./proddetails.component.css']
})
export class ProddetailsComponent implements OnInit {
  prodlist: any;
  orderdesc: any;
  public errorMsg;
  rows:number[]=[];
  tdcount:number=2;
  localtd:number = 0;
  threeitems:any = [];
  sortedArr: any = [];
  

  constructor( public detailsservice: DetailsService ,public router: Router,private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-image', 'url("/assets/newbg.jpg")');
   }

  ngOnInit() {
    
    this.detailsservice.getProducts()
                     .subscribe((userData) =>{ this.prodlist = userData,
                      console.log(this.prodlist);
                      var j =0;
                    for(let i=0;i<=this.prodlist.length;i++){
                      //console.log(i + "<<" + this.threeitems);
                      if( Object.keys(this.threeitems).length == 4){
                       // var j =0;
                        //console.log("entering into if")
                        this.sortedArr[j]= this.threeitems;
                        console.log(this.sortedArr);
                        this.threeitems = [];
                        this.threeitems.push(this.prodlist[i]);
                        j++;
                      }
                      else{
                      //  console.log("getting pushed into an array")
                    this.threeitems.push(this.prodlist[i]);
                  //  console.log(i);
                   // console.log(this.prodlist[i]);
                    
                      }
                    
               } 
               console.log(JSON. stringify(this.sortedArr));           
                     },
                       error => {
                       console.log(error.status);
                       if (error.status!= 200){
                         alert("Webservices not working")
                       }
  });
                        
}
proceed(prod: string){
  console.log(prod);
  localStorage.setItem('orderDesc', prod);
  console.log("Working");
  this.detailsservice.getOrderCreate()
                     .subscribe((response) =>{ 
                       console.log(response);
                       localStorage.setItem('orderid', response);
                       if(response){
                         console.log("response coming properly")
                       this.router.navigate(['/confirmorder',prod])
                       }
                     },
                       error =>{ 
                        if (error.status!= 200){
                          alert("Webservices not working")
                        }
                       });
 // this.router.navigate(['/confirmorder',prod])
    
}
logout(){
  this.router.navigate(['']);
}


  }



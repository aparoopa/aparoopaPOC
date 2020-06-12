import { Component, OnInit,Renderer2 } from '@angular/core';
import {DetailsService} from '../details.service';
import { RouterModule , Routes, Router,NavigationEnd } from '@angular/router'; // for routing

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  clientID: string;
  clientSecret: string;
  logged: boolean = true;
  response: any;
  atoken;
  public errorMsg;

  constructor(public router: Router,public detailsservice: DetailsService,private renderer: Renderer2) { 
    this.renderer.setStyle(document.body, 'background-image', 'url("/assets/loginpage.jpg")');
  }

  ngOnInit() {
  }
  login(){
    if(this.clientID == 'admin' && this.clientSecret == 'admin' ||
    this.clientID == 'user' && this.clientSecret == 'user' ){

     console.log("executing");
     this.detailsservice.getUserId()
                      .subscribe((response) => {
                      console.log(response); 
                      localStorage.removeItem('token');
                       localStorage.setItem('token', response.access_token);
                       if(response){
                         
                         this.logged = false;
                         //this.router.navigate(['/proddetails']);
                         this.router.navigate(['/menu']);
                       }
                     },
                     error => this.errorMsg = error);
                   
     }
     else
     {
       console.log("not working");
      this.router.navigate(['']);
      alert("Enter Client ID and Client Secret correctly");
     }
    }
    register(){
      this.router.navigate(['/register']);
    }
    

}

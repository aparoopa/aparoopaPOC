import { Component, OnInit,Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderaccepted',
  templateUrl: './orderaccepted.component.html',
  styleUrls: ['./orderaccepted.component.css']
})
export class OrderacceptedComponent implements OnInit {

  constructor(private router: Router, private renderer: Renderer2) { 
    this.renderer.setStyle(document.body, 'background-image', 'url("/assets/newbg.jpg")');
  }

  ngOnInit() {
  }
  audit(){
    console.log("Enetring into audit section");
    this.router.navigate(['/orderdetails']);
  }
  return(){
    this.router.navigate(['/proddetails']);
  }
  logout(){
    this.router.navigate(['']);
  }
}

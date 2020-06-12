import { Component, OnInit,Renderer2 } from '@angular/core';
import { RouterModule , Routes, Router,NavigationEnd } from '@angular/router'; // for routing

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public router: Router,private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-image', 'url("")');
   }

  ngOnInit() {
  }

  gotoProdListing(){
    console.log("navigating to next page")
    this.router.navigate(['/proddetails']);
  }
  logout(){
    this.router.navigate(['']);
  }
}

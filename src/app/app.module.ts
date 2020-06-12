import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //for ng-model
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DetailsService} from './details.service'
import {HttpClientModule} from '@angular/common/http';
import { RouterModule , Routes } from '@angular/router';
import { ProddetailsComponent } from './proddetails/proddetails.component';
import { ConfirmorderComponent } from './confirmorder/confirmorder.component';
import { OrderacceptedComponent } from './orderaccepted/orderaccepted.component';
import { LoginComponent } from './login/login.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes=[
  {path:'' ,component: LoginComponent,  pathMatch: 'full'},
  {path:'register',component: RegisterComponent},
  {path:'proddetails',component: ProddetailsComponent},
  {path:'orderaccepted',component: OrderacceptedComponent},
  {path:'confirmorder/:id',component: ConfirmorderComponent},
  {path:'orderdetails',component: OrderdetailsComponent},
  {path:'menu',component: MenuComponent}
  //{path:'', redirectTo: '/login' ,pathMatch:'full'}
  
];



@NgModule({
  declarations: [
    AppComponent,
    ProddetailsComponent,
    ConfirmorderComponent,
    OrderacceptedComponent,
    LoginComponent,
    OrderdetailsComponent,
    MenuComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes,{ useHash: false })
  
    
  ],
  providers: [DetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

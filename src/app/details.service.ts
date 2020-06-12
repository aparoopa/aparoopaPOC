import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})



export class DetailsService {

  constructor(private http: HttpClient) { }

  

  url: string = 'https://archakr2.cloud.tyk.io/product/product/getProduct';
  proxyurl = "https://cors-anywhere.herokuapp.com/";
  getProducts(): Observable<any> {
    return this.http.get(this.proxyurl + this.url);
  }

 url1: string = 'https://archakr2.cloud.tyk.io/order/oauth/token';
  proxyurl1 = "https://cors-anywhere.herokuapp.com/";
  getUserId(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('fc83293820324149aacce81bee74f349'+ ':' + 'NjM2NDgyZWQtOGYwZS00ZTljLWI4NWEtZjcwMWJmODdjYzM5')
      //  'Authorization': 'Basic ZmM4MzI5MzgyMDMyNDE0OWFhY2NlODFiZWU3NGYzNDk6TmpNMk5EZ3laV1F0T0dZd1pTMDBaVGxqTFdJNE5XRXRaamN3TVdKbU9EZGpZek01'
        //,'grant_type':'client_credentials',
        //'client_id': 'fc83293820324149aacce81bee74f349', 
        //'client_secret': 'NjM2NDgyZWQtOGYwZS00ZTljLWI4NWEtZjcwMWJmODdjYzM5'
        
      })
    };
    let data = {'grant_type':'client_credentials',
  //  'client_id': clientID, 
  //  'client_secret': clientSecret
  };
  console.log(httpOptions);
    return this.http.post(this.proxyurl1 + this.url1,JSON.stringify(data),httpOptions)
  }

  url2: string = 'https://archakr2.cloud.tyk.io/order/order/orderCreate';
  //url2: string ='https://poc-order.indrsark-in.osc-sbx-exp-ap-15768375-f72ef11f3ab089a8c677044eb28292cd-0001.us-east.containers.appdomain.cloud/order/orderCreate';
  proxyurl2 = "https://cors-anywhere.herokuapp.com/";
  getOrderCreate(): Observable<any> {
    var token= localStorage.getItem('token').replace("","");
   // console.log("the token is" +token)
    let httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + token,
          
      }),
    };
    var orderDesc1= localStorage.getItem('orderDesc')
    let desc = {"orderDesc":orderDesc1};
    console.log(httpOptionsPost);
    return this.http.post(this.proxyurl2 + this.url2,JSON.stringify(desc),httpOptionsPost);
  }
  
  url3: string = 'https://archakr2.cloud.tyk.io/order/order/orderConfirm/';
  proxyurl3 = "https://cors-anywhere.herokuapp.com/";
  getOrderConfirm(): Observable<any> {
    var token= localStorage.getItem('token').replace("","");
    var orderid= localStorage.getItem('orderid');
   console.log("the order id is" +orderid)
    let httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + token,
          
      }),
    };
    console.log(httpOptionsPost);
    var orderDesc1= localStorage.getItem('orderDesc')
 let body = {"orderState":orderDesc1};
    console.log(httpOptionsPost);
    return this.http.put(this.proxyurl3 + this.url3 + orderid,body,httpOptionsPost);
  }

  url4: string = 'https://archakr2.cloud.tyk.io/order/order/getOrders?';
  proxyurl4 = "https://cors-anywhere.herokuapp.com/";
  
  getOrderDetails(): Observable<any> {
    var token= localStorage.getItem('token').replace("","");
    let httpOptionsOrders = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + token,
          
      }),
    };
    return this.http.get(this.proxyurl4 + this.url4,httpOptionsOrders);
  }
}




import { Component, OnInit, Query } from '@angular/core';
import { AngularFirestore,AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/combineLatest';
import { NavController,LoadingController } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras } from "@angular/router";
import { Router } from '@angular/router';
import { data } from '../result/result.page';
import {Activity,ResultService}from'../services/result.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { UserService } from '../services/user.service';


export interface Item {
  // text: string;
  // color: string;
  // size: string;
  id?:string;
  namep:string;
  name:string;
  type_place:string;
  type_j:string;
  type_j1:string;
  type_cat:string;
  vistor_Type:string;
  vistor_Type1:string;
Date:string;
Time_start:string;
Time_end:string;
cost:number;
number_vist:number;

}

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
  items$: Observable<Item[]>;

  items: Item[];
  data: any;

  productID:any;
  information=null;
  id=null;
  item=null;
  constructor(private route: ActivatedRoute,private router: Router,
    public shareddataservice: ResultService,public afs: AngularFirestore,
    private loadingController: LoadingController) 
    { 
    //   this.productID = this.route.snapshot.params['name'];
    //  this.information= this.shareddataservice.getrestaurantname(this.productID);
    //  /////////////////
    //  this.items$ = Observable.combineLatest(

    
 
      this.route.queryParams.subscribe(params => {
        if (params && params.special) {
          this.items$ = JSON.parse(params.special);
        }
      });
      
    // ).switchMap(([productID]) => 
    // afs.collection<Item>('restaurants', ref => {
    //     let query : firebase.firestore.Query = ref;
    //     if(productID){query = query.where('name', '==', productID)};
    //  //   this.items=query.firestore.doc.name('pl')
    //   //  return this.data;
    //     return query;

    //   }).valueChanges()
    // );
  
    
// this.data=this.items$;
//  this.router.navigate(['/resulat',this.name$]);
}
     /////////////////


  ngOnInit() {
    this.productID = this.route.snapshot.params['name'];
    // this.shareddataservice.getrestaurantname(this.productID).subscribe(res => {
    //   this.items = res;
    // });
}

}



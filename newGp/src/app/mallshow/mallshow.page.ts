import { Component, OnInit } from '@angular/core';
import { Malls,MallsService } from './../services/malls.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-mallshow',
  templateUrl: './mallshow.page.html',
  styleUrls: ['./mallshow.page.scss'],
})
export class MallshowPage implements OnInit {

  mall: Malls = {
    name:'',  
  Time_start:'',
  Time_end:'',}
  malls: Malls[];
  mallId = null;
  constructor(private route: ActivatedRoute, private nav: NavController, private getrest: MallsService, private loadingController: LoadingController) { }

  ngOnInit() {
    this.mallId = this.route.snapshot.params['id'];
    if (this.mallId)  {
      this.loadTodo();
    }
  }
  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Loading Todo..'
    });
    await loading.present();
 
    this.getrest.getmall(this.mallId).subscribe(res => {
      loading.dismiss();
      this.mall = res;
    });
  }
  }



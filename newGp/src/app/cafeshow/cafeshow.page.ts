import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { cafes,CafesService } from './../services/cafes.service';
@Component({
  selector: 'app-cafeshow',
  templateUrl: './cafeshow.page.html',
  styleUrls: ['./cafeshow.page.scss'],
})
export class CafeshowPage implements OnInit {
cafe:cafes={
  name:'',
  type_place:'',
  type_j:'',
  type_cat:'',
  vistor_Type:'',
  vistor_Type1:'',
Date:'',
Time_start:'',
Time_end:'',
cost:'',
number_vist:0,
}
cafes: cafes[];
  cafeId = null;
  constructor(private route: ActivatedRoute, private nav: NavController, private getrest: CafesService, private loadingController: LoadingController) { }

  ngOnInit() {
    this.cafeId = this.route.snapshot.params['id'];
    if (this.cafeId)  {
      this.loadTodo();

  }

}
async loadTodo() {
  const loading = await this.loadingController.create({
    message: 'Loading Todo..'
  });
  await loading.present();

  this.getrest.getevent(this.cafeId).subscribe(res => {
    loading.dismiss();
    this.cafe = res;
  });
}
  

}

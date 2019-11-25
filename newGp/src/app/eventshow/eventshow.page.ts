import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { event,EventsService } from './../services/Events.service';
@Component({
  selector: 'app-eventshow',
  templateUrl: './eventshow.page.html',
  styleUrls: ['./eventshow.page.scss'],
})
export class EventshowPage implements OnInit {
 event:event={
  name:'',
  Type:'',
  vistor_Type:'',
  vistor_Type1:'',
Date:'',
Date_end:'',
Time_start:'',
Time_end:'',

 }
 events: event[];
  eventId = null;
  constructor(private route: ActivatedRoute, private nav: NavController, private getrest: EventsService, private loadingController: LoadingController) { }

  ngOnInit() {
    this.eventId = this.route.snapshot.params['id'];
    if (this.eventId)  {
      this.loadTodo();

  }

}
async loadTodo() {
  const loading = await this.loadingController.create({
    message: 'Loading Todo..'
  });
  await loading.present();

  this.getrest.getevent(this.eventId).subscribe(res => {
    loading.dismiss();
    this.event = res;
  });
}
}

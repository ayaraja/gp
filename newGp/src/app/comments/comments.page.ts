import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {

  messages = [
    {
      createdAt: 1554090856000,
      msg:'المطعم مررة لذيذ'
    },
    {
      createdAt: 1554090856000,
      msg:'لذيذ انصحكم فيه'
    },
    {
      createdAt: 1554090856000,
      msg:'ما عجبني مرة'
    },
    {
      createdAt: 1554090856000,
      msg:'delicious :)'
    },
    {
      createdAt: 1554090856000,
      msg:'yummeee <3'
    },

  ];

  newMsg ='';


  constructor() { }


  sendMessage() {
    this.messages.push({
      createdAt: new Date().getTime(),
      msg: this.newMsg
    });

    this.newMsg= '';

  }
  ngOnInit() {
  }

}

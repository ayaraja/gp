import { Component, OnInit } from '@angular/core';
import {SocialSharing}from'@ionic-native/social-sharing/ngx';
@Component({
  selector: 'app-currentactivity',
  templateUrl: './currentactivity.page.html',
  styleUrls: ['./currentactivity.page.scss'],
})
export class CurrentactivityPage implements OnInit {

  constructor(private socialsharing:SocialSharing) { }
text='share';
  ngOnInit() {
  }

  sharewhatsApp(){
    this.socialsharing.shareViaWhatsApp(this.text).then(() =>{

    }).catch(e =>{

    })

  }
}

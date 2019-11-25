import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-restaurantslist',
  templateUrl: './restaurantslist.page.html',
  styleUrls: ['./restaurantslist.page.scss'],
})
export class RestaurantslistPage implements OnInit {

  listshow1: boolean;
  listshow2: boolean;
  listshow3: boolean;
  listshow4: boolean;
  listshow5: boolean;
  listshow6: boolean;
  listshow7: boolean;
  listshow8: boolean;

  // ---------------------------------------------
  
  jsonData: any = [];
  json2Data: any = [];
  json3Data: any = [];
  json4Data: any = [];
  json5Data: any = [];
  json6Data: any = [];
  json7Data: any = [];
  json8Data: any = [];
  json9Data: any = [];
  json10Data: any = [];
  json11Data: any = [];
  json12Data: any = [];
  json13Data: any = [];
  json14Data: any = [];
  json15Data: any = [];
  json16Data: any = [];
  json17Data: any = [];
  json18Data: any = [];
  json19Data: any = [];
  json20Data: any = [];
  json21Data: any = [];
  json22Data: any = [];
  json23Data: any = [];
  json24Data: any = [];


  constructor(public navCtrl: NavController) {
    this.initializeJSONData();
    this.listshow1 = false;
    this.listshow2 = false;
    this.listshow3 = false;
    this.listshow4 = false;
    this.listshow5 = false;
    this.listshow6 = false;
    this.listshow7 = false;
    this.listshow8 = false;
  }

  noappearlist1() {
    this.listshow1 = false;
  }

  appearlist1() {
    this.listshow1 = true;
  }
  // --------------------

  noappearlist2() {
    this.listshow2 = false;
  }

  appearlist2() {
    this.listshow2 = true;
  }
  // --------------------

  noappearlist3() {
    this.listshow3 = false;
  }

  appearlist3() {
    this.listshow3 = true;
  }
  // --------------------

  noappearlist4() {
    this.listshow4 = false;
  }

  appearlist4() {
    this.listshow4 = true;
  }
  // --------------------

  noappearlist5() {
    this.listshow5 = false;
  }

  appearlist5() {
    this.listshow5 = true;
  }
  // --------------------

  noappearlist6() {
    this.listshow6 = false;
  }

  appearlist6() {
    this.listshow6 = true;
  }
  // --------------------

  noappearlist7() {
    this.listshow7 = false;
  }

  appearlist7() {
    this.listshow7 = true;
  }
  // --------------------

  noappearlist8() {
    this.listshow8 = false;
  }

  appearlist8() {
    this.listshow8 = true;
  }





  FilterJSONData(ev: any) {

    this.initializeJSONData();
    const val = ev.target.value;

    if (val && val.trim() != '') {
      this.jsonData = this.jsonData.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
    if (val && val.trim() != '') {
      this.json2Data = this.json2Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
    if (val && val.trim() != '') {
      this.json3Data = this.json3Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }

    if (val && val.trim() != '') {
      this.json4Data = this.json4Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
    if (val && val.trim() != '') {
      this.json5Data = this.json5Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
    if (val && val.trim() != '') {
      this.json6Data = this.json6Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
    if (val && val.trim() != '') {
      this.json7Data = this.json7Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
    if (val && val.trim() != '') {
      this.json8Data = this.json8Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
    if (val && val.trim() != '') {
      this.json9Data = this.json9Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
    if (val && val.trim() != '') {
      this.json10Data = this.json10Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
    if (val && val.trim() != '') {
      this.json11Data = this.json11Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
    if (val && val.trim() != '') {
      this.json12Data = this.json12Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
    if (val && val.trim() != '') {
      this.json13Data = this.json13Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
    if (val && val.trim() != '') {
      this.json14Data = this.json14Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
    if (val && val.trim() != '') {
      this.json15Data = this.json15Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
    if (val && val.trim() != '') {
      this.json16Data = this.json16Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
    if (val && val.trim() != '') {
      this.json17Data = this.json17Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
    if (val && val.trim() != '') {
      this.json18Data = this.json18Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
    if (val && val.trim() != '') {
      this.json19Data = this.json19Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
    if (val && val.trim() != '') {
      this.json20Data = this.json20Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
    if (val && val.trim() != '') {
      this.json21Data = this.json21Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
    if (val && val.trim() != '') {
      this.json22Data = this.json22Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
    if (val && val.trim() != '') {
      this.json23Data = this.json23Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
    if (val && val.trim() != '') {
      this.json24Data = this.json24Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
    


  }


  initializeJSONData() {
    // مطاعم هندية
    this.jsonData = [
      {
        "name": "مطعم الصيف الهندي ",
        "code": " الص اله "
      },
    ]
    this.json2Data = [
      {
        "name": "مطعم كوبر شندني ",
        "code": "كو شن "
      },
    ]
    this.json3Data = [
      {
        "name": "مطعم زعفران",
        "code": "زع"
      },
    ]

    // مطاعم شعبية
    this.json4Data = [
      {
        "name": "مطعم القرية النجدية ",
        "code": " الق الن "
      },
    ]
    this.json5Data = [
      {
        "name": "مطعم ليمونة ",
        "code": "لي "
      },
    ]
    this.json6Data = [
      {
        "name": "مطعم الرومنسية",
        "code": "روم"
      },
    ]

    // مطاعم ايطالية
    this.json7Data = [
      {
        "name": " بياتو ",
        "code": " بي "
      },
    ]
    this.json8Data = [
      {
        "name": " ازورو ",
        "code": " از "
      },
    ]
    this.json9Data = [
      {
        "name": " تيرن ستون ",
        "code": " تو ست "
      },
    ]

    // مطاعم فرنسية
    this.json10Data = [
      {
        "name": " ",
        "code": " "
      },
    ]
    this.json11Data = [
      {
        "name": " ",
        "code": " "
      },
    ]
    this.json12Data = [
      {
        "name": " ",
        "code": " "
      },
    ]



  }

  ngOnInit() {
  }

}

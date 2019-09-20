import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CampaignDataService {

  constructor() { }
  campaignData = {
    'one' : [
      {
        date:"2017-05-01",
        name : "Whatsapp",
        icon:'fa fa-whatsapp',
        country: 'US',
        view:'sample'
      }, {
        date:"2017-05-02",
        name : "Test",
        icon:'fa fa-tumblr',
        country: 'IN',
        view:'sample'
      }, {
        date:"2017-05-03",
        name : "Facebook",
        icon:'fa fa-skype',
        country: 'FB',
        view:'sample'
      }, {
        date:"2017-05-04",
        name : "Sample",
        icon:'',
        country: 'SM',
        view:'sample'
      }    ],
      'two':[
        {
          date:"2017-06-01",
          name : "Whatsapp1",
          icon:'',
          country: 'US',
          view:'sample'
        }, {
          date:"2017-07-02",
          name : "Test1",
          icon:'',
          country: 'IN',
          view:'sample'
        }, {
          date:"2017-06-03",
          name : "Facebook1",
          icon:'',
          country: 'FB',
          view:'sample'
        }, {
          date:"2017-06-04",
          name : "Sample1",
          icon:'',
          country: 'SM',
          view:'sample'
        }    ],
        'three':[
          {
            date:"2017-07-01",
            name : "Whatsapp2",
            icon:'',
            country: 'US',
            view:'sample'
          }, {
            date:"2017-08-02",
            name : "Test1",
            icon:'',
            country: 'IN1',
            view:'sample'
          }, {
            date:"2017-06-03",
            name : "Facebook2",
            icon:'',
            country: 'FB',
            view:'sample'
          }, {
            date:"2017-06-04",
            name : "Sample1",
            icon:'',
            country: 'SM1',
            view:'sample'
          }    ]

  };

  getCampaignData(type:string){
    console.log('inside service',type);
    return this.campaignData[type];
  }


}

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
        icon:'fa fa-whatsapp fa-2x',
        country: 'US',
        view:'sample',
        iconColor : 'green'
      }, {
        date:"2017-05-02",
        name : "Test",
        icon:'fa fa-skype fa-2x',
        country: 'IN',
        view:'sample',
        iconColor : 'red'

      }, {
        date:"2017-05-03",
        name : "Facebook",
        icon:'fa fa-skype fa-2x',
        country: 'FB',
        view:'sample',
        iconColor : 'yellow'

      }, {
        date:"2017-05-04",
        name : "Sample",
        country: 'SM',
        view:'sample',
        icon:'fa fa-whatsapp fa-2x',
        iconColor : 'green'
      }    ],
      'two':[
        {
          date:"2017-06-01",
          name : "Whatsapp1",
          icon:'fa fa-whatsapp fa-2x',
          country: 'US',
          view:'sample',
          iconColor : 'green'

        }, {
          date:"2017-07-02",
          name : "Test1",
          icon:'fa fa-whatsapp fa-2x',
          country: 'IN',
          view:'sample',
          iconColor : 'green'

        }, {
          date:"2017-06-03",
          name : "Facebook1",
          icon:'fa fa-skype fa-2x',
          country: 'FB',
          view:'sample',
          iconColor : 'green'

        }, {
          date:"2017-06-04",
          name : "Sample1",
          icon:'fa fa-skype fa-2x',
          country: 'SM',
          view:'sample',
          iconColor : 'green'

        }    ],
        'three':[
          {
            date:"2017-07-01",
            name : "Whatsapp2",
            icon:'fa fa-skype fa-2x',
            country: 'US',
            view:'sample',
            iconColor : 'green'


          }, {
            date:"2017-08-02",
            name : "Test1",
            icon:'fa fa-skype fa-2x',
            country: 'IN1',
            view:'sample',
            iconColor : 'blue'

          }, {
            date:"2017-06-03",
            name : "Facebook2",
            icon:'fa fa-skype fa-2x',
            country: 'FB',
            view:'sample',
            iconColor : 'red'

          }, {
            date:"2017-06-04",
            name : "Sample1",
            icon:'fa fa-skype fa-2x',
            country: 'SM1',
            view:'sample',
            iconColor : 'red'

          }    ]

  };

  getCampaignData(type:string){
    console.log('inside service',type);
    return this.campaignData[type];
  }


}

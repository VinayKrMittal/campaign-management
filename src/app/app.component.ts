import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CampaignDataService } from './campaign-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'manage-campaign';
  selected = 'one';
  campaignData = [];
  constructor(private campaign_data: CampaignDataService) {
  }
  onRadioChange(type) {
    this.selected = type;
    this.campaignData = this.campaign_data.getCampaignData(type);
    console.log('input has been changed', type);
  }

  /**
   * Method to get the days diff
   */
  getDays(d) {
    let d1 = new Date(d);
    let d2 = new Date();
    let timeDiff = d2.getTime() - d1.getTime();
    let daysDiff = timeDiff / (1000 * 3600 * 24);
    return Math.floor(daysDiff);
  }

  ngOnInit(): void {
    this.selected = 'one';
    this.campaignData = this.campaign_data.getCampaignData('one');
    console.log('data', this.campaignData);

  }

}

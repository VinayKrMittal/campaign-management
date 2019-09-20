import { TestBed } from '@angular/core/testing';

import { CampaignDataService } from './campaign-data.service';

describe('CampaignDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CampaignDataService = TestBed.get(CampaignDataService);
    expect(service).toBeTruthy();
  });
});

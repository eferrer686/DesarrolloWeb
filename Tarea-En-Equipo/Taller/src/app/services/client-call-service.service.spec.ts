import { TestBed, inject } from '@angular/core/testing';

import { ClienteCallServiceService } from './cliente-call-service.service';

describe('ClientCallServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClienteCallServiceService]
    });
  });

  it('should be created', inject([ClienteCallServiceService], (service: ClienteCallServiceService) => {
    expect(service).toBeTruthy();
  }));
});

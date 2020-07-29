import { TestBed } from '@angular/core/testing';

import { PageLoaderService } from './page-loader.service';

describe('PageLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageLoaderService = TestBed.get(PageLoaderService);
    expect(service).toBeTruthy();
  });
});

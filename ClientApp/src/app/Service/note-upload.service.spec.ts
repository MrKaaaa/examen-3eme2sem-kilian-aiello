import { TestBed } from '@angular/core/testing';

import { NoteUploadService } from './note-upload.service';

describe('NoteUploadService', () => {
  let service: NoteUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

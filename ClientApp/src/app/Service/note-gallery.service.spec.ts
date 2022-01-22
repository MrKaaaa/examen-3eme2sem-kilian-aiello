import { TestBed } from '@angular/core/testing';

import { NoteGalleryService } from './note-gallery.service';

describe('NoteGalleryService', () => {
  let service: NoteGalleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteGalleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

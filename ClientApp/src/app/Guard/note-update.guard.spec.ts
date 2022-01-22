import { TestBed } from '@angular/core/testing';

import { NoteUpdateGuard } from './note-update.guard';

describe('NoteUpdateGuard', () => {
  let guard: NoteUpdateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoteUpdateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

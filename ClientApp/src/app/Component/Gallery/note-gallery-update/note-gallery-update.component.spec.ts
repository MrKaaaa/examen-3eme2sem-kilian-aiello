import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteGalleryUpdateComponent } from './note-gallery-update.component';

describe('NoteGalleryUpdateComponent', () => {
  let component: NoteGalleryUpdateComponent;
  let fixture: ComponentFixture<NoteGalleryUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteGalleryUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteGalleryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

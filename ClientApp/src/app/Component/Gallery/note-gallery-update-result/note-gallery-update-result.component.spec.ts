import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteGalleryUpdateResultComponent } from './note-gallery-update-result.component';

describe('NoteGalleryUpdateResultComponent', () => {
  let component: NoteGalleryUpdateResultComponent;
  let fixture: ComponentFixture<NoteGalleryUpdateResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteGalleryUpdateResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteGalleryUpdateResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

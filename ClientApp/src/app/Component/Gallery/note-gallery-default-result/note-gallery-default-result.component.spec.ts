import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteGalleryDefaultResultComponent } from './note-gallery-default-result.component';

describe('NoteGalleryDefaultResultComponent', () => {
  let component: NoteGalleryDefaultResultComponent;
  let fixture: ComponentFixture<NoteGalleryDefaultResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteGalleryDefaultResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteGalleryDefaultResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteGalleryDeleteResultComponent } from './note-gallery-delete-result.component';

describe('NoteGalleryDeleteResultComponent', () => {
  let component: NoteGalleryDeleteResultComponent;
  let fixture: ComponentFixture<NoteGalleryDeleteResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteGalleryDeleteResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteGalleryDeleteResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteGalleryDeleteComponent } from './note-gallery-delete.component';

describe('NoteGalleryDeleteComponent', () => {
  let component: NoteGalleryDeleteComponent;
  let fixture: ComponentFixture<NoteGalleryDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteGalleryDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteGalleryDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

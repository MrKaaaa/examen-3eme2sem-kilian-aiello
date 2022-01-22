import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteGalleryDefaultComponent } from './note-gallery-default.component';

describe('NoteGalleryDefaultComponent', () => {
  let component: NoteGalleryDefaultComponent;
  let fixture: ComponentFixture<NoteGalleryDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteGalleryDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteGalleryDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteUploadComponent } from './note-upload.component';

describe('NoteUploadComponent', () => {
  let component: NoteUploadComponent;
  let fixture: ComponentFixture<NoteUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagAuthorGalleryComponent } from './tag-author-gallery.component';

describe('TagAuthorGalleryComponent', () => {
  let component: TagAuthorGalleryComponent;
  let fixture: ComponentFixture<TagAuthorGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagAuthorGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagAuthorGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

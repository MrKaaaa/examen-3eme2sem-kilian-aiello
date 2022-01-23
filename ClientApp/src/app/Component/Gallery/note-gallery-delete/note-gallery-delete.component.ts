import {Component, OnInit} from '@angular/core';
import {Note} from "../../../Interface/note";
import {NoteUploadService} from "../../../Service/note-upload.service";
import {NoteGalleryComponent} from "../note-gallery/note-gallery.component";
import {Router} from "@angular/router";
import {NoteGalleryService} from "../../../Service/note-gallery.service";

@Component({
  selector: 'app-note-gallery-delete',
  templateUrl: './note-gallery-delete.component.html',
  styleUrls: ['./note-gallery-delete.component.css']
})
export class NoteGalleryDeleteComponent implements OnInit {

  constructor(public gallery: NoteGalleryComponent,
              public galleryService: NoteGalleryService,
              private router: Router) {
  }

  ngOnInit(): void {
    if(this.galleryService.notes.length == 0){
      this.router.navigate(['/note-gallery']);
    }
  }

  deleteNote(note: Note) {
    this.galleryService.deleteNote(note.noteId).subscribe(result =>{
      console.log(this.galleryService.notes);

      //this.gallery.ngOnInit();
      window.location.reload();
      this.galleryService.getNote();

    });
  }
}

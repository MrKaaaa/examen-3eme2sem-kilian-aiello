import { Component, OnInit } from '@angular/core';
import {NoteGalleryComponent} from "../note-gallery/note-gallery.component";
import {Note} from "../../../Interface/note";
import {Router} from "@angular/router";
import {NoteGalleryService} from "../../../Service/note-gallery.service";

@Component({
  selector: 'app-note-gallery-update',
  templateUrl: './note-gallery-update.component.html',
  styleUrls: ['./note-gallery-update.component.css']
})
export class NoteGalleryUpdateComponent implements OnInit {

  constructor(public gallery: NoteGalleryComponent, public galleryService: NoteGalleryService, private router: Router) { }

  ngOnInit(): void {
    this.galleryService.getNote();

    if(this.galleryService.notes.length == 0){
      this.router.navigate(['/note-gallery']);
    }
  }

  openModifyform(note: Note) {
    this.router.navigate(['/note-update', note.noteId]);
  }
}

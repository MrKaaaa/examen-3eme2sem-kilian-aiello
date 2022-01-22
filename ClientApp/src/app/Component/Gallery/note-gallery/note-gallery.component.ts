import {Component, OnInit} from '@angular/core';
import {NoteGalleryService} from "../../../Service/note-gallery.service";
import {Note} from "../../../Interface/note";

@Component({
  selector: 'app-note-gallery',
  templateUrl: './note-gallery.component.html',
  styleUrls: ['./note-gallery.component.css']
})
export class NoteGalleryComponent implements OnInit {

  notes: Note[] = [];

  constructor(private noteGalleryService: NoteGalleryService) {
  }

  ngOnInit(): void {
    this.notesRefresh();
  }

  notesRefresh(){
    this.noteGalleryService.getNote().subscribe(notes => {
      this.notes = notes;
      console.log(notes);
    });
  }
}

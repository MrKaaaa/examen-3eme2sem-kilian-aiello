import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from "../../../Interface/note";
import {NoteGalleryComponent} from "../note-gallery/note-gallery.component";

@Component({
  selector: 'app-note-gallery-delete-result',
  templateUrl: './note-gallery-delete-result.component.html',
  styleUrls: ['./note-gallery-delete-result.component.css']
})
export class NoteGalleryDeleteResultComponent implements OnInit {

  @Input() note: Note;
  @Output() noteSelected = new EventEmitter<Note>();
  tagExist: boolean = true;
  authorExist: boolean = true;

  constructor(public gallery: NoteGalleryComponent) { }

  ngOnInit(): void {
    if(this.note.tag == null){
      this.tagExist = false;
    }
    if (this.note.author == null){
      this.authorExist = false;
    }
  }

  deleteNote() {
    if(confirm("Êtes-vous sûr de supprimer la note: " + this.note.title)) {
      console.log("Suppression de l'id " + this.note.noteId);
      this.noteSelected.emit(this.note);
    }
  }
}

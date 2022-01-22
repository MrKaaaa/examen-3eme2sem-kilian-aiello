import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from "../../../Interface/note";
import {NoteGalleryComponent} from "../note-gallery/note-gallery.component";

@Component({
  selector: 'app-note-gallery-update-result',
  templateUrl: './note-gallery-update-result.component.html',
  styleUrls: ['./note-gallery-update-result.component.css']
})
export class NoteGalleryUpdateResultComponent implements OnInit {

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

  modifyNote() {
    this.noteSelected.emit(this.note);
  }
}

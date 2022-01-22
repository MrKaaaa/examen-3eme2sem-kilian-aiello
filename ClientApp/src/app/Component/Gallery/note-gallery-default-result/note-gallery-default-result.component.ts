import {Component, Input, OnInit} from '@angular/core';
import {Note} from "../../../Interface/note";
import {NoteUploadService} from "../../../Service/note-upload.service";

@Component({
  selector: 'app-note-gallery-default-result',
  templateUrl: './note-gallery-default-result.component.html',
  styleUrls: ['./note-gallery-default-result.component.css']
})
export class NoteGalleryDefaultResultComponent implements OnInit {

  @Input() note: Note;
  tagExist: boolean = true;
  authorExist: boolean = true;

  constructor(public noteService: NoteUploadService) {}

  ngOnInit(): void {

    if(this.note.tag == null){
      this.tagExist = false;
    }
    if (this.note.author == null){
      this.authorExist = false;
    }
  }

}

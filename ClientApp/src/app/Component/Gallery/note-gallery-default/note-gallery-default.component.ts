import {Component, Input, OnInit} from '@angular/core';
import {NoteGalleryComponent} from "../note-gallery/note-gallery.component";
import {Note} from "../../../Interface/note";
import {NoteUploadService} from "../../../Service/note-upload.service";
import {NoteGalleryService} from "../../../Service/note-gallery.service";

@Component({
  selector: 'app-note-gallery-default',
  templateUrl: './note-gallery-default.component.html',
  styleUrls: ['./note-gallery-default.component.css']
})
export class NoteGalleryDefaultComponent implements OnInit {

  constructor(public noteService: NoteUploadService,
              public serviceGallery: NoteGalleryService) {}

  ngOnInit(): void {

  }

}

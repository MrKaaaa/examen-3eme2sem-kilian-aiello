import {Component, OnInit} from '@angular/core';
import {NoteGalleryService} from "../../../Service/note-gallery.service";
import {Note} from "../../../Interface/note";
import {Tag} from "../../../Interface/tag";

@Component({
  selector: 'app-note-gallery',
  templateUrl: './note-gallery.component.html',
  styleUrls: ['./note-gallery.component.css']
})
export class NoteGalleryComponent implements OnInit {


  constructor(private noteGalleryService: NoteGalleryService) {}

  ngOnInit(): void {
    this.noteGalleryService.getNote();
  }
}

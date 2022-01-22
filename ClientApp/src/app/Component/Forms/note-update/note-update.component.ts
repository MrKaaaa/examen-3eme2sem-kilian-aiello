import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NoteUploadService} from "../../../Service/note-upload.service";
import {Note} from "../../../Interface/note";
import {Author} from "../../../Interface/author";
import {Tag} from "../../../Interface/tag";
import {FormArray, NgForm} from "@angular/forms";
import {INoteForm} from "../../../Interface/inote-form";

@Component({
  selector: 'app-note-update',
  templateUrl: './note-update.component.html',
  styleUrls: ['./note-update.component.css']
})
export class NoteUpdateComponent implements OnInit {

  note: any;
  dataForm = {} as INoteForm;

  constructor(public uploadService: NoteUploadService,private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      console.log(params.id);
      this.uploadService.getNoteById(params.id).subscribe(data => {
        this.note = data;

        this.dataForm.id = this.note.noteId;
        this.dataForm.title = this.note.title;
        this.dataForm.description = this.note.description;

        if (this.note.author != null) {
          this.dataForm.authorName = this.note.author.name;
        }

        if (this.note.tag != null) {
          this.dataForm.tagName = this.note.tag.name;
        }
      });
    });
  }

  ngOnInit(): void {
    this.uploadService.getTagsName();
    this.uploadService.getAuthorsName();
  }

  onSubmit(dataForm: any) {
    this.uploadService.updateNote(this.dataForm.id, dataForm);
  }
}

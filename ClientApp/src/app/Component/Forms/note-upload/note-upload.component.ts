import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NoteUploadService} from "../../../Service/note-upload.service";

@Component({
  selector: 'app-note-upload',
  templateUrl: './note-upload.component.html',
  styleUrls: ['./note-upload.component.css']
})
export class NoteUploadComponent implements OnInit {
  //note
  titleInput: string = "";
  descriptionInput: string = "";
  authorInput: string = "";
  tagInput: string = "";

  constructor(private http:HttpClient, public noteService: NoteUploadService) {}

  ngOnInit(): void {
    //Mettre à jour les propositions d'auteur et de tag

    this.noteService.getTagsName();
    this.noteService.getAuthorsName();
  }

  onTitleChange(event: any) {
    this.titleInput = event.target.value;
  }
  onDescriptionChange(event: any) {
    this.descriptionInput = event.target.value;
    return this.descriptionInput;
  }
  onAuthorChange(event: any) {
    this.authorInput = event.target.value;
    return this.authorInput;
  }
  onTagChange(event: any) {
    this.tagInput = event.target.value;
    return this.tagInput;
  }


  onUpload() {

    //this.authorUpload(this.authorInput);
    //this.tagUpload(this.tagInput);

    let NoteFormData: FormData = new FormData();
    NoteFormData.append('title', this.titleInput);
    NoteFormData.append('description', this.descriptionInput);
    NoteFormData.append('authorName', this.authorInput);
    NoteFormData.append('tagName', this.tagInput);

    this.noteService.saveNote(NoteFormData);
    this.ngOnInit();
  }
}

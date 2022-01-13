import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {getBaseUrl} from "../../../main";
import {map} from "rxjs/operators";
import {NoteServiceService} from "../../Service/note-service.service";

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

  constructor(private http:HttpClient, public noteService: NoteServiceService) {}

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

  authorUpload(author: string) {
    //Si l'auteur n'existe pas
    if(this.noteService.authorExist(author) == false){
      console.log("L'auteur n'existe pas");
      this.noteService.saveAuthor(this.authorInput);
      console.log(this.noteService.authorId);

    }
    //Si l'auteur existe
    else if (this.noteService.authorExist(author) == true){
      console.log("L'auteur existe déjà");
      console.log(this.noteService.getAuthorsIdByName(this.authorInput));

    }
    //Si l'auteur est vide
    else if (this.noteService.authorExist(author) == "null"){
      console.log("L'auteur est vide");
      this.noteService.authorId = 0;
      console.log(this.noteService.authorId);
    }
  }

  tagUpload(tag: string) {
    //Si le tag n'existe pas
    if(this.noteService.tagExist(tag) == false){
      console.log("Le tag n'existe pas");
      this.noteService.saveTag(this.tagInput);
      console.log(this.noteService.tagId);
    }
    //Si le tag existe
    else if (this.noteService.tagExist(tag) == true){
      console.log("Le tag existe déjà");
      console.log(this.noteService.getTagsIdByName(this.tagInput));
    }
    //Si le tag est vide
    else if (this.noteService.tagExist(tag) == "null"){
      console.log("Le tag est vide");
      this.noteService.tagId = 0;
      console.log(this.noteService.tagId);
    }
  }
}

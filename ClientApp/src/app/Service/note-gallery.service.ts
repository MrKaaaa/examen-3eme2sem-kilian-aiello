import {Inject, Injectable} from '@angular/core';
import {Note} from "../Interface/note";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tag} from "../Interface/tag";
import {Router} from "@angular/router";
import {Author} from "../Interface/author";

@Injectable({
  providedIn: 'root'
})
export class NoteGalleryService {

  note: Note;
  myAppUrl: string = "";

  notes: Note[] = [];
  tagIdInNote: number[] = [];
  tags: Tag[] = [];
  tagId: number[] = [];
  authorIdInNote: number[] = [];
  authors: Author[] = [];
  authorId: number[] = [];

  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string, private router: Router) {
    this.myAppUrl = baseUrl;
  }

  getNote() {
    return this._http.get<Note[]>(this.myAppUrl + "api/Note").subscribe(data =>{
      this.notes = data;
      if(this.notes.length == 0){
        this.router.navigate(['/note-gallery']);
      }
      this.refreshTag(this.notes);
      this.refreshAuthor(this.notes);
    });
  }

  noteExist(id: number){
    return this._http.get(this.myAppUrl + "api/Note/exist/" + id);
  }

  deleteNote(id: number) {
    return this._http.delete(this.myAppUrl + "api/Note/" + id);
  }

  getTag(): Observable<Tag[]> {
    return this._http.get<Tag[]>(this.myAppUrl + "api/tag");
  }

  deleteTag(id: number) {
    return this._http.delete(this.myAppUrl + "api/Tag/" + id)
      .subscribe((res) =>{
        console.log("tag supprimé")
        }
      );
  }

  refreshTag(notes: Note[]){
    console.log("refreshTag");

    this.getTag().subscribe(tags => {
      this.tags = tags;
      console.log(tags);

      this.tags.forEach((array, index) => {
        console.log(array);
        this.tagId.push(array.tagId);
      })

      notes.forEach((array, index) => {
        this.tagIdInNote.push(array.idTag);
      });

      let unusedTagId = this.tagId.filter(o1 => !this.tagIdInNote.some(o2 => o1 === o2));
      console.warn(unusedTagId);

      //Retirer les tag de la DB
      unusedTagId.forEach((id) =>{
        this.deleteTag(id);
      });
    })
  }

  getAuthor(): Observable<Author[]> {
    return this._http.get<Author[]>(this.myAppUrl + "api/author");
  }

  refreshAuthor(notes: Note[]){
    console.log("refreshAuthor");

    this.getAuthor().subscribe(authors => {
      this.authors = authors;
      console.log(authors);

      this.authors.forEach((array, index) => {
        console.log(array);
        this.authorId.push(array.authorId);
      })

      notes.forEach((array, index) => {
        this.authorIdInNote.push(array.idAuthor);
      });

      let unusedAuthorId = this.authorId.filter(o1 => !this.authorIdInNote.some(o2 => o1 === o2));
      console.warn(unusedAuthorId);

      //Retirer les auteurs de la DB
      unusedAuthorId.forEach((id) =>{
        this.deleteAuthor(id);
      });
    })
  }

  deleteAuthor(id: number) {
    return this._http.delete(this.myAppUrl + "api/Author/" + id)
      .subscribe((res) =>{
          console.log("Auteur supprimé")
        }
      );
  }
}

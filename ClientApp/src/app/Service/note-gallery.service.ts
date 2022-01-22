import {Inject, Injectable} from '@angular/core';
import {Note} from "../Interface/note";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NoteGalleryService {

  notes: Array<Note>;
  note: Note;
  myAppUrl: string = "";

  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl;
    this.notes = [];
  }

  // getNote() {
  //   return this._http.get(this.myAppUrl + "api/Note")
  //     .subscribe((data: any) => {
  //       this.notes = data;
  //       console.log(data);
  //     });
  // }
  private returnValue: boolean = false;

  getNote(): Observable<Note[]> {
    return this._http.get<Note[]>(this.myAppUrl + "api/Note");
  }

  noteExist(id: number){
    return this._http.get(this.myAppUrl + "api/Note/exist/" + id);
  }

  deleteNote(id: number) {
    return this._http.delete(this.myAppUrl + "api/Note/" + id);
  }
}

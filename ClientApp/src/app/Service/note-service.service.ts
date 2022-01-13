import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpContext} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
  myAppUrl: string = "";
  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl;
  }

  authorsList: Array<any> = [];
  tagsList: Array<any> = [];

  authorId: number = 0;
  tagId: number = 0;

  //Note
  getNote() {
    return this._http.get(this.myAppUrl + "api/Note")
      .subscribe(data => console.log(data));
  }

  getNoteById(id: number) {
    return this._http.get(this.myAppUrl + "api/Note/" + id)
      .subscribe(data => console.log(data));
  }

  saveNote(note: any) {
    this._http.post(this.myAppUrl + "api/Note/", note)
      .subscribe(data => {
        console.log(data);
      });
  }

  updateNote(id: number, note: any) {
    return this._http.put(this.myAppUrl + "api/Note/" + id, note)
      .subscribe(data => console.log(data));
  }

  deleteNote(id: number) {
    return this._http.delete(this.myAppUrl + "api/Note/" + id)
      .subscribe(data => console.log(data));
  }


  //Author
  getAuthor() {
    return this._http.get(this.myAppUrl + "api/Author")
      .subscribe(data => console.log(data));
  }

  getAuthorById(id: number) {
    return this._http.get(this.myAppUrl + "api/Author" + id)
      .subscribe(data => console.log(data));
  }

  getAuthorsName() {
    return this._http.get(this.myAppUrl + "api/Author")
      .subscribe(data => {
        let authorGetResults: any = data;
        this.authorsList = [];
        for (let obj of authorGetResults) {
          this.authorsList.push(obj);
        }
      });
    return this.authorsList;
  }

  //Tag
  getTag() {
    return this._http.get(this.myAppUrl + "api/Tag")
      .subscribe(data => console.log(data));
  }

  getTagById(id: number) {
    return this._http.get(this.myAppUrl + "api/Tag" + id)
      .subscribe(data => console.log(data));
  }

  getTagsName() {
    this._http.get(this.myAppUrl + "api/Tag")
      .subscribe(data => {
        let tagGetResults: any = data;
        this.tagsList = [];
        for (let obj of tagGetResults) {
          this.tagsList.push(obj);
        }
      });
    return this.tagsList;
  }

  saveTag(tag: any) {
    let TagFormData: FormData = new FormData();
    TagFormData.append('name', tag);
    this._http.post(this.myAppUrl + "api/Tag", TagFormData)
      .subscribe(id => {
        console.warn("New tag id°: " + id);
        this.tagId = Number(id);
        return id;
      });
  }

}

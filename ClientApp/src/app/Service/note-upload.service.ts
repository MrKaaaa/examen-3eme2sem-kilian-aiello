import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {NoteGalleryComponent} from "../Component/Gallery/note-gallery/note-gallery.component";

@Injectable({
  providedIn: 'root'
})
export class NoteUploadService {

  myAppUrl: string = "";
  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string, private router: Router) {
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

  getNoteById(id: any) {
    return this._http.get(this.myAppUrl + "api/Note/" + id);
  }

  saveNote(note: any) {
    this._http.post(this.myAppUrl + "api/Note/", note)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['/note-gallery']);
      });
  }

  updateNote(id: number, note: any) {
    return this._http.put(this.myAppUrl + "api/Note/" + id, note)
  }

  deleteNote(id: string) {
    return this._http.delete(this.myAppUrl + "api/Note/" + id)
      .subscribe(data => {
        true
      });
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

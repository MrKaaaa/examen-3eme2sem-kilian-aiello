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
    return this._http.post(this.myAppUrl + "api/Note/", note)
      .subscribe(data => console.log(data));
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

  authorExist(name: string){
    let Exist: boolean = false;
    if (name != ""){
      for (let i = 0; Exist == false && i < this.authorsList.length ; i++) {
        for (let value in this.authorsList[i]){
          if(this.authorsList[i][value] == name){
            Exist = true;
          }
        }
      }
      return Exist;
    } else{
      return "null";
    }
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

  getAuthorsIdByName(name: string) {
    this._http.get(this.myAppUrl + "api/Author")
      .subscribe(data => {
        let authorGetResults: any = data;
        for (let obj of authorGetResults) {
          if(obj["name"] == name)
          {
            console.warn("AuthorId Found by Name: "+ obj["authorId"]);
            this.authorId = obj["authorId"];
            return obj["authorId"];
            break;
          }
        }
      });
  }

  saveAuthor(author: any) {
    let AuthorFormData: FormData = new FormData();
    AuthorFormData.append('name', author);
    this._http.post(this.myAppUrl + "api/Author", AuthorFormData)
      .subscribe(id => {
        console.warn("New Author id°: " + id);
        this.authorId = Number(id);
        return id;
      });
  }

  updateAuthor(id: number, author: any) {
    return this._http.put(this.myAppUrl + "api/Author" + id, author)
      .subscribe(data => console.log(data));
  }

  deleteAuthor(id: number) {
    return this._http.delete(this.myAppUrl + "api/Author" + id)
      .subscribe(data => console.log(data));
  }




  //Tag
  getTag() {
    return this._http.get(this.myAppUrl + "api/Tag")
      .subscribe(data => console.log(data));
  }

  tagExist(tag: string){
    let Exist: boolean = false;
    if (tag != ""){
      for (let i = 0; Exist == false && i < this.tagsList.length ; i++) {
        for (let value in this.tagsList[i]){
          if(this.tagsList[i][value] == tag){
            Exist = true;
          }
        }
      }
      return Exist;
    } else {
      return "null";
    }
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

  getTagsIdByName(tag: string) {
    this._http.get(this.myAppUrl + "api/Tag")
      .subscribe(data => {
        let tagGetResults: any = data;
        for (let obj of tagGetResults) {
          if(obj["name"] == tag)
          {
            console.warn("TagId Found by Name: " + obj["tagId"]);
            this.tagId = obj["tagId"];
            return obj["tagId"];
            break;
          }
        }
      });
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

  updateTag(id: number, tag: any) {
    return this._http.put(this.myAppUrl + "api/Tag" + id, tag)
      .subscribe(data => console.log(data));
  }

  deleteTag(id: number) {
    return this._http.delete(this.myAppUrl + "api/Tag" + id)
      .subscribe(data => console.log(data));
  }

}

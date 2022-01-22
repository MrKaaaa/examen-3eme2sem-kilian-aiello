import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {NoteUploadService} from "../Service/note-upload.service";
import {NoteGalleryService} from "../Service/note-gallery.service";

@Injectable({
  providedIn: 'root'
})
export class NoteUpdateGuard implements CanActivate {

  constructor(private service: NoteUploadService, private gallery: NoteGalleryService, private router:Router) {
    console.log("Entrée dans le guard")
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let valueReturn = true;
    //get user data
    this.service.getNoteById(route.params.id).subscribe(
      data => {
        console.log('success', data);
        valueReturn = true;
      },
      error => {
        console.log('oops', error);
        this.router.navigate(['/note-gallery']);
        valueReturn = false;
      }
    );
    return valueReturn;


    // if(this.service.getNoteById(route.params.id).subscribe(
    //     data => {
    //       console.log('success', data);
    //       return true;
    //     },
    //     error => {
    //         console.log('oops', error);
    //         return false;
    //       }
    //     )){
    //   return true
    // }
    // else {
    //   return false
    // }

    // let returnValue: boolean = true;
    // console.log(this.gallery.noteExist(route.params.id));
    // this.gallery.noteExist(route.params.id)
    //   .subscribe(
    //     data => {
    //     console.log('success', data);
    //     returnValue = true;
    //   }, error => {
    //       console.log('oops', error);
    //       returnValue = false;
    //       this.router.navigate(['/note-gallery']);
    //     });
    // return returnValue;
  }

}


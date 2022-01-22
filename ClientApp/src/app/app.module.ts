import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {HomeComponent} from "./Component/home/home.component";
import {NavMenuComponent} from "./Component/nav-menu/nav-menu.component";
import {NoteGalleryComponent} from "./Component/Gallery/note-gallery/note-gallery.component";
import {NoteUploadComponent} from "./Component/Forms/note-upload/note-upload.component";
import {NoteGalleryDeleteComponent} from "./Component/Gallery/note-gallery-delete/note-gallery-delete.component";
import {
  NoteGalleryDeleteResultComponent
} from "./Component/Gallery/note-gallery-delete-result/note-gallery-delete-result.component";
import {NoteGalleryDefaultComponent} from "./Component/Gallery/note-gallery-default/note-gallery-default.component";
import {
  NoteGalleryDefaultResultComponent
} from "./Component/Gallery/note-gallery-default-result/note-gallery-default-result.component";
import {NoteGalleryUpdateComponent} from "./Component/Gallery/note-gallery-update/note-gallery-update.component";
import {
  NoteGalleryUpdateResultComponent
} from "./Component/Gallery/note-gallery-update-result/note-gallery-update-result.component";
import {NoteUpdateComponent} from "./Component/Forms/note-update/note-update.component";
import {NotFoundComponent} from "./Component/not-found/not-found.component";
import {NoteUpdateGuard} from "./Guard/note-update.guard";
import {TagAuthorGalleryComponent} from "./Component/TagAndNote/tag-author-gallery/tag-author-gallery.component";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NavMenuComponent,
    HomeComponent,
    NoteUploadComponent,
    NoteUpdateComponent,
    NoteGalleryComponent,
    NoteGalleryDefaultComponent,
    NoteGalleryDefaultResultComponent,
    NoteGalleryDeleteComponent,
    NoteGalleryDeleteResultComponent,
    NoteGalleryUpdateComponent,
    NoteGalleryUpdateResultComponent,
    TagAuthorGalleryComponent

  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '',
        component: HomeComponent,
        pathMatch: 'full'},
      {path: 'note-upload', component: NoteUploadComponent},
      {path: 'note-update/:id', component: NoteUpdateComponent, canActivate: [NoteUpdateGuard]},
      {
        path: 'note-gallery', component: NoteGalleryComponent,
        children: [
          {path: '', redirectTo: 'default', pathMatch: 'full'},
          {path: 'default', component: NoteGalleryDefaultComponent},
          {path: 'delete', component: NoteGalleryDeleteComponent},
          {path: 'update', component: NoteGalleryUpdateComponent}
        ]
      },

      //404
      { path: '**', pathMatch: 'full',
        component: NotFoundComponent },
    ]),
    ReactiveFormsModule
  ],
  providers: [NoteUpdateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

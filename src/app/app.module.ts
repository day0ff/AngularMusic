import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {SongsComponent} from './songs/songs.component';
import {SongDetailComponent} from './songs/song-detail/song-detail.component';
import {SongService} from './service/song.service';

import {HomeComponent} from './home/home.component';

import {PassportsComponent} from './passports/passports.component';
import {PassportService} from './service/passport.service';
import {PassportDetailComponent} from './passports/passport-detail/passport-detail.component';
import { DeleteModalComponent } from './modal/delete-modal/delete-modal.component';
import { UpdateModalComponent } from './modal/update-modal/update-modal.component';
import { SaveModalComponent } from './modal/save-modal/save-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SongsComponent,
    SongDetailComponent,
    HomeComponent,
    PassportsComponent,
    PassportDetailComponent,
    DeleteModalComponent,
    UpdateModalComponent,
    SaveModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SongService, PassportService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

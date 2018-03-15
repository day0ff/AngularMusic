import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SongsComponent} from './songs/songs.component';
import {HomeComponent} from './home/home.component';
import {SongDetailComponent} from './songs/song-detail/song-detail.component';
import {PassportsComponent} from './passports/passports.component';
import {PassportDetailComponent} from './passports/passport-detail/passport-detail.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'passports/detail/:id', component: PassportDetailComponent},
  {path: 'passports', component: PassportsComponent},
  {path: 'songs/detail/:id', component: SongDetailComponent},
  {path: 'songs', component: SongsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

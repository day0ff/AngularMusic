import {Injectable} from '@angular/core';

import {Song} from '../songs/song';
import {SONGS} from './SONGS';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

// import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class SongService {
 // private songUrl = 'http://localhost:8090/song/get';

  public getSong(id: number): Observable<Song> {
    return of(SONGS.find(song => song.id === id));
  }

  public getSongs(): Observable<Song[]> {
     return of(SONGS);
    // const SONG_GET = this.songUrl + '/get';
    // return this.http.get<Song[]>(this.songUrl);
  }

  // constructor(private http: HttpClient) {
  constructor() {
  }

}

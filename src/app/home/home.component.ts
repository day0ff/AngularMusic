import {Component, OnInit} from '@angular/core';
import {Song} from '../songs/song';
import {SongService} from '../service/song.service';
import {PassportService} from '../service/passport.service';
import {Passport} from '../passports/passport';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  songs: Song[] = [];
  passports: Passport[] = [];

  getSongs(): void {
    this.songService.getSongs().subscribe(songs => this.songs = songs.slice(1, 5));
  }

  getPassports(): void {
    this.passportService.getPassports().subscribe(passports => this.passports = passports.slice(5, 9));
  }

  constructor(private songService: SongService, private passportService: PassportService) {
  }

  ngOnInit() {
    this.getSongs();
    this.getPassports();
  }

}

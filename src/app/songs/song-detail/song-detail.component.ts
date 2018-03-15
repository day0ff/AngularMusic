import {Component, OnInit, Input} from '@angular/core';
import {Song} from '../song';
import {SongService} from '../../service/song.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {
  @Input() song: Song;

  deleteSong(): void {
    alert('Delete');
  }

  updateSong(): void {
    alert('Update');
  }

  saveSong(): void {
    alert('Save');
  }

  getSong(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== 'new') {
      this.songService.getSong(+id)
        .subscribe(song => this.song = song);
    } else {
      this.song = new Song('New Song');
    }
  }

  goBack(): void {
    this.location.back();
  }

  constructor(private route: ActivatedRoute,
              private songService: SongService,
              private location: Location) {
  }

  ngOnInit() {
    this.getSong();
  }

}

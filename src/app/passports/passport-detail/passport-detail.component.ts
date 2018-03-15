import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {Passport} from '../passport';
import {PassportService} from '../../service/passport.service';

@Component({
  selector: 'app-passport-detail',
  templateUrl: './passport-detail.component.html',
  styleUrls: ['./passport-detail.component.css']
})

export class PassportDetailComponent implements OnInit {
  @Input() passport: Passport;

  getPassport(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.passportService.getPassport(id)
      .subscribe(passport => this.passport = passport);
  }

  goBack(): void {
    this.location.back();
  }

  constructor(private route: ActivatedRoute,
              private passportService: PassportService,
              private location: Location) {
  }

  ngOnInit() {
    this.getPassport();
  }
}

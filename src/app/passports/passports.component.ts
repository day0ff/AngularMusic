import {Component, OnInit} from '@angular/core';
import {Passport} from './passport';
import {PassportService} from '../service/passport.service';

@Component({
  selector: 'app-passports',
  templateUrl: './passports.component.html',
  styleUrls: ['./passports.component.css']
})
export class PassportsComponent implements OnInit {
  passports: Passport[];


  getPassports(): void {
    this.passportService.getPassports()
      .subscribe(passports => {
        this.passports = passports;
        console.log(passports[0].passportNumber);
      });
  }

  constructor(private passportService: PassportService) {
  }


  ngOnInit() {
    this.getPassports();
  }

}

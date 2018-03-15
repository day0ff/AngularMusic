import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

import {Passport} from '../passports/passport';
import {PASSPORTS} from './PASSPORTS';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class PassportService {
  private passportUrl = 'http://localhost:8090/passport/get';

  public getPassport(id: number): Observable<Passport> {
    return of(PASSPORTS.find(passport => passport.passportId === id));
  }

  /*  public getPassports(): Observable<Passport[]> {
      return of(PASSPORTS);
    } */
  public getPassports(): Observable<Passport[]> {
    return this.http.get<Passport[]>(this.passportUrl);
  }

  constructor(private http: HttpClient) {
  }

}

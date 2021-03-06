import {Component, OnInit} from '@angular/core';
import {Person} from './person';
import {PersonService} from '../service/person.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  persons: Person[];

  getPersons(): void {
    this.personService.getPersons()
      .subscribe(persons => {
        this.persons = persons.sort((p1, p2) => p1.personId - p2.personId);
      });
  }

  constructor(private personService: PersonService) {
  }

  ngOnInit() {
    this.getPersons();
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css']
})
export class TextFieldComponent implements OnInit {

  @Input() date: Date;

  constructor() { }

  ngOnInit() {
  }

  formatDate() {
    return this.date && `${this.date.getDay()}/${this.date.getMonth()}/${this.date.getFullYear()}`;
  }

}

import { Component, OnInit } from '@angular/core';
import data from '../db.json';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-new-timesheet';

  jsonData = data.march;
  ngOnInit() {
    console.log("barbara ", this.jsonData)
  }
}

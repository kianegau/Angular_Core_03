import { Component, OnInit } from '@angular/core';
import { TableServiceService } from './table-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private tableService: TableServiceService) {}
  title = 'angular6-table-app';
  listDataApp;
  items = ['Id', 'First Name', 'Last Name', 'Email', 'Gender', 'Birthday', 'Salary', 'Phone'];
  ngOnInit(): void {
   this.listDataApp = this.tableService.listData;
  }
  checkItem(val) {
    if ( val === 'Id') {

  }
}
}


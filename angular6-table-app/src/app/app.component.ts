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
  selectedOrder = '';
  items = ['Id', 'First Name', 'Last Name', 'Email', 'Gender', 'Birthday', 'Salary', 'Phone'];
  ngOnInit(): void {
   this.listDataApp = this.tableService.listData;
  }
  getItem(name) {
  //  this.selectedOrder = name.target.value;
  //  console.log(this.selectedOrder);
  switch (name.target.value) {
    case 'Id': this.selectedOrder = 'id'; break;
    case 'First Name': this.selectedOrder = 'firstName'; break;
    case 'Last Name': this.selectedOrder = 'lastName'; break;
    case 'Email': this.selectedOrder = 'email'; break;
    case 'Gender': this.selectedOrder = 'gender'; break;
    case 'Birthday': this.selectedOrder = 'birthday'; break;
    case 'Salary': this.selectedOrder = 'Salary'; break;
    case 'Phone': this.selectedOrder = 'phone'; break;
    default: this.selectedOrder = 'id';
  }
//   if (name === 'Id') {
//     this.selectedOrder = 'id';
//   } else if (name === 'First Name') {
// this.selectedOrder = 'firstName';
//   } else if (name === 'Last Name') {
//     this.selectedOrder = 'lastName';
//   } else if (name === 'Email') {
// this.selectedOrder = 'email';
//   } else if (name === 'Gender') {
//     this.selectedOrder = 'gender';
//   } else if (name === 'Birthday') {
// this.selectedOrder = 'birthday';
//   } else if (name === 'Salary') {
//     this.selectedOrder = 'salary';
//   } else if (name === 'Phone') {
// this.selectedOrder = 'phone';
//   }
  }
}



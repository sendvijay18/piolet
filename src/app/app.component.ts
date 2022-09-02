import { AgDateRendererComponent } from './ag-date-renderer.component';
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { NgDropDownComponent } from './ng-drop-down.component';
import { MyBtnComponent } from './my-btn.component';
import { MyCheckBoxComponent } from './my-check-box.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'piolet';
  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      sortable: true,
      filter: true,
    },
    { headerName: 'Title', field: 'title', editable: true },
    { headerName: 'Date', cellRendererFramework: AgDateRendererComponent, filter: 'agDateColumnFilter', field: 'date', editable: true},
    { headerName: 'Dropdown', cellRendererFramework: NgDropDownComponent, field: 'carType', editable: true },
    { headerName: 'Action', cellRendererFramework: MyBtnComponent, editable: true },
    { headerName: 'Subscribe', field: 'completed', cellRendererFramework: MyCheckBoxComponent, editable: true },
  ];

  public rowData = [
    {
      id: 1,
      title: 'wash the dishes',
      completed: true,
      carType: 'Saab',
      date: new Date("March 3, 1983 01:16:00"),
    },
    {
      id: 2,
      title: 'Clean the car',
      completed: false,
      carType: 'Volvo',
      date: new Date("August 23, 1983 01:15:00"),
    },
    {
      id: 3,
      title: 'complete the tutorial',
      completed: true,
      carType: 'Audi',
      date: new Date("July 21, 1983 01:15:00"),
    },
  ];

  // DefaultColDef sets props common to all Columns
  // public defaultColDef: ColDef = {
  //   sortable: true,
  //   filter: true
  // };

  // Data that gets displayed in the grid
  public rowData$!: Observable<any[]>;

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  // gridOptions = {
  //   animateRows: true,
  //   suppressRowClickSelection: true,
  //   rowSelection : "'multiple",
  //   enableSorting: true,
  //   enableCellChangeFlash: true,
  //   onGridReady: (params: { api: { sizeColumnsToFit: () => void; }; }) => {
  //     params.api.sizeColumnsToFit();
  //   }
  // };
  constructor(private http: HttpClient) {}
  

  // Example load data from sever
  onGridReady(params: GridReadyEvent) {
    // this.rowData$ = this.http.get<any[]>(
    //   'https://jsonplaceholder.typicode.com/todos'
    // );
    // this.rowData = [
    // ]
  }

  // Example of consuming Grid Event
  // onCellClicked(e: CellClickedEvent): void {
  //   console.log('cellClicked', e);
  // }

  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }
}

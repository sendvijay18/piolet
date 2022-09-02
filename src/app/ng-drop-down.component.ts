import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'ng-drop-down',
  template: `<select name="cars" id="cars" [(ngModel)]="params.value" (change)="this.refresh(this.params)">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </select>`,
  styleUrls: [],
})
export class NgDropDownComponent implements ICellRendererAngularComp {
  params: any;

  agInit(params: any): void {
    this.params = params;
  }

  refresh(params?: any): boolean {
    params.data.carType = params.value
    params.api.refreshCells(params);
    return true;
  }

  onClick($event: any) {
    if (this.params.onClick instanceof Function) {
      // put anything into params u want pass into parents component
      const params = {
        event: $event,
        rowData: this.params.node.data
        // ...something
      };
      this.params.onClick(params);
    }
  }

  onClickChange($event: any) {
    console.log($event)
  }
}

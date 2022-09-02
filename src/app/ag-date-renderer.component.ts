import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: `'app-ag-date-renderer'`,
  template: `<div class="row">
  <div class="col-xs-12 col-12 col-md-12 form-group mb-3">
    <input
      type="text"
      placeholder="Datepicker"
      class="form-control"
      bsDatepicker
      [(ngModel)]="params.value"
      (change)="this.refresh(this.params)"
      [bsConfig]="{ isAnimated: true,  dateInputFormat: 'MM/DD/YYYY'  }"
      [bsValue]="bsValue"
    />
  </div>
</div>`,
  styleUrls: []
})
export class AgDateRendererComponent implements OnInit, ICellRendererAngularComp {
  bsValue = new Date();
  params: any;
  constructor() { }

  ngOnInit(): void {
  }

  agInit(params: any) {
    this.params = params;
  }

  refresh(params: any) {
    params.data.date = params.value;
    params.api.refreshCells(params);
    return true;
  }

}

import { JsonPipe } from '@angular/common';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'my-btn',
  template: `<button
    type="button"
    (click)="this.getRowDate(this.params)"
    class="btn btn-primary"
  >
    Row Data
  </button>`,
  styles: [],
})
export class MyBtnComponent implements OnInit, ICellRendererAngularComp {
  params: any;
  ngOnInit(): void {}

  agInit(params: any) {
    this.params = params;
  }

  refresh(params: any) {
    // params.data.cbox = params.value
    // params.api.refreshCells(params);
    return true;
  }

  getRowDate(params: any) {
    console.info(params.data);
  }
}

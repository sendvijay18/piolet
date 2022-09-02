import { Component, OnInit } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';

@Component({
  selector: 'app-my-check-box',
  template: `<input type="checkbox" [(ngModel)]="params.value" (change)="this.refresh(this.params)">`,
  styleUrls: ['./my-check-box.component.scss']
})
export class MyCheckBoxComponent implements OnInit, AgRendererComponent {
  params: any;

  
  constructor() { }

  ngOnInit(): void {
  }

  agInit(params: any): void {
    this.params = params;
  }

  refresh(params: any): boolean {
    params.data.cbox = params.value
    params.api.refreshCells(params);
    return true;
  }


}

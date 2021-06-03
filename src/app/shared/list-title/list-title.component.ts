import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-title',
  templateUrl: './list-title.component.html',
  styleUrls: ['./list-title.component.scss']
})
export class ListTitleComponent implements OnInit {

  @Input() title: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}

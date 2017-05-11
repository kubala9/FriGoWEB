import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fg-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {
	title = 'Create component!';
	
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'fg-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.sass']
})
export class IdComponent implements OnInit {
  public id: string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(
      (params) => this.id = params['id']
    );
  }

  ngOnInit() {
  }

}

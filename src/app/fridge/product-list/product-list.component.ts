import { Component } from '@angular/core';

@Component({
  selector: 'fg-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})


export class ProductListComponent {

  rows = [
    { name: 'Wilcze mleko', gender: '12 ml' },
    { name: 'Pomidory', gender: '5 szt'},{ name: 'Krewetki', gender: '200g' },
    { name: 'Białe wino', gender: '100ml'},
    { name: 'I tak dalej', gender: '' },
    { name: 'I tak dalej', gender: '' }

    
  ];
  selected = [];

  constructor() {
    this.fetch((data) => {
      this.rows = data;
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }

  add() {
    this.selected.push(this.rows[1], this.rows[3]);
  }

  update() {
    this.selected = [ this.rows[1], this.rows[3] ];
  }

  remove() {
    this.selected = [];
  }

}

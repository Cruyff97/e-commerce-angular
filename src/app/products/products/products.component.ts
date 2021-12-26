import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  index!: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.index = params ['id'])
  }

}

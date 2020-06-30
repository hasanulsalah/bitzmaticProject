import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from './products.service';
import { ProductsResponseModel, ProductsModel } from './products.interface';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public page = 1;
  public query;
  public productResponse;
  public products;
  public displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'image',
    'price',
    'selling_unit'
  ];
  public apiSubscription: Subscription;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.query = new FormControl('');
    this.fetchProducts(this.page, this.query.value);
  }

  ngAfterViewInit() {
    this.products.paginator = this.paginator;
  }

  public fetchProducts(page: number, query: string) {
    this.apiSubscription = this.productsService
      .getProducts(page, query)
      .subscribe((response: ProductsResponseModel) => {
        this.productResponse = response;
        this.products = new MatTableDataSource<ProductsModel>(response.results);
      });
  }

  public applyFilter() {
    if (this.query.value === '') {
      return;
    } else {
      this.page = 1;
      this.fetchProducts(this.page, this.query.value);
    }
  }

  public getProducts(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.fetchProducts(this.page, this.query.value);
  }
}

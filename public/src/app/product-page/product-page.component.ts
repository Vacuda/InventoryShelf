import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../task.service';
// import { ProductPageComponent } from '../product-page.component';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

    // @Input()
    


    errors:any;
    create:any;
    edit:any;

    allproducts:any;

    constructor(private _httpService: TaskService) { }

    ngOnInit() {
        this.getProducts();
        this.create = false;
    }

    getProducts(){
        let observable = this._httpService.getProducts()
        observable.subscribe(data => {
            this.allproducts = data['results'];
        });
    }

    openAddProduct(){
        this.create = true;
    }

    closeAddProduct(){
        this.create = false;
    }


}

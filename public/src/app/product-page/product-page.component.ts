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
    delete:any;
    hideaddbutton:any;

    edit_product_id:any;
    delete_product_id:any;
    allproducts:any;

    constructor(private _httpService: TaskService) { }

    ngOnInit() {
        this.getProducts();
        this.create = false;
        this.edit = false;
        this.delete = false;
        this.hideaddbutton = false;
    }

    getProducts(){
        let observable = this._httpService.getProducts()
        observable.subscribe(data => {
            this.allproducts = data['results'];

            // for(let prod of this.allproducts){
        
            //     prod["units_sold"]=0;
            //     prod["income"]=0.00;

            // };
        });
    }

    openAddProduct(){
        this.create = true;
        this.hideaddbutton = true;
    }

    openEditProduct(id){
        this.closeWindow();
        this.edit = true;
        this.hideaddbutton = true;
        this.edit_product_id = id;
    }

    openDeleteProduct(id){
        this.closeWindow();
        this.delete = true;
        this.hideaddbutton = true;
        this.delete_product_id = id;
    }

    closeWindow(){
        this.create = false;
        this.edit = false;
        this.delete = false;
        this.hideaddbutton = false;
    }




}

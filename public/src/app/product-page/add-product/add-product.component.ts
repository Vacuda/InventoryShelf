import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../../task.service';
// import { ProductPageComponent } from '../product-page.component';
// import { EventEmitter } from 'protractor';


@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

    @Output() EventGetProducts = new EventEmitter();
    @Output() EventClose = new EventEmitter();

    createproduct:any;
    errors:any;

    constructor(private _httpService: TaskService) { }

    ngOnInit() {
        this.createproduct = {
            name: "",
            price: 0,
            boxcount: 0,
            imageurl: "",
        }
    }

    closeAddProduct(){
        this.EventClose.emit();
    }

    createProduct(){
        let observable = this._httpService.createProduct(this.createproduct)
        observable.subscribe(data => {
            if(data["results"]){
                
                this.EventGetProducts.emit();
                this.EventClose.emit();

                this.createproduct = {
                    name: "",
                    price: 0,
                    boxcount: 0,
                    imageurl: "",
                }
            }
            else if(data["errors"]){
                this.errors = [];
                for(let item in data["errors"]){
                    this.errors.push(data["errors"][item]);
                }
            }
        });       
    }

}

import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-inventory-page',
  templateUrl: './inventory-page.component.html',
  styleUrls: ['./inventory-page.component.css']
})
export class InventoryPageComponent implements OnInit {

    allproducts:any;

    constructor(private _httpService: TaskService) { }

    ngOnInit() {
        this.getProducts();
    }

        getProducts(){
        let observable = this._httpService.getProducts()
        observable.subscribe(data => {
            this.allproducts = data['results'];
        });
    }

}

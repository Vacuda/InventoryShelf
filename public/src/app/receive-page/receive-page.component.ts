import { Component, OnInit, SimpleChanges } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-receive-page',
  templateUrl: './receive-page.component.html',
  styleUrls: ['./receive-page.component.css']
})
export class ReceivePageComponent implements OnInit {

    errors:any;
    allproducts:any;
    receiveinv:any;

    constructor(private _httpService: TaskService) { }

    ngOnInit() {
        this.receiveinv = {
            invoice: "",
            delivery_date: Date,
            vendor: ""
        }
        this.getProducts();
    }

    // ngOnChanges(changes: SimpleChanges){
    //     console.log("hello")
    //     console.log(changes)
    //     for(let prod of this.allproducts){
    //         //changes total units
    //         this.receiveinv[prod._id]["total"] = 
    //         this.receiveinv[prod._id]["current"] * this.receiveinv[prod._id]["boxcount"];
    //     }
    // }

    getProducts(){
        let observable = this._httpService.getProducts()
        observable.subscribe(data => {
            this.allproducts = data['results'];
            for(let prod of this.allproducts){
                //set new key containing an object, key named for the prod._id
                this.receiveinv[prod._id]={};
                //set new properties for that new key
                this.receiveinv[prod._id]["current"] = 0;
                this.receiveinv[prod._id]["boxcount"] = prod.boxcount;
                this.receiveinv[prod._id]["total"] = 
                this.receiveinv[prod._id]["current"] * this.receiveinv[prod._id]["boxcount"];
            }
        });
    }



       
    

}

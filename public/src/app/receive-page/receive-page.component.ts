import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receive-page',
  templateUrl: './receive-page.component.html',
  styleUrls: ['./receive-page.component.css']
})
export class ReceivePageComponent implements OnInit, OnChanges {

    errors:any;
    // allproducts:any;
    receiveinv:any;
    receiveinvtrimmed:any;
    receivewindow:any;
    submittedwindow:any;

    constructor(
        private _httpService: TaskService,
        private _router: Router
    ){};

    ngOnInit() {
        this.receiveinv = {
            invoice: "",
            delivery_date: Date,
            vendor: "",
            products: []
        }
        this.receivewindow = true;
        this.submittedwindow = false;
        this.getProducts();
        // console.log(this.receiveinv);
    }

    ngOnChanges(changes: SimpleChanges){
        console.log("hello")
        console.log(changes)
        // for(let prod of this.allproducts){
        //     //changes total units
        //     this.receiveinv[prod._id]["total"] = 
        //     this.receiveinv[prod._id]["current"] * this.receiveinv[prod._id]["boxcount"];
        // }
    }

    getProducts(){
        let observable = this._httpService.getProducts()
        observable.subscribe(data => {
            var results = data['results'];
            for(let prod of results){
                let newobject = {
                    _id: prod._id,
                    name: prod.name,
                    boxcount: prod.boxcount,
                    inventory: prod.inventory,
                    added_boxes: 0,
                    get added_units(): Number { return this.added_boxes * this.boxcount}
                
                }
                this.receiveinv.products.push(newobject);
            }
            // console.log(this.receiveinv)
        });
    }

    reviewReceiveInventory(){

        //make trimmed list
        this.receiveinvtrimmed = {
            invoice: this.receiveinv.invoice,
            delivery_date: this.receiveinv.delivery_date,
            vendor: this.receiveinv.vendor,
            products: []
        }

        //push relevent products
        var arr = this.receiveinv.products;
        for(var i=0;i<arr.length;i++){
            if(arr[i].added_boxes != 0){
                //push to trimmed object
                this.receiveinvtrimmed.products.push(arr[i])
            }
        }

        // validations (incomplete) 
        if(
            this.receiveinv.vendor == ""
            ||
            this.receiveinv.invoice == ""
            ||
            this.receiveinv.delivery_date == "function Date() { [native code] }"
            ||
            this.receiveinvtrimmed.products.length == 0
            ){
                this.errors = [];
                if (this.receiveinv.vendor == ""){
                    this.errors.push("You must enter an vendor name");
                }
                if (this.receiveinv.invoice == ""){
                    this.errors.push("You must enter an invoice number");
                }
                if (this.receiveinv.delivery_date == "function Date() { [native code] }"){
                    this.errors.push("You must enter a valid delivery date");
                }
                if (this.receiveinvtrimmed.products.length == 0){
                    this.errors.push("Atleast one product needs to be inputted on this invoice");
                }
                return false;    
        }

        // swap windows
        this.receivewindow = false;
        this.submittedwindow = true;
          
    }

    closeReceiveWindow(){
        // swap windows
        this.receivewindow = true;
        this.submittedwindow = false;
    }

    saveReceiveInventory(){
        

        for(let prod of this.receiveinvtrimmed.products){
            //change inventory amount
            let newamount = prod.inventory + prod.added_units;

            //build update object
            let newobject = {
                inventory: newamount
            }

            //send in changes
            let observable = this._httpService.updateProduct(prod._id, newobject)
            observable.subscribe(data => {
                if(data["results"]){
                    this._router.navigate(['/inventory'])
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



       
    

}

import { Component, OnInit, SimpleChanges } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-receive-page',
  templateUrl: './receive-page.component.html',
  styleUrls: ['./receive-page.component.css']
})
export class ReceivePageComponent implements OnInit {

    errors:any;
    // allproducts:any;
    receiveinv:any;
    receivewindow:any;
    submittedwindow:any;

    constructor(private _httpService: TaskService) { }

    ngOnInit() {
        this.receiveinv = {
            invoice: "",
            delivery_date: Date,
            vendor: "",
            products: {}
        }
        this.receivewindow = true;
        this.submittedwindow = false;
        this.getProducts();
        console.log(this.receiveinv);
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
            var results = data['results'];
            for(let prod of results){
                //set new key containing an object, key named for the prod._id
                this.receiveinv["products"][prod._id]={};
                //set new properties for that new key
                this.receiveinv["products"][prod._id]["name"] = prod.name;
                this.receiveinv["products"][prod._id]["current"] = 0;
                this.receiveinv["products"][prod._id]["boxcount"] = prod.boxcount;
                this.receiveinv["products"][prod._id]["total"] = 
                this.receiveinv["products"][prod._id]["current"] * this.receiveinv["products"][prod._id]["boxcount"];
            }
            console.log(this.receiveinv)
        });
    }

    receiveInventory(){
        console.log(this.receiveinv)
        this.receivewindow = false;
        this.submittedwindow = true;

        for(let prod of this.receiveinv.products | keyvalue){
                console.log(prod)
            if(prod.count==0){
                delete this.receiveinv.prod;
            }
        }
        
        // let observable = this._httpService.updateTask(id, this.updatetask)
        // observable.subscribe(data => {
        //     if(data["results"]){
        //         this.createtask = {
        //         title: "",
        //         description: ""
        //         }
        //         this.getOneTask(id);
        //         this.updatetask = null;
        //     }
        //     else if(data["errors"]){
        //         this.errors = [];
        //         for(let item in data["errors"]){
        //             this.errors.push(data["errors"][item]);
        //         }
        //     }
            
        // });
    }

    closeReceivedWindow(){
        this.receiveinv = {
            invoice: "",
            delivery_date: Date,
            vendor: "",
            products: {}
        }
        this.receivewindow = true;
        this.submittedwindow = false;
        this.getProducts();
    }



       
    

}

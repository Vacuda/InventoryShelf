import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-pos-page',
  templateUrl: './pos-page.component.html',
  styleUrls: ['./pos-page.component.css']
})
export class PosPageComponent implements OnInit {

    keymap:any;
    order:any;
    total:any;

    constructor(private _httpService: TaskService) { }

    ngOnInit() {
        this.loadKeymap();
        this.order = [];
        this.total = 0;
        // this.total = +(this.total.toFixed(2));
        this.total = +(Number(this.total).toFixed(2));
    }

    loadKeymap(){
        let observable = this._httpService.getOneKeymap()
        observable.subscribe(data => {
            if(data["results"]==null){
                this.createKeymap();
            }
            else if(data["results"]){
                this.keymap = data["results"];
            }
            else if(data["errors"]){
                console.log("print error")
                console.log(data["errors"])
            }
        });
    }

    createKeymap(){
        let observable = this._httpService.createKeymap();
        observable.subscribe(data => {
            if(data["results"]){
                this.keymap = data["results"]
            }
            else if(data["errors"]){
                console.log("print error")
                console.log(data["errors"])
            }
        });       
    }

    clearOrder(){
        console.log("did it?")
        this.total = 0.00;
        this.total.toFixed(2);
        this.order = [];
    }

    addToOrder(target){
        this.total += target.price
        // this.total = +(this.total.toFixed(2));
        this.total = +(Number(this.total).toFixed(2));
        this.order.push(target);
    }

}

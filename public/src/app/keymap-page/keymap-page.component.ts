import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-keymap-page',
  templateUrl: './keymap-page.component.html',
  styleUrls: ['./keymap-page.component.css']
})
export class KeymapPageComponent implements OnInit {

    keymap:any;
    errors:any;
    allproducts:any;
    envy:any;

    constructor(private _httpService: TaskService) { }

    ngOnInit() {
        this.getOneKeymap()
        this.getProducts();
    }

    getOneKeymap(){
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
                this.errors = [];
                for(let item in data["errors"]){
                    this.errors.push(data["errors"][item]);
                }
            }
        });       
    }

    getProducts(){
        let observable = this._httpService.getProducts()
        observable.subscribe(data => {
            this.allproducts = data['results'];
        });
    }

    updateKeymap(){
        
        var id = this.keymap._id
        let observable = this._httpService.updateKeymap(id, this.keymap)
        observable.subscribe(data => {
            if(data["results"]){
                
            }
            else if(data["errors"]){
                this.errors = [];
                for(let item in data["errors"]){
                    this.errors.push(data["errors"][item]);
                }
            }
            
        });
    }

    onSelectChange(name, box){
        var prod:any;

        let observable = this._httpService.getOneProductByName(name)
        observable.subscribe(data => {
            prod = data['results'];
            box.name = prod.name;
            box.price = prod.price;
            box.imageurl = prod.imageurl;
        });
        

      

    }

}

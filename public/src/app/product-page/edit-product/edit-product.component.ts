import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

    @Output() EventGetProducts = new EventEmitter();
    @Output() EventClose = new EventEmitter();
    @Input() prod_id:any;

    updateproduct:any;
    errors:any;

    constructor(private _httpService: TaskService) { }

    ngOnInit() {
        this.getOneProduct(this.prod_id);
    }

    ngOnChanges(){
        //for pressing edit button with an edit window already up
        this.getOneProduct(this.prod_id);
    }

    getOneProduct(id:number){

        let observable = this._httpService.getOneProduct(id)
        observable.subscribe(data => {
            this.updateproduct = data['results'];
        });
    }

    closeEditProduct(){
        this.EventClose.emit();
    }

    updateProduct(){
        var id = this.updateproduct._id
        let observable = this._httpService.updateProduct(id, this.updateproduct)
        observable.subscribe(data => {
            if(data["results"]){
                this.EventGetProducts.emit();
                this.EventClose.emit();
                this.updateproduct = {
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

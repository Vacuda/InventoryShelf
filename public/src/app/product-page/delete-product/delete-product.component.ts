import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

    @Output() EventGetProducts = new EventEmitter();
    @Output() EventClose = new EventEmitter();
    @Input() prod_id:any;
    deleteproduct:any;

    constructor(private _httpService: TaskService) { }

    ngOnInit() {
        this.getOneProduct(this.prod_id);
    }

    getOneProduct(id:number){
        let observable = this._httpService.getOneProduct(id)
        observable.subscribe(data => {
            this.deleteproduct = data['results'];
        });
    }

    closeDeleteProduct(){
        console.log("tests close")
        this.prod_id = null;
        this.EventClose.emit();
        this.EventGetProducts.emit();
    }

    deleteProduct(){
        var id = this.prod_id;
        let observable = this._httpService.deleteProduct(id)
        observable.subscribe(data => {
            this.closeDeleteProduct();
        });
    }

}

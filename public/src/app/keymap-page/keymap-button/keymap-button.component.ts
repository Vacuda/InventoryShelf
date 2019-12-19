import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-keymap-button',
  templateUrl: './keymap-button.component.html',
  styleUrls: ['./keymap-button.component.css']
})
export class KeymapButtonComponent implements OnInit {

    @Input() grid;

    constructor() { }

    ngOnInit() {
    }

}

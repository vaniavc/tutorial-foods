import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Food } from '../food';
import { FOODS } from '../mock-foods';

@Component({
    selector: 'app-food-detail',
    templateUrl: './food-detail.component.html',
    styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit {
    // foods = FOODS;
    @Output() selectFood = new EventEmitter();
    @Input() food: Food;

    constructor() { }

    ngOnInit() {
    }

}

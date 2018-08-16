import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FoodsComponent } from './foods/foods.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        FoodsComponent,
        FoodDetailComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

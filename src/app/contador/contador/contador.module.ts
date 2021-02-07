import { from } from "rxjs";
//import { CommonModule } from '@angular/core';
import { ContadorComponent } from "./contador.component";
import { NgModule } from '@angular/core';


@NgModule({
    declarations:[
        ContadorComponent
    ],
    exports:[
        ContadorComponent
    ],
    imports:[
        //CommonModule
    ]
})

export class contadorModule{

}
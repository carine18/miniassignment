import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from "@angular/material"

import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSliderModule} from '@angular/material/slider';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';

const MATERIAL = [MatInputModule, MatSelectModule, 
    MatCheckboxModule, MatToolbarModule, MatSliderModule, 
     MatFormFieldModule, MatButtonModule, MatIconModule, MatRadioModule ];
    //  FlexLayoutModule
    
@NgModule({
imports: MATERIAL,
exports: MATERIAL
})

export class MaterialModule { }
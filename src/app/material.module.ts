import { NgModule } from '@angular/core';
import {MatBadgeModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
@NgModule({
    imports: [MatBadgeModule, MatButtonModule, MatMenuModule],
    exports: [MatBadgeModule, MatButtonModule, MatMenuModule]
})
export class MaterialModule { }
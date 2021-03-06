import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Arm3Component } from './junctions/arm-3/arm-3.component';
import { ArmService } from './service/arm.service';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    Arm3Component,
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [
    ArmService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

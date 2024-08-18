import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardtaskComponent } from '../cardtask/cardtask.component';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  declarations: [
    HomeComponent,
    CardtaskComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule  
  ],
  providers: [],
  bootstrap: [],
  exports: [
    HomeComponent
  ],
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import {BrowserModule} from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './content/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  declarations: [RootComponent,
  HeaderComponent,
  ContentComponent,
  FooterComponent],
  bootstrap: [RootComponent]
})
export class AppModule { }
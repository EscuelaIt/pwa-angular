import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { ShellComponent } from './shell.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { HomeModule } from 'app/routes/home/home.module';
import { AboutModule } from 'app/routes/about/about.module';

@NgModule({
  imports: [
    AboutModule,
    CommonModule,
    HomeModule,
    LayoutRoutingModule
  ],
  declarations: [ShellComponent, TopBarComponent, MainContentComponent],
  exports: [ShellComponent]
})
export class LayoutModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FullBannerComponent } from './shared/full-banner/full-banner.component';
import { ListTitleComponent } from './shared/list-title/list-title.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TitleComponent } from './shared/title/title.component';
import { Title2Component } from './shared/title2/title2.component';
import { Title3Component } from './shared/title3/title3.component';
import { Title4Component } from './shared/title4/title4.component';
import { Title5Component } from './shared/title5/title5.component';

@NgModule({
  declarations: [ // Declarações de componentes
    AppComponent,
    NavBarComponent,
    FullBannerComponent,
    ListTitleComponent,
    FooterComponent,
    TitleComponent,
    Title2Component,
    Title3Component,
    Title4Component,
    Title5Component
  ],
  imports: [ // Importações de módulos
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

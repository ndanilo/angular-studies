import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {NgModule} from '@angular/core';
import { rootRouterConfig } from './app.routes';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { AppComponent } from './app.component';
import { MenuComponent } from './nav/menu/menu.component';
import { HomeComponent } from './nav/home/home.component';
import { FooterComponent } from './nav/footer/footer.component';
import { SobreComponent } from './institutional/sobre/sobre.component';
import { ContatoComponent } from './institutional/contato/contato.component';
import { TestBindComponent } from './institutional/test-bind/test-bind.component';
import { ProductService } from './products/product.service';
import { ListProductsComponent } from './products/list-products/list-products.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    TestBindComponent,
    ListProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false })]
  ],
  providers: [
    ProductService,
    {provide: APP_BASE_HREF, useValue: '/'}    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

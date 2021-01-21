import { Routes } from "@angular/router"
import { ContatoComponent } from "./institutional/contato/contato.component";
import { SobreComponent } from "./institutional/sobre/sobre.component";
import { TestBindComponent } from "./institutional/test-bind/test-bind.component";
import { HomeComponent } from "./nav/home/home.component"
import { ListProductsComponent } from './products/list-products/list-products.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'binding', component: TestBindComponent},
    { path: 'products', component: ListProductsComponent }
];
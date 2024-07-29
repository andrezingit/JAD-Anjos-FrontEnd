import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsComponent } from './components/products/products.component';
import { HelpComponent } from './components/help/help.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contato', component: ContactComponent},
    {path: 'produto', component: ProductsComponent},
    {path: 'home', component: HomeComponent},
    {path: 'ajuda', component: HelpComponent}
];

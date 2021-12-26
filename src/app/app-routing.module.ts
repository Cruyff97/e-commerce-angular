import { ProductsComponent } from './products/products/products.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
{path:'', component: HomeComponent},
{path:'cart', component: CartComponent},
{path:'admin', component: AdminComponent},
{path:'products/:id', component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

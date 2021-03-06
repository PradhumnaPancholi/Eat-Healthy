import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AdminAuthGuardService } from './admin-auth-guard.service'
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component'
import { AdminProductsComponent } from './admin/admin-products/admin-products.component'
import { ProductsFormComponent } from './admin/products-form/products-form.component'
import { AuthGuardService } from './auth-guard.service'
import { CheckOutComponent } from './check-out/check-out.component'
import { LoginComponent } from './login/login.component'
import { MyOrderComponent } from './my-order/my-order.component'
import { OrderSuccessComponent } from './order-success/order-success.component'
import { ProductsComponent } from './products/products.component'
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component'


const routes: Routes = [
  { path: '', component: ProductsComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'shopping-cart', component: ShoppingCartComponent},
  { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService]},
  { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuardService]},
  { path: 'my/orders', component: MyOrderComponent, canActivate: [AuthGuardService]},
  // admin routes//
  { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
  { path: 'admin/products/new', component: ProductsFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
  { path: 'admin/products/:id', component: ProductsFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
  { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuardService, AdminAuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

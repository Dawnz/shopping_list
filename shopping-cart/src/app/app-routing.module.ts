import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingAddItemComponent } from './components/shopping-add-item/shopping-add-item.component';
import { ShoppingDeleteItemComponent } from './components/shopping-delete-item/shopping-delete-item.component';
import { ShoppingShowAllItemsComponent } from './components/shopping-show-all-items/shopping-show-all-items.component';
import { ShoppingUpdateItemComponent } from './components/shopping-update-item/shopping-update-item.component';

const routes: Routes = [
  { path: '', redirectTo: 'all-items', pathMatch: 'full' },
  { path: 'all-items', component: ShoppingShowAllItemsComponent },
  { path: 'add-item', component: ShoppingAddItemComponent },
  { path: 'update-item/:id', component: ShoppingUpdateItemComponent },
  { path: 'delete-item/:id', component: ShoppingDeleteItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

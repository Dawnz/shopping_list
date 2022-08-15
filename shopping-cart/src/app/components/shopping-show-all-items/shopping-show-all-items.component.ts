import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Items } from 'src/app/model/Items';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-show-all-items',
  templateUrl: './shopping-show-all-items.component.html',
  styleUrls: ['./shopping-show-all-items.component.css'],
})
export class ShoppingShowAllItemsComponent implements OnInit {
  constructor(
    private shoppingService: ShoppingListService,
    private router: Router
  ) {}

  AllItems: Items[] = [];

  ngOnInit(): void {
    this.getAllItems();
  }
  getAllItems() {
    this.shoppingService.getAllItems().subscribe((results) => {
      this.AllItems = results.data;
    });
    console.log(this.AllItems.length);
  }
  deleteItem(id: string) {
    const confirmation = window.confirm(
      'Are you sure you want to delete this Item?'
    );
    if (confirmation) {
      this.shoppingService.deleteItem(id).subscribe((results) => {
        console.log(results);
        this.getAllItems();
      });
    }
  }
  updateItem(id: string) {
    // const id = this.router.s;
    this.router.navigate([`/update-item/${id}`]);
  }
  // updateItem(id: string, item: Items) {
  //   this.shoppingService.updateItem(id, item).subscribe((results) => {
  //     console.log(results);
  //   });
  // }
  addItem(item: Items) {
    this.shoppingService.createItem(item).subscribe((results) => {
      console.log(results);
    });
  }
}

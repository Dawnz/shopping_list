import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-add-item',
  templateUrl: './shopping-add-item.component.html',
  styleUrls: ['./shopping-add-item.component.css'],
})
export class ShoppingAddItemComponent implements OnInit {
  addList: any;
  constructor(
    private ShoppingListServiceService: ShoppingListService,
    private fb: FormBuilder,
    private routes: Router
  ) {
    this.addList = fb.group({
      name: [''],
      category: [''],
      price: [],
      quantity: [],
    });
  }

  ngOnInit(): void {}
  onSubmit() {
    this.ShoppingListServiceService.createItem(this.addList.value).subscribe();
    alert('Added');
    this.routes.navigate(['/all-items']);
  }
}

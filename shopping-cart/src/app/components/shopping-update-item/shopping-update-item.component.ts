import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Items } from 'src/app/model/Items';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-update-item',
  templateUrl: './shopping-update-item.component.html',
  styleUrls: ['./shopping-update-item.component.css'],
})
export class ShoppingUpdateItemComponent implements OnInit {
  updateList: any;
  item!: Items;
  constructor(
    private ShoppingListServiceService: ShoppingListService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.updateList = fb.group({
      name: [''],
      category: [''],
      price: [],
      quantity: [],
    });
  }

  ngOnInit(): void {}

  onUpdate() {
    console.log(this.updateList.value);

    const id = this.route.snapshot.params['id'];
    this.ShoppingListServiceService.updateItem(
      id,
      this.updateList.value
    ).subscribe();
    alert('Updated');
    this.router.navigate(['/all-items']);
  }
}

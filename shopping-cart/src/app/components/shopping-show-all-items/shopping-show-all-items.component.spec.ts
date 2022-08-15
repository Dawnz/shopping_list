import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingShowAllItemsComponent } from './shopping-show-all-items.component';

describe('ShoppingShowAllItemsComponent', () => {
  let component: ShoppingShowAllItemsComponent;
  let fixture: ComponentFixture<ShoppingShowAllItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingShowAllItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingShowAllItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

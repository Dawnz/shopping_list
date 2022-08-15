import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingUpdateItemComponent } from './shopping-update-item.component';

describe('ShoppingUpdateItemComponent', () => {
  let component: ShoppingUpdateItemComponent;
  let fixture: ComponentFixture<ShoppingUpdateItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingUpdateItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingUpdateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

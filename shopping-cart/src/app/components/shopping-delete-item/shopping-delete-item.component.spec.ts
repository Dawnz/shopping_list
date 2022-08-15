import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingDeleteItemComponent } from './shopping-delete-item.component';

describe('ShoppingDeleteItemComponent', () => {
  let component: ShoppingDeleteItemComponent;
  let fixture: ComponentFixture<ShoppingDeleteItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingDeleteItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingDeleteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

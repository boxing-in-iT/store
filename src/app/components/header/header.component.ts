import { Component, Input } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule } from "@angular/material/badge";
import { MatMenuModule } from "@angular/material/menu";
import { CurrencyPipe } from "@angular/common";
import { Cart, CartItem } from "../../models/cart.model";
import { CommonModule } from "@angular/common";
import { CartService } from "../../services/cart.service";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    CurrencyPipe,
    CommonModule,
    RouterModule,
  ],
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  private _cart: Cart = { items: [] };
  itemsQuantity = 0;

  @Input()
  get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;

    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }

  constructor(private _cartService: CartService) {}

  getTotal(items: Array<CartItem>): number {
    return this._cartService.getTotal(items);
  }

  onClearCart() {
    this._cartService.clearCart();
  }
}

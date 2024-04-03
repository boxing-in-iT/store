import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { CurrencyPipe } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";
import { Product } from "../../../../models/product.model";

@Component({
  selector: "app-product-box",
  standalone: true,
  imports: [MatCardModule, CurrencyPipe, MatIconModule, CommonModule],
  templateUrl: "./product-box.component.html",
  styles: ``,
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;
  product: Product | undefined = {
    id: 1,
    title: "snickers",
    price: 1500,
    category: "shoes",
    description: "sfdsfdknl;fnsfdsfsdsdf",
    image: "https://via.placeholder.com/150",
  };
  @Output() addToCart = new EventEmitter();

  onAddToCart(): void {
    console.log("HELLO");
    this.addToCart.emit(this.product);
  }
}

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
  @Input() product: Product | undefined;

  @Output() addToCart = new EventEmitter();

  onAddToCart(): void {
    console.log("HELLO");
    this.addToCart.emit(this.product);
  }
}

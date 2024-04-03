import { Component, EventEmitter, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list";

@Component({
  selector: "app-filters",
  standalone: true,
  imports: [MatExpansionModule, MatListModule, CommonModule],
  templateUrl: "./filters.component.html",
  styles: ``,
})
export class FiltersComponent {
  @Output() showCategory = new EventEmitter<string>();
  categories = ["shoes", "sports"];

  onShowCategory(category: string): void {
    this.showCategory.next(category);
  }
}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomerPanelComponent } from "./customer-panel.component";
import { CustomerListComponent } from "./customer-list/customer-list.component";

@NgModule({
  declarations: [CustomerPanelComponent, CustomerListComponent],
  imports: [CommonModule],
})
export class CustomerPanelModule {}

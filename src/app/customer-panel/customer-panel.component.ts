import { CustomerService } from "./customer.service";
import { Component, OnInit } from "@angular/core";
import { Customer } from "./customer";

@Component({
  selector: "app-customer-panel",
  templateUrl: "./customer-panel.component.html",
  styleUrls: ["./customer-panel.component.scss"],
})
export class CustomerPanelComponent implements OnInit {
  customersArray;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((customer: Customer[]) => {
      this.customersArray = customer;
    });
  }
}

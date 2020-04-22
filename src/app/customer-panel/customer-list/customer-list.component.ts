import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-customer-list",
  templateUrl: "./customer-list.component.html",
  styleUrls: ["./customer-list.component.scss"],
})
export class CustomerListComponent implements OnInit {
  @Input() customerName: string;
  @Input() email: string;
  @Input() cpf: string;
  @Input() number: string;
  @Input() status: string;
  constructor() {}

  ngOnInit(): void {}
}

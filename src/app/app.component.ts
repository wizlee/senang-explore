import { Component } from '@angular/core';
import {
  TestingAPINewService,
  TestingAPIRenewalService,
  TestingAPIUpdateService,
} from "senang-swagger-client";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: [],
  providers: [
    TestingAPINewService,
    TestingAPIRenewalService,
    TestingAPIUpdateService,
  ],
})
export class AppComponent {
  constructor(
    private newAPIService: TestingAPINewService,
    private renewalAPIService: TestingAPIRenewalService,
    private updateAPIService: TestingAPIUpdateService
  ) {
    this.newAPIService.defaultHeaders =
      this.newAPIService.defaultHeaders.set(
        "Access-Control-Allow-Origin",
        "*"
      );
    this.renewalAPIService.defaultHeaders =
      this.renewalAPIService.defaultHeaders.set(
        "Access-Control-Allow-Origin",
        "*"
      );
    this.updateAPIService.defaultHeaders =
      this.updateAPIService.defaultHeaders.set(
        "Access-Control-Allow-Origin",
        "*"
      );
  }

  updatePolicy() {
    const responce = this.updateAPIService.addInsurance("2021092638622", "New address");
    responce.subscribe({
      next(body) {
        console.log(body);
      },
      complete() {
        console.log("Finished sequence");
      },
    });
  }
}



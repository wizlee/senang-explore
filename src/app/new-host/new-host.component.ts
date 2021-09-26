import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  TestingAPINewService,
  TestingAPIRenewalService,
  TestingAPIUpdateService,
} from "senang-swagger-client";

@Component({
  selector: "app-new-host",
  templateUrl: "./new-host.component.html",
  styleUrls: ["./new-host.component.css"],
  providers: [
    TestingAPINewService,
    TestingAPIRenewalService,
    TestingAPIUpdateService,
  ],
})
export class NewHostComponent implements OnInit {
  constructor(
    private newAPIService: TestingAPINewService,
    private renewalAPIService: TestingAPIRenewalService,
    private updateAPIService: TestingAPIUpdateService
  ) {
    this.newAPIService.defaultHeaders = this.newAPIService.defaultHeaders.set(
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

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    const name: string = f.value.name
    const email: string = f.value.email
    const address: string = f.value.address
    const postcode: number = f.value.postcode
    const ic: number = f.value.ic
    const dob: string = f.value.dob
    const riskefdate: string = f.value.riskefdate;
    const plan: string = f.value.plan
    const bname: string = f.value.bname
    const brelationship: string = f.value.brelationship

    this.newAPIService
      .addInsurance(
        name,
        dob,
        address,
        postcode,
        email,
        riskefdate,
        plan,
        ic,
        undefined,
        bname,
        brelationship
      )
      .subscribe({
        next(body) {
          console.log(body);
        },
        complete() {
          console.log("Finished sequence");
        },
        error(e) {
          console.error(e);
        },
      });

  }

  updatePolicy() {
    const responce = this.updateAPIService.addInsurance(
      "2021092638622",
      "New address"
    );
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

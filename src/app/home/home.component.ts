import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { HomeService } from './home.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public selected = '+91';
  public phoneNumber;

  private otpSubscription: Subscription;

  constructor(private homeService: HomeService, private route: Router) {}

  ngOnInit(): void {
    this.phoneNumber = new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ]);
  }

  public submitNumber(): void {
    if (this.phoneNumber.valid) {
      let phone = '+91' + this.phoneNumber.value;
      this.otpSubscription = this.homeService
        .sendPhoneNumber(phone)
        .subscribe(response => {
          this.route.navigate(['/otp'], {
            state: { phone: phone }
          });
        });
    }
  }
}

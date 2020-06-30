import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  private otpSubscription: Subscription;
  public otp;
  constructor(private homeService: HomeService, private route: Router) {}

  ngOnInit(): void {
    this.otp = new FormControl('', [Validators.required]);
  }

  public submitOtp(): void {
    if (this.otp.valid) {
      let verifyModel = {
        password: this.otp.value,
        username: history.state.phone
      };
      this.otpSubscription = this.homeService
        .verifyOtp(verifyModel)
        .subscribe(response => {
          sessionStorage.setItem('token', response['access']);
          this.route.navigate(['products']);
        });
    }
  }
}

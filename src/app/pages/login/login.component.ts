import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/Services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService) {}

  googleLogin() {
    this.auth.GoogleAuth();
  }

  ngOnInit() {}

  anonymous
  (){
    this.auth.anonymousLogin();
  }
}

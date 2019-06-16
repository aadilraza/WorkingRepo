import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-login-register',
    templateUrl: './login-register.component.html',
    styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

    model: any = {};
    Registration: any = {};
    loading = false;
    error = '';
    Registration_Message = '';
    Registration_Error = '';
    rememberme = false;
    constructor(
        private router: Router,
        private httpClient: HttpClient,
        private userService: AuthenticationService) { }

    ngOnInit() {
        this.userService.logout();
    }

    login() {
        this.loading = true;
        
        this.userService.userAuthentication(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['/']);
                }
                else {
                    this.error = 'Username or Password is Incorrect.';
                    this.loading = false;
                    console.log(this.error);
                }
            },
                error => {
                    this.loading = false;
                    if (error.status === 401) {
                        this.error = 'Username or Password is Incorrect.';
                    }
                    else if (error.status === 403) {
                        this.error = 'User Already Logged-in.';
                    }
                    else {
                        this.error = 'Error Authenticating User.';
                    }
                });
    }

    Register() {
        this.UserRegistration(this.Registration.RegUserName, this.Registration.RegEmail, this.Registration.RegPassword, this.Registration.RegConfirmPassword)
            .subscribe((res)=> {
                if (res === true) {
                    this.Registration_Message = "You are Registered Successfully!";
                    this.clearTextBox_After_Regester();
                }
                else {

                }
            },
                error => {

                    if (error.status === 401) {

                    }
                    else if (error.status === 403) {
                    }

                    else if (error.status === 400) { //The request is invalid.
                        var e = JSON.parse(error._body);
                        var a = e.modelState;
                        if (a["userModel.Password"] != undefined) {
                            this.Registration_Error = a["userModel.Password"][0];
                        }
                        else if (a["userModel.ConfirmPassword"] != undefined) {
                            this.Registration_Error = a["userModel.ConfirmPassword"][0];
                        }
                        else if (a[""] != undefined) {
                            this.Registration_Error = a[""][0];
                        }

                    }
                    else {

                    }
                });
    }

    clearTextBox_After_Regester() {
        this.Registration.RegConfirmPassword = '';
        this.Registration.RegPassword = '';
        this.Registration.RegEmail = '';
        this.Registration.RegUserName = '';
    }

    public UserRegistration(userName, Email, Password, ConfirmPassword)
    {
        let headers = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
    
        let url = "http://localhost:50475/api/Account/Register";
        let body = JSON.stringify({ UserName: userName, Email: Email, Password: Password, ConfirmPassword: ConfirmPassword });
        return this.httpClient.post(url,body,headers);
    }
}

// UserRegistration(userName, Email, Password, ConfirmPassword) {
    //     let headers = new Headers({'Content-Type': 'application/json'});
    //     let options = new RequestOptions({ headers: headers });
    //     let url = "http://localhost:50475/api/Account/Register";
    //     let body = JSON.stringify({ UserName: userName, Email: Email, Password: Password, ConfirmPassword: ConfirmPassword });
    //     return this.httpClient.post(url, body, options).map(res => res.json())
    // }

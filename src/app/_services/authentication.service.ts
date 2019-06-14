import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }


    apiUrl = "http://localhost:50475/"; 
    login(_username: string, _password: string) {
         
        return this.http.post<any>(`${this.apiUrl}Login`, { username: _username, password: _password})
            .pipe(map(user => {
                debugger;
                    if (user) {           
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                return true;
            }));
    }

    logout() {
        localStorage.removeItem('currentUser');
    }

    userAuthentication(username:string,password:string) 
    {
        debugger;
        let headers = new Headers({ 'Content-Type':'application/x-www-form-urlencoded' });
        let url = this.apiUrl + "Login";
        let body = 'username='+ username+'&password='+password+'&grant_type=password'; 
        return this.http.post(url, body).pipe(map((response: Response) => {
            let user = response.json();
            debugger;
                if (user){
                    localStorage.setItem('currentUser', JSON.stringify(user.access_token));
                    return true;
               }
            return false;
        }));
    }
}
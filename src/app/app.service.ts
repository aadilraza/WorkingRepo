import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


export type InternalStateType = {
    [key: string]: any
};

@Injectable()
export class AppState {
    constructor(public http: HttpClient) {}
    url = "http://localhost:50475/api/";
    httpOptions = {
        headers: new HttpHeaders({
        'Content-Type': 'application/json' })
    };  
       
    Service(method: string,body:any) 
    {
        let url = "http://localhost:50475/api/" + method;
        this.http.post<any>(this.url + method, body, this.httpOptions)
        return this.http.post(url, body, this.httpOptions).pipe(
            retry(1),
            catchError(this.handleError)
            )
    } 
    
    handleError(error) {
        let errorMessage = '';
        if(error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
        } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
        }
}

    // Service(method: string,body:any) 
    // {
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     let options = new RequestOptions({ headers: headers });
    //     let url = "http://localhost:50475/api/" + method;
    //     return this.http.post(url, body, options).map(res => res.json())
    // } 

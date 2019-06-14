import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';


export type InternalStateType = {
    [key: string]: any
};

@Injectable()
export class AppState {
    constructor(public http: HttpClient) {}

    url = "http://localhost:50475/api/";
    // Service(method: string,body:any) 
    // {
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     let options = new RequestOptions({ headers: headers });
    //     let url = "http://localhost:50475/api/" + method;
    //     return this.http.post(url, body, options).map(res => res.json())
    // } 
}

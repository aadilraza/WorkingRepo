import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { UserModel } from '../Model/user-model';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  // Define API
  apiURL = 'http://localhost:50475/api/';
  constructor(private http: HttpClient) { }
  /*========================================
  CRUD Methods for consuming RESTful API
  =========================================*/
  // Http Options
  httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json'
  })
  }  
  // HttpClient API get() method => Fetch UserModels list
  getUserModels(): Observable<UserModel> {
  return this.http.get<UserModel>(this.apiURL + '/UserModels')
  .pipe(
  retry(1),
  catchError(this.handleError)
  )
  }
  // HttpClient API get() method => Fetch UserModel
  getUserModel(id): Observable<UserModel> {
  return this.http.get<UserModel>(this.apiURL + '/UserModels/' + id)
  .pipe(
  retry(1),
  catchError(this.handleError)
  )
  }  
  // HttpClient API post() method => Create UserModel
  createUserModel(UserModel): Observable<UserModel> {
  return this.http.post<UserModel>(this.apiURL + '/UserModels', JSON.stringify(UserModel), this.httpOptions)
  .pipe(
  retry(1),
  catchError(this.handleError)
  )
  }  
  // HttpClient API put() method => Update UserModel
  updateUserModel(id, UserModel): Observable<UserModel> {
  return this.http.put<UserModel>(this.apiURL + '/UserModels/' + id, JSON.stringify(UserModel), this.httpOptions)
  .pipe(
  retry(1),
  catchError(this.handleError)
  )
  }
  // HttpClient API delete() method => Delete UserModel
  deleteUserModel(id){
  return this.http.delete<UserModel>(this.apiURL + '/UserModels/' + id, this.httpOptions)
  .pipe(
  retry(1),
  catchError(this.handleError)
  )
  }
  // Error handling 
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

  //Refrence 
  //https://www.positronx.io/angular-7-httpclient-http-service/

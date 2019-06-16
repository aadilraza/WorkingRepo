import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core'

@Injectable()
export class XTestService {


    private todo = new BehaviorSubject<string>("");
    currentUser = this.todo.asObservable();

 
    constructor() {}

    SetFunction(t: string){
        this.todo.next(t)
    }
}
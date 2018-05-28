import {Injectable, Output, EventEmitter} from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApexService {

     sessionUserEvent: EventEmitter<any>  = new EventEmitter( );
 

    constructor(){

    }
    sessionUserEmit (sessionUser: any) {
        this.sessionUserEvent.emit(sessionUser);
    }
 
 
}
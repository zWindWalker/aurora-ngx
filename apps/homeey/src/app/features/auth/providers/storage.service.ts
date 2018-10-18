import {Injectable} from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class StorageService {

    getToken = (): string => {
        return window.localStorage['token'];
    }

    saveToken = (token: string) => {
        window.localStorage['token'] = token;
    }

    destroyToken = () => {
        window.localStorage.removeItem('token');
    }

}
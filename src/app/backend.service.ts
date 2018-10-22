import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  data: any;

  constructor(private http : HttpClient) { }

  postData(user: User){
    const body = {username: user.username, password: user.password};
    return this.http.post('https://jsonplaceholder.typicode.com/posts', body); 
}
}

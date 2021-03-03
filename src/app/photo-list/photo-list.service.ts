import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoListService {

  constructor(private http: HttpClient) { }

  getPhotoList() {
    return this.http.get(`https://jsonplaceholder.typicode.com/photos`)
  }
}

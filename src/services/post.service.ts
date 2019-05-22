import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

 public getPostData(){
    return this.http.get('assets/mocks/postMock.json');
  }

  public getSelectedSectionPosts(){
    return this.http.get('assets/mocks/postMock.json');
  }
}

import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  constructor(private http: HttpClient) {}

  createAndStorePost(postData: Post) {
    this.http
      .post<{ name: string }>(
        "https://ng-complete-guide-8888.firebaseio.com/posts.json",
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }
  fetchPosts() {
    this.http
      .get<{ [key: string]: Post }>(
        "https://ng-complete-guide-8888.firebaseio.com/posts.json"
      )
      .pipe(
        map(responseData => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      )
      .subscribe(posts => {});
  }
}

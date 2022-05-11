import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url = "https://mocki.io/v1/88c6e872-4fbb-4888-bfcd-cdd6bdce48fb" // This api is created using  https://mocki.io/fake-json-api using .json file data

  constructor( private  http : HttpClient) { }
  
  public getPosts():Observable<any>{
    return this.http.get(this.url);
  }
}

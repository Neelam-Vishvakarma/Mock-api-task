import { Component } from '@angular/core';
import { PostsService } from './posts.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any = [];
  title = 'mock_api_task';

  constructor(private postsData: PostsService) { }
  ngOnInit() {
    this.postsData.getPosts().subscribe((result) => {
      console.log(result, "result")
      this.data = result
    })
  }
}



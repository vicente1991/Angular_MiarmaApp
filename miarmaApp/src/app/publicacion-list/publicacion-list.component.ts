import { Component, OnInit } from '@angular/core';
import { PostResponse } from '../model/interfaces/publicacion.interface';
import { PostService } from '../service/publicacion.service';

@Component({
  selector: 'app-publicacion-list',
  templateUrl: './publicacion-list.component.html',
  styleUrls: ['./publicacion-list.component.css']
})
export class PublicacionListComponent implements OnInit {

  posts: PostResponse[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(results =>{
      this.posts = results;
      console.log(this.posts)
    })
  }

}

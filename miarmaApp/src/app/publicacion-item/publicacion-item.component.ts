import { Component, Input, OnInit } from '@angular/core';
import { PostResponse } from '../model/interfaces/publicacion.interface';
import { PostService } from '../service/publicacion.service';


@Component({
  selector: 'app-publicacion-item',
  templateUrl: './publicacion-item.component.html',
  styleUrls: ['./publicacion-item.component.css']
})
export class PublicacionItemComponent implements OnInit {


  @Input() publicacionInput!: PostResponse;

  postsList: PostResponse[] | undefined;

  constructor(private publicacionService: PostService) { }
  

  ngOnInit(): void {
  }

  getAvatar(avatar: string) {
    return `background-image: url('${avatar}'); background-size: cover;`
  }

  getAvatar2(post: PostResponse) {
    return `${post.file}`;
  }

  deletePost() {
    this.publicacionService.deletePost(this.publicacionInput.id).subscribe(res => {
      this.postsList = res;
      })
      alert("Se ha eliminado correctamente")
  };

}



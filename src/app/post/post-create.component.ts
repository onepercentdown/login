import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']

})
export class PostCreateComponent {
  numberOfLikes : number = 0;


  likeButtonClick() {
    this.numberOfLikes++;

  }

  dislikeButtonClick(){
    this.numberOfLikes--;

  }



}

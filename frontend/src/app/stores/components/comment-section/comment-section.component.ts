import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Comment } from '../../model/interfaces/comment';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {

  @Input()
  comments: Comment[];

  commentInput: FormControl = new FormControl('');

  p: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  addComment() {
    this.comments.push({author: 'Felipe Figueroa', description: this.commentInput.value});
    console.log(this.comments);
  }

}

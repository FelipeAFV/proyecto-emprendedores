import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../../model/interfaces/comment';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {

  @Input()
  comments: Comment[];

  p: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Comment } from '../../model/interfaces/comment';
import { StoreService } from '../../services/store/store.service';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {

  @Input()
  comments: Comment[];

  @Input()
  storeName: string;

  commentInput: FormControl = new FormControl('');

  p: number = 1;

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
  }

  addComment() {
    this.storeService.uploadComment(this.commentInput.value, this.storeName).subscribe(
      (data) => {
        this.comments.push(data);
        this.commentInput.setValue('');
        console.log(data);
      }
    );
    console.log(this.comments);
  }

}

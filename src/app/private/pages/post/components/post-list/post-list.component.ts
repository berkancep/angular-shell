import {Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {PostState} from "../../states/post.state";
import {Observable} from "rxjs";
import {Post} from "@shared/models";
import {GetAllPost} from "../../actions/post.action";

@Component({
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  @Select(PostState.getPosts)
  posts$: Observable<Post[]>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetAllPost());
  }
}

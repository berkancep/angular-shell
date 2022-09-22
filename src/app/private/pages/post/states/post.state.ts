import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Post } from "@shared/models";
import { AddPost, DeletePost, GetAllPost, GetPostById, UpdatePost } from "../actions";
import { PostService } from "@shared/services/module/post.service";
import { tap } from "rxjs";
import { Injectable } from "@angular/core";

export interface PostStateModel {
  posts: Post[];
  post: Post;
}

@State<PostStateModel>({
  name: 'posts',
  defaults: {
    posts: [],
    post: {} as Post
  }
})
@Injectable()
export class PostState {
  constructor(private postService: PostService) {
  }

  @Selector()
  static getPosts({ posts }: PostStateModel): Post[] {
    return posts;
  }

  @Selector()
  static getPost({ post }: PostStateModel): Post {
    return post;
  }

  @Action(GetAllPost)
  getAllPost({ patchState }: StateContext<PostStateModel>) {
    return this.postService.getPosts().pipe(tap((posts: Post[]) => {
      patchState({
        posts
      });
    }))
  }

  @Action(GetPostById)
  getPostById({ patchState }: StateContext<PostStateModel>, { payload }: GetPostById) {
    return this.postService.getPostById(payload).pipe(tap((post: Post) => {
      patchState({
        post
      });
    }))
  }

  @Action(AddPost)
  addPost({ getState, patchState }: StateContext<PostStateModel>, { payload }: AddPost) {
    return this.postService.createPost(payload);
  }

  @Action(UpdatePost)
  updatePost({ getState, patchState }: StateContext<PostStateModel>, { payload }: UpdatePost) {
    return this.postService.updatePost(payload);
  }

  @Action(DeletePost)
  deletePost({ getState, patchState }: StateContext<PostStateModel>, { payload }: DeletePost) {
    return this.postService.deletePost(payload);
  }
}

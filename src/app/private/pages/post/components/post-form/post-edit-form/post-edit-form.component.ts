import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormType } from "@shared/enums";
import { Post } from "@shared/models";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { FormGroup } from "@angular/forms";
import { Select, Store } from "@ngxs/store";
import { PostState } from "../../../states/post.state";
import { GetPostById, UpdatePost } from "../../../actions/post.action";
import { CanComponentDeactivate } from "@shared/guards/leave-page.guard";
import { PostFormComponent } from "../post-form.component";

@Component({
  template: `
      <post-form [formType]="formTypeEnum.Edit" [post]="post$ | async" (formSubmit)="updatePost($event)"></post-form>`
})
export class PostEditFormComponent implements OnInit, OnDestroy, CanComponentDeactivate {
  @Select(PostState.getPost)
  post$: Observable<Post>;

  @ViewChild(PostFormComponent)
  private postFormComponent: PostFormComponent;

  private routingSubscription: Subscription;

  formTypeEnum = FormType;
  skipCanDeactivate = false;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private router: Router) {
  }

  ngOnInit(): void {
    this.subscribeToRoute();
  }

  ngOnDestroy(): void {
    this.routingSubscription?.unsubscribe();
  }

  get hasUnSavedChanges(): boolean {
    return this.postFormComponent.postForm.dirty;
  }

  updatePost(postForm: FormGroup): void {
    const request: Post = {
      ...postForm.getRawValue()
    };

    this.store.dispatch(new UpdatePost(request)).subscribe(() => {
      this.skipCanDeactivate = true;
      this.router.navigate(['post']);
    });
  }

  private getPost(postId: number): void {
    this.store.dispatch(new GetPostById(postId));
  }

  private subscribeToRoute(): void {
    this.routingSubscription = this.route.params.subscribe((params: any) => {
      if (params.id) {
        this.getPost(params.id);
      }
    });
  }
}

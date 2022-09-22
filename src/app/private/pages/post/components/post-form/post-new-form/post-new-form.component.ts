import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from "@ngxs/store";
import { AddPost } from "../../../actions/post.action";
import { Post } from "@shared/models";
import { Router } from "@angular/router";
import { FormType } from "@shared/enums";
import { CanComponentDeactivate } from "@shared/guards";
import { PostFormComponent } from "../post-form.component";

@Component({
  template: `
      <post-form [formType]="formType.New" (formSubmit)="createPost($event)"></post-form>`
})
export class PostNewFormComponent implements CanComponentDeactivate {
  formType = FormType;
  skipCanDeactivate = false;

  @ViewChild(PostFormComponent)
  private postFormComponent: PostFormComponent;

  constructor(
    private store: Store,
    private router: Router
  ) {
  }

  get hasUnSavedChanges(): boolean {
    return this.postFormComponent.postForm.dirty;
  }

  createPost(postForm: FormGroup): void {
    const request: Post = {
      ...postForm.getRawValue()
    }

    this.store.dispatch(new AddPost(request)).subscribe(() => {
      this.skipCanDeactivate = true;
      this.router.navigate(['post']);
    });
  }
}

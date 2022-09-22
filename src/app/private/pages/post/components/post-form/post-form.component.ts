import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Post } from "@shared/models";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { INVALID_ERROR_MESSAGE } from "@shared/constants/constants";
import { FormType } from "@shared/enums";

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnChanges {
  @Input() formType: FormType;
  @Input() post: Post;
  @Output() formSubmit = new EventEmitter<FormGroup>();

  postForm: FormGroup;
  formTypeEnum = FormType;

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['post'] && this.post) {
      this.initializeFormData(this.post);
    }
  }

  onFormSubmit(): void {
    if (this.postForm.invalid) {
      console.log(INVALID_ERROR_MESSAGE);
    } else {
      this.formSubmit.emit(this.postForm);
    }
  }

  private initializeFormData(post: Post): void {
    this.postForm.patchValue({
      id: post.id,
      title: post.title,
      body: post.body,
      userId: post.userId
    });
  }

  private buildForm(): void {
    this.postForm = this.fb.group({
      id: null,
      userId: { value: 1, disabled: true },
      title: [null, Validators.required],
      body: [null, Validators.required],
      star: null
    });
  }
}

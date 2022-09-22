import {Post} from "@shared/models";

export class GetAllPost {
  static readonly type = '[Post] GetAll';
}

export class GetPostById {
  static readonly type = '[Post] GetById';

  constructor(public payload: number) {
  }
}

export class AddPost {
  static readonly type = '[Post] Add';

  constructor(public payload: Post) {
  }
}

export class UpdatePost {
  static readonly type = '[Post] Update';

  constructor(public payload: Post) {
  }
}

export class DeletePost {
  static readonly type = '[Post] Delete';

  constructor(public payload: number) {
  }
}

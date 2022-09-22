export class Confirm {
  static readonly type = '[Dialog] Confirm';

  constructor(public payload?: string) {
  }
}

export class Alert {
  static readonly type = '[Dialog] Alert';

  constructor(public payload: string) {
  }
}

export class Prompt {
  static readonly type = '[Dialog] Prompt';

  constructor(public payload: string) {
  }
}


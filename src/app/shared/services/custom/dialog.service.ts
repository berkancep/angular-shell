import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

@Injectable()
export class DialogService {
  alert(message: string): void {
    alert(message);
  }

  confirm(message: string): Observable<boolean> {
    return of(confirm(message));
  }

  prompt(question: string): Observable<string> {
    return of(prompt(question));
  }
}

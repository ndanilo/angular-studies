import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  ngOnInit(): void {

    var observer = {
      next: successObj => console.log('from observer: ' + successObj),
      error: errorObj => console.log('from observer: ' + errorObj) 
    }
    /*
    console.log('starting method ...');
    this.createObservable('my first subscriber event')
    .subscribe(success => console.log(success),
    error => console.log(error));*/

    this.createObservable('my first subscriber event')
      .subscribe(observer);
  }
  title = 'ObservablesPromises';

  private createObservable(text):Observable<string>{
    return new Observable<string>(
      observable => {
        observable.next(text);
        observable.next('executing next 1 from observable');
        observable.next('executing next 2 from observable');
        observable.next('executing next 3 from observable');
        observable.next('executing next 4 from observable');
        observable.error('forcing a error at observable');
      }
    );
  }
}

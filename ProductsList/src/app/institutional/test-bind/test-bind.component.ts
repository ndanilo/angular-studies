import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-bind',
  templateUrl: './test-bind.component.html',
  styles: [
  ]
})
export class TestBindComponent implements OnInit {

  public contador: number = 0;
  public name: string = 'zzzzzz';

  constructor() { }

  ngOnInit(): void {
  }

  public changeContador()
  {
    this.contador++;
  }

  public zerarContador()
  {
    this.contador = 0;
  }

}

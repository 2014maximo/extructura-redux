import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { appState } from './app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dato$ : Observable<any>;

  constructor(private store: Store<appState> ){
      this.dato$ = store.select('texto'); // selecciona la propiedad del cuerpo de la interface del appReducer
  }

  spanishMensaje(){
    this.store.dispatch({ type: "SPANISH"});
  }
  englishMensaje(){
    this.store.dispatch({ type: "ENGLISH"});
  }
}

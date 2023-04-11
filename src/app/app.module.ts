import {isDevMode, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule} from '@ngrx/store';
import { counterReducer } from './features/counter/counter.reducer';
import { MyCounterComponent } from './features/counter/my-counter/my-counter.component';
import { BookListComponent } from './features/books/book-list/book-list.component';
import {booksReducer} from './features/books/state/books.reducer';
import {collectionReducer} from './features/books/state/collection.reducer';
import { MyBookCollectionComponent } from './features/books/my-book-collection/my-book-collection.component';
import {GoogleBooksService} from './features/books/services/http-books.service';
import {HttpClientModule} from '@angular/common/http';
import { LoginPageComponent } from './features/auth/login-page/login-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {loginReducer} from './features/auth/state/auth.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    BookListComponent,
    MyBookCollectionComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      count: counterReducer,
      books: booksReducer,
      collection: collectionReducer,
      login: loginReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
    AppRoutingModule
  ],
  providers: [GoogleBooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }

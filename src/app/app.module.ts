import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    BookListComponent,
    MyBookCollectionComponent
  ],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    StoreModule.forRoot({
      count: counterReducer,
      books: booksReducer,
      collection: collectionReducer
    }),
    AppRoutingModule
  ],
  providers: [GoogleBooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }

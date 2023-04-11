import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from '../../data-models/book.model';

@Component({
  selector: 'app-book-collection',
  templateUrl: './my-book-collection.component.html',
  styleUrls: ['./my-book-collection.component.scss']
})
export class MyBookCollectionComponent {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() remove = new EventEmitter<string>();

}

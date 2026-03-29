import { Component } from '@angular/core';
import { GetBook } from '../GetBook';
import { Bookservice } from '../bookservice';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-book',
  imports: [CommonModule],
  templateUrl: './book.html',
  styleUrl: './book.css',
})
export class Book {
  myLibrary$!: Observable<GetBook[]>;

  constructor(private bookService: Bookservice) {}
   ngOnInit(): void {
    this.myLibrary$ = this.bookService.getBooks();
  }
}

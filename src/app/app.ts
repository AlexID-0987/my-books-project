import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Book } from './book/book';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, Book],
  templateUrl: './app.html',
  styleUrls:[ './app.css']
})
export class App {
  protected readonly title = signal('my-books-project');
}

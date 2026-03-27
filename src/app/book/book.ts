import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-book',
  imports: [],
  templateUrl: './book.html',
  styleUrl: './book.css',
})
export class Book {
  users: any[] = [];

  constructor() {
    fetch('https://localhost:44333/Book')
      .then(response => response.json())
      .then(data => {
        this.users = data;
        console.log(this.users);
      })
      .catch(error => console.error('Error fetching users:', error));
  }
   
}

// view-books.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.scss']
})
export class ViewBooksComponent {
  books: any[] = [
    { isbn: '1234567890123', name: 'Book 1', author: 'Author 1', publication: 'Pub 1', quantity: 5, price: 20.50, branch: 'IT', details: 'Details 1' },
    { isbn: '2345678901234', name: 'Book 2', author: 'Author 2', publication: 'Pub 2', quantity: 3, price: 15.75, branch: 'Civil', details: 'Details 2' },
    { isbn: '1234567890123', name: 'Book 1', author: 'Author 1', publication: 'Pub 1', quantity: 5, price: 20.50, branch: 'IT', details: 'Details 1' },
    { isbn: '2345678901234', name: 'Book 2', author: 'Author 2', publication: 'Pub 2', quantity: 3, price: 15.75, branch: 'Civil', details: 'Details 2' },
    { isbn: '1234567890123', name: 'Book 1', author: 'Author 1', publication: 'Pub 1', quantity: 5, price: 20.50, branch: 'IT', details: 'Details 1' },
    { isbn: '2345678901234', name: 'Book 2', author: 'Author 2', publication: 'Pub 2', quantity: 3, price: 15.75, branch: 'Civil', details: 'Details 2' },
    { isbn: '1234567890123', name: 'Book 1', author: 'Author 1', publication: 'Pub 1', quantity: 5, price: 20.50, branch: 'IT', details: 'Details 1' },
    { isbn: '2345678901234', name: 'Book 2', author: 'Author 2', publication: 'Pub 2', quantity: 3, price: 15.75, branch: 'Civil', details: 'Details 2' },
    { isbn: '1234567890123', name: 'Book 1', author: 'Author 1', publication: 'Pub 1', quantity: 5, price: 20.50, branch: 'IT', details: 'Details 1' },
    { isbn: '2345678901234', name: 'Book 2', author: 'Author 2', publication: 'Pub 2', quantity: 3, price: 15.75, branch: 'Civil', details: 'Details 2' },
    { isbn: '1234567890123', name: 'Book 1', author: 'Author 1', publication: 'Pub 1', quantity: 5, price: 20.50, branch: 'IT', details: 'Details 1' },
    { isbn: '2345678901234', name: 'Book 2', author: 'Author 2', publication: 'Pub 2', quantity: 3, price: 15.75, branch: 'Civil', details: 'Details 2' },
    { isbn: '1234567890123', name: 'Book 1', author: 'Author 1', publication: 'Pub 1', quantity: 5, price: 20.50, branch: 'IT', details: 'Details 1' },
    { isbn: '2345678901234', name: 'Book 2', author: 'Author 2', publication: 'Pub 2', quantity: 3, price: 15.75, branch: 'Civil', details: 'Details 2' },
    // Add more book data here
  ];

  displayedColumns: string[] = ['isbn', 'name', 'author', 'publication', 'qty', 'price', 'branch', 'details'];
}

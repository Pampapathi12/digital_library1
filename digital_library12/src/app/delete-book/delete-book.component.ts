import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

interface Book {
  isbn: string;
  name: string;
  author: string;
  publication: string;
  qty: number;
  price: number;
  branch: string;
}

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.scss']
})
export class DeleteBookComponent implements OnInit {
  displayedColumns: string[] = ['isbn', 'name', 'author', 'publication', 'qty', 'price', 'branch', 'action'];
  dataSource = new MatTableDataSource<Book>([
    { isbn: '1234567890123', name: 'Book 1', author: 'Author 1', publication: 'Publication 1', qty: 5, price: 20, branch: 'IT' },
    { isbn: '1234567890124', name: 'Book 2', author: 'Author 2', publication: 'Publication 2', qty: 3, price: 25, branch: 'Civil' },
    { isbn: '1234567890123', name: 'Book 1', author: 'Author 1', publication: 'Publication 1', qty: 5, price: 20, branch: 'IT' },
    { isbn: '1234567890124', name: 'Book 2', author: 'Author 2', publication: 'Publication 2', qty: 3, price: 25, branch: 'Civil' },
    { isbn: '1234567890123', name: 'Book 1', author: 'Author 1', publication: 'Publication 1', qty: 5, price: 20, branch: 'IT' },
    { isbn: '1234567890124', name: 'Book 2', author: 'Author 2', publication: 'Publication 2', qty: 3, price: 25, branch: 'Civil' },
    { isbn: '1234567890123', name: 'Book 1', author: 'Author 1', publication: 'Publication 1', qty: 5, price: 20, branch: 'IT' },
    { isbn: '1234567890124', name: 'Book 2', author: 'Author 2', publication: 'Publication 2', qty: 3, price: 25, branch: 'Civil' },
    { isbn: '1234567890123', name: 'Book 1', author: 'Author 1', publication: 'Publication 1', qty: 5, price: 20, branch: 'IT' },
    { isbn: '1234567890124', name: 'Book 2', author: 'Author 2', publication: 'Publication 2', qty: 3, price: 25, branch: 'Civil' },
    { isbn: '1234567890123', name: 'Book 1', author: 'Author 1', publication: 'Publication 1', qty: 5, price: 20, branch: 'IT' },
    { isbn: '1234567890124', name: 'Book 2', author: 'Author 2', publication: 'Publication 2', qty: 3, price: 25, branch: 'Civil' },
    // Add more book objects as needed
  ]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  deleteBook(isbn: string) {
    this.dataSource.data = this.dataSource.data.filter(book => book.isbn !== isbn);
  }
}

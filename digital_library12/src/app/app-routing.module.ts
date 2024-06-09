import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddBookComponent } from './add-book/add-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { ViewBooksComponent } from './view-books/view-books.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { ReturnBookComponent } from './return-book/return-book.component';
import { ReportComponent } from './report/report.component';
import { LayoutComponent } from './layout/layout.component';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'main', component: LayoutComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'add-book', component: AddBookComponent },
      { path: 'delete-book', component: DeleteBookComponent },
      { path: 'view-books', component: ViewBooksComponent },
      { path: 'add-student', component: AddStudentComponent },
      { path: 'issue-book', component: IssueBookComponent },
      { path: 'return-book', component: ReturnBookComponent },
      { path: 'report', component: ReportComponent },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

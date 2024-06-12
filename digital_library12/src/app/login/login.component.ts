import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../language.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(formbuilder:FormBuilder,
    private router: Router,private translate: TranslateService,private languageService: LanguageService
    ){}



  Login() {
   
        this.router.navigateByUrl('/main/dashboard');
      
  }
  changeLanguage(event: any) {
    const language = event.target.value;
    this.languageService.setLanguage(language);
  }
  
}

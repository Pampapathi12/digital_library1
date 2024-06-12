import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  constructor(private translate: TranslateService) {}

  setLanguage(language: string) {
    console.log('Setting language:', language);
    this.translate.use(language).subscribe(
      () => console.log('Language set successfully.'),
      (error) => console.error('Error setting language:', error)
    );
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }
}

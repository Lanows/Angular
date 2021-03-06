import { Component } from '@angular/core';
import { delay } from 'rxjs/operators';
import { AccountService } from './services/account.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pitang DB';

  logged = false;
  collapsed = true;
  account: Account;

  constructor(private accountService: AccountService, private router: Router, private titleService: Title) { 
  }

  ngOnInit() {
    this.accountService.loggedEmitter
      .pipe(delay(10))
      .subscribe(logged => {
        this.logged = logged;
        this.account = this.accountService.me();
      });
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  logout() {
    this.accountService.logout();
    this.router.navigate(['/']);
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SHARED_IMPORT_MODULE } from '@app/shared/share.import';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-default-nav-bar',
  imports: [
    SHARED_IMPORT_MODULE
  ],
  templateUrl: './default-nav-bar.component.html'
})
export class DefaultNavBarComponent implements OnInit {
  @Input("items") items: any[] = [];

  currentUrl: string = '';

  private sub!: Subscription;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.currentUrl = this.router.url;
    this.currentUrl = this.currentUrl.replace("/", '');

    this.watchUrl();
  }

  watchUrl() {
    this.sub = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentUrl = event.urlAfterRedirects;
        this.currentUrl = this.currentUrl.replace("/", '');
      });
  }
}

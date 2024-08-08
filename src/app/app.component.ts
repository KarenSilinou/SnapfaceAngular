import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { filter, interval, map, Observable, tap } from 'rxjs';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  interval$!: Observable<string>;

  ngOnInit(): void {
    this.interval$ = interval(1000).pipe(
      filter(value => value % 3 === 0),
      map(value => value % 2 === 0 ?
        `Je suis ${value} et je suis pair` :
        `Je suis ${value} et je suis impair`
       ),
       tap(text => this.logger(text))
    );
  }

  logger(text: string) {
    console.log(`Log: ${text}`);
  }

}

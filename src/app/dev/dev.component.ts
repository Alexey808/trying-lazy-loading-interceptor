import {Component, OnDestroy, OnInit} from '@angular/core';
import {DevApiService, IData} from './dev-api.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.less']
})
export class DevComponent implements OnInit, OnDestroy {
  subs$ = new Subject<void>();
  data: IData[];

  constructor(
    private service: DevApiService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.subs$.next();
    this.subs$.complete();
  }

  private loadData(): void {
    this.service.getData()
      .pipe(
        takeUntil(this.subs$),
      )
      .subscribe((data: IData[]) => {
        this.data = data;
      });
  }
}

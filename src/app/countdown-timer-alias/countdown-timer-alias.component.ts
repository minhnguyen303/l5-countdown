import {Component, Input, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-countdown-timer-alias',
  templateUrl: './countdown-timer-alias.component.html',
  styleUrls: ['./countdown-timer-alias.component.css']
})
export class CountdownTimerAliasComponent implements OnInit {

  private intervalId = 0;
  message = '';
  // @ts-ignore
  remainingTime: number;

  // tslint:disable-next-line:no-input-rename
  @Input('remaining-time')
  seconds = 11;

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges): void {
    if ('seconds' in changes) {
      let v = changes.seconds.currentValue;
      v = typeof v === 'undefined' ? 11 : v;
      const vFixed = Number(v);
      this.seconds = Number.isNaN(vFixed) ? 11 : vFixed;
    }
  }

  clearTimer(): void {
    clearInterval(this.intervalId);
  }

  ngOnInit(): void {
    this.reset();
    this.start();
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {
    this.clearTimer();
  }

  start(): void {
    this.countDown();
    if (this.remainingTime <= 0) {
      this.remainingTime = this.seconds;
    }
  }

  stop(): void {
    this.clearTimer();
    this.message = `Holding at T-${this.remainingTime} seconds`;
  }

  reset(): void {
    this.clearTimer();
    this.remainingTime = this.seconds;
    this.message = `Click start button to start the Countdown`;
  }

  private countDown(): void {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        this.message = 'Blast off!';
        this.clearTimer();
      } else {
        this.message = `T-${this.remainingTime} seconds and counting`;
      }
    }, 1000);
  }

}

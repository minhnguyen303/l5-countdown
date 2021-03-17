import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimerAliasComponent } from './countdown-timer-alias.component';

describe('CountdownTimerAliasComponent', () => {
  let component: CountdownTimerAliasComponent;
  let fixture: ComponentFixture<CountdownTimerAliasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownTimerAliasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimerAliasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

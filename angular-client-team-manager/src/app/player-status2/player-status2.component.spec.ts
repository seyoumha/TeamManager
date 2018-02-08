import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerStatus2Component } from './player-status2.component';

describe('PlayerStatus2Component', () => {
  let component: PlayerStatus2Component;
  let fixture: ComponentFixture<PlayerStatus2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerStatus2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerStatus2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

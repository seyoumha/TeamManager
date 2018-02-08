import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerStatus3Component } from './player-status3.component';

describe('PlayerStatus3Component', () => {
  let component: PlayerStatus3Component;
  let fixture: ComponentFixture<PlayerStatus3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerStatus3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerStatus3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

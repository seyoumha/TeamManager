import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerStatus1Component } from './player-status1.component';

describe('PlayerStatus1Component', () => {
  let component: PlayerStatus1Component;
  let fixture: ComponentFixture<PlayerStatus1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerStatus1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerStatus1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

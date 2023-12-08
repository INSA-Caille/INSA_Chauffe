import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinderGameComponent } from './tinder-game.component';

describe('TinderGameComponent', () => {
  let component: TinderGameComponent;
  let fixture: ComponentFixture<TinderGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TinderGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TinderGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

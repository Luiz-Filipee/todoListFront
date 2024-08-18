import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardtaskComponent } from './cardtask.component';

describe('CardtaskComponent', () => {
  let component: CardtaskComponent;
  let fixture: ComponentFixture<CardtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardtaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

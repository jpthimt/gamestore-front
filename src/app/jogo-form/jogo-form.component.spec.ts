import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoFormComponent } from './jogo-form.component';

describe('JogoFormComponent', () => {
  let component: JogoFormComponent;
  let fixture: ComponentFixture<JogoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JogoFormComponent]
    });
    fixture = TestBed.createComponent(JogoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

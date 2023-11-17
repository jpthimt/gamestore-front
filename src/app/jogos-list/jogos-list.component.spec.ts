import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogosListComponent } from './jogos-list.component';

describe('JogosListComponent', () => {
  let component: JogosListComponent;
  let fixture: ComponentFixture<JogosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JogosListComponent]
    });
    fixture = TestBed.createComponent(JogosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoverInfoComponent } from './lover-info.component';

describe('LoverInfoComponent', () => {
  let component: LoverInfoComponent;
  let fixture: ComponentFixture<LoverInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoverInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoverInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

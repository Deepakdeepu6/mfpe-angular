import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AMSHeaderComponent } from './amsheader.component';

describe('AMSHeaderComponent', () => {
  let component: AMSHeaderComponent;
  let fixture: ComponentFixture<AMSHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AMSHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AMSHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

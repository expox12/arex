import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealFavComponent } from './deal-fav.component';

describe('DealFavComponent', () => {
  let component: DealFavComponent;
  let fixture: ComponentFixture<DealFavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealFavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

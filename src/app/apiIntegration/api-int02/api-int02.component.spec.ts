import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiInt02Component } from './api-int02.component';

describe('ApiInt02Component', () => {
  let component: ApiInt02Component;
  let fixture: ComponentFixture<ApiInt02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiInt02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiInt02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

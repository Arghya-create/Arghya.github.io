import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapsComponent } from './snaps.component';

describe('SnapsComponent', () => {
  let component: SnapsComponent;
  let fixture: ComponentFixture<SnapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

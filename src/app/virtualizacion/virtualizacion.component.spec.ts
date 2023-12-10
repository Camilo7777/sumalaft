import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualizacionComponent } from './virtualizacion.component';

describe('VirtualizacionComponent', () => {
  let component: VirtualizacionComponent;
  let fixture: ComponentFixture<VirtualizacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VirtualizacionComponent]
    });
    fixture = TestBed.createComponent(VirtualizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

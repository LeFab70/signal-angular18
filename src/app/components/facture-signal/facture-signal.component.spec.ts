import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureSignalComponent } from './facture-signal.component';

describe('FactureSignalComponent', () => {
  let component: FactureSignalComponent;
  let fixture: ComponentFixture<FactureSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactureSignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactureSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

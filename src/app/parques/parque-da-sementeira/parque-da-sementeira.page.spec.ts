import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParqueDaSementeiraPage } from './parque-da-sementeira.page';

describe('ParqueDaSementeiraPage', () => {
  let component: ParqueDaSementeiraPage;
  let fixture: ComponentFixture<ParqueDaSementeiraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ParqueDaSementeiraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

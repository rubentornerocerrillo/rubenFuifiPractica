import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalleVacantePage } from './detalle-vacante.page';

describe('DetalleVacantePage', () => {
  let component: DetalleVacantePage;
  let fixture: ComponentFixture<DetalleVacantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleVacantePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleVacantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaVacantesPage } from './lista-vacantes.page';

describe('ListaVacantesPage', () => {
  let component: ListaVacantesPage;
  let fixture: ComponentFixture<ListaVacantesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaVacantesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaVacantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

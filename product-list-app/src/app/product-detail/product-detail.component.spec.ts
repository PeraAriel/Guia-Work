import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailComponent } from './product-detail.component';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica che il componente sia stato istanziato correttamente
  });
});

/*
  Questo test verifica che il componente Angular 'ProductDetailComponent' venga creato correttamente.
  Utilizza TestBed per configurare un modulo di test che importa il componente, crea il componente con fixture,
  ne esegue il rilevamento dei cambiamenti. È un test di base che assicura che il componente si possa montare senza errori.
*/
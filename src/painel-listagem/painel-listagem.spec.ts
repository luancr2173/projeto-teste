import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelListagem } from './painel-listagem';

describe('PainelListagem', () => {
  let component: PainelListagem;
  let fixture: ComponentFixture<PainelListagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainelListagem],
    }).compileComponents();

    fixture = TestBed.createComponent(PainelListagem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

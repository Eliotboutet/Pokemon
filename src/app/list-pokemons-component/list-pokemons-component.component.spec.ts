import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPokemonsComponentComponent } from './list-pokemons-component.component';

describe('ListPokemonsComponentComponent', () => {
  let component: ListPokemonsComponentComponent;
  let fixture: ComponentFixture<ListPokemonsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPokemonsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPokemonsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

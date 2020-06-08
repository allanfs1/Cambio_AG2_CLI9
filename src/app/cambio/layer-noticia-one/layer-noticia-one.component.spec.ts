import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerNoticiaOneComponent } from './layer-noticia-one.component';

describe('LayerNoticiaOneComponent', () => {
  let component: LayerNoticiaOneComponent;
  let fixture: ComponentFixture<LayerNoticiaOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerNoticiaOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerNoticiaOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

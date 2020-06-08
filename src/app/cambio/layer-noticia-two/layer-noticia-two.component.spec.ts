import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerNoticiaTwoComponent } from './layer-noticia-two.component';

describe('LayerNoticiaTwoComponent', () => {
  let component: LayerNoticiaTwoComponent;
  let fixture: ComponentFixture<LayerNoticiaTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerNoticiaTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerNoticiaTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

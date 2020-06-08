import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerNoticiathreeComponent } from './layer-noticiathree.component';

describe('LayerNoticiathreeComponent', () => {
  let component: LayerNoticiathreeComponent;
  let fixture: ComponentFixture<LayerNoticiathreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerNoticiathreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerNoticiathreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceDetailCardComponent } from './resource-detail-card.component';

describe('ResourceDetailCardComponent', () => {
  let component: ResourceDetailCardComponent;
  let fixture: ComponentFixture<ResourceDetailCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResourceDetailCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeDemoComponent } from './tree-demo.component';

describe('TreeDemoComponent', () => {
  let component: TreeDemoComponent;
  let fixture: ComponentFixture<TreeDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TreeDemoComponent]
    });
    fixture = TestBed.createComponent(TreeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

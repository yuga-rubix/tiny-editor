import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveEditorComponent } from './interactive-editor.component';

describe('InteractiveEditorComponent', () => {
  let component: InteractiveEditorComponent;
  let fixture: ComponentFixture<InteractiveEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractiveEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InteractiveEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

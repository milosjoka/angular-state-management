import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBookCollectionComponent } from './my-book-collection.component';

describe('BookCollectionComponent', () => {
  let component: MyBookCollectionComponent;
  let fixture: ComponentFixture<MyBookCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBookCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyBookCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

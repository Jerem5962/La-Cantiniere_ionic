import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MdpPage } from './mdp.page';

describe('MdpPage', () => {
  let component: MdpPage;
  let fixture: ComponentFixture<MdpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MdpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

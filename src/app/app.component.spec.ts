import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('AppComponent', () => {
  let appComponent: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [FormsModule, ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the AppComponent', () => {
    expect(appComponent).toBeTruthy();
  });

  it('should have title form', () => {
    expect(appComponent.title).toEqual('form');
  });

  describe('onSubmit', () => {
    it('should log', () => {
      const componentSpy = jest.spyOn(appComponent, 'submitFeedback');
      const consoleSpy = jest.spyOn(console, 'log');
      appComponent.submitFeedback();
      expect(componentSpy).toHaveBeenCalledTimes(1);
      expect(consoleSpy).toHaveBeenCalledTimes(1);
    });

    it('should receive correct parameters', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      appComponent.submitFeedback();
      expect(consoleSpy).toHaveBeenCalledWith(
        'Feedback form [Submit] - ',
        appComponent.feedbackForm.value
      );
      console.log(appComponent.feedbackForm.value);
    });
  });

  describe('form', () => {
    describe('email', () => {
      it('should pass validate email', () => {
        appComponent.feedbackForm.setValue({
          emailAddress: 'jchoi@qci.com',
          phoneNumber: '515-864-9309',
          feedback: 'abcdef',
          feedbackTitle: 'example',
          favoriteAnimal: 'cat',
        });

        expect(appComponent.feedbackForm.valid).toEqual(true);
      });

      it('should fail invalid email', () => {
        appComponent.feedbackForm.setValue({
          emailAddress: 'jchoiqci.com',
          phoneNumber: '515-864-9309',
          feedbackTitle: 'example title',
          feedback: 'abcdef',
          favoriteAnimal: 'cat',
        });

        expect(appComponent.feedbackForm.valid).toEqual(false);
      });

      it('should require email field', () => {
        expect(() =>
          appComponent.feedbackForm.setValue({
            phoneNumber: '515-864-9309',
            feedbackTitle: 'example title',
            feedback: 'abcdef',
            favoriteAnimal: 'cat',
          })
        ).toThrowError();
      });
    });

    describe('phoneNumber', () => {
      it('should require phoneNumber', () => {
        expect(() =>
          appComponent.feedbackForm.setValue({
            emailAddress: 'jchoiqci.com',
            feedbackTitle: 'example title',
            feedback: 'abcdef',
            favoriteAnimal: 'cat',
          })
        ).toThrowError();
      });
    });

    describe('feedback title', () => {
      it('should require feedback title', () => {
        expect(() =>
          appComponent.feedbackForm.setValue({
            emailAddress: 'jchoiqci.com',
            phoneNumber: '515-864-9309',
            feedback: 'abcdef',
            favoriteAnimal: 'cat',
          })
        ).toThrowError();
      });
    });

    describe('feedback', () => {
      it('should require feedback', () => {
        expect(() =>
          appComponent.feedbackForm.setValue({
            emailAddress: 'jchoiqci.com',
            phoneNumber: '515-864-9309',
            feedbackTitle: 'abcdef',
            favoriteAnimal: 'cat',
          })
        ).toThrowError();
      });
    });

    describe('favorite animal', () => {
      it('should require favorite animal', () => {
        expect(() =>
          appComponent.feedbackForm.setValue({
            emailAddress: 'jchoiqci.com',
            phoneNumber: '515-864-9309',
            feedbackTitle: 'abcdef',
            feedback: 'abcdef',
          })
        ).toThrowError();
      });
    });
  });
});

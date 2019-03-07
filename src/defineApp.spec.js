import defineApp from './defineApp';

describe('defineApp', () => {
  let elementClass;
  let initCallBack = jest.fn();

  beforeEach(() => {
    defineApp({
      tag: 'app-name',
      appInit: initCallBack
    });
    elementClass = window.customElements.get('app-name');
  });

  it('should create custome element in global', () => {
    expect(elementClass).toBeDefined();
  });
});

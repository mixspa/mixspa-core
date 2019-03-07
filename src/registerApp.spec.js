import Context from './utils/Context';
import registerApp from './registerApp';

describe('registerApp', () => {
  let appInfo = {
    id: 'app-id',
    tag: 'app-tag',
    assets: ['http://www.test.com/a.js']
  };

  it('should have that app in context after register', () => {
    registerApp(appInfo);
    expect(Context.hasAppInfo('app-id')).toBeTruthy();
  });
});

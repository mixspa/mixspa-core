import MixspaStorage from './index';

describe('MixspaStorage', () => {
  let app = {
    id: 'test',
    tag: 'test'
  };

  beforeEach(() => {
    MixspaStorage.put('test-key', app);
  });

  it('should get value from global', () => {
    expect(MixspaStorage.get('test-key')).toEqual(app);
  });

  it('should has value in global', () => {
    expect(MixspaStorage.has('test-key')).toBeTruthy();
  });

  it('should get nothing from global when remove the key', () => {
    MixspaStorage.remove('test-key');
    expect(MixspaStorage.get('test-key')).not.toBeDefined();
  });

  it('should clear all store', () => {
    MixspaStorage.clear();
    expect(MixspaStorage.get('test-key')).not.toBeDefined();
  });
});

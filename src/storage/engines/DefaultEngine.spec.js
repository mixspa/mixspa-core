import DefaultEngine from './DefaultEngine';

describe('DefaultEngine', () => {
  let app = {
    id: 'test',
    tag: 'test'
  };

  beforeEach(() => {
    DefaultEngine.set('test-key', app);
  });

  it('should get value from global', () => {
    expect(DefaultEngine.get('test-key')).toEqual(app);
  });

  it('should get nothing from global when remove the key', () => {
    DefaultEngine.remove('test-key');
    expect(DefaultEngine.get('test-key')).not.toBeDefined();
  });

  it("should clear all store", () => {
    DefaultEngine.clear();
    expect(DefaultEngine.get('test-key')).not.toBeDefined();
  });
});

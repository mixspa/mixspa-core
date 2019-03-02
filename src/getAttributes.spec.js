import getAttributes from './getAttributes';

describe('getAttributes', () => {
  let attrs;

  beforeEach(() => {
    document.body.innerHTML = '<div attr1="attr1" attr2="attr2"></div>';
    attrs = getAttributes(document.body.firstElementChild);
  });

  it('should have two attrs', () => {
    expect(Object.keys(attrs).length).toBe(2);
  });

  it('should include attr1', () => {
    expect(attrs.attr1).toBe('attr1');
  });

  it('should include attr2', () => {
    expect(attrs.attr2).toBe('attr2');
  });
});

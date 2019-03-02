const getAttributes = (element) => {
  let names = element.getAttributeNames();
  return names.reduce((obj, n) => { obj[n] = element.getAttribute(n); return obj; }, {});
};

export default getAttributes;

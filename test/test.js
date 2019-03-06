import { calculateTotal, getHtmlTag } from '../src/js/script';

test('should calculate total for purchases', () => {
  const input = [
    {
      id: 1, name: '...', price: 33, count: 3,
    }, {
      id: 2, name: '...', price: 55, count: 2,
    },
  ];

  const expected = 209;
  const received = calculateTotal(input);

  expect(received).toBe(expected);
});

test('should calculate total for purchases', () => {
  const input = [
    {
      id: 1, name: '...', price: 33, count: 3,
    },
  ];

  const expected = 99;
  const received = calculateTotal(input);

  expect(received).toBe(expected);
});

test('should make full tag', () => {
  const expected = '<div></div>';
  const received = getHtmlTag('div');

  expect(received).toBe(expected);
});

test('should make short tag', () => {
  const expected = '<img>';
  const received = getHtmlTag('img');

  expect(received).toBe(expected);
});

test('should return undefined if tag does not exists', () => {
  const received = getHtmlTag('ololo');

  expect(received).toBeFalsy();
});

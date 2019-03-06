import { getHtmlTag } from '../src/js/script';

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

  expect(received).toBeUndefined();
});

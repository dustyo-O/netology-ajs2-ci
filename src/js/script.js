export function calculateTotal(purchases) {
  return purchases.reduce(
    (acc, curr) => acc + curr.price * curr.count,
    0,
  );
}

export function getHtmlTag(tagName) {
  if (!['div', 'img', 'p', 'a', 'section'].includes(tagName)) return;

  if (tagName === 'img') {
    return `<${tagName}>`;
  }

  return `<${tagName}></${tagName}>`;
}

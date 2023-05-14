/**
 * input a element, return siblings(返回给定元素的兄弟节点)
 * @param {HTMLElement} element 
 * @returns Array<HTMLElement>
 */
function sibling(element) {
  const r = [];
  const p = element.parentNode.children;
  for (let i = 0, pl = p.length; i < pl; i++) {
    p[i] !== element && r.push(p[i]);
  }
  return r;
}

export {
  sibling
}
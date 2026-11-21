console.log(document);
console.log(document.documentElement);
console.log(document.head, document.body);
console.log(typeof document.body, document.body instanceof HTMLElement);

const list = document.getElementById('products');
console.log('Всего узлов внутри ul:', list.childNodes.length);
console.log('Из них элементов:', list.children.length);
for (const node of list.childNodes) {
    console.log(node.nodeType, node.nodeName);
}

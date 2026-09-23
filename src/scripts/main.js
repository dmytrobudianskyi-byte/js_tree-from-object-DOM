'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const ul = document.createElement('ul');

  for (const [key, value] of Object.entries(data)) {
    const listElement = document.createElement('li');
    listElement.innerHTML = key;

    if (value != undefined) {
      createTree(listElement, value);
    }

    ul.appendChild(listElement);
  }

  element.appendChild(ul);
}

createTree(tree, food);

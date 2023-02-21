'use strict';

const ads = document.querySelector('.ads');
const itemFour = document.querySelector('.item_four');
const itemFive = document.querySelector('.item_five');
const propslists = document.querySelectorAll('.props__list');
const content = document.querySelectorAll('.content');
const propsItemsTwo = document.querySelectorAll('.props__item_two');
const propsItemsFour = document.querySelectorAll('.props__item_four');
const itemTitle = document.querySelectorAll('.item__title');
console.log('itemTitle: ', itemTitle);

ads.remove();
itemFive.before(itemFour);
propsItemsFour[2].after(propsItemsFour[5]);
propsItemsTwo[7].after(propsItemsTwo[8]);
propsItemsTwo[8].after(propsItemsTwo[9]);

propslists[4].remove();
console.log('propslists: ', propslists);
propslists[3].remove();
content[3].append(propslists[4]);
content[4].append(propslists[3]);

propslists[5].before(itemTitle[1]); // es6
propslists[2].before(itemTitle[3]);
propslists[3].before(itemTitle[4]);
itemTitle[2].textContent = 'This и прототипы объектов';

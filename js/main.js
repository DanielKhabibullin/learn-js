'use strict';

const ads = document.querySelector('.ads');
const itemFour = document.querySelector('.item_four');
const itemFive = document.querySelector('.item_five');
const propslists = document.querySelectorAll('.props__list');
const content = document.querySelectorAll('.content');
const propsItemsTwo = document.querySelectorAll('.props__item_two');
const propsItemsFour = document.querySelectorAll('.props__item_four');

ads.remove();
itemFive.before(itemFour);
propsItemsFour[2].after(propsItemsFour[5]);
propsItemsTwo[7].after(propsItemsTwo[8]);
propsItemsTwo[8].after(propsItemsTwo[9]);

propslists[4].remove();
propslists[3].remove();
content[3].append(propslists[4]);
content[4].append(propslists[3]);


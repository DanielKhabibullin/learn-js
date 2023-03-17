'use strict';

const emails = ['info@methed.ru', 'max24@mail.com', 'java_script@google.io', 'my-mail@yandex.ru', 'tom_yam@ya.ru', 'zero@mai1.xyz'];

const regexp = /(^[\w]*)+(@[a-zA-Z]{3,})(\.[a-zA-Z]{2,5})$/;


emails.forEach(str => {
	const matches = str.match(regexp);
	if (!matches) console.log(str, 'INVALID EMAIL');
	else console.log(str, 'is a valid mail');
});
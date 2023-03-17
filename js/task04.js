'use strict';

const replaceUrls = url => {
	const regexp = /(https?:\/\/\S+)/gi;
	return url.replace(regexp, '<a href="$1">$1</a>');
};

const text = 'Посетите мой сайт http://site.ru или мой блог https://site.com/blog';
const replacedText = replaceUrls(text);
console.log(replacedText);

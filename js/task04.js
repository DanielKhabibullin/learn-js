'use strict';

const replaceUrls = url => {
	const regexp = /(https?:\/\/)(www\.)?(\S+)/gi;
	return url.replace(regexp, (match, p1, p2, p3) => {
		const domain = p2 ? p3 : p2;
		return `<a href="${p1}${domain}">${domain}</a>`;
	});
};

const text = 'Посетите мой сайт http://www.site.ru или мой блог https://www.site.com/blog';
const replacedText = replaceUrls(text);
console.log(replacedText);

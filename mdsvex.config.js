import urls from 'rehype-urls';

function processUrl(url, node) {
	if (node.tagName === 'a') {
		node.properties.class = 'text-link';

		if (!url.href.startsWith('/')) {
			// is external link
			node.properties.target = '_blank';
			node.properties.rel = 'noopener';
		}
	}
}

export default {
	extensions: ['.svelte.md'],
	rehypePlugins: [[urls, processUrl]]
};

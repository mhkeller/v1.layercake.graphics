// This file is generated by Sapper — do not edit it!
import * as route_examples_$slug_json from '../../routes/examples/[slug].json.js';
import * as route_api_guide from '../../routes/api/guide/index.js';
import * as route_api_guide_contents from '../../routes/api/guide/contents.js';
import index from '../../routes/index.html';
import examples_$slug from '../../routes/examples/[slug].html';
import guide from '../../routes/guide/index.html';
import test from '../../routes/test.html';
import root from '../../routes/_layout.html';
import error from '../../routes/_error.html';

export const manifest = {
	server_routes: [
		{
			// examples/[slug].json.js
			pattern: /^\/examples\/([^\/]+?).json\/?$/,
			handlers: route_examples_$slug_json,
			params: match => ({ slug: match[1] })
		},

		{
			// api/guide/index.js
			pattern: /^\/api\/guide\/?$/,
			handlers: route_api_guide,
			params: () => ({})
		},

		{
			// api/guide/contents.js
			pattern: /^\/api\/guide\/contents\/?$/,
			handlers: route_api_guide_contents,
			params: () => ({})
		}
	],

	pages: [
		{
			// index.html
			pattern: /^\/?$/,
			parts: [
				{ name: "index", component: index }
			]
		},

		{
			// examples/[slug].html
			pattern: /^\/examples\/([^\/]+?)\/?$/,
			parts: [
				null,
				{ name: "examples_$slug", component: examples_$slug, params: match => ({ slug: match[1] }) }
			]
		},

		{
			// guide/index.html
			pattern: /^\/guide\/?$/,
			parts: [
				null,
				{ name: "guide", component: guide }
			]
		},

		{
			// test.html
			pattern: /^\/test\/?$/,
			parts: [
				{ name: "test", component: test }
			]
		}
	],

	root,

	error
};

// this is included for legacy reasons
export const routes = {};
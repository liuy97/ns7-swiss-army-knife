const npsUtils = require('nps-utils');

module.exports = {
	message: 'NativeScript Plugins ~ made with ❤️  Choose a command to start...',
	pageSize: 32,
	scripts: {
		default: 'nps-i',
		nx: {
			script: 'nx',
			description: 'Execute any command with the @nrwl/cli',
		},
		format: {
			script: 'nx format:write',
			description: 'Format source code of the entire workspace (auto-run on precommit hook)',
		},
		'🔧': {
			script: `npx cowsay "NativeScript plugin demos make developers 😊"`,
			description: '_____________  Apps to demo plugins with  _____________',
		},
		// demos
		apps: {
			'...Vanilla...': {
				script: `npx cowsay "Nothing wrong with vanilla 🍦"`,
				description: ` 🔻 Vanilla`,
			},
			demo: {
				clean: {
					script: 'nx run demo:clean',
					description: '⚆  Clean  🧹',
				},
				ios: {
					script: 'nx run demo:ios',
					description: '⚆  Run iOS  ',
				},
				android: {
					script: 'nx run demo:android',
					description: '⚆  Run Android  🤖',
				},
			},
			'...Angular...': {
				script: `npx cowsay "Test all the Angles!"`,
				description: ` 🔻 Angular`,
			},
			'demo-angular': {
				clean: {
					script: 'nx run demo-angular:clean',
					description: '⚆  Clean  🧹',
				},
				ios: {
					script: 'nx run demo-angular:ios',
					description: '⚆  Run iOS  ',
				},
				android: {
					script: 'nx run demo-angular:android',
					description: '⚆  Run Android  🤖',
				},
			},
		},
		'⚙️': {
			script: `npx cowsay "@nativescript/* packages will keep your ⚙️ cranking"`,
			description: '_____________  @nativescript/*  _____________',
		},
		// packages
		// build output is always in dist/packages
		'@nativescript': {
			// @nativescript/@nativescript/app-shortcuts
			'@nativescript/app-shortcuts': {
				build: {
					script: 'nx run @nativescript/app-shortcuts:build.all',
					description: '@nativescript/@nativescript/app-shortcuts: Build',
				},
			},
			// @nativescript/app-shortcuts
			'app-shortcuts': {
				build: {
					script: 'nx run app-shortcuts:build.all',
					description: '@nativescript/app-shortcuts: Build',
				},
			},
			// @nativescript/locate-address
			'locate-address': {
				build: {
					script: 'nx run locate-address:build.all',
					description: '@nativescript/locate-address: Build',
				},
			},
			// @nativescript/swiss-army-knife
			'swiss-army-knife': {
				build: {
					script: 'nx run swiss-army-knife:build.all',
					description: '@nativescript/swiss-army-knife: Build',
				},
			},
			// @nativescript/universal-links
			'universal-links': {
				build: {
					script: 'nx run universal-links:build.all',
					description: '@nativescript/universal-links: Build',
				},
			},
			// @nativescript/gintel-picker
			'gintel-picker': {
				build: {
					script: 'nx run gintel-picker:build.all',
					description: '@nativescript/gintel-picker: Build',
				},
			},
			'build-all': {
				script: 'nx run all:build',
				description: 'Build all packages',
			},
		},
		'⚡': {
			script: `npx cowsay "Focus only on source you care about for efficiency ⚡"`,
			description: '_____________  Focus (VS Code supported)  _____________',
		},
		focus: {
			'@nativescript/app-shortcuts': {
				script: 'nx run @nativescript/app-shortcuts:focus',
				description: 'Focus on @nativescript/@nativescript/app-shortcuts',
			},
			'app-shortcuts': {
				script: 'nx run app-shortcuts:focus',
				description: 'Focus on @nativescript/app-shortcuts',
			},
			'locate-address': {
				script: 'nx run locate-address:focus',
				description: 'Focus on @nativescript/locate-address',
			},
			'swiss-army-knife': {
				script: 'nx run swiss-army-knife:focus',
				description: 'Focus on @nativescript/swiss-army-knife',
			},
			'universal-links': {
				script: 'nx run universal-links:focus',
				description: 'Focus on @nativescript/universal-links',
			},
			'gintel-picker': {
				script: 'nx run gintel-picker:focus',
				description: 'Focus on @nativescript/gintel-picker',
			},
			reset: {
				script: 'nx run all:focus',
				description: 'Reset Focus',
			},
		},
		'.....................': {
			script: `npx cowsay "That's all for now folks ~"`,
			description: '.....................',
		},
	},
};

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
			script: `npx cowsay "@school-squirrel/* packages will keep your ⚙️ cranking"`,
			description: '_____________  @school-squirrel/*  _____________',
		},
		// packages
		// build output is always in dist/packages
		'@school-squirrel': {
			// @schoolsquirrel/emoji-picker
			'emoji-picker': {
				build: {
					script: 'nx run emoji-picker:build.all',
					description: '@schoolsquirrel/emoji-picker: Build',
				},
			},
			// @schoolsquirrel/letter-avatar
			'letter-avatar': {
				build: {
					script: 'nx run letter-avatar:build.all',
					description: '@schoolsquirrel/letter-avatar: Build',
				},
			},
			// @schoolsquirrel/nativescript-squirrel-chat-ui
			'nativescript-squirrel-chat-ui': {
				build: {
					script: 'nx run nativescript-squirrel-chat-ui:build.all',
					description: '@schoolsquirrel/nativescript-squirrel-chat-ui: Build',
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
			'emoji-picker': {
				script: 'nx run emoji-picker:focus',
				description: 'Focus on @schoolsquirrel/emoji-picker',
			},
			'letter-avatar': {
				script: 'nx run letter-avatar:focus',
				description: 'Focus on @schoolsquirrel/letter-avatar',
			},
			'nativescript-squirrel-chat-ui': {
				script: 'nx run nativescript-squirrel-chat-ui:focus',
				description: 'Focus on @schoolsquirrel/nativescript-squirrel-chat-ui',
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

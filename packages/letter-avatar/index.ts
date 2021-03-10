import { Color, CSSType, GridLayout, Label, Property, StackLayout } from '@nativescript/core';

const defaults = {
	text: '',
	height: 'auto',
	width: 'auto',
	borderRadius: 0,
	backgroundColor: '',
	fontSize: 15,
	color: 'white',
	margin: 0,
	padding: 0,
};

export const textProperty = new Property<LetterAvatar, string>({ name: 'text', defaultValue: defaults.text });
export const heightProperty = new Property<LetterAvatar, number | string>({ name: 'height', defaultValue: defaults.height });
export const widthProperty = new Property<LetterAvatar, number | string>({ name: 'width', defaultValue: defaults.width });
export const borderRadiusProperty = new Property<LetterAvatar, number>({ name: 'borderRadius', defaultValue: defaults.borderRadius });
export const backgroundColorProperty = new Property<LetterAvatar, string>({ name: 'backgroundColor', defaultValue: defaults.backgroundColor });
export const fontSizeProperty = new Property<LetterAvatar, number>({ name: 'fontSize', defaultValue: defaults.fontSize });
export const colorProperty = new Property<LetterAvatar, string>({ name: 'color', defaultValue: defaults.color });
export const marginProperty = new Property<LetterAvatar, number>({ name: 'margin', defaultValue: defaults.margin });
export const paddingProperty = new Property<LetterAvatar, number>({ name: 'padding', defaultValue: defaults.padding });

@CSSType('LetterAvatar')
export class LetterAvatar extends GridLayout {
	text: string;
	fontSize: number;
	textAlign: string;
	label: Label;
	private flatColors: string[] = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e', '#16a085', '#27ae60', '#2980b9', '#8e44ad', '#2c3e50', '#f1c40f', '#e67e22', '#e74c3c', '#f39c12', '#d35400', '#c0392b'];
	stackLayout: StackLayout;
	constructor() {
		super();

		this.stackLayout = new StackLayout();
		this.label = new Label();
		this.stackLayout.orientation = 'horizontal';
		this.label.verticalAlignment = 'middle';
		// @ts-ignore
		this.stackLayout.height = this.height ? this.height : defaults.height;
		this.label.text = this.text ? this.text : defaults.text;
		// @ts-ignore
		this.stackLayout.width = this.width ? this.width : defaults.width;
		// @ts-ignore
		this.label.width = this.width ? this.width : defaults.width;
		this.stackLayout.borderRadius = this.borderRadius ? this.borderRadius : defaults.borderRadius;
		this.label.color = this.color ? this.color : new Color(defaults.color);
		this.label.fontSize = this.fontSize ? this.fontSize : defaults.fontSize;
		this.label.textAlignment = 'center';
		if (this.backgroundColor) {
			this.stackLayout.backgroundColor = this.backgroundColor;
		} else {
			this.stackLayout.backgroundColor = this.flatColors[Math.floor(Math.random() * this.flatColors.length)];
		}

		this.stackLayout.addChild(this.label);
		this.addChild(this.stackLayout);
	}

	[textProperty.setNative](value: string) {
		this.label.text = value;
	}
	[heightProperty.setNative](value: number) {
		this.stackLayout.height = value;
	}
	[widthProperty.setNative](value: number) {
		this.label.width = value;
		this.stackLayout.width = value;
	}
	[borderRadiusProperty.setNative](value: string) {
		this.stackLayout.borderRadius = value;
	}
	[backgroundColorProperty.setNative](value: string) {
		this.stackLayout.backgroundColor = value;
	}
	[colorProperty.setNative](value: string) {
		// @ts-ignore
		this.label.color = value;
	}
	[fontSizeProperty.setNative](value: number) {
		this.label.fontSize = value;
	}
	[marginProperty.setNative](value: number) {
		this.stackLayout.margin = value;
	}
	[paddingProperty.setNative](value: number) {
		this.stackLayout.padding = value;
	}
}

backgroundColorProperty.register(LetterAvatar);
borderRadiusProperty.register(LetterAvatar);
colorProperty.register(LetterAvatar);
fontSizeProperty.register(LetterAvatar);
heightProperty.register(LetterAvatar);
marginProperty.register(LetterAvatar);
paddingProperty.register(LetterAvatar);
textProperty.register(LetterAvatar);
widthProperty.register(LetterAvatar);

import { EmojiPickerBase, EmojiLabelBase, textProperty } from "./emoji-picker.common";

declare const com: any;
export class EmojiPicker extends EmojiPickerBase {
    nativeView: any;
    emojiPopup: any;

    /**
     * Creates new native button.
     */
    public createNativeView(): Object {
        // @ts-ignore
        com.vanniktech.emoji.EmojiManager.install(new com.vanniktech.emoji.ios.IosEmojiProvider());

        // Initialize ClickListener.
        // initializeClickListener();

        this.nativeView = new com.vanniktech.emoji.EmojiEditText(this._context);


        const rootView = this.nativeView.getRootView();


        this.emojiPopup = com.vanniktech.emoji.EmojiPopup.Builder.fromRootView(rootView).build(this.nativeView);
        return this.nativeView;
    }
    initNativeView(): void {
        (<any>this.nativeView).owner = this;
        super.initNativeView();
    }

    togglePopup(): void {
        this.emojiPopup.toggle();
    }

    disposeNativeView(): void {
        (<any>this.nativeView).owner = null;

        super.disposeNativeView();
    }
}

export class EmojiLabel extends EmojiLabelBase {
    nativeView: any;

    public createNativeView(): Object {
        com.vanniktech.emoji.EmojiManager.install(new com.vanniktech.emoji.ios.IosEmojiProvider());
        this.nativeView = new com.vanniktech.emoji.EmojiTextView(this._context);
        return this.nativeView;
    }

    [textProperty.setNative](value: string) {
        this.nativeView.setText(value);
    }

    initNativeView(): void {
        (<any>this.nativeView).owner = this;
        super.initNativeView();
    }

    disposeNativeView(): void {
        (<any>this.nativeView).owner = null;
        super.disposeNativeView();
    }
}
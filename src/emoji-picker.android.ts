import { EmojiPickerBase } from "./emoji-picker.common";

declare const com: any;
// let clickListener: android.view.View.OnClickListener;

// NOTE: ClickListenerImpl is in function instead of directly in the module because we
// want this file to be compatible with V8 snapshot. When V8 snapshot is created
// JS is loaded into memory, compiled & saved as binary file which is later loaded by
// android runtime. Thus when snapshot is created we don't have android runtime and
// we don't have access to native types.
/*function initializeClickListener(): void {
    // Define ClickListener class only once.
    if (clickListener) {
        return;
    }

    // Interfaces decorator with implemented interfaces on this class
    @Interfaces([android.view.View.OnClickListener])
    class ClickListener extends java.lang.Object implements android.view.View.OnClickListener {
        public owner: EmojiPicker;

        constructor() {
            super();
            // Required by android runtime when native class is extended through TypeScript.
            return global.__native(this);
        }

        public onClick(v: android.view.View): void {
            // When native button is clicked we raise 'tap' event.
            const owner = (<any>v).owner;
            if (owner) {
                owner.notify({ eventName: EmojiPickerBase.tapEvent, object: owner });
            }
        }
    }

    clickListener = new ClickListener();
} */


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
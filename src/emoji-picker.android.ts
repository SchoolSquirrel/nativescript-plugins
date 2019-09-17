import { EmojiPickerBase, EmojiLabelBase, textProperty } from "./emoji-picker.common";
import { EmojiLabel as EmojiLabelDefinition } from ".";
import { TextBase, WhiteSpace, whiteSpaceProperty, booleanConverter, CSSType } from "tns-core-modules/ui/text-base";
export * from "tns-core-modules/ui/text-base";

declare const com: any;


@CSSType("EmojiPicker")
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

@CSSType("EmojiLabel")
export class EmojiLabel extends EmojiLabelBase implements EmojiLabelDefinition {
    // @ts-ignore
    nativeViewProtected: com.vanniktech.emoji.EmojiTextView;
    // @ts-ignore
    nativeTextViewProtected: com.vanniktech.emoji.EmojiTextView;
    EmojiLabelView: typeof com.vanniktech.emoji.EmojiTextView;

    get textWrap(): boolean {
        return this.style.whiteSpace === "normal";
    }
    set textWrap(value: boolean) {
        if (typeof value === "string") {
            value = booleanConverter(value);
        }

        this.style.whiteSpace = value ? "normal" : "nowrap";
    }

    [textProperty.setNative](value: string) {
        this.nativeView.setText(value);
    }

    public createNativeView(): Object {
        if (!this.EmojiLabelView) {
            com.vanniktech.emoji.EmojiManager.install(new com.vanniktech.emoji.ios.IosEmojiProvider());
            this.EmojiLabelView = new com.vanniktech.emoji.EmojiTextView(this._context);
        }
        return this.EmojiLabelView;
    }

    initNativeView(): void {
        (<any>this.nativeView).owner = this;
        super.initNativeView();
        const textView = this.nativeTextViewProtected;
        textView.setSingleLine(true);
        textView.setEllipsize(android.text.TextUtils.TruncateAt.END);
    }

    disposeNativeView(): void {
        (<any>this.nativeView).owner = null;
        super.disposeNativeView();
    }

    [whiteSpaceProperty.setNative](value: WhiteSpace) {
        // Label initial value is no-wrap. set in initNativeView
        const newValue = value === "initial" ? "nowrap" : value;
        super[whiteSpaceProperty.setNative](newValue);
    }
}

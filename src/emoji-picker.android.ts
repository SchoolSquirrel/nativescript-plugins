import { booleanConverter, CSSType, TextBase, WhiteSpace, whiteSpaceProperty } from "tns-core-modules/ui/text-base";
import { EmojiLabel as EmojiLabelDefinition } from ".";
import { EmojiLabelBase, EmojiPickerBase, textProperty } from "./emoji-picker.common";
export * from "tns-core-modules/ui/text-base";

declare const com: any;

@CSSType("EmojiPicker")
export class EmojiPicker extends EmojiPickerBase {
    public nativeView: any;
    public emojiPopup: any;

    /**
     * Creates new native button.
     */
    public createNativeView(): object {
        // @ts-ignore
        com.vanniktech.emoji.EmojiManager.install(new com.vanniktech.emoji.ios.IosEmojiProvider());

        // Initialize ClickListener.
        // initializeClickListener();

        this.nativeView = new com.vanniktech.emoji.EmojiEditText(this._context);

        const rootView = this.nativeView.getRootView();

        this.emojiPopup = com.vanniktech.emoji.EmojiPopup.Builder.fromRootView(rootView).build(this.nativeView);
        return this.nativeView;
    }
    public initNativeView(): void {
        ( this.nativeView as any).owner = this;
        super.initNativeView();
    }

    public togglePopup(): void {
        this.emojiPopup.toggle();
    }

    public disposeNativeView(): void {
        ( this.nativeView as any).owner = null;

        super.disposeNativeView();
    }
}

@CSSType("EmojiLabel")
export class EmojiLabel extends EmojiLabelBase implements EmojiLabelDefinition {
    // @ts-ignore
    public nativeViewProtected: com.vanniktech.emoji.EmojiTextView;
    // @ts-ignore
    public nativeTextViewProtected: com.vanniktech.emoji.EmojiTextView;
    public EmojiLabelView: typeof com.vanniktech.emoji.EmojiTextView;

    get textWrap(): boolean {
        return this.style.whiteSpace === "normal";
    }
    set textWrap(value: boolean) {
        if (typeof value === "string") {
            value = booleanConverter(value);
        }

        this.style.whiteSpace = value ? "normal" : "nowrap";
    }

    public [textProperty.setNative](value: string) {
        this.nativeView.setText(value);
    }

    public createNativeView(): object {
        if (!this.EmojiLabelView) {
            com.vanniktech.emoji.EmojiManager.install(new com.vanniktech.emoji.ios.IosEmojiProvider());
            this.EmojiLabelView = new com.vanniktech.emoji.EmojiTextView(this._context);
        }
        return this.EmojiLabelView;
    }

    public initNativeView(): void {
        ( this.nativeView as any).owner = this;
        super.initNativeView();
        const textView = this.nativeTextViewProtected;
        textView.setSingleLine(true);
        textView.setEllipsize(android.text.TextUtils.TruncateAt.END);
    }

    public disposeNativeView(): void {
        ( this.nativeView as any).owner = null;
        super.disposeNativeView();
    }

    public [whiteSpaceProperty.setNative](value: WhiteSpace) {
        // Label initial value is no-wrap. set in initNativeView
        const newValue = value === "initial" ? "nowrap" : value;
        super[whiteSpaceProperty.setNative](newValue);
    }
}

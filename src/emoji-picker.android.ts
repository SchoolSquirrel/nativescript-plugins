import { booleanConverter, CSSType, TextBase, WhiteSpace, whiteSpaceProperty } from "tns-core-modules/ui/text-base";
import { EmojiLabel as EmojiLabelDefinition } from ".";
import { EmojiPicker as EmojiPickerDefinition } from ".";
import { EmojiLabelBase, EmojiPickerBase, textProperty } from "./emoji-picker.common";
export * from "tns-core-modules/ui/text-base";
export * from "tns-core-modules/ui/text-field/text-field-common";
import { keyboardTypeProperty } from "tns-core-modules/ui/text-field/text-field-common";

declare const com: any;

@CSSType("EmojiPicker")
export class EmojiPicker extends EmojiPickerBase implements EmojiPickerDefinition {
    public nativeView: any;
    public emojiPopup: any;

    public _configureEditText(editText: android.widget.EditText) {
        editText.setInputType(android.text.InputType.TYPE_CLASS_TEXT |
            android.text.InputType.TYPE_TEXT_VARIATION_NORMAL |
            android.text.InputType.TYPE_TEXT_FLAG_CAP_SENTENCES |
            android.text.InputType.TYPE_TEXT_FLAG_NO_SUGGESTIONS);
        editText.setLines(1);
        editText.setMaxLines(1);
        editText.setHorizontallyScrolling(true);
    }
    public [keyboardTypeProperty.setNative]() {
        this.setSecureAndKeyboardType();
    }

    public setSecureAndKeyboardType(): void {

        let inputType: number;

        // default
        inputType = android.text.InputType.TYPE_CLASS_TEXT | android.text.InputType.TYPE_TEXT_VARIATION_NORMAL;

        // add autocorrect flags
        if (this.autocorrect) {
            inputType = inputType | android.text.InputType.TYPE_TEXT_FLAG_AUTO_COMPLETE;
            inputType = inputType | android.text.InputType.TYPE_TEXT_FLAG_AUTO_CORRECT;
            inputType = inputType & ~android.text.InputType.TYPE_TEXT_FLAG_NO_SUGGESTIONS;
        }

        // add autocapitalization type
        switch (this.autocapitalizationType) {
            case "words":
                inputType = inputType | android.text.InputType.TYPE_TEXT_FLAG_CAP_WORDS; // 8192 (0x00020000) 14th bit
                break;
            case "sentences":
                inputType = inputType | android.text.InputType.TYPE_TEXT_FLAG_CAP_SENTENCES;
                // 16384(0x00040000) 15th bit
                break;
            case "allcharacters":
                inputType = inputType | android.text.InputType.TYPE_TEXT_FLAG_CAP_CHARACTERS;
                // 4096 (0x00010000) 13th bit
                break;
            default:
                break;
        }

        // add keyboardType flags.
        // They override previous if set.
        switch (this.keyboardType) {
            case "datetime":
                inputType = android.text.InputType.TYPE_CLASS_DATETIME |
                    android.text.InputType.TYPE_DATETIME_VARIATION_NORMAL;
                break;
            case "phone":
                inputType = android.text.InputType.TYPE_CLASS_PHONE;
                break;
            case "number":
                inputType = android.text.InputType.TYPE_CLASS_NUMBER |
                    android.text.InputType.TYPE_NUMBER_VARIATION_NORMAL |
                    android.text.InputType.TYPE_NUMBER_FLAG_SIGNED |
                    android.text.InputType.TYPE_NUMBER_FLAG_DECIMAL;
                break;
            case "url":
                inputType = android.text.InputType.TYPE_CLASS_TEXT |
                    android.text.InputType.TYPE_TEXT_VARIATION_URI;
                break;
            case "email":
                inputType = android.text.InputType.TYPE_CLASS_TEXT |
                    android.text.InputType.TYPE_TEXT_VARIATION_EMAIL_ADDRESS;
                break;
            default:
                break;

        }
        // @ts-ignore
        this._setInputType(inputType);
    }

    public [whiteSpaceProperty.getDefault](): WhiteSpace {
        return "nowrap";
    }
    public [whiteSpaceProperty.setNative](value: WhiteSpace) {
        // Don't change it otherwise TextField will go to multiline mode.
    }

    public _onReturnPress() {
        // @ts-ignore
        this.notify({ eventName: TextField.returnPressEvent, object: this });
    }

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

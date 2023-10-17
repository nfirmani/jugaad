// customDialog.tsx
import * as React from 'react';
import { inject, injectable } from 'inversify';
import { ReactDialog } from '@theia/core/lib/browser/dialogs/react-dialog';
import { DialogProps } from '@theia/core/lib/browser/dialogs';



//  Define input parameters 
@injectable()
export class CustomDialogProps extends DialogProps {
    readonly text: string;
    readonly okValue: string;
    readonly cancelValue: string;
}

//  Define return 
interface CustomDialogValue {
    text: string;
}

@injectable()
export class CustomDialog extends ReactDialog<CustomDialogValue> {
    protected readonly text: string;

    constructor(
        @inject(CustomDialogProps) protected readonly props: CustomDialogProps
    ) {
        super(props);
        const { text, okValue, cancelValue } = this.props;
        this.text = text;
        this.appendCloseButton(cancelValue);
        this.appendAcceptButton(okValue);
    }

    protected render(): React.ReactNode {
        return (
            <div>
                {this.text}
            </div>
        );
    }

    get value(): CustomDialogValue {
        return {
            text: this.text
        }
    }
}





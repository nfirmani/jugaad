import * as React from 'react';
import { injectable, postConstruct, inject } from '@theia/core/shared/inversify';
//import { AlertMessage } from '@theia/core/lib/browser/widgets/alert-message';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
import { MessageService } from '@theia/core';
import { Message } from '@theia/core/lib/browser';
//import InsertImp from './it-nelson-fin-imp-ins';
//import Checkout from './Checkout';
import Checkoutest from './Checkoutest';

@injectable()
export class ItNelsonFinImpWidget extends ReactWidget {

    static readonly ID = 'it-nelson-fin-imp:widget';
    static readonly LABEL = 'ItNelsonFinImp Widget';

    @inject(MessageService)
    protected readonly messageService!: MessageService;

    @postConstruct()
    protected init(): void {
        this.doInit()
    }
   
    protected async doInit(): Promise < void> {
        this.id = ItNelsonFinImpWidget.ID;
        this.title.label = ItNelsonFinImpWidget.LABEL;
        this.title.caption = ItNelsonFinImpWidget.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-window-maximize'; // example widget icon.
        this.update();
    }

    render(): React.ReactElement {
        // const header = `Inserimento impegno`;
        return <div id='widget-container'>
            {/* <AlertMessage type='INFO' header={header} />   <InsertImp/>
            <button id='displayMessageButton' className='theia-button secondary' title='salva' onClick={_a => this.displayMessage()}>Display Message</button> */}

            {/*
            <Checkout/>
            */}

            <Checkoutest/>

        </div>
    }

    protected displayMessage(): void {
        this.messageService.info('Congratulations: ItNelsonFinImp Widget Successfully Created!');
    }

    protected onActivateRequest(msg: Message): void {
        super.onActivateRequest(msg);
        const htmlElement = document.getElementById('displayMessageButton');
        if (htmlElement) {
            htmlElement.focus();
        }
    }

}

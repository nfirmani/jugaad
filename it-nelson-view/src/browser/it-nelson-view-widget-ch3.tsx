import * as React from 'react';
import { injectable, postConstruct, inject } from '@theia/core/shared/inversify';
import { AlertMessage } from '@theia/core/lib/browser/widgets/alert-message';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
import { MessageService } from '@theia/core';
import { Message } from '@theia/core/lib/browser';
import { AppMessage } from './components/AppMessage';


const user = {
    id: 1,
    name: "Nelson",
    image: "https://github.com/nfirmani.png"   
    /* image: "" */
    };


@injectable()
export class ItNelsonViewWidget extends ReactWidget {

    static readonly ID = 'it-nelson-view:widget';
    static readonly LABEL = 'ItNelsonView Widget';

    @inject(MessageService)
    protected readonly messageService!: MessageService;

    @postConstruct()
    protected init(): void {
        this.doInit()
    }

    protected async doInit(): Promise <void> {
        this.id = ItNelsonViewWidget.ID;
        this.title.label = ItNelsonViewWidget.LABEL;
        this.title.caption = ItNelsonViewWidget.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-window-maximize'; // example widget icon.
        this.update();
    }

    render(): React.ReactElement {
        const header = `this widget which simply calls the messageService
        in order to display an info message to end users.`;
        
        return <div id='it-nelson-view-widget-container'> 
            <h2>Tutorial React</h2>            
            {/* <AppMessage id={1} name={'nelson'}></AppMessage> */}
            {/* <AppMessage id={user.id} name={user.name}></AppMessage> */}
            <AppMessage {...user}></AppMessage>
            <AlertMessage type='INFO' header={header} />
            <button id='displayMessageButton' className='theia-button secondary' title='Display Message' onClick={_a => this.displayMessage()}>Display Message</button>
        </div>
    

    
    }

    protected displayMessage(): void {
        this.messageService.info('Congratulations: ItNelsonView Widget Successfully Created!');
    }

    protected onActivateRequest(msg: Message): void {
        super.onActivateRequest(msg);
        const htmlElement = document.getElementById('displayMessageButton');
        if (htmlElement) {
            htmlElement.focus();
        }
    }

}

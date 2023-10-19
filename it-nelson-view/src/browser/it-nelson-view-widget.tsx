import * as React from 'react';
import { injectable, postConstruct, inject } from '@theia/core/shared/inversify';
//import { AlertMessage } from '@theia/core/lib/browser/widgets/alert-message';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
import { MessageService } from '@theia/core';
import { Message } from '@theia/core/lib/browser';
import Sidebar from './components/Sidebar';
import Main from './components/Main';


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
        
        
        return <div className="container-fluid"> 
                 <div className="row">
            <h2>Tutorial React</h2>            
            {/* <AppMessage id={1} name={'nelson'}></AppMessage> */}
            {/* <AppMessage id={user.id} name={user.name}></AppMessage> */}
            {/* <AppMessage {...user}></AppMessage> */}
            <Sidebar {...user} />
            <Main />
           
        </div>
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

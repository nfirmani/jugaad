import * as React from 'react';
import { injectable, postConstruct, inject } from 'inversify';
//import { AlertMessage } from '@theia/core/lib/browser/widgets/alert-message';
//import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
import { BaseWidget } from "@theia/core/lib/browser";
import { Disposable, MessageService } from '@theia/core';
import ReactDOM = require('react-dom');
//import { CrudView } from './crud_01';
//import { CrudView } from './crud_02';
//import { CrudView } from './crud_03';

import { CrudView } from './crud_04';

//import { Rest01View } from './rest-01';
//import { GApiTest } from './g-api-test';

@injectable()
export class CRUDFruitWidget extends BaseWidget {

    static readonly ID = 'crud-fruit-widget:widget';
    static readonly LABEL = 'CRUD Fruit Widget';  

    @inject(MessageService)
    protected readonly messageService!: MessageService;

    @postConstruct()
    protected init(): void {
        this.doInit()
    }
    
    protected async doInit(): Promise < void> {
        this.id = CRUDFruitWidget.ID;
        this.title.label = CRUDFruitWidget.LABEL;
        this.title.caption = CRUDFruitWidget.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-window-maximize'; // example widget icon.
        //this.update();

        this.node.style.padding = '0px 15px';
        this.node.style.color = 'red'; // 'var(--theia-ui-font-color1)';
        this.toDispose.push(Disposable.create(() => ReactDOM.unmountComponentAtNode(this.node)));

        ReactDOM.render(<CrudView />, this.node);
        //ReactDOM.render(<Rest01View />, this.node);
        //ReactDOM.render(<GApiTest />, this.node);
        
    }


  /*
    
    protected render(): React.ReactNode {
        const header = `This is a sample widget which simply calls the messageService
        in order to display an info message to end users.`;
        return <div id='widget-container'>
            <AlertMessage type='INFO' header={header} />
            <h2>Test</h2>
            <button className='theia-button secondary' title='Display Message' onClick={_a => this.displayMessage()}>Display Message</button>
            <div style={{display: 'grid', gridTemplateColumns: 'max-content 1fr max-content'}}>
                <div style={{verticalAlign: "center"}}>
                    My Field:
                </div>
                <input type="text"/>
                <button>Apri</button>

                <h2>errori</h2> 

                { JSON.stringify(this.state.fruits)}

                { JSON.stringify(this.state.hasErrors)}

                <h2>test</h2> 

            </div>
        </div>
    }cd 
    
 

    protected displayMessage(): void {
        this.messageService.info('Congratulations: TestWidget Widget Successfully Created!');
    }
*/

}

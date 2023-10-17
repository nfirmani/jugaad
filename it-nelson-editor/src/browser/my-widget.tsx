//import { Disposable } from '@theia/core';
//import { postConstruct } from '@theia/core/shared/inversify';
import { EditorWidget } from '@theia/editor/lib/browser';
//import React = require('react');
//import ReactDOM = require('react-dom');
//import { MyWidgetE1 } from './my-widget-e1';

export class MyWidget extends EditorWidget {

    /*
    static readonly ID = 'crud-fruit-widget:widget';
    static readonly LABEL = 'CRUD Fruit Widget';

    @postConstruct()
    protected async init(): Promise < void> {
        this.id = MyWidget.ID;
        this.title.label = MyWidget.LABEL;
        this.title.caption = MyWidget.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-window-maximize'; // example widget icon.
        //this.update();

        this.node.style.padding = '0px 15px';
        this.node.style.color = 'red'; // 'var(--theia-ui-font-color1)';
        this.toDispose.push(Disposable.create(() => ReactDOM.unmountComponentAtNode(this.node)));

        ReactDOM.render(<MyWidgetE1 />, this.node);

      // ReactDOM.render(<MyWidgetE1 />, this.node);
    };
   */
}
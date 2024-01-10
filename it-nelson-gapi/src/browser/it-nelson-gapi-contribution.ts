import { injectable,  } from '@theia/core/shared/inversify';
import {  CommandRegistry,  MenuModelRegistry,  } from '@theia/core/lib/common';
import { AbstractViewContribution, CommonMenus } from '@theia/core/lib/browser';
import { GApiWidget } from './gapi-widget';


export const ItNelsonGapiCommand = {
    id: 'ItNelsonGapi.command',
    label: 'Google api'
};

@injectable()
export class GApiViewContribution extends AbstractViewContribution<GApiWidget> {

constructor() {
    super({
        widgetId: GApiWidget.ID,
        widgetName: GApiWidget.LABEL,
        defaultWidgetOptions: { area: 'main' },
        //toggleCommandId: TestWidgetCommand.id //comando che viene aggiunto al menu View, ma se il menu view viene nascosto continua ad apparire il sottomenu
    });
}


registerCommands(commands: CommandRegistry): void {
    commands.registerCommand(ItNelsonGapiCommand, {
        execute: () => super.openView({ activate: false, reveal: true })
    });
}

registerMenus(menus: MenuModelRegistry): void {
    super.registerMenus(menus);

    menus.registerMenuAction(CommonMenus.HELP, {
        commandId: ItNelsonGapiCommand.id,
        label: 'google-api'
    });
}    
}

//una funzione che mi restituisce un oggetto json


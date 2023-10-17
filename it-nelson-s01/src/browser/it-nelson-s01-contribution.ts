import { injectable, inject } from '@theia/core/shared/inversify';
import { Command, CommandContribution, CommandRegistry,  MAIN_MENU_BAR,  MenuContribution, MenuModelRegistry, MenuNode, MessageService,  SubMenuOptions } from '@theia/core/lib/common';
import { codicon, CommonMenus ,  ConfirmDialog, QuickInputService } from '@theia/core/lib/browser';
import { FileDialogService } from '@theia/filesystem/lib/browser';
import { CustomDialog } from './custom-dialog';

import { EditorMainMenu } from "@theia/editor/lib/browser";



import { MonacoMenus } from "@theia/monaco/lib/browser/monaco-menu";

import {TerminalMenus} from "@theia/terminal/lib/browser/terminal-frontend-contribution"



export const GEN_COMMAND = {
    id: 'ItNelsonS01.command',
    label: 'Say Hello'
};

export const FILE_DIALOG = {
    id: 'ItNelsonS01.file.dialog',
    label: 'Apri file',
    iconClass: codicon('folder-opened')
};

export const SAVE_DIALOG = {
    id: 'ItNelsonS01.save.dialog',
    label: 'Salva file',
    category: 'dialog'
};

export const CUSTOM_DIALOG = {
    id: 'ItNelsonS01.custom.dialog',
    label: 'Custom dialogo',
    category: 'dialog'
};

export const DIALOG_BOX = {
    id: 'ItNelsonS01.dialog.box',
    label: 'Box di conferma',
    category: 'dialog'
};

export const SampleQuickInputCommand: Command = {
    id: 'sample-quick-input-command',
    category: 'Quick Input',
    label: 'Test Positive Integer',
    iconClass: codicon('github-action')
    
};

const SampleCommandWithProgressMessage: Command = {
    id: 'sample-command-with-progress',
    label: 'Comando con Progress Message'
};

const SampleCommandWithIndeterminateProgressMessage: Command = {
    id: 'sample-command-with-indeterminate-progress',
    label: 'Comando con indeterminato Progress Message'
};


export namespace CommonMenusEs {

    export const ES_FILE = [...MAIN_MENU_BAR, '1_esfile'];
    export const ES_FILE_NEW = [...ES_FILE, 'gr1'];
    export const ES_FILE_OPEN = [...ES_FILE, 'gr1'];
    export const ES_FILE_SAVE = [...ES_FILE, 'gr2'];
    export const ES_FILE_AUTOSAVE = [...ES_FILE, 'gr2'];    
    export const ES_FILE_SETTINGS = [...ES_FILE, 'gr2'];
 //   export const ES_FILE_SETTINGS_SUBMENU = [...ES_FILE_SETTINGS, '1_essettings_submenu'];
 //   export const ES_FILE_SETTINGS_SUBMENU_OPEN = [...ES_FILE_SETTINGS_SUBMENU, '1_essettings_submenu_open'];
 //   export const ES_FILE_SETTINGS_SUBMENU_THEME = [...ES_FILE_SETTINGS_SUBMENU, '2_essettings_submenu_theme'];
 //   export const ES_FILE_CLOSE = [...ES_FILE, '6_esclose'];
}

export const FILE_120 = {
    id: 'ItNelsonS01.FILE_120',
    label: 'FILE 120'
};


@injectable()
export class ItNelsonS01CommandContribution implements CommandContribution {
    
   
    constructor(
        @inject(MessageService) private readonly messageService: MessageService,
        @inject(FileDialogService) protected readonly fileDialogService: FileDialogService,
        @inject(QuickInputService) protected readonly quickInputService: QuickInputService
       
    ) { }

    
    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(GEN_COMMAND, {
            execute: () => this.messageService.info('Hello World!')
        });
         

        registry.registerCommand(FILE_DIALOG, {
            execute: async () => {
                const uri = await this.fileDialogService.showOpenDialog({
                    title: ' Choose a directory ',
                    canSelectFiles: false,
                    canSelectFolders: true,
                    openLabel: ' choice ',
                });
         
                console.log(' Choose the path ', uri);
            }
        });

        registry.registerCommand(SAVE_DIALOG, {
            execute: async () => {
                const uri = await this.fileDialogService.showSaveDialog({
                    title: ' Select Save directory ',
                    saveLabel: ' preservation '
                });
         
                console.log(' Save the path ', uri);
             }
        });
       
        registry.registerCommand(CUSTOM_DIALOG, {
            execute: async () => {
               const text = await new CustomDialog({
                   title: ' Finestra di dialogo ',
                   text: ' contenuto della finestra ',
                   okValue: ' Invia ',
                   cancelValue: ' Cancella '
               }).open();
        
                console.log(' Return to text ', text);
            }
        });   

        registry.registerCommand(DIALOG_BOX, {
            execute: async () => {
                const confirmed = await new ConfirmDialog({
                    title: ' This is a confirmation box ',
                    msg: ' Are you sure to execute ？',
                    ok: ' confirm ',
                    cancel: ' Cancel '
                }).open();
        
                console.log(' Are you sure ', confirmed);
            }
        });

        registry.registerCommand(SampleQuickInputCommand, {

            isEnabled: selection => true,
            isVisible: selection => true,
            
            execute: async () => {
                const result = await this.quickInputService.input({
                    placeHolder: 'Please provide a positive integer',
                    validateInput: async (input: string) => {
                        const numericValue = Number(input);
                        if (isNaN(numericValue)) {
                            return 'Invalid: NaN';
                        } else if (numericValue % 2 === 1) {
                            return 'Invalid: Odd Number';
                        } else if (numericValue < 0) {
                            return 'Invalid: Negative Number';
                        } else if (!Number.isInteger(numericValue)) {
                            return 'Invalid: Only Integers Allowed';
                        }
                    }
                });
                if (result) {
                    this.messageService.info(`Positive Integer: ${result}`);
                }
            }
        });

        registry.registerCommand(SampleCommandWithProgressMessage, {
            execute: () => {
                this.messageService
                    .showProgress({
                        text: 'Starting to report progress',
                    })
                    .then(progress => {
                        window.setTimeout(() => {
                            progress.report({
                                message: 'First step completed',
                                work: { done: 25, total: 100 }
                            });
                        }, 2000);
                        window.setTimeout(() => {
                            progress.report({
                                message: 'Next step completed',
                                work: { done: 60, total: 100 }
                            });
                        }, 4000);
                        window.setTimeout(() => {
                            progress.report({
                                message: 'Complete',
                                work: { done: 100, total: 100 }
                            });
                        }, 6000);
                        window.setTimeout(() => progress.cancel(), 7000);
                    });
            }
        });

        registry.registerCommand(SampleCommandWithIndeterminateProgressMessage, {
            execute: () => {
                this.messageService
                    .showProgress({
                        text: 'Starting to report indeterminate progress',
                    })
                    .then(progress => {
                        window.setTimeout(() => {
                            progress.report({
                                message: 'First step completed',
                            });
                        }, 2000);
                        window.setTimeout(() => {
                            progress.report({
                                message: 'Next step completed',
                            });
                        }, 4000);
                        window.setTimeout(() => {
                            progress.report({
                                message: 'Complete',
                            });
                        }, 6000);
                        window.setTimeout(() => progress.cancel(), 7000);
                    });
            }
        });

    }
}

@injectable()
export class ItNelsonS01MenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {

        menus.registerSubmenu(CommonMenusEs.ES_FILE, 'Menu A');

        menus.registerMenuAction(CommonMenusEs.ES_FILE_NEW, {
            commandId: SampleQuickInputCommand.id           
        });

        menus.registerMenuAction(CommonMenusEs.ES_FILE_OPEN, {
            commandId: SampleQuickInputCommand.id
        });

        menus.registerMenuAction(CommonMenusEs.ES_FILE_SAVE, {
            commandId: CUSTOM_DIALOG.id
        });

        menus.registerMenuAction(CommonMenusEs.ES_FILE_AUTOSAVE, {
            commandId: DIALOG_BOX.id
        });

        menus.registerMenuAction(CommonMenusEs.ES_FILE_SETTINGS, {
            commandId: FILE_DIALOG.id
        });
        
        const subMenuPath = [...MAIN_MENU_BAR, 'MENU_B'];

        menus.registerSubmenu(subMenuPath, 'Menu B', {
            order: '2' // ordine posizione voce menu a partire da destra (File Menu, Sample Menu)
        });

        menus.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: GEN_COMMAND.id,
            label: GEN_COMMAND.label
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: FILE_DIALOG.id,           
            order: '1'
        });

        menus.registerMenuAction(subMenuPath, {
            commandId: SAVE_DIALOG.id,
            order: '2'         
        });

        menus.registerMenuAction(subMenuPath, {
            commandId: CUSTOM_DIALOG.id,
            order: '3'
        });

        menus.registerMenuAction(subMenuPath, {
            commandId: DIALOG_BOX.id,
            order: '4'
        });

        menus.registerMenuAction(subMenuPath, {
            commandId: SampleQuickInputCommand.id,            
            order: '5'
        });

        const subSubMenuPath = [...subMenuPath, 'SUB_MENU'];
        menus.registerSubmenu(subSubMenuPath, 'Sub menu', { order: '2' });

        menus.registerMenuAction(subSubMenuPath, {
            commandId: SampleCommandWithProgressMessage.id,            
            order: '1'
        });

        menus.registerMenuAction(subSubMenuPath, {
            commandId: SampleCommandWithIndeterminateProgressMessage.id,            
            order: '3'
        });

        
        const placeholder = new PlaceholderMenuNode([...subSubMenuPath, 'placeholder'].join('-'), 'Placeholder', { order: '0' });       
        
        
        menus.registerMenuNode(subSubMenuPath, placeholder);

        menus.registerMenuAction(subSubMenuPath, {
            commandId: GEN_COMMAND.id,
            label: GEN_COMMAND.label
        });

        menus.registerMenuAction(subSubMenuPath, { commandId: 'invalid-command' });


        //menus.unregisterMenuAction(CommonMenus.HELP[CommonMenus.HELP.length - 1], CommonMenus.HELP);
        //menus.unregisterMenuAction(CommonCommands.ABOUT_COMMAND);
        //menus.unregisterMenuAction(CommonMenus.HELP.slice(-1)[0]);
        //menus.unregisterMenuAction(CommonMenus.VIEW.slice(-1)[0]);
        //menus.unregisterMenuAction(CommonMenus.EDIT_UNDO[CommonMenus.EDIT_UNDO.length - 1]);
        //menus.unregisterMenuAction(DebugMenus.DEBUG.slice(-1)[0]);
        
        menus.unregisterMenuAction(EditorMainMenu.GO.slice(-1)[0]); 
        menus.unregisterMenuAction(MonacoMenus.SELECTION.slice(-1)[0]);

        menus.unregisterMenuAction(TerminalMenus.TERMINAL.slice(-1)[0]);
        


        //menus.unregisterMenuAction(CommonMenus.FILE_SETTINGS_SUBMENU_OPEN[1]);  //menu: File
        menus.unregisterMenuAction(CommonMenus.FILE[1]); //menu: File

        //menus.unregisterMenuAction(CommonMenus.EDIT.slice(-1)[0]); //menu: Edit
        menus.unregisterMenuAction(CommonMenus.EDIT_UNDO.slice(-1)[0]);
        menus.unregisterMenuAction(CommonMenus.EDIT_CLIPBOARD.slice(-1)[0]);
        //menus.unregisterMenuAction(CommonMenus.EDIT_FIND.slice(-1)[0]);
        
        
        //menus.unregisterMenuAction(CommonMenus.FILE_NEW[2]);  //menu File/{new file, new folder, new window}

        //menus.unregisterMenuAction(CommonMenus.VIEW_TOGGLE.slice(-1)[0]); 

        //menus.unregisterMenuAction('2_editor_submenu'); 
        menus.unregisterMenuAction(CommonMenus.VIEW_EDITOR_SUBMENU.slice(-1)[0]);

        //menus.unregisterMenuAction(CommonMenus.VIEW_EDITOR_SUBMENU[1]);        

        console.log('menu view 2');  
        console.log(CommonMenus.VIEW_TOGGLE.slice(-1));      
        console.log(CommonMenus.VIEW_TOGGLE.slice(-1)[0]);
        console.log(CommonMenus.VIEW_EDITOR_SUBMENU.slice(-1));
        
        console.log(MonacoMenus.SELECTION);
        console.log(CommonMenus.FILE_NEW);
        console.log(CommonMenus.FILE);  //1_new

    }
}

export class PlaceholderMenuNode implements MenuNode {

    constructor(readonly id: string, public readonly label: string, protected options?: SubMenuOptions) { }

    get icon(): string | undefined {
        return this.options?.iconClass;
    }

    get sortString(): string {
        return this.options?.order || this.label;
    }

}

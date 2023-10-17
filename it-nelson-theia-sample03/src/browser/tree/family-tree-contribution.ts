import { AbstractViewContribution, CommonMenus } from "@theia/core/lib/browser";
import { injectable, inject } from "inversify";
import { FamilyTreeWidget } from "./family-tree-widget";
import { Command, CommandRegistry,  MenuModelRegistry, MessageService } from "@theia/core";

export const FamilyTreeWidgetCommand: Command = {
  id: "family-tree-widget:command"
};


export const HelloWorld01Command: Command = {
    id: "hello-world01:command"
  };

export const HelloWorld02Command: Command = {
    id: "hello-world02:command"
  };

@injectable()
export class FamilyTreeWidgetContribution extends AbstractViewContribution<FamilyTreeWidget> {

  constructor() {
    super({
      widgetId: FamilyTreeWidget.ID,
      widgetName: FamilyTreeWidget.LABEL,
      defaultWidgetOptions: { area: "left" },
      
      //toggleCommandId: FamilyTreeWidgetCommand.id   //comando che viene aggiunto al menu View, ma se il menu view viene nascosto continua ad apparire il sottomenu
    });
  }

  
  @inject(MessageService) private readonly messageService: MessageService;



  registerCommands(commands: CommandRegistry): void {
    commands.registerCommand(FamilyTreeWidgetCommand, {
      execute: () => super.openView({ activate: false, reveal: true })
    });

   
    commands.registerCommand(HelloWorld01Command, {
        execute: () => this.messageService.info('Hello World-01 !')
      });

      
    commands.registerCommand(HelloWorld02Command, {
        execute: () => this.messageService.info('Hello World-02 !')
      });
  }


  registerMenus(menus: MenuModelRegistry): void {
    super.registerMenus(menus);

    menus.registerMenuAction(CommonMenus.HELP, {
            commandId: FamilyTreeWidgetCommand.id,
            label: 'family-tree-widget'
        });



  }
}

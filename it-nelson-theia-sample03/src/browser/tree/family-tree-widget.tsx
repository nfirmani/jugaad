import * as React from '@theia/core/shared/react';
import {
  ContextMenuRenderer,
  TreeModel,
  TreeProps,
  TreeWidget,
  TreeNode,
  ExpandableTreeNode,
  NodeProps,
  codicon
} from "@theia/core/lib/browser";
import { CommandService } from "@theia/core/lib/common/command";
import { inject, injectable } from "inversify";
//import { TestWidgetCommand } from "../my-tree-contribution";
import { FamilyRootNode, MemberNode } from "./family-tree";

import { HelloWorld01Command } from "./family-tree-contribution";

//import { GEN_COMMAND as HELP_COMMAND } from 'it-nelson-s01/lib/browser/it-nelson-s01-contribution';

import { GEN_COMMAND as HELP_COMMAND } from 'it-nelson-s01/lib/browser/it-nelson-s01-contribution';




//import { LabelProvider } from "@theia/core/lib/browser/label-provider";



@injectable()
export class FamilyTreeWidget extends TreeWidget {
  static readonly ID = "family-tree-widget";
  static readonly LABEL = "Family Tree";

  //0505
 @inject(CommandService) protected readonly commandService: CommandService;

 constructor(
    @inject(TreeProps) readonly props: TreeProps,
    @inject(TreeModel) readonly model: TreeModel,
    //@inject(LabelProvider) protected readonly labelProvider: LabelProvider,
    @inject(ContextMenuRenderer) contextMenuRenderer: ContextMenuRenderer
  ) {
    super(props, model, contextMenuRenderer);

    this.title.label = FamilyTreeWidget.LABEL;
    this.id = FamilyTreeWidget.ID;
    this.title.iconClass = 'fa fa-window-maximize';   //fa fa-window-maximize   this.title.iconClass = 'fa mytree-view-tab-icon'


    const family: Family = {
        name: "Vestrit",
        members: [
          {
            firstName: "Tutorials",
            nickName: "tut",
            children: [
              {
                firstName: "TypeScript",
                nickName: "ts",
                children: [
                  {
                    firstName: "Chapter 01",
                    nickName: "ch01"
                  },
                  {
                    firstName: "Chapter 02",
                    nickName: "ch02"                    
                  },  
                  {
                    firstName: "Chapter 03",
                    nickName: "ch03"
                  },
                  {
                    firstName: "Chapter 04",
                    nickName: "ch04"                    
                  },  
                  {
                    firstName: "Chapter 05",
                    nickName: "ch05"
                  }
                ]
              },

              {
                firstName: "React",
                nickName: "",
                children: [
                    {
                      firstName: "Introducing JSX",
                      nickName: "ch01"
                    },
                    {
                      firstName: "Rendering Elements",
                      nickName: "ch02"                      
                    },  
                    {
                      firstName: "Components and Props",
                      nickName: "ch03"
                    },
                    {
                      firstName: "State and Lifecycle",
                      nickName: "ch04"                      
                    },  
                    {
                      firstName: "Handling Events",
                      nickName: "ch05"
                    },
                    {
                      firstName: "Conditional Rendering",
                      nickName: "ch06"
                    },
                    {
                      firstName: "Lists and Keys",
                      nickName: "ch07"
                        
                    },  
                    {
                      firstName: "Forms",
                      nickName: "ch08"
                    },
                    {
                      firstName: "Lifting State Up",
                      nickName: "ch09"                          
                    },  
                    {
                      firstName: "Composition vs Inheritance",
                      nickName: "ch108"
                    }
                  ]
              }
            ]
          },

          {
          firstName: "Eclipse Theia Development",
          nickName: "dev",
          children: [
            {
              firstName: "Commands, Menus and Keybindings",
              nickName: "",              
            },
            {
              firstName: "Widgets",
              nickName: "",              
            },
            {
              firstName: "Preferences",
              nickName: "",                
            },  
            {
              firstName: "Label Provider",
              nickName: "",                
            },
            {
                firstName: "Message Service",
                nickName: "",                  
            },    
            {
                firstName: "Property View",
                nickName: "",                  
            },
            {
                firstName: "Message Service",
                nickName: "",                  
            },    
            {
                firstName: "Property View",
                nickName: "",                  
            } 
            ]
          }
        ]
      };
  
    


    const root: FamilyRootNode = {
      id: "family-root",
      name: "family-root",
      visible: false,
      parent: undefined,
      children: [],
      family
    };

    this.model.root = root;
  }

  protected isExpandable(node: TreeNode): node is ExpandableTreeNode {
    if (FamilyRootNode.is(node)) return true;

    if (MemberNode.is(node) && node.member.children)
      return node.member.children.length > 0;

    return false;
  }

  protected handleDblClickEvent(node: TreeNode | undefined , event: React.MouseEvent<HTMLElement>): void {
    //this.model.openNode(node);
    //super.handleDblClickEvent(node, event);


//this.commandService.executeCommand(HelloWorld01Command.id);   //
//const treeNode = this.model.getNode(node.id);

if (node?.id==='Tutorialstut') {
     this.commandService.executeCommand(HelloWorld01Command.id);
} else if (node?.id=== 'Eclipse Theia Developmentdev') {
     //this.commandService.executeCommand(HelloWorld02Command.id);
      this.commandService.executeCommand(HELP_COMMAND.id);
} else {
    console.log('nodo non identificato');
}


    

    console.log('Id=');

    console.log(node?.id);

    

    //console.log(node?.description)

    //console.log('label provider=');

    //console.log(this.labelProvider.getIcon)

    //event.stopPropagation();
}



renderIcon(node: TreeNode, props: NodeProps): React.ReactNode {

    /*
    if (OutlineSymbolInformationNode.is(node)) {
            return <div className={'symbol-icon symbol-icon-center ' + node.iconClass}></div>;
        }
        return undefined;
    */    
    
    return <div className={codicon('terminal-debian')}></div>;    
  
}


}

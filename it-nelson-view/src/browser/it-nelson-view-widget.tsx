import * as React from "react";
import {
  injectable,
  postConstruct,
  inject,
} from "@theia/core/shared/inversify";
//import { AlertMessage } from '@theia/core/lib/browser/widgets/alert-message';
import { ReactWidget } from "@theia/core/lib/browser/widgets/react-widget";
import { MessageService } from "@theia/core";
import { Message } from "@theia/core/lib/browser";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Layout, { LeftCol, RightCol } from "./components/Layout";
import User from "./components/User";
import TodoList from "./components/TodoList";
import ListNames from "./components/ListNames";

const user = {
  id: 1,
  name: "Nelson",
  image: "https://github.com/nfirmani.png",
  /* image: "" */
};

const lists = [
    { id: 1, name: "Importante", undone_count: 0 },
    { id: 2, name: "Film da vedere", undone_count: 2 },
    { id: 3, name: "Libri da leggere", undone_count: 0 },
    ];

@injectable()
export class ItNelsonViewWidget extends ReactWidget {
  static readonly ID = "it-nelson-view:widget";
  static readonly LABEL = "ItNelsonView Widget";

  @inject(MessageService)
  protected readonly messageService!: MessageService;

  @postConstruct()
  protected init(): void {
    this.doInit();
  }

  protected async doInit(): Promise<void> {
    this.id = ItNelsonViewWidget.ID;
    this.title.label = ItNelsonViewWidget.LABEL;
    this.title.caption = ItNelsonViewWidget.LABEL;
    this.title.closable = true;
    this.title.iconClass = "fa fa-window-maximize"; // example widget icon.
    this.update();
  }

  render(): React.ReactElement {
    return (
      <Layout>
        <LeftCol>
          <User id={0} name={user.name} image={user.image} />
          <hr /> 
          <ListNames lists={lists} selectedListIdx={1} />
        </LeftCol>
        <RightCol>
           <TodoList /> 
        </RightCol>
        <Sidebar {...user} />
        <Main />
      </Layout>
    );
  }

  protected displayMessage(): void {
    this.messageService.info(
      "Congratulations: ItNelsonView Widget Successfully Created!"
    );
  }

  protected onActivateRequest(msg: Message): void {
    super.onActivateRequest(msg);
    const htmlElement = document.getElementById("displayMessageButton");
    if (htmlElement) {
      htmlElement.focus();
    }
  }
}

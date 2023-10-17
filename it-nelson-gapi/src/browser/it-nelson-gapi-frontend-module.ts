/**
 * Generated using theia-extension-generator
 */
import { GApiViewContribution,  } from './it-nelson-gapi-contribution';

import { ContainerModule } from '@theia/core/shared/inversify';
//import { GApiWidget } from './gapi-widget';
import { bindViewContribution } from '@theia/core/lib/browser/shell/view-contribution';
import { FrontendApplicationContribution, WebSocketConnectionProvider, WidgetFactory } from '@theia/core/lib/browser';

import { GApiWidget } from './gapi-widget';
import { MyService, MyServicePath } from '../common/srv-protocol';

export default new ContainerModule(bind => {
    // add your contribution bindings here
    bindViewContribution(bind, GApiViewContribution);
    bind(FrontendApplicationContribution).toService(GApiViewContribution);

    bind(MyService).toDynamicValue(context => WebSocketConnectionProvider.createProxy(context.container, MyServicePath)).inSingletonScope();

    bind(GApiWidget).toSelf();
    bind(WidgetFactory)
      .toDynamicValue(ctx => ({
        id: GApiWidget.ID,
        createWidget: () => ctx.container.get<GApiWidget>(GApiWidget)
      }))
      .inSingletonScope();



});

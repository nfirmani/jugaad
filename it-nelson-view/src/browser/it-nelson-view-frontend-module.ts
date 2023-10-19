import { ContainerModule } from '@theia/core/shared/inversify';
import { ItNelsonViewWidget } from './it-nelson-view-widget';
import { ItNelsonViewContribution } from './it-nelson-view-contribution';
import { bindViewContribution, FrontendApplicationContribution, WidgetFactory } from '@theia/core/lib/browser';

import '../../src/browser/style/index.css';

import 'bootstrap/dist/css/bootstrap.css';


export default new ContainerModule(bind => {
    bindViewContribution(bind, ItNelsonViewContribution);
    bind(FrontendApplicationContribution).toService(ItNelsonViewContribution);
    bind(ItNelsonViewWidget).toSelf();
    bind(WidgetFactory).toDynamicValue(ctx => ({
        id: ItNelsonViewWidget.ID,
        createWidget: () => ctx.container.get<ItNelsonViewWidget>(ItNelsonViewWidget)
    })).inSingletonScope();
});

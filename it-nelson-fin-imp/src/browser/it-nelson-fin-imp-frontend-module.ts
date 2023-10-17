import { ContainerModule } from '@theia/core/shared/inversify';
import { ItNelsonFinImpWidget } from './it-nelson-fin-imp-widget';
import { ItNelsonFinImpContribution } from './it-nelson-fin-imp-contribution';
import { bindViewContribution, FrontendApplicationContribution, WidgetFactory } from '@theia/core/lib/browser';

import '../../src/browser/style/index.css';

export default new ContainerModule(bind => {
    bindViewContribution(bind, ItNelsonFinImpContribution);
    bind(FrontendApplicationContribution).toService(ItNelsonFinImpContribution);
    bind(ItNelsonFinImpWidget).toSelf();
    bind(WidgetFactory).toDynamicValue(ctx => ({
        id: ItNelsonFinImpWidget.ID,
        createWidget: () => ctx.container.get<ItNelsonFinImpWidget>(ItNelsonFinImpWidget)
    })).inSingletonScope();
});

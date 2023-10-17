import { ContainerModule } from '@theia/core/shared/inversify';
import { ItNelsonJoyDashboardWidget } from './it-nelson-joy-dashboard-widget';
import { ItNelsonJoyDashboardContribution } from './it-nelson-joy-dashboard-contribution';
import { bindViewContribution, FrontendApplicationContribution, WidgetFactory } from '@theia/core/lib/browser';

import '../../src/browser/style/index.css';

export default new ContainerModule(bind => {
    bindViewContribution(bind, ItNelsonJoyDashboardContribution);
    bind(FrontendApplicationContribution).toService(ItNelsonJoyDashboardContribution);
    bind(ItNelsonJoyDashboardWidget).toSelf();
    bind(WidgetFactory).toDynamicValue(ctx => ({
        id: ItNelsonJoyDashboardWidget.ID,
        createWidget: () => ctx.container.get<ItNelsonJoyDashboardWidget>(ItNelsonJoyDashboardWidget)
    })).inSingletonScope();
});

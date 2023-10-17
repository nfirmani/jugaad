import 'reflect-metadata';
import { MessageService } from '@theia/core';
import { ContainerModule, Container } from '@theia/core/shared/inversify';
import { ItNelsonJoyDashboardWidget } from './it-nelson-joy-dashboard-widget';
import { render } from '@testing-library/react'

describe('ItNelsonJoyDashboardWidget', () => {

    let widget: ItNelsonJoyDashboardWidget;

    beforeEach(async () => {
        const module = new ContainerModule( bind => {
            bind(MessageService).toConstantValue({
                info(message: string): void {
                    console.log(message);
                }
            } as MessageService);
            bind(ItNelsonJoyDashboardWidget).toSelf();
        });
        const container = new Container();
        container.load(module);
        widget = container.resolve<ItNelsonJoyDashboardWidget>(ItNelsonJoyDashboardWidget);
    });

    it('should render react node correctly', async () => {
        const element = render(widget.render());
        expect(element.queryByText('Display Message')).toBeTruthy();
    });

    it('should inject \'MessageService\'', () => {
        const spy = jest.spyOn(widget as any, 'displayMessage')
        widget['displayMessage']();
        expect(spy).toBeCalled();
    });

});

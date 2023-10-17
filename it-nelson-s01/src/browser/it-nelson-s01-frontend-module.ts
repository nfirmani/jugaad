/**
 * Generated using theia-extension-generator
 */
import { ItNelsonS01CommandContribution, ItNelsonS01MenuContribution } from './it-nelson-s01-contribution';
import { CommandContribution, MenuContribution } from '@theia/core/lib/common';
import { ContainerModule } from '@theia/core/shared/inversify';
import { CustomDialog, CustomDialogProps } from './custom-dialog';

export default new ContainerModule(bind => {
    // add your contribution bindings here
    bind(CommandContribution).to(ItNelsonS01CommandContribution);
    bind(MenuContribution).to(ItNelsonS01MenuContribution);
    bind(CustomDialogProps).toSelf();
    bind(CustomDialog).toSelf();
});

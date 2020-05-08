import { BaseLayout } from "@aequos/extensibility";
import { IPropertyPaneField, PropertyPaneTextField } from '@microsoft/sp-webpart-base';

/**
 * Custom Layout properties
 */
export interface ICustomLayoutProperties {
    myTextProperty: string;
}

export class Customlayout extends BaseLayout<ICustomLayoutProperties> {

    public getPropertyPaneFieldsConfiguration(availableFields: string[]): IPropertyPaneField<any>[] {

        // Initializes the property if not defined
        this.properties.myTextProperty  = this.properties.myTextProperty !== null ? this.properties.myTextProperty : "Default value";
 
        return [
            PropertyPaneTextField('customLayout.myTextProperty', {
                label: 'A custom layout property',
                placeholder: 'Fill a value'
            })
        ];
    }
}

import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'ReactGetItemsWebPartStrings';
import ReactGetItems from './components/ReactGetItems';
import { IReactGetItemsProps } from './components/IReactGetItemsProps';
import { IReactGetItemsWebPartProps } from './IReactGetItemsWebPartProps';

export default class ReactGetItemsWebPart extends BaseClientSideWebPart<IReactGetItemsWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IReactGetItemsProps > = React.createElement(
      ReactGetItems,
      {
        spHttpClient: this.context.spHttpClient,
        siteUrl: this.context.pageContext.web.absoluteUrl,
        listName: this.properties.listName
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('listName', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}

import { SPHttpClient } from '@microsoft/sp-http';
export interface IReactGetItemsProps {
  listName: string;
  spHttpClient: SPHttpClient;
  siteUrl: string;
}

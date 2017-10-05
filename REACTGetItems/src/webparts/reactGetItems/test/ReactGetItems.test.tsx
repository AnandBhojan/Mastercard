/// <reference types="mocha" />

import { SPHttpClient } from '@microsoft/sp-http';
import * as React from 'react';
import { assert, expect } from 'chai';
import { mount } from 'enzyme';
import GetItems from '../components/ReactGetItems';

declare const sinon;

describe('<ReactGetItems />', () => {
     let componentDidMountSpy;
    let renderedElement;
    const spHttpClient: SPHttpClient = this.context.spHttpClient;
    const descTxt = "TestList";
    const siteurls="https://abemc.sharepoint.com/sites/Dev/";
    before(() => {
          componentDidMountSpy = sinon.spy(GetItems.prototype, 'componentDidMount');
        renderedElement = mount(<GetItems listName={descTxt} spHttpClient={spHttpClient} siteUrl={siteurls}/>) ;
    });
    after(() => {
        componentDidMountSpy.restore();
    });
    it('<ReactGetItems /> should render something', () => {
        // Check if the component contains a paragraph element
        expect(renderedElement.find('div')).to.be.exist;
    });
    it('<ReactGetItems /> state results should be null', () => {
        expect(renderedElement.state('results')).to.be.null;
    });
    it('<ReactGetItems /> should call componentDidMount only once', () => {
        // Check if the componentDidMount is called once
        expect(componentDidMountSpy.calledOnce).to.equal(true);
    });
});
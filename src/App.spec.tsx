import React from 'react';
import { mount } from '@cypress/react';
import App from './App';

it('case 1', () => {
  mount(<App />);
  cy.get('a').contains('Learn React');
});

it('click the button triggering window.location.replace', () => {
  mount(<App />);
  cy.get('button').click();
  cy.location().should(loc => {
    expect(loc.pathname).to.match(/example/);
  });
});

it('case 2', () => {
  mount(<App />);
  cy.get('a').contains('Learn React');
});


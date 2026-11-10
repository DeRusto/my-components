import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
// Import only the WebAwesome components this one wraps — tree-shaking
// keeps the rest out of the bundle.
import '@awesome.me/webawesome/dist/components/card/card.js';

/**
 * dw-card — my own card, built on WebAwesome's wa-card.
 * Own `dw-` prefix on purpose: if upstream ever ships a `wa-card`
 * variant that collides, mine still wins, and merges stay clean.
 * Theme it with WebAwesome CSS variables, don't edit wa-* in place.
 */
@customElement('dw-card')
export class DwCard extends LitElement {
  render() {
    return html`<wa-card><slot></slot></wa-card>`;
  }
}

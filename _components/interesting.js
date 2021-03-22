/**
 * TODO: Import the LitElement base class and html helper function.
 */
import { LitElement, html } from "lit-element";

/**
 * TODO: Create a class for your element that extends the LitElement
 * base class.
 */
class Intersting extends LitElement {
	render(){
		return html`
			<p>Hello world!<p>
		`;
	}
}

/**
 * TODO: Register the new element with the browser.
 */
customElements.define("interesting", Intersting);

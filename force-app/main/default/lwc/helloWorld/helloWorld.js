import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class HelloWorld extends LightningElement {

    sayHello() {
        let value = this.template.querySelector("lightning-input").value;
        this.showToast(`Hello ${value}`);
    }


    showToast(message) {
        const event = new ShowToastEvent({
            title: 'Info',
            message
        });
        this.dispatchEvent(event);
    }
}
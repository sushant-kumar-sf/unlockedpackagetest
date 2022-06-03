import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class HeyWorld extends LightningElement {
    
    sayHello() {
        let value = this.template.querySelector("lightning-input").value;
        this.showToast(`Hey ${value}`);
    }


    showToast(message) {
        const event = new ShowToastEvent({
            title: 'Info',
            message
        });
        this.dispatchEvent(event);
    }
}
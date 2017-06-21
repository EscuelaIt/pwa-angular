import { Component, OnInit } from '@angular/core';
import 'isomorphic-fetch';
import { NgServiceWorker } from "@angular/service-worker";
import { Router } from "@angular/router";
declare var fetch;

@Component({
  selector: 'cf-worker',
  template: `
    <article>
      <header>
        <h1>Susbcription status</h1>
      </header>
      <section>
        <button (click)="subscribeToPush()">Subscribe to Push</button>
        <button (click)="unsubscribeFromPush()">Unsubscribe from Push</button>
        <button (click)="registerForPush()">Register for Push Actions</button>
      </section>
      <footer>
        <h5>{{ response | json }}</h5>
      </footer>
    </article>
  `,
  styles: []
})
export class WorkerComponent implements OnInit {

  private swScope = './';
  private swUrl = './worker-basic.min.js';
  private vapidPublicKey =
  'BIc-16A58871P96L_Xzwb20vTA5FA40I-cNVv44kA2vWxvp_XEroB-mx6fVZedwzYy_dg6a0x6J5Es5bm8zRBTA';
  private sw = navigator['serviceWorker'];
  public response = '';
  constructor(private ngSw: NgServiceWorker, private router: Router) { }

  ngOnInit() { }

  registerForPush(): void {
    console.log('registerForPush INIT: ');
    this
      .ngSw
      .push
      .subscribe(notification => {
        console.log('registerForPush VALUE: ', notification);
        const _id = notification.notification.tag;
        console.log('registerForPush ID_TAG: ' + notification.notification.tag);
        this.router.navigate(['/operations', _id])
      });
  }

  subscribeToPush() {
    const convertedVapidKey = this.urlBase64ToUint8Array(this.vapidPublicKey);
    const token = { userVisibleOnly: true, applicationServerKey: convertedVapidKey };
    this.sw
      .getRegistration(this.swScope)
      .then(registration => {
        this.response = registration;
        console.log('pushing registration', registration)
        registration.pushManager
          .subscribe(token)
          .then(this.saveSusbscription);
      })
      .catch(error => console.error(error))
  }

  unsubscribeFromPush() {
    this.sw
      .getRegistration(this.swScope)
      .then(registration => {
        this.response = registration;
        registration.pushManager
          .getSubscription()
          .then(this.saveUnsubscription)
      })
      .catch(error => console.error(error))
  }

  private saveSusbscription(subscription) {
    const body = JSON.stringify({ action: 'subscribe', subscription: subscription });
    console.log('Saving subscription', body);
    const urlServer = "http://localhost:3030/webpush";
    return fetch(
      urlServer,
      {
        method: "POST",
        body: body,
        headers: { 'Content-Type': 'application/json' }
      })
      .then(response => response.json())
      .then(json => console.log('Subscription save successful', json))
      .catch(error => console.error('Subscription save failed', error));
  }

  private saveUnsubscription(subscription) {
    subscription
      .unsubscribe()
      .then(success => console.log('Unsubscription save successful', success))
      .catch(error => console.error('Unsubscription save failed', error))
  }

  private urlBase64ToUint8Array(base64: string): Uint8Array {
    const padding = '='.repeat((4 - base64.length % 4) % 4);
    const encoded = (base64 + padding).replace(/\-/g, '+').replace(/_/g, '/');
    const rawData = window.atob(encoded);
    const length = rawData.length;
    const outputArray = new Uint8Array(length);
    for (let i = 0; i < length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

}

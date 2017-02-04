import { Injectable, ViewContainerRef, ComponentFactoryResolver, Injector, ComponentFactory } from '@angular/core';
import { DialogComponent } from './dialog.component';

@Injectable()
export class DialogService {
  vcRef: ViewContainerRef;
  private factory: ComponentFactory<DialogComponent>;

  constructor(resolver: ComponentFactoryResolver) {
    this.factory = resolver.resolveComponentFactory(DialogComponent);
  }

  confirm(message, details = 'Are you sure?', yesMsg = 'Yes', noMsg = 'No') {
    const componentRef = this.vcRef.createComponent(this.factory);
    const component = componentRef.instance;

    component.message = message;
    component.details = details;
    component.yesMsg = yesMsg;
    component.noMsg = noMsg;

    const destroy = () => componentRef.destroy();
    component.promise.then(destroy, destroy);
    return component.promise;
  }
}

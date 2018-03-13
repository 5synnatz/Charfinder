import {
  Component, ComponentFactoryResolver, ComponentRef, OnDestroy, OnInit, ViewChild,
  ViewContainerRef
} from '@angular/core';

import {NavigationService} from './navigation/navigation-service';
import {part} from './part';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnDestroy, OnInit {
  @ViewChild('appHost', {read: ViewContainerRef}) container;
  componentRef: ComponentRef<ComponentFactoryResolver>;
  title = 'Create-A-Character';

  constructor(private navigationService: NavigationService,
              private componentFactoryResolver: ComponentFactoryResolver) {
    this.navigationService.formChanged.subscribe(this.onFormViewChanged);
  }

  ngOnInit() {
    this.createComponent();
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }

  createComponent() {
    this.container.clear();
    const factory = this.componentFactoryResolver.resolveComponentFactory(this.navigationService.currentPart.component);
    this.componentRef = this.container.createComponent(factory);
  }

  private onFormViewChanged = (part: part) => {
    this.container.clear();
    const factory = this.componentFactoryResolver.resolveComponentFactory(part.component);
    this.componentRef = this.container.createComponent(factory);

    }

}

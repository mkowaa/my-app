import {Component, ComponentFactoryResolver, OnInit, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private vcr: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) { }
// tslint:disable-next-line:typedef
  async loadProductsList() {
    this.vcr.clear();
    const {ProductsListComponent} = await import( './../products-list/products-list.component' );
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(ProductsListComponent)
    );
  }
  ngOnInit(): void {
  }

}

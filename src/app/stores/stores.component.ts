import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-stores',
  template: `
    <div>
      <h1>Фотографии</h1>
      <img height="450" width="700" alt="" [defaultImage]="defaultImage" [lazyLoad]="imageSrc1">
      <img height="450" width="700" alt="" [defaultImage]="defaultImage" [lazyLoad]="imageSrc2">
      <img height="450" width="700" alt="" [defaultImage]="defaultImage" [lazyLoad]="imageSrc3">
      <img height="450" width="700" alt="" [defaultImage]="defaultImage" [lazyLoad]="imageSrc4">
      <img height="450" width="700" alt="" [defaultImage]="defaultImage" [lazyLoad]="imageSrc5">
    </div>
  `,
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {
  imageSrc1 = './../../assets/img/store1.jfif';
  imageSrc2 = './../../assets/img/store2.jpg';
  imageSrc3 = './../../assets/img/store3.jfif';
  imageSrc4 = './../../assets/img/store4.png';
  imageSrc5 = './../../assets/img/store5.jfif';
  defaultImage = './../../assets/img/0.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}

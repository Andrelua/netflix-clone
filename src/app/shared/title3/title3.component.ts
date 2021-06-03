import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-title3',
  templateUrl: './title3.component.html',
  styleUrls: ['./title3.component.scss']
})
export class Title3Component implements OnInit {

  @ViewChild("trailer", { static: true })
  trailer!: ElementRef<HTMLVideoElement>;

  constructor() { }

  ngOnInit(): void {
  }

  playVideo(){
    
    this.trailer.nativeElement.play();
    
  }

  stopVideo(){
    this.trailer.nativeElement.pause();
    this.trailer.nativeElement.currentTime = 0;
  } 

  getMuted(): boolean{
    return this.trailer.nativeElement.muted;
  }

  toggleSound(){
    this.trailer.nativeElement.muted = !this.trailer.nativeElement.muted;
  }

}

import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-title2',
  templateUrl: './title2.component.html',
  styleUrls: ['./title2.component.scss']
})
export class Title2Component implements OnInit {

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

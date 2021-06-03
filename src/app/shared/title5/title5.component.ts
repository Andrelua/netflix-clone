import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-title5',
  templateUrl: './title5.component.html',
  styleUrls: ['./title5.component.scss']
})
export class Title5Component implements OnInit {

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

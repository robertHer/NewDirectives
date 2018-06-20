import { Directive, Renderer2, ElementRef, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[BetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {

   }

  //  ngOnInit(){
    //  this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue' );
  //  }

  //  @HostListener('mouseenter') mouseEnter(){
  //   this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue' ); 

  //  }
  //  @HostListener('mouseleave') mouseOut(){
  //   this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent' );
  //  }
  
  //  @HostBinding('style.backgroundColor' ) backgroundColor:string = 'transparent';
  //  @HostBinding('style.color') color:string = 'black';
 
  //   @HostListener('mouseenter') mouseEnter(){
  //    this.backgroundColor = 'skyblue';
  //    this.color = 'white'
 
  //   }
  //   @HostListener('mouseleave') mouseOut(){
  //   this.backgroundColor = 'transparent'
  //   this.color = 'black'
  //   }

   @Input() defaultColor:string = 'transparent';
   @Input('betterHighlight') highlightColor:string = 'blue';

  @HostBinding('style.backgroundColor' ) backgroundColor:string = this.defaultColor;
  //  @HostBinding('style.color') color:string = 'black';
   ngOnInit(){
     this.backgroundColor = this.defaultColor
   }
    @HostListener('mouseenter') mouseEnter(){
     this.backgroundColor = this.highlightColor;
    //  this.color = 'white'
 
    }
    @HostListener('mouseleave') mouseOut(){
    this.backgroundColor = this.defaultColor
    // this.color = 'black'
    }
  }



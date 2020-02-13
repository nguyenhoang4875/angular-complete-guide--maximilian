import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input("srvElement") element: { type: string; name: string; content: string };
  @Input() name: string;

  @ViewChild("heading", { static: true }) header: ElementRef;
  constructor() {
    console.log("constructor called!");
  }

  ngOnInit() {
    console.log("Text Content: " + this.header.nativeElement.textContent);
    console.log("ngOnInit called!");
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnInit called!");
    console.log(changes);
  }
  ngDoCheck() {
    console.log("ngDoCheck called!");
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit called!");
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentCheck called!");
  }
  ngAfterViewInit() {
    console.log("Text Content: " + this.header.nativeElement.textContent);
    console.log("ngAfterViewInit called!");
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewCheck called!");
  }
  ngOnDestroy() {
    console.log("ngOnDestroy called!");
  }
}

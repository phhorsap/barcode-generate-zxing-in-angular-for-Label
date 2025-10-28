import { AfterViewInit, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import JsBarcode from 'jsbarcode';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App  implements AfterViewInit{

  protected readonly title = signal('barcode');
 item = [1,2,3,4,5,6,7,8,9]

 lieferscheine = ['LS1001', 'LS1002', 'LS1003', 'LS1004'];

 
ngAfterViewInit() {
    this.lieferscheine.forEach((code, index) => {
      JsBarcode(`#barcode-${index}`, code, {
        format: 'CODE128',
        lineColor: '#000',
        width: 2,
        height: 100,
        displayValue: true,
      });
    });
  }


}

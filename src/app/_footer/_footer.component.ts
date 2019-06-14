import { Component } from '@angular/core';

@Component({
  selector: 'footer-app',
  templateUrl: './_footer.html',
})
export class _footerComponent {
  displayYear = new Date().getFullYear();
}

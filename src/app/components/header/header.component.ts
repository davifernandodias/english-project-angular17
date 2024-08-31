import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PrimaryInputComponent } from "../primary-input/primary-input.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PrimaryInputComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


}

import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { HeaderComponent } from "../../components/header/header.component";
import { ContentHomeComponent } from "../../components/content/content-home/content-home.component";
import { ContentMetadologiasComponent } from "../../components/content/content-metadologias/content-metadologias.component";
import { ContentFeedbacksComponent } from "../../components/content/content-feedbacks/content-feedbacks.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, ContentHomeComponent, ContentMetadologiasComponent, ContentFeedbacksComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

}

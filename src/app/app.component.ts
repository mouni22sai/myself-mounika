import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { UtilsService } from 'src/app/services/utils.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myself-mounika';

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer,
              private utilitiesService: UtilsService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.registerIcons();
  }

  registerIcons() {
    this.iconRegistry.addSvgIconLiteral('fb-icon', this.sanitizer.bypassSecurityTrustHtml(this.utilitiesService.getFbIcon()));
    this.iconRegistry.addSvgIconLiteral('linkedin-icon', this.sanitizer.bypassSecurityTrustHtml(this.utilitiesService.getLinkedinIcon()));
    this.iconRegistry.addSvgIconLiteral('twitter-icon', this.sanitizer.bypassSecurityTrustHtml(this.utilitiesService.getTwitterIcon()));
    this.iconRegistry.addSvgIconLiteral('instagram-icon', this.sanitizer.bypassSecurityTrustHtml(this.utilitiesService.getInstagramIcon()));
  }

  routeToChildComponents(routePath: string) {
    switch (routePath) {

      case 'about-myself':
        this.router.navigate(['about-myself'], {relativeTo: this.activatedRoute});
        break;

      case 'coding':
        this.router.navigate(['my-coding-practices']);
        break;

      case 'gallery':
        this.router.navigate(['my-gallery']);
        break;

      default:
      this.router.navigate(['about-myself']);
    }
  }
}

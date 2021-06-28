import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Directive({
  selector: '[appCheckAuth]'
})
export class CheckAuthDirective implements OnInit {

  private subscription : Subscription;

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef,
    private authService: AuthService) { 
      console.log('Creando directiva');
    
      
  }


  private hasView;

  ngOnInit() {

    this.subscription =  this.authService.isLogged().subscribe(
      (data) => {
        console.log('Suscribiendose con data ', data, ' y hasView ', this.hasView);
        if (data && !this.hasView) {
          
          this.viewContainerRef.createEmbeddedView(this.templateRef);
          console.log('Is logged', data);
          this.hasView = true;
        } else if (!data && this.hasView) {
          this.viewContainerRef.clear();
          console.log('Is not logged', data);
          this.hasView = false;
        }
      }
    );
  }

 

}

import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core'
import {AuthService} from '../../services/auth.service'
import {Router} from '@angular/router'
import {MaterialService} from '../../classes/material.service'

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css']
})
export class SiteLayoutComponent  {

  links = [
    {url: '/history', name: 'История'},
    {url: '/order', name: 'Добавить заказ'}
  ]

  constructor(private auth: AuthService,
              private router: Router) {
  }

  logout(event: Event) {
    event.preventDefault()
    this.auth.logout()
    this.router.navigate(['/login'])
  }

}

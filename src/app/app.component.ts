import {Component} from '@angular/core';
import {MacaroonType} from "./types/macaroon.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public advantages = [
    {
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    }
  ];

  public macaroons: MacaroonType[] = [
    {
      name: 'Макарун с малиной',
      cost: '1,70 руб.'
    },
    {
      name: 'Макарун с манго',
      cost: '2,10 руб.'
    },
    {
      name: 'Макарун с ванилью',
      cost: '1,40 руб.'
    },
    {
      name: 'Макарун с фисташками',
      cost: '2,30 руб.'
    },
  ];

  public formData = {
    macaroon: '',
    name: '',
    phone: ''
  };

  public invalidFormSpans = {
    macaroon: false,
    name: false,
    phone: false
  }

  public showPresent: boolean = true;
  public phone: string = '+375 (29) 368-98-68';
  public instagramLink: string = 'Мы в Instagram';

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'});
  }

  public addToCart(macaroon: MacaroonType, target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'});
    this.formData.macaroon = macaroon.name.toUpperCase();
  }

  public createOrder(): void {
    this.invalidFormSpans.macaroon = !this.formData.macaroon;
    this.invalidFormSpans.name = !this.formData.name;
    this.invalidFormSpans.phone = !this.formData.phone;
    if (this.formData.macaroon && this.formData.name && this.formData.phone) {
      alert('Спасибо за заказ, с вами обязательно свяжутся!');
      this.formData = {
        macaroon: '',
        name: '',
        phone: ''
      };
      this.invalidFormSpans = {
        macaroon: false,
        name: false,
        phone: false
      };
    }
  }

  public clickBurgerMenu(target: HTMLElement): void {
    target.classList.contains('open') ? target.classList.remove('open') : target.classList.add('open');
  }
}

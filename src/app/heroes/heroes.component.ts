import { Component, Input, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero;
  heroes?: Hero[];
  public items:Array<any>=['lalal',111,'lululu'];
  constructor(private heroService: HeroService, private messageService: MessageService) { }
  public nowDate:Date=new Date();

  public texts?:String;
  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe((heroes: Hero[]) => this.heroes = heroes);
  }
  run(){
    alert("当前时间为"+this.nowDate);
  }
  keyDown(e:any){
   console.log(e);
  }

  submit(){
    console.log(this.texts);
    if(this.texts=="jxk"){
      alert("密码正确");
    }else{
      alert("密码错误");
    }
  }
}
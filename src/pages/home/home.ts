import { Component } from '@angular/core';
import { NavController, reorderArray } from 'ionic-angular';
import { PercentPipe } from '@angular/common/src/pipes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //percent = new PercentPipe();

  animals = [
    {
      'title': 'Vache',
      'image': 'imgs/animals/cow-icon.png',
      'desc': 'Meugle',
      'file': '/sounds/cow.mp3',
      'playing': false
    },
    {
      'title': 'Dauphin',
      'image': 'imgs/animals/dolphin-icon.png',
      'desc': 'Siffle',
      'file': '/sounds/dolphin.mp3',
      'playing': false
    },
    {
      'title': 'Grenouille',
      'image': 'imgs/animals/frog-icon.png',
      'desc': 'Coasse',
      'file': '/sounds/frog.mp3',
      'playing': false
    },
    {
      'title': 'Oiseau',
      'image': 'imgs/animals/bird-icon.png',
      'desc': 'Chante',
      'file': '/sounds/bird.mp3',
      'playing': false
    },
    {
      'title': 'Cochon',
      'image': 'imgs/animals/pig-icon.png',
      'desc': 'Grogne',
      'file': '/sounds/pig.mp3',
      'playing': false
    },
    {
      'title': 'Chien',
      'image': 'imgs/animals/puppy-icon.png',
      'desc': 'Aboie',
      'file': '/sounds/dog.mp3',
      'playing': false
    },
    {
      'title': 'Chat',
      'image': 'imgs/animals/black-cat-icon.png',
      'desc': 'Miaule',
      'file': '/sounds/cat.mp3',
      'playing': false
    },
    {
      'title': 'Cheval',
      'image': 'imgs/animals/horse-icon.png',
      'desc': 'Hennit',
      'file': '/sounds/horse.wav',
      'playing': false
    },
    {
      'title': 'Ane',
      'image': 'imgs/animals/donkey-icon.png',
      'desc': 'Brait',
      'file': '/sounds/donkey.wav',
      'playing': false
    }
  ];

  //reorderAnimals(indexes) {
  //  this.animals = reorderArray(this.animals, indexes);
  //}

  // les variables se déclarent en général avant le constructeur
  private currentPosition: number;

  public result: string;
  public showReorder = false;

  constructor(public navCtrl: NavController) {

  }

  /**
   * Choix aléatoire d'un animal
   */
  pickAnimalPosition() {
    let pos;
    if (!this.currentPosition) {
      pos = Math.floor(Math.random() * this.animals.length);
    } else {
      pos = this.currentPosition;
    }
    return pos;
  }

  /**
   * Lecture d'un son
   */
  playSound() {

    this.result = "";

    //choix d'un son
    this.currentPosition = this.pickAnimalPosition();
    let choosenAnimal = this.animals[this.currentPosition];

    //chargement du son
    let audio = new Audio();
    audio.src = 'assets' + choosenAnimal.file;
    audio.load();

    //lecture du son
    audio.play();
  }

  /**
   * deviner l'animal en fonction de son cri
   * @param pos 
   */
  guess(pos) {
    //est ce que l'on a joué un son?
    if (this.currentPosition) {
      //est ce que tu as choisi le bon animal?
      if (pos == this.currentPosition) {
        //résultat
        this.result = "Tu as gagné";
        //réinitialisation du choix pour faire un nouveau jeu
        this.currentPosition = null;
      } else {
        this.result = "Essaye encore";
      }
    }
  }

}

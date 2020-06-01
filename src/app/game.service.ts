import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Game } from './game';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  games: Game[] = [
  {
    id: 0,
    title: "ecliptic",
    subtitle: " Play in the browser!",
    imageUrl: "../assets/eclipticCapture.png",
    linkUrl: "ecliptic",
    description: "Put on your thinking cap and master orbital dynamics in this physics puzzler. Completing all six levels will take some serious skill!"
  },
  {
    id: 1,
    title: "Super Survival Ball",
    subtitle: " Play in the browser!",
    imageUrl: "../assets/titleScreenshot.PNG",
    linkUrl: "superSurvivalBall",
    description: "Originally created in 48 hours! Bounce Balls off a paddle in outer space! The true ultimate ball game!!"
  },
  {
    id: 2,
    title: "Nephila",
    subtitle: "",
    imageUrl: "../assets/nephilaCapture.PNG",
    linkUrl: "nephila",
    description: "For as long as memory serves, a tower reaching all the way to heaven has served as the center of human civilization, its upper floors shrouded in mystery. But recently, legions of monsters have been unleashed upon the world, sent by Aeus, the lord of Pandemonium. Now you must arm yourself, and find a way to reach him. Explore the world, battle monsters, find upgrades, and learn the ancient secrets."
  },
  {
    id: 3,
    title: "Chryse",
    subtitle: "  Now in development",
    imageUrl: "../assets/chryseCapture.PNG",
    linkUrl: "chryse",
    description: `When a force of darkness threatens the land, four youths are swept into the fight of their lives.
    But they have a long way to go before they're strong enough to win!
    Battle monsters, collect treasure, and gain powerful fighting techniques in this epic fantasy role-playing experience!`
  },
  ]

  getGames(): Observable<Game[]> {
    return of(this.games);
    return this.http.get<Game[]>('http://ec2-18-217-198-88.us-east-2.compute.amazonaws.com:8087/data/game/all');
  }
}



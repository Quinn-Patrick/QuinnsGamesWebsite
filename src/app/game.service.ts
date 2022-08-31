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
    id: 7,
    title: "ecliptic 2",
    subtitle: " Play in the browser!",
    imageUrl: "../assets/ecliptic2logo.png",
    linkUrl: "ecliptic2",
    description: `Complete six more levels in the advanced sequel to the original orbital mechanical game.`
  },
  {
    id: 8,
    title: "Timeflight Alpha",
    subtitle: " Play in the browser!",
    imageUrl: "../assets/timeflightCover.png",
    linkUrl: "timeflight",
    description: `Created in 48 hours! Rack up big points before time runs out!`
  },
  {
    id: 6,
    title: "Vespadian",
    subtitle: "",
    imageUrl: "../assets/vespadianCover.png",
    linkUrl: "vespadian",
    description: `So, you think adventuring is the life for you? Build the fantasy role-playing party of your dreams, and embark on grand adventures. On your way, you will be faced with the machinations of the dread sorcerer Ephemeris, but what could be his real plan?`
  },
  {
    id: 4,
    title: "Looping Condor 3000",
    subtitle: "  Play in the browser!",
    imageUrl: "../assets/loopingCondorCapture.png",
    linkUrl: "loopingCondor",
    description: `Created in 48 hours! Loop your way through six challenging levels using only the arrow keys!`
  },
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
    subtitle: "",
    imageUrl: "../assets/chryseCapture.PNG",
    linkUrl: "chryse",
    description: `When a force of darkness threatens the land, four youths are swept into the fight of their lives.
    But they have a long way to go before they're strong enough to win!
    Battle monsters, collect treasure, and gain powerful fighting techniques in this epic fantasy role-playing experience!`
  },
  {
    id: 5,
    title: "Brubnar the Barbarian in the Deepest Dungeon",
    subtitle: "  Play in the browser!",
    imageUrl: "../assets/brubnarCapture.png",
    linkUrl: "brubnar",
    description: `Created in 48 hours! Play through endless floors of escalating challenge as Brubnar the Barbarian! Get deep with the mystical Wordes of Wisdome! Rack up gold and spend it on powerful upgrades and magic spells!`
  }
  
  
  
  ]

  getGames(): Observable<Game[]> {
    return of(this.games);
    return this.http.get<Game[]>('http://ec2-18-217-198-88.us-east-2.compute.amazonaws.com:8087/data/game/all');
  }
}



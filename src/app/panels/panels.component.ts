import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../game';


@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.css']
})
export class PanelsComponent implements OnInit {

  games: Game[];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getGames().subscribe(games => this.games = games);
  }

}

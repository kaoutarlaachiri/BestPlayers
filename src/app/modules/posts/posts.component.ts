import { Component, OnInit } from '@angular/core';
import {gql, Apollo} from 'apollo-angular';
import { AllPlayers } from 'src/models/players';

const Get_Players = gql`
query{
  allPlayers {
    classement
    name
    position
    club
    value
    nationality
    age
    apt
    yellowCard
    redCard
    redGoals
    assistedGoals
  }
}

`;
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  allplayers:AllPlayers[] = [];

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.getAllPlayers()
  }

  getAllPlayers(){
    this.apollo.watchQuery<any>({
      query: Get_Players
    })
    .valueChanges
    .subscribe(({data, loading, error}) => {
      // console.log(loading);
      // console.log(data)
      // console.log(error)
      // alert(error)
      this.allplayers = data.allPlayers;
    })
  }

}

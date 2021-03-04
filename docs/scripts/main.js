
class GameCard {
  constructor(GameName,MainImage,GameSkills,PlayLink,GithubLink,Images){
    this.GameName = GameName;
    this.MainImage = MainImage;
    this.GameSkills = GameSkills;
    this.PlayLink = PlayLink;
    this.GithubLink = GithubLink;
    this.Images = Images;
  }

    DrawCard(ParentElement) {
      
      let base = document.createElement('div');
      base.className = "col-sm6 mx-auto";
      
      //Start card div
      let card = document.createElement('div');
      card.className = "card text-center mx-auto";
      card.style = "width: 24rem;";

      base.append(card);

      //Display the covere image
      let coverImage = document.createElement('img');
      coverImage.src = this.MainImage;
      coverImage.className = "card-img-top";

      card.appendChild(coverImage);

      //Card Body
      let cardBody = document.createElement('div');
      cardBody.className = "card-body";
      
      card.appendChild(cardBody);

      //Title
      let cardTitle = document.createElement('h5');
      cardTitle.className = "card-title";
      cardTitle.innerText = this.GameName;

      cardBody.appendChild(cardTitle);

      //Skills
      let cardSkills = document.createElement('p');
      cardSkills.className = "card-text";
      cardSkills.innerText = this.GameSkills;

      cardBody.appendChild(cardSkills);
      
      //Card Inner body, buttons
      let cardInner = document.createElement('div');
      cardInner.className = "container-fluid";

      cardBody.appendChild(cardInner);

      //PlayButton
      if(this.PlayLink != null && this.PlayLink != "")
      {
        let pButton = document.createElement('a'); 
        pButton.href = this.PlayLink;
        pButton.className = "btn btn-dark";
        pButton.innerText = "Play";
        cardInner.appendChild(pButton);
      }

      //GithubButton
      if(this.GithubLink != null && this.GithubLink != "")
      {
        let gButton = document.createElement('a'); 
        gButton.href = this.GithubLink;
        gButton.className = "btn btn-dark";
        gButton.innerText = "Github";
        cardInner.appendChild(gButton);
      }

      let mButton = document.createElement('button'); 
      //mButton.href = GithubLink;
      mButton.type = "button";
      mButton.className = "btn btn-dark";
      mButton.innerText = "More Images";
      cardInner.appendChild(mButton);

      ParentElement.appendChild(base);

      return;
    }
}

var gameCards = [
  new GameCard("Nova","Images/Nova/NOVA1.png","Unity, C#, 2D, Solo work, Art, Music.","https://volpanic.github.io/Nova/","https://github.com/Volpanic/Nova",[1,1,1]),
  new GameCard("Project Still","Images/ProjectStill/Bedroom.png","Unity, C#, 3D, Team Work.",null,"https://github.com/AIESydneyStudents/LucidDreams",[1,1,1]),
  new GameCard("Schism","Images/Schism/Schism4.png","Game Maker Studio 2, GML, 2D, Solo work, Art, Music, Release.","https://volpanic.itch.io/schism","",[1,1,1])
];

var techCards = [
  new GameCard("Fish Game","Images/FishGame/FishGame2.png","C++, Raylib, 2D, Engine Design, AI, Pathfinding, Solo work, Art, Music.","https://github.com/Volpanic/AIForGamesAie","",[1,1,1]),
  new GameCard("Tank Game","Images/TankGame/TankGame1.png","C#, Raylib, 2D, Math, Unit testing, Solo work, Art, Music.","https://github.com/Volpanic/aieMathsLibrary","",[1,1,1])
];

var container = document.getElementById("game-cards");
for(var i = 0; i < gameCards.length; i++)
{
  gameCards[i].DrawCard(container);
}

var container = document.getElementById("tech-cards");
for(var i = 0; i < techCards.length; i++)
{
  techCards[i].DrawCard(container);
}


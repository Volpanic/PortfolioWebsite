
class GameCard {
  constructor(GameName,MainImage,GameSkills,PlayLink,GithubLink,Images){
    this.GameName = GameName;
    this.MainImage = MainImage;
    this.GameSkills = GameSkills;
    this.PlayLink = PlayLink;
    this.GithubLink = GithubLink;
    this.Images = Images;
    this.ReplaceModalImages = this.ReplaceModalImages.bind(this);
  }

    DrawCard(ParentElement,array,index) {
      
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
      let cardTitle = document.createElement('h4');
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
        pButton.className = "blob-button";
        pButton.innerText = "Play";
        cardInner.appendChild(pButton);
      }

      //GithubButton
      if(this.GithubLink != null && this.GithubLink != "")
      {
        let gButton = document.createElement('a'); 
        gButton.href = this.GithubLink;
        gButton.className = "blob-button";
        gButton.innerText = "Github";
        cardInner.appendChild(gButton);
      }

      let mButton = document.createElement('a'); 
      mButton.href = "";
      //mButton.type = "button";
      mButton.className = "blob-button";
      mButton.innerText = "More Images";
      mButton.dataset.toggle = "modal";
      mButton.dataset.target = "#moreImagesModal";
      mButton.onclick = array[index].ReplaceModalImages;
      cardInner.appendChild(mButton);

      ParentElement.appendChild(base);

      return;
    }

      ReplaceModalImages(){
      var modalBox = document.getElementById("carousel-images");
    
      //Clear old html code
      modalBox.innerHTML = "";
    
      var i;
      for(i = 0; i < this.Images.length; i++)
      {
        let imageDiv = document.createElement('div');
    
        if(i == 0)
        imageDiv.className = "carousel-item active";
        else 
        imageDiv.className = "carousel-item";
    
    
        let image = document.createElement('img');
        image.src = this.Images[i];       
        image.className = "d-block w-100";   
    
        imageDiv.appendChild(image);
        modalBox.appendChild(imageDiv);
    
      }
    }

}


var gameCards = [
  new GameCard("Schism","Images/Schism/Schism2.png","Game Maker Studio 2, GML, 2D, Solo work, Art, Music, Release.","https://volpanic.itch.io/schism","",["Images/Schism/Schism1.png","Images/Schism/Schism2.png","Images/Schism/Schism3.png","Images/Schism/Schism4.png"]),
  new GameCard("The Pursuit of Slappiness","Images/TPOSlap/TPOSlap1.gif","VR, Unity, C#, 3D, Team Work","https://oneil-k.itch.io/the-pursuit-of-slappiness","https://github.com/JustinKatic/4PLUS1",["Images/TPOSlap/TPOSlap1.gif","Images/TPOSlap/TPOSlap2.png","Images/TPOSlap/TPOSlap3.png","Images/TPOSlap/TPOSlap4.png"]),
  new GameCard("Take a Break","Images/TakeABreak/TakeABreak2.png","Unity, C#, 3D, Solo Work, Shader Graph, Animation Blending.","https://volpanic.github.io/UnityRenderPipelineTest/","https://github.com/Volpanic/UnityRenderPipelineTest",["Images/TakeABreak/TakeABreak1.png","Images/TakeABreak/TakeABreak2.png","Images/TakeABreak/TakeABreak3.png"]),
  new GameCard("Nova","Images/Nova/NOVA1.png","Unity, C#, 2D, Solo work, Art, Music.","https://volpanic.github.io/Nova/","https://github.com/Volpanic/Nova",["Images/Nova/NOVA1.png","Images/Nova/NOVA2.png","Images/Nova/NOVA3.png","Images/Nova/NOVA4.png","Images/Nova/NOVA5.png"]),
  new GameCard("Project Still","Images/ProjectStill/Bedroom.png","Unity, C#, 3D, Team Work.","https://aiesydneystudents.github.io/LucidDreams/","https://github.com/AIESydneyStudents/LucidDreams",["Images/ProjectStill/Bedroom.png","Images/ProjectStill/DishWashing.png","Images/ProjectStill/LivingRoom.png","Images/ProjectStill/TitleScreen.png"])
];

var techCards = [
  new GameCard("Bullet Hell Pattern Generator","Images/PatternGenerator/PatternGen2.png","C# Unity, System Design, 2D, Custom Editors, Solo Work.","","https://github.com/Volpanic/BulletHellPatternGenerator",["Images/PatternGenerator/PatternGen1.png","Images/PatternGenerator/PatternGen2.png","Images/PatternGenerator/PatternGen3.png","Images/PatternGenerator/PatternGen4.png"]),
  new GameCard("Fish Game","Images/FishGame/FishGame2.png","C++, Raylib, 2D, Engine Design, AI, Pathfinding, Solo work, Art, Music.","","https://github.com/Volpanic/AIForGamesAie",["Images/FishGame/FishGame1.png","Images/FishGame/FishGame2.png","Images/FishGame/FishGame3.png","Images/FishGame/FishGame4.png"]),
  new GameCard("Tank Game","Images/TankGame/TankGame1.png","C#, Raylib, 2D, Math, Unit testing, Solo work, Art, Music.","","https://github.com/Volpanic/aieMathsLibrary",["Images/TankGame/TankGame0.png","Images/TankGame/TankGame1.png","Images/TankGame/TankGame2.png","Images/TankGame/TankGame3.png"])
];

var container = document.getElementById("game-cards");
for(var i = 0; i < gameCards.length; i++)
{
  gameCards[i].DrawCard(container,gameCards,i);
}

var container = document.getElementById("tech-cards");
for(var i = 0; i < techCards.length; i++)
{
  techCards[i].DrawCard(container,techCards,i);
}


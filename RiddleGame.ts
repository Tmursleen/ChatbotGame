

enum GameState {
  WELCOMING,
  DISCRIPTION,
  PASSWORD,
  RIDDLE1,
  PASSWORD2,
  RIDDLE2,
  PASSWORD3,
  RIDDLE3,
  PASSWORD4,
  RIDDLE4,
  PASSWORD5,
  RIDDLE5,
  PASSWORD6,
  RIDDLE6,
  PASSWORD7,
  RIDDLE7,
  PASSWORD8,
  RIDDLE8,
  FIGHT,
  DOOR
}

export class RiddleGame {
  private stateCur: GameState = GameState.WELCOMING;
  makeAMove(sInput: string) {
    let sReply =
      "HI! My name is Tarizia! I am the watcher of all Kingdoms! Who are you human?.";
    switch (this.stateCur) {
      case GameState.WELCOMING:
        this.stateCur = GameState.DISCRIPTION;
        break;
      case GameState.DISCRIPTION:
        if (sInput.length > 1) {
          sReply =
            "Hello " + sInput + "! This is a game of riddles! Make your way through the different realms by answering the riddles. In the end you will reach a white castle with a dragon! If you fight the dragon and open the red door you will find great treasure! To help you in your journey I will give you one hint! One word is all you need to pass each realm. Each realm requires a password to enter. First password is fly . Goodluck human!";
          this.stateCur = GameState.PASSWORD;
        } else {
          sReply = "Human! answer or leave this realm!";
        }
        break;
      case GameState.PASSWORD:
        if (sInput.toLowerCase().match("fly")) {
          sReply =
            "When you have me, you feel like sharing me. If you do share me, you don't have me. What am I?";
          this.stateCur = GameState.RIDDLE1;
        } else {
          sReply = "Human try again";
        }
        break;
      case GameState.RIDDLE1:
        if (sInput.toLowerCase().match("secret")) {
          sReply =
            "Correct! I have underestimated you! Realm 2 password is fire. ";
          this.stateCur = GameState.PASSWORD2;
        } else {
          sReply = "Seems like your having trouble human! Try again!";
        }
        break;
      case GameState.PASSWORD2:
        if (sInput.toLowerCase().match("fire")) {
          sReply =
            "I am an insect. The first part of my name is the name of another insect. What am I?";
          this.stateCur = GameState.RIDDLE2;
        } else {
          sReply = "Human try again";
        }
        break;
      case GameState.RIDDLE2:
        if (sInput.toLowerCase().match("beetle")) {
          sReply =
            "Correct! You still have a long way to go! Realm 3 password is beat. ";
          this.stateCur = GameState.PASSWORD3;
        } else {
          sReply = "Seems like your having trouble human! Try again!";
        }
        break;
      case GameState.PASSWORD3:
        if (sInput.toLowerCase().match("beat")) {
          sReply =
            "If you break me, I do not stop working. If you touch me, I may be snared.If you lose me, nothing will matter";
          this.stateCur = GameState.RIDDLE3;
        } else {
          sReply = "Human try again";
        }
        break;
      case GameState.RIDDLE3:
        if (sInput.toLowerCase().match("heart")) {
          sReply =
            "Correct! 2 Realms left! Keep Going! Realm 4 password is break. ";
          this.stateCur = GameState.PASSWORD4;
        } else {
          sReply = "Seems like your having trouble human! Try again!";
        }
        break;
      case GameState.PASSWORD4:
        if (sInput.toLowerCase().match("break")) {
          sReply = "What can fly without wings?";
          this.stateCur = GameState.RIDDLE4;
        } else {
          sReply = "Human try again! Your almost there!";
        }
        break;
      case GameState.RIDDLE4:
        if (sInput.toLowerCase().match("time")) {
          sReply =
            "Correct! Getting Close! You can do it Human! Realm 4 password is water. ";
          this.stateCur = GameState.PASSWORD5;
        } else {
          sReply = "Seems like your having trouble human! Try again!";
        }
        break;
        case GameState.PASSWORD5:
        if (sInput.toLowerCase().match("water")) {
          sReply = "What has hands but can not clap?";
          this.stateCur = GameState.RIDDLE5;
        } else {
          sReply = "Human try again! Your almost there!";
        }
        break;
      case GameState.RIDDLE5:
        if (sInput.toLowerCase().match("clock")) {
          sReply =
            "Correct! 3 more realms to go! Realm 6 password is fire";
          this.stateCur = GameState.FIGHT;
        } else {
          sReply = "Seems like your having trouble human! Try again!";
        }
        break;
        case GameState.PASSWORD6:
        if (sInput.toLowerCase().match("fire")) {
          sReply = "What starts with the letter “t”, is filled with “t” and ends in “t”?";
          this.stateCur = GameState.RIDDLE5;
        } else {
          sReply = "Human try again! Your almost there!";
        }
        break;
      case GameState.RIDDLE6:
        if (sInput.toLowerCase().match("teapot")) {
          sReply =
            "Correct! 2 more realms to go! Realm 7 password is earth";
          this.stateCur = GameState.FIGHT;
        } else {
          sReply = "Seems like your having trouble human! Try again!";
        }
        break;
        case GameState.PASSWORD7:
        if (sInput.toLowerCase().match("earth")) {
          sReply = "What word contains all of the twenty six letters?";
          this.stateCur = GameState.RIDDLE5;
        } else {
          sReply = "Human try again! Your almost there!";
        }
        break;
      case GameState.RIDDLE7:
        if (sInput.toLowerCase().match("alphabet")) {
          sReply =
            "Correct! 1 more realm to go! Realm 8 password is breath";
          this.stateCur = GameState.FIGHT;
        } else {
          sReply = "Seems like your having trouble human! Try again!";
        }
        break;     
        case GameState.PASSWORD8:
        if (sInput.toLowerCase().match("breath")) {
          sReply = "The more you take, the more you leave behind. What am I?";
          this.stateCur = GameState.RIDDLE5;
        } else {
          sReply = "Human try again! Your almost there!";
        }
        break;
      case GameState.RIDDLE8:
        if (sInput.toLowerCase().match("footsteps")) {
          sReply =
            "Correct! We have arrived! Good work human, you have really proved your self. However, this test will be the hardest to cross. Behind the castle doors is a dragon. Do you want to fight? ";
          this.stateCur = GameState.FIGHT;
        } else {
          sReply = "Seems like your having trouble human! Try again!";
        }
        break;
      case GameState.FIGHT:
        if (sInput.toLowerCase().match("yes") || sInput.toLowerCase().match("fight")) {
          sReply = "GREAT WORK! You have left me speechless human! You fought that dragon and showed no fear! Look to your right. Thats the red door that you need to cross to get the treasure. Do you want to open the door?";
          this.stateCur = GameState.DOOR;
        } else {
          sReply =
            "You have gone quite far. I would still be proud human. But its time for you to leave. Once you leave here we will forget each other! Bye Human.";
          this.stateCur = GameState.WELCOMING;
        }
        break;
      case GameState.DOOR:
        if (sInput.toLowerCase().match("yes")) {
          sReply =
            "You made it! The treasures all yours! It was great knowing you! You have been the smartest,strongest and breavest human I have met! I hope we cross paths again. Goodbye for now.";
            this.stateCur = GameState.WELCOMING;
        } else {
          sReply =
            "You have gone quite far. I would still be proud human. But its time for you to leave. Once you leave here we will forget each other! Bye Human.";
          this.stateCur = GameState.WELCOMING;
        }
        break;
    }
    return sReply;
  }
}

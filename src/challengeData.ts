import {Challenge} from "./IdModel";

//type Chal = Challenge;
type Chal = Partial<Challenge>;

var challengeData:Array<Chal>  = new Array<Chal> ();
var defaultChallenge:Chal =
{
  question:"'question' not filled in",
  hint:"'hint' not filled in",
  answerGood:"'answerGood' not filled in",
  answerBad:[],
  responseCorrect:"'responseCorrect' not filled in",
  responseWrong:"'responseWrong' not filled in"
};

challengeData[0] = {
  parent:defaultChallenge,
  question:"comment réouvrir un onglet férmer précédement ?",
  hint:"recherche sur internet",
  answerGood:"Dans l'historique, ou faire Ctl-Shift-T.",
  answerBad:[
    "Loool",
    "Heee"]
};

challengeData[1] =
{
  parent:defaultChallenge,
  question:"ctrl+c et ctrl+v sert a quoi ?",
  hint:"copie",
  answerGood:"Se sont des chortcut pour copier et coller.",
  answerBad:[
    "Loool",
    "Heee"],
  responseCorrect:"Bien faite!",
  responseWrong:"Aleeh, fait plus d'effort!"
};

challengeData[2] =
{
  parent:defaultChallenge,
  question:"question 2 (zero based counting)"
};

export {challengeData};

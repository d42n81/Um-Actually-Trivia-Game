// Global Variables
let test: HTMLElement = document.getElementById("hello") as HTMLElement;
let rules: HTMLButtonElement = document.getElementById("rules") as HTMLButtonElement;
let showAnswer: HTMLButtonElement = document.getElementById("showAnswer") as HTMLButtonElement;
let nextQuestion: HTMLButtonElement = document.getElementById("nextQuestion") as HTMLButtonElement;
let playerOneScoreButton: HTMLButtonElement = document.getElementById("playerOneScore") as HTMLButtonElement;
let playerTwoScoreButton: HTMLButtonElement = document.getElementById("playerTwoScore") as HTMLButtonElement;
let playerThreeScoreButton: HTMLButtonElement = document.getElementById("playerThreeScore") as HTMLButtonElement;
let playerOneScore: number = 0;
let playerTwoScore: number = 0;
let playerThreeScore: number = 0;
// Cards
let card1: HTMLElement = document.getElementById("card_1") as HTMLElement;
// Answer Cards
let answer1: HTMLElement = document.getElementById("card_1_answer") as HTMLElement;
/* function toggle(element: HTMLElement): void {
    if (element.style.display === "inline") {
        element.style.display = "none";
        
    } else {
        element.style.display = "block";
    }
}
toggle(test); */



function hide(x: HTMLElement): void {
    x.style.display = "none";
}
// hide(test);
function show(x: HTMLElement): void {
    x.style.display = "block";
}
// show(test);
function alertRules(): void {
    alert("Three players must attempt to correct the displayed incorrect statement read aloud by a chosen narrator. Whichever player is the first to correct the statement wins a point for the round!");
}
function showAnswer1(): void {
    answer1.style.display = "block";
}

class Cards {
    text: string = "";
    answer: string = "";
    playedRecently: boolean = false;
}
// Cards

let card001: Cards = new Cards;
card001.text = "In order to free young Anakin Skywalker from slavery qui-gon jinn successfully uses a Jedi mind trick to convince his master Wato, a Toydarian junk merchant, to allow him to pod race.";
card001.answer = "Correction!: Mind Tricks don't work on Toydarians.";

let card002: Cards = new Cards;
card002.text = "'Star Trek: The Original Series' is an American science fiction television series created by Gene Roddenberry that follows the adventures of the starship USS Enterprise (NCC-1701) captained by John Theodore Kirk.";
card002.answer = "Correction!: The captain is named James Tiberius Kirk.";

let card003: Cards = new Cards;
card003.text = "In the 2002 television series, 'Firefly', smuggler Captain Malcolm Reynolds pilots the ship 'Firefly' to avoid the Alliance - a centralized government formed from the remnants of the U.S. and China.";
card003.answer = "Correction!: Reynolds pilots the Serenity, a Firefly class ship.";

let card004: Cards = new Cards;
card004.text = "In 'Star Wars,' the band 'Figrin D'an and the Modal Nodes' plays a genre of music known as 'Jizz.' The band is first heard on Jabba the Hutt's barge. Other subgenres of 'Jizz' include 'Jizz-wail,' 'Aubade,' and 'Glitz'";
card004.answer = "Correction!: we first hear this band at the Mos Eisley Cantina";

let card005: Cards = new Cards;
card005.text = "In 'Game of Thrones,' Daenerys Stormborn of the House Targaryen, the first of her name, the Unburnt Queen of the Andals and the First Men, Mother of Dragons, Khaleesi of the Great Grass Sea, and the Breaker of Chains, has 3 Dragons named Drogon, Rhaegal, and Meraxes.";
card005.answer = "Correction!: Daenerys' third dragon is named 'Viserion.' 'Meraxes' is one of the great dragons used by Aegon the Conqueror, ancestor to Daenerys.";

let card006: Cards = new Cards;
card006.text = "In 'Star Wars: Episode VI - Return of the Jedi,' the Rebel Alliance attacks and destroys the new Death Star's shield generator on the planet Endor with the help of small furry creatures called 'Ewoks.'";
card006.answer = "Correction!: Endor is not a planet, it is a Forrest Moon of a planet also named 'Endor.'";

let card007: Cards = new Cards;
card007.text = "The 133rd Pokemon - Eevee - can evolve into Vaporeon, Flareon, Espeon, Electreon, Umbreon, Leafeon, Glaceon, and Sylveon.";
card007.answer = "Correction!: Eevee evolves into Jolteon not Electreon. Eevee and its evolutions cover half of all types in 'Pokemon'";

let card008: Cards = new Cards;
card008.text = "Captain America's shield is so strong because it is made of Adamantium, the same metal present in Wolverine's skeleton and claws, and Ultron's outer shell.";
card008.answer = "Correction!: Captain America's shield is made of an alloy of Vibranium and an unknown metal sometimes referred to as Adamantium, but more often called 'Proto-Adamantium.' Adamantium and Proto-Adamantium were both discovered by the same man, Myron MacLain.";

let card009: Cards = new Cards;
card009.text = "In 'Game of Thrones,' Hodor's parent's gave him the name 'Hodor' to honor a famously named Maester from the North.";
card009.answer = "Correction!: Hodor was originally named 'Wylis.' The name 'Hodor' was later given to 'Wylis' because 'Hodor' was the only word he was able to speak.";

let card010: Cards = new Cards;
card010.text = "According to the rules of Quidditch, throwing the Quaffle through an opponent's hoop earns 10 points, hitting an opponent with a Bludger earns 0 points, and catching the Golden Snitch earns 50 points and ends the game.";
card010.answer = "Correction!: catching the Golden Snitch earns 150 points and ends the game.";

let card011: Cards = new Cards;
card011.text = "In J.R.R. Tolkein's 'The Fellowship of the Ring,' the fellowship is composed of nine members with representatives of four races: Hobbit, Dwarf, Elf, and Man.";
card011.answer = "Correction!: 5 races were represented! Gandalf is not a Man. He is a member of the Istari (A.K.A 'Wizards') who were sent to Middle Earth by the god 'Manwe' to defend the world from Sauron's tyranny.";

let card012: Cards = new Cards;
card012.text = "In the first 'Mortal Kombat' game (released in 1992), the player can unlock Reptile as a playable character if they achieve a double flawless victory in single player mode on the 'Pit' fighting stage if there is a silhouette flying past the stage's moon (which occurs every 6th game) and finish the match with a Fatality.";
card012.answer = "Correction!: if you complete those criteria you will only be able to fight against Reptile, you will not be able to play as him. Reptile only became a playable character in 'Mortal Kombat II.'";

let card013: Cards = new Cards;
card013.text = "Acclaimed fantasy series, 'The 'Wheel of Time' began with the publishing of 'The Eye of the World' in 1990 and concluded 23 years later when Robert Jordan finished the final work, 'A Memory of Light.'";
card013.answer = "Correction!: Robert Jordan died before the series was concluded. Sci Fi and Fantasy author Brandon Sanderson finished the series using notes Jordan had left behind.";

let card014: Cards = new Cards;
card014.text = "In C.S. Lewis's 'The Voyage of the Dawn Treader,' Lucy, Edmund, and their cousin Eustace travel to Narnia by jumping through a puddle.";
card014.answer = "Correction!: they travel to Narnia by getting sucked through a painting of the 'Dawn Treader.'";

let card015: Cards = new Cards;
card015.text = "Bowser's 7 children, the 'Koopalings' (A.K.A. the 'Koopa Kids'), first appear in 'Super Mario Brothers 3.'";
card015.answer = "Correction!: the Koopalings are not currently considered to be Bowser's children. The Koopalings were originally stated to be Bowser's children, but Shigeru Miyamoto, the creator of 'Mario' has stated in current cannon that Bowser's only official child is Bowser Jr.";

let card016: Cards = new Cards;
card016.text = "Knuckles, the last surviving Echidna in the Sonic Universe, resides in the Green Hill Zone protecting the Master Enerald, a large gemstone that controls the Chaos Emeralds.";
card016.answer = "Correction!: Knuckles does not live in the Green Hill Zone, he lives on Angel Island.";

let card017: Cards = new Cards;
card017.text = "In 'Harry Potter' the Deathly Hallows are a series of magical items won by the Peverall Brothers from Gellert Grindlewald. They are: the Elder Wand, the Ressurection Stone, and the Cloak of Invisibility.";
card017.answer = "Correction!: the Brothers did not win the Hallows from Grindlewald, they won them from Death.";

let card018: Cards = new Cards;
card018.text = "In 'Pokemon' use of a moonstone can evolve a Skitty into a Delcatty, a Clefairy into a Clefable, or a Solrock into a Lunatone.";
card018.answer = "Correction!: the moonstone cannot evolve Solrock into a Lunatone. The moonstone is only useable to evolve 6 pokemon, 4 of them from Generation 1: Clefairy, Jigglypuff, Nidorina, Nidorino, Munna, and Skitty.";

let card019: Cards = new Cards;
card019.text = "'Dungeons and Dragons' has many monsters that have been drawn from European Folklore, such as the Orc, Kobold, Goblin, and Troll, but also has several monsters unique to 'D&D' such as the Grell.";
card019.answer = "Correction!: the Orc is not drawn from European Folklore. The Orc was first created by J.R.R. Tolken.";

let card020: Cards = new Cards;
card020.text = "The 1995 movie 'Batman Forever' stars George Clooney and Chris O'Donnell as Batman and Robin Respectively as they battle the Riddler played by Jim Carey and Two-Face played by Tommy Lee Jones.";
card020.answer = "Correction!: Val Kilmer plays Batman in this movie. George Clooney would not portay Batman until 1997's Batman and Robin.";

let card021: Cards = new Cards;
card021.text = "In 'Harry Potter,' Voldemort's most evil henchmen, namely Lucius Malfoy, Bellatrix Lestrange, and Peter Pettigrew, all graduated Hogwarts as members of the Slytherin House.";
card021.answer = "Correction!: Peter Pettigrew was a Gryffindor.";

let card022: Cards = new Cards;
card022.text = "Saitama (A.K.A One Punch Man) fights many lords of different elements including: Deep Sea King, Subterranean King, and Sky King.";
card022.answer = "One Punch Man does not fight Sky King. Sky King is killed by Melzargard, henchman to Boros during the 'Alien Invaders' Arc, before he can attack City A.";

let card023: Cards = new Cards;
card023.text = "In 'The Wizard of Oz,' after their visit to the Emerald City, Dorothy and her friends traverse through Munchkinland to get to the castle of the Wicked Witch of the West. They travel through a forrest armed with a net, bug spray, and a gun.";
card023.answer = "Correction!: Dorothy and her friends travel through Winkieland, not Munchkinland.";

let card024: Cards = new Cards;
card024.text = "In 'Batman: Return of Bruce Wayne' Batman travels through several historic periods each donning the cape and cowl. He travels to: the neolithic period, 17th century Gotham during a witch hunt, the 18th century where he joins Blackbeard's crew, and 1917 where he assists the rebels in the Russian Revolution.";
card024.answer = "Correction!: Batman doesn't travel to 1917, but he does have many dealings with the Soviet Union in 'Superman: Red Son' in which Batman attempts to dismantle the communist regime.";
let card025: Cards = new Cards;
card025.text = "In the original 'Crash Bandicoot,' Crash can gain an extra life by destroying a '1-UP Box' or by collecting 100 mangoes.";
card025.answer = "Correction!: Crash gains an extra life by collecting 100 'Wumpa Fruits.'";

let card026: Cards = new Cards;
card026.text = "Bryce Papenbrook, a professional voice actor born in 1986, has provided the English voices of many well known anime characters including Kirito from 'Sword Art Online,' Rin from 'Blue Exorcist,' and young Joesph Joestar in 'JoJo's Bizarre Adventure(2012).'";
card026.answer = "Correction!: Bryce Papenbrook did not voice Joesph Joestar, though he did provide the voice for Ceaser Zeppeli in 'JoJo's Bizarre Adventure(2012)' Part 2.";

let card027: Cards = new Cards;
card027.text = "Kevin Conroy has provided the voice of Batman in many popular series including: 3 of the Batman Arkham videogames, Batman The Animated Series, Justice League (2001), and Batman: Under the Red Hood.";
card027.answer = "Correction!: Bruce Greenwood voiced Batman in 'Under the Red Hood.' Bruce Greenwood is also well known for depicting Admiral Pike in the J.J. Abrams 'Star Trek' movies.";

let card028: Cards = new Cards;
card028.text = "In 'Yu-Gi-Oh' several of the Protagonists' signature cards have 2500 Attack points including: Yugi's Dark Magician, Kaiba's Blue Eyes White Dragon, Jaden's Elemental Hero Neos, and Yusei's Stardust Dragon.";
card028.answer = "Correction!: Kaiba's Blue Eyes White Dragon has 3000 attack points.";

let card029: Cards = new Cards;
card029.text = "In 'Dragon Ball Z' Krillin dies in the main timeline a total of 3 times, more than any other character. Krillen is blown up by Frieza on Namek, shot by Cell during the Cell Games, and turned into chocolate and eaten by Super Buu.";
card029.answer = "Correction!: Krillin only died twice in 'Dragon Ball Z,' putting him and Goku at a tie for 'most killed character in Dragon Ball Z.' Krillin does not die in the Cell Games.";

let card030: Cards = new Cards;
card030.text = "'Super Saiyan' is a powerful and iconic technique in the Dragon Ball Universe. There are many versions of Super Saiyan each with different multipliers. Super Saiyan 1 multiplies the user's power by 50 times, Super Saiyan 2 multiplies the user's power by 100 times their base and Super Saiyan 3 multiplies the user's power by 300 times their base.";
card030.answer = "Correction!: Super Saiyan 3 multiplies the user's base power by 400 times.";

let card031: Cards = new Cards;
card031.text = "In 'Pokemon,' Psychic types are weak to Bug types, Poison types, Ghost types, and Dark types.";
card031.answer = "Correction!: Psychic types are not weak to Poison, but they are super effective against Poison. Psychic type weaknesses are modeled after common human fears: bugs, ghosts, and the dark.";

let card032: Cards = new Cards;
card032.text = "In 'The Fellowship of The Ring' Frodo, Samwise, Pippin, and Merry stay at an inn in the village of Bree called the 'Jumping Frog' where the band meets Aragorn and allows him to join their company.";
card032.answer = "Correction!: The inn the band meets Aragorn in is called the 'Prancing Pony.' The name is referenced in 'The Chronicles of Narnia: The Horse and His Boy' by C.S. Lewis where there is a 'prancing pony' named 'Bree' in the story.";

let card033: Cards = new Cards;
card033.text = "In 'Need For Speed Most Wanted (2005)' the player arrives in Rockport city and quickly loses their Lamborghini Gallardo to Clarence 'Razor' Callahan. The player must then race their way through the 'Blacklist' to get their car back.";
card033.answer = "Correction!: The player loses their 2001 BMW M3 GTR to Razor.";

let card034: Cards = new Cards;
card034.text = "In the 1982 TV series 'Knight Rider' Michael Knight is a high tech crime fighter for the Foundation for Law and Government (FLAG) with the help of his sentient vehicle 'KITT,' a modified and intelligent 1982 Delorean DMC 12.";
card034.answer = "Correction!: Michael drives a sentient 1982 Pontiac Firebird. KITT is equipped with a flamethrower, tear gas launcher, bomb sniffer, voice stress analyzer, and a dashboard printer, among other useful gadgets.";

let card035: Cards = new Cards;
card035.text = "First appearing in the 1984 episode of 'Transformers,' 'S.O.S. Dinobots,' the Dinobots are a group of mechanical dinosaurs allied with the Autobots. They are led by a robot Tyrannosaurus Rex named 'Savage.'";
card035.answer = "The Dinobots are led by an Autobot named 'Grimlock.' Grimlock is the only Dinobot whose name does not start with an 'S.' The other Dinobots are named: 'Slag,' 'Sludge,' 'Snarl,' and 'Swoop.'";

let card036: Cards = new Cards;
card036.text = "In 'Spongebob Squarepants,' Sheldon Plankton, owner of the Chum Bucket and frequent attempted thief of the Krabby Patty formula, has a computer wife named Kate who assists in his evil schemes.";
card036.answer = "Plankton's computer wife is named 'Karen.' She is named after 'Spongebob' creator Stephen Hillenberg's wife, Karen Hillenberg.";


function main(): void {
    // select a card at random.
    // For now I only have one card.
    let selectedCard: Cards = generateCard();
    card1.innerText = selectedCard.text;
    answer1.innerText = selectedCard.answer;
    answer1.style.display = "none";
}
// let cardsArray: Cards = new Cards [];
function generateCard(): Cards {
    let num: number = Math.random();
    console.log(num);
    let numOfCards: number = 36; // total number of cards;
    if (num > (1 / numOfCards)) { // if num is greater than num divided by total number of cards then continue to check the number until returning a card.
        if (num > (2 / numOfCards)) {
            if (num > (3 / numOfCards)) {
                if (num > (4 / numOfCards)) {
                    if (num > (5 / numOfCards)) {
                        if (num > (6 / numOfCards)) {
                            if (num > (7 / numOfCards)) {
                                if (num > (8 / numOfCards)) {
                                    if (num > (9 / numOfCards)) {
                                        if ( num > (10 / numOfCards)) {
                                            if (num > (11 / numOfCards)) {
                                                if (num > (12 / numOfCards)) {
                                                    if (num > (13 / numOfCards)) {
                                                        if (num > (14 / numOfCards)) {
                                                            if (num > (15 / numOfCards)) {
                                                                if (num > (16 / numOfCards)) {
                                                                    if (num > (17 / numOfCards)) {
                                                                        if (num > 18 / numOfCards) {
                                                                            if (num > (19 / numOfCards)) {
                                                                                if (num > (20 / numOfCards)) {
                                                                                    if (num > (21 / numOfCards)) {
                                                                                        if (num > (22 / numOfCards)) {
                                                                                            if (num > (23 / numOfCards)) {
                                                                                                if (num > (24 / numOfCards)) {
                                                                                                    if (num > (25 / numOfCards)) {
                                                                                                        if (num > (26 / numOfCards)) {
                                                                                                            if (num > (27 / numOfCards)) {
                                                                                                                if (num > (28 / numOfCards)) {
                                                                                                                    if (num > (29 / numOfCards)) {
                                                                                                                        if (num > (30 / numOfCards)) {
                                                                                                                            if (num > (31 / numOfCards)) {
                                                                                                                                if (num > (32 / numOfCards)) {
                                                                                                                                    if (num > (33 / numOfCards)) {
                                                                                                                                        if (num > (34 / numOfCards)) {
                                                                                                                                            if (num > (35 / numOfCards)) {
                                                                                                                                                if (num > (36 / numOfCards)) {
                                                                                                                                                    return card036;
                                                                                                                                                }
                                                                                                                                                return card035;
                                                                                                                                            }
                                                                                                                                            return card034;
                                                                                                                                        }
                                                                                                                                        return card033;
                                                                                                                                    }
                                                                                                                                    return card032;
                                                                                                                                }
                                                                                                                                return card031;
                                                                                                                            }
                                                                                                                            return card030;
                                                                                                                        }
                                                                                                                        return card029;
                                                                                                                    }
                                                                                                                    return card028;
                                                                                                                }
                                                                                                                return card027;
                                                                                                            }
                                                                                                            return card026;
                                                                                                        }
                                                                                                        return card025;
                                                                                                    }
                                                                                                    return card024;
                                                                                                }
                                                                                                return card023;
                                                                                            }
                                                                                            return card022;
                                                                                        }
                                                                                        return card021;
                                                                                    }
                                                                                    return card020;
                                                                                }
                                                                                return card019;
                                                                            }
                                                                            return card018;
                                                                        }
                                                                        return card017;
                                                                    }
                                                                    return card016;
                                                                }
                                                                return card015;
                                                            }
                                                            return card014;
                                                        }
                                                        return card013;
                                                    }
                                                    return card012;
                                                }
                                                return card011;
                                            }
                                            return card010;
                                        }
                                        return card009;
                                    }
                                    return card008;
                                }
                                return card007;
                            }
                            return card006;
                        }
                        return card005;
                    }
                    return card004;
                }
                return card003;
            }
            return card002;
        }
        return card001;
    }

    return card001;
}

function playerOneScoreUpdate(): void {
    playerOneScore++;
    playerOneScoreButton.innerText = "Player 1 Score: " + playerOneScore;
}

function playerTwoScoreUpdate(): void {
    playerTwoScore++;
    playerTwoScoreButton.innerText = "Player 2 Score: " + playerTwoScore;
}

function playerThreeScoreUpdate(): void {
    playerThreeScore++;
    playerThreeScoreButton.innerText = "Player 3 Score: " + playerThreeScore;
}

// OnClick Event Handlers:
rules.onclick = alertRules;
showAnswer.onclick = showAnswer1;
nextQuestion.onclick = main;
playerOneScoreButton.onclick = playerOneScoreUpdate;
playerTwoScoreButton.onclick = playerTwoScoreUpdate;
playerThreeScoreButton.onclick = playerThreeScoreUpdate;

main();

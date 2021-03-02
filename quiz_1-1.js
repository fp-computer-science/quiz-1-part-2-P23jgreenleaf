// Author JCG (AMDG) 3/2/21

var playerName = "Jack";

console.log (`Welcome to the world of Star Wars ${playerName}. Choose your class.`)

var playerClass = "Jedi";
var attack;
var defense;
var specialAbility;

var baseAttack = 20;
var baseDefense = 20;

var enemyNumber;
var enemy;
var enemyDefense;
var enemyAttack;

if(playerClass = "Jedi")
{
    attack = baseAttack * 2;
    defense = baseDefense * 3;
    specialAbility = "Jedi Mind Trick";
   console.log 
   (`You have chosen to become a Jedi. Your attack power is ${attack} and your defense is ${defense}. Your speial ability is ${specialAbility}.`);
}

else if(playerClass = "Bounty Hunter")
{
    attack = baseAttack + enemyNumber * 2;
    if (enemyNumber >= 3)
    {
    defense = baseDefense - enemyNumber * 5;
    }
    else
    {
        defense = baseDefense;
    }
    specialAbility = "Jetpack";
   console.log 
   (`You have chosen to become a Bounty Hunter. Your attack power is ${attack} and your defense is ${defense}. Your speial ability is ${specialAbility}.`);
}

else if(playerClass = "Sith")
{
    attack = baseAttack ** enemyNumber;
    if (enemy = "Jedi")
    {
        defense = baseDefense * .5;
    }
    else 
    {
    defense = baseDefense * .25;
    }
    specialAbility = "Force Choke";
   console.log 
   (`You have chosen to become a Sith. Your attack power is ${attack} and your defense is ${defense}. Your speial ability is ${specialAbility}.`);
}

if (defense > enemyDefense)
console.log("you d")
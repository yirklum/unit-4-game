
// Create variables 

var yourCharacter = {};
var enemyFighter = {};
var enemiesDefeated = 0;
var characterSelected = false;
var enemySelected = false;
var gameOver = false;

// Character Objects

var kyloRen = {
    name: "Kylo Ren",
    health: 150,
    attack: 15,
    baseAttack: 15
};

var porg = {
    name: "Porg",
    health: 200,
    attack: 35,
    baseAttack: 35,
};

var landoCalrissian = {
    name: "Lando Calrissian",
    health: 120,
    attack: 20,
    baseAttack: 20
};

var princessLeia = {
    name: "Princess Leia",
    health: 160,
    attack: 50,
    baseAttack: 40
};

var darthVader = {
    name: "Darth Vader",
    health: 90,
    attack: 10,
    baseAttack: 10
};

// Set up your character

function loadCharacter(selectedCharacter) {
    yourCharacter.name = selectedCharacter.name;
    yourCharacter.health = selectedCharacter.health;
    yourCharacter.attack = selectedCharacter.attack;
    yourCharacter.baseAttack = selectedCharacter.baseAttack;
    $("#selected-character").css("display", "inline-block");
    $("#current-enemy").css("display", "inline-block");
    $(".attack").css("display", "inline-block");
}

// Set up enemy character

function loadEnemy(selectedEnemy) {
    enemyFighter.name = selectedEnemy.name;
    enemyFighter.health = selectedEnemy.health;
    enemyFighter.attack = selectedEnemy.attack;
    enemyFighter.baseAttack = selectedEnemy.baseAttack;
}

// Move unselected characters to enemy list

function addToEnemies() {
    $(".character-choice").removeClass("character-choice").addClass("enemy-choice");
    $("#enemy-list").append($(".enemy-choice"));
}


// Reset the game

function resetGame() {
    $("#kylo-ren").children(".health").html(kyloRen.health);
    $("#porg").children(".health").html(porg.health);
    $("#lando-calrissian").children(".health").html(landoCalrissian.health);
    $("#princess-leia").children(".health").html(princessLeia.health);
    $("#darth-vader").children(".health").html(darthVader.health);

    $(".character").removeClass("selected-character enemy-choice enemy-character").addClass("character-choice");
    var choices = $(".character-choice").show();
    $("#character-list").html(choices);
    $("#instructions").empty();
    $("#restart").hide();
    $("#current-enemy").css("display", "none");
    $("#selected-character").css("display", "none");
    $(".attack").css("display", "none");
    
    enemiesDefeated = 0;
    characterSelected = false;
    enemySelected = false;
    gameOver = false;    
    yourCharacter = {};
    enemyFighter = {};
}


// Begin playing

$(document).ready(function() {
    
    $("#restart").hide();

    $("#kylo-ren").on("click", function () {
        if(characterSelected == false) {
            $("#instructions").empty();
            loadCharacter(kyloRen);
            characterSelected = true;
            $("#kylo-ren").removeClass("character-choice").addClass("selected-character");
            $("#selected-character").append(this);
            addToEnemies();
        }
        else if ((characterSelected == true) && (enemySelected == false)) {
            if($("#kylo-ren").hasClass("enemy-choice")) {
                $("#instructions").empty();
                loadEnemy(kyloRen);
                enemySelected = true;
                $("#kylo-ren").removeClass("enemy-choice").addClass("enemy-character");
                $("#current-enemy").append(this);
            }
        }
    });

    $("#porg").on("click", function () {
        if(characterSelected == false) {
            $("#instructions").empty();
            loadCharacter(porg);
            characterSelected = true;
            $("#porg").removeClass("character-choice").addClass("selected-character");
            $("#selected-character").append(this);
            addToEnemies();
        }
        else if ((characterSelected == true) && (enemySelected == false)) {
            if($("#porg").hasClass("enemy-choice")) {
                $("#instructions").empty();
                loadEnemy(porg);
                enemySelected = true;
                $("#porg").removeClass("enemy-choice").addClass("enemy-character");
                $("#current-enemy").append(this);
            }
        }
    });

    $("#lando-calrissian").on("click", function () {
        if(characterSelected == false) {
            $("#instructions").empty();
            loadCharacter(landoCalrissian);
            characterSelected = true;
            $("#lando-calrissian").removeClass("character-choice").addClass("selected-character");
            $("#selected-character").append(this);
            addToEnemies();
        }
        else if ((characterSelected == true) && (enemySelected == false)) {
            if($("#lando-calrissian").hasClass("enemy-choice")) {
                $("#instructions").empty();
                loadEnemy(landoCalrissian);
                enemySelected = true;
                $("#lando-calrissian").removeClass("enemy-choice").addClass("enemy-character");
                $("#current-enemy").append(this);
            }
        }
    });

    $("#princess-leia").on("click", function () {
        if(characterSelected == false) {
            $("#instructions").empty();
            loadCharacter(princessLeia);
            characterSelected = true;
            $("#princess-leia").removeClass("character-choice").addClass("selected-character");
            $("#selected-character").append(this);
            addToEnemies();
        }
        else if ((characterSelected == true) && (enemySelected == false)) {
            if($("#princess-leia").hasClass("enemy-choice")) {
                $("#instructions").empty();
                loadEnemy(princessLeia);
                enemySelected = true;
                $("#princess-leia").removeClass("enemy-choice").addClass("enemy-character");
                $("#current-enemy").append(this);
            }
        }
    });

    $("#darth-vader").on("click", function () {
        if(characterSelected == false) {
            $("#instructions").empty();
            loadCharacter(darthVader);
            characterSelected = true;
            $("#darth-vader").removeClass("character-choice").addClass("selected-character");
            $("#selected-character").append(this);
            addToEnemies();
        }
        else if ((characterSelected == true) && (enemySelected == false)) {
            if($("#darth-vader").hasClass("enemy-choice")) {
                $("#instructions").empty();
                loadEnemy(darthVader);
                enemySelected = true;
                $("#darth-vader").removeClass("enemy-choice").addClass("enemy-character");
                $("#current-enemy").append(this);
            }
        }
    });

    // Set up the attack function

    $("#attack-button").on("click", function () {
        if (characterSelected && enemySelected && !gameOver) {
            enemyFighter.health = enemyFighter.health - yourCharacter.attack;
            $(".enemy-character").children(".health").html(enemyFighter.health);
            $("#instructions").html("You attacked " + enemyFighter.name + " and inflicted " + yourCharacter.attack + " damage.");
            yourCharacter.attack = yourCharacter.attack + yourCharacter.baseAttack;

            // Counterattack

            if (enemyFighter.health > 0) {
                yourCharacter.health = yourCharacter.health - enemyFighter.baseAttack;
                $(".selected-character").children(".health").html(yourCharacter.health);
                if (yourCharacter.health > 0) {
                    $("#instructions").append(enemyFighter.name + " counterattacked for " + enemyFighter.baseAttack + " damage.");
                }
                else {
                    gameOver = true;
                    $("#instructions").html("You were vanquished. Would you like to try again?");
                    $("#restart").show();
                }
            }
            else {
                enemiesDefeated++;
                enemySelected = false;
                $("#instructions").html("You have vanquished " + enemyFighter.name + "! Choose your next opponent.");
                $(".enemy-character").hide();

                // See if the player has won
                if (enemiesDefeated === 4) {
                    gameOver = true;
                    $("#instructions").html("You have saved the galaxy! Would you like to play again?");
                    $("#restart").show();
                }
            }
        }
        else if (!characterSelected && !gameOver) {
            $("#instructions").html("Choose your character.");
        }
        else if (!enemySelected && !gameOver) {
            $("#instructions").html("Choose an opponent to battle.");
        }
    });

    $("#restart").on("click", function () {
        resetGame();
    });
});
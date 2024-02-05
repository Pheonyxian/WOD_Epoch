function gameChanged() {
    var game = document.getElementById("game_id").value;
    changeBasicsTable(game);
    changeAbilitiesTable(game);
    showAdditionalAbilityRows(game);
    shouldEnableSavageAge(game);
    changeStylesheet(game);
}

function changeStylesheet(game) {
    var stylesheet = document.getElementById("stylesheet");

    switch(game) {
        //Once you add more css files for each game type, add a new "case" with the new css to be loaded
        case "wod_gen":
            stylesheet.href = "../styles/genwod-style.css";
            break;
        case "vtm":
            stylesheet.href = "../styles/vtm-style.css";
            break;
        case "wta":
            stylesheet.href = "../styles/wta-style.css";
            break;
        default:
            //this is what runs if the value isn't one of the above cases.
            stylesheet.href = "../styles/genwod-style.css";
            break;
    }
}

function shouldEnableSavageAge(game) {
    var radioButton = document.querySelector('input[id="savage_age"]');
    var radioButtonLabel = document.getElementById("savage_age");
    if(game == "wta") {
        radioButton.disabled = false;
        radioButtonLabel.classList.remove("disabled-label");
    }
    else {
        radioButton.disabled = true;
        radioButtonLabel.classList.add("disabled-label");
    }
}

function changeBasicsTable(game) {
    //Categories laid out like
    /*
        Name       1   4
        Player     2   5
        Chronicle  3   6
    */
    var cat1 = document.getElementById("variablecat1");
    var cat2 = document.getElementById("variablecat2");
    var cat3 = document.getElementById("variablecat3");
    var cat4 = document.getElementById("variablecat4");
    var cat5 = document.getElementById("variablecat5");
    var cat6 = document.getElementById("variablecat6");

    switch(game) {
        case "wod_gen":
            cat1.textContent = "Nature";
            cat2.textContent = "Demeanor";
            cat3.textContent = "Concept";
            cat4.textContent = "Age";
            cat5.textContent = "Group";
            cat6.textContent = "Other";
            shouldHideWtaExtras(true);
            break;
        case "vtm":
            cat1.textContent = "Nature";
            cat2.textContent = "Demeanor";
            cat3.textContent = "Clan";
            cat4.textContent = "Generation";
            cat5.textContent = "Haven";
            cat6.textContent = "Concept";
            shouldHideWtaExtras(true);
            break;
        case "wta":
            cat1.textContent = "Breed";
            cat2.textContent = "Auspice";
            cat3.textContent = "Tribe";
            cat4.textContent = "Pack Name";
            cat5.textContent = "Pack Totem";
            cat6.textContent = "Concept";
            shouldHideWtaExtras(false);
            break;
        case "omage":
            cat1.textContent = "Nature";
            cat2.textContent = "Demeanor";
            cat3.textContent = "Essence";
            cat4.textContent = "Tradition";
            cat5.textContent = "Cabal";
            cat6.textContent = "Concept";
            shouldHideWtaExtras(true);
            break;
        case "wrto":
            cat1.textContent = "Nature";
            cat2.textContent = "Demeanor";
            cat3.textContent = "Shadow";
            cat4.textContent = "Life";
            cat5.textContent = "Death";
            cat6.textContent = "Regret";
            shouldHideWtaExtras(true);
            break;
        case "ctd":
            cat1.textContent = "Court";
            cat2.textContent = "Legacy";
            cat3.textContent = "House";
            cat4.textContent = "Seeming";
            cat5.textContent = "Kith";
            cat6.textContent = "Motley";
            shouldHideWtaExtras(true);
            break;
        case "htr":
        case "htr20_mrgone":
        case "htr20_epoch":
            cat1.textContent = "Nature";
            cat2.textContent = "Demeanor";
            cat3.textContent = "Concept";
            cat4.textContent = "Primary Virtue";
            cat5.textContent = "Creed";
            cat6.textContent = "Starting Conviction";
            shouldHideWtaExtras(true);
            break;
        case "dtf":
        case "dtf20":
            cat1.textContent = "Nature";
            cat2.textContent = "Demeanor";
            cat3.textContent = "Concept";
            cat4.textContent = "House";
            cat5.textContent = "Faction";
            cat6.textContent = "Visage";
            shouldHideWtaExtras(true);
            break;
        default:
            break;
    }
}

//I know doing it this way creates a lot of duplicate code, but in
//my experience it's the most readable and creates fewer bugs
function changeAbilitiesTable(game) {
    //var talent1 = document.getElementById("talent1_label"); //Doesn't change except in age modifier
    var talent2 = document.getElementById("talent2_label");
    var talent3 = document.getElementById("talent3_label");
    var talent4 = document.getElementById("talent4_label");
    var talent5 = document.getElementById("talent5_label");
    var talent6 = document.getElementById("talent6_label");
    var talent7 = document.getElementById("talent7_label");
    var talent8 = document.getElementById("talent8_label");
    var talent9 = document.getElementById("talent9_label");
    var talent10 = document.getElementById("talent10_label");

    var skill1 = document.getElementById("skill1_label");
    var skill2 = document.getElementById("skill2_label");
    var skill3 = document.getElementById("skill3_label");
    var skill4 = document.getElementById("skill4_label");
    var skill5 = document.getElementById("skill5_label");
    var skill6 = document.getElementById("skill6_label");
    var skill7 = document.getElementById("skill7_label");
    var skill8 = document.getElementById("skill8_label");
    var skill9 = document.getElementById("skill9_label");
    var skill10 = document.getElementById("skill10_label");

    //var knowledges1 = document.getElementById("knowledge1_label"); //Doesn't change
    var knowledges2 = document.getElementById("knowledge2_label");
    var knowledges3 = document.getElementById("knowledge3_label");
    var knowledges4 = document.getElementById("knowledge4_label");
    var knowledges5 = document.getElementById("knowledge5_label");
    var knowledges6 = document.getElementById("knowledge6_label");
    var knowledges7 = document.getElementById("knowledge7_label");
    var knowledges8 = document.getElementById("knowledge8_label");
    var knowledges9 = document.getElementById("knowledge9_label");
    var knowledges10 = document.getElementById("knowledge10_label");

    switch(game) {
        case "wod_gen":
            skill1.textContent = "Animal Ken:";
            talent2.textContent = "Athletics:";
            skill2.textContent = "Crafts:";
            knowledges2.textContent = "Computer:";
            talent3.textContent = "Awareness:";
            skill3.textContent = "Drive:";
            knowledges3.textContent = "Finance:";
            talent4.textContent = "Brawl:";
            skill4.textContent = "Etiquette:";
            knowledges4.textContent = "Investigation:";
            talent5.textContent = "Empathy:";
            skill5.textContent = "Firearms:";
            knowledges5.textContent = "Law:";
            talent6.textContent = "Expression:";
            skill6.textContent = "Larceny:";
            knowledges6.textContent = "Medicine:";
            talent7.textContent = "Intimidation:";
            skill7.textContent = "Melee:";
            knowledges7.textContent = "Occult:";
            talent8.textContent = "Leadership:";
            skill8.textContent = "Performance:";
            knowledges8.textContent = "Politics:";
            talent9.textContent = "Streetwise:";
            skill9.textContent = "Stealth:";
            knowledges9.textContent = "Science:";
            talent10.textContent = "Subterfuge:";
            skill10.textContent = "Survival:";
            knowledges10.textContent = "Technology:";
            break;
        case "vtm":
            skill1.textContent = "Animal Ken:";
            talent2.textContent = "Athletics:";
            skill2.textContent = "Crafts:";
            knowledges2.textContent = "Computer:";
            talent3.textContent = "Awareness:";
            skill3.textContent = "Drive:";
            knowledges3.textContent = "Finance:";
            talent4.textContent = "Brawl:";
            skill4.textContent = "Etiquette:";
            knowledges4.textContent = "Investigation:";
            talent5.textContent = "Empathy:";
            skill5.textContent = "Firearms:";
            knowledges5.textContent = "Law:";
            talent6.textContent = "Expression:";
            skill6.textContent = "Larceny:";
            knowledges6.textContent = "Medicine:";
            talent7.textContent = "Intimidation:";
            skill7.textContent = "Melee:";
            knowledges7.textContent = "Occult:";
            talent8.textContent = "Leadership:";
            skill8.textContent = "Performance:";
            knowledges8.textContent = "Politics:";
            talent9.textContent = "Streetwise:";
            skill9.textContent = "Stealth:";
            knowledges9.textContent = "Science:";
            talent10.textContent = "Subterfuge:";
            skill10.textContent = "Survival:";
            knowledges10.textContent = "Technology:";
            break;
        case "wta":
            skill1.textContent = "Animal Ken:";
            talent2.textContent = "Athletics:";
            skill2.textContent = "Crafts:";
            knowledges2.textContent = "Computer:";
            talent3.textContent = "Brawl:";
            skill3.textContent = "Drive:";
            knowledges3.textContent = "Enigmas:";
            talent4.textContent = "Empathy:";
            skill4.textContent = "Etiquette:";
            knowledges4.textContent = "Investigation:";
            talent5.textContent = "Expression:";
            skill5.textContent = "Firearms:";
            knowledges5.textContent = "Law:";
            talent6.textContent = "Intimidation:";
            skill6.textContent = "Larceny:";
            knowledges6.textContent = "Medicine:";
            talent7.textContent = "Leadership:";
            skill7.textContent = "Melee:";
            knowledges7.textContent = "Occult:";
            talent8.textContent = "Primal-Urge:";
            skill8.textContent = "Performance:";
            knowledges8.textContent = "Rituals:";
            talent9.textContent = "Streetwise:";
            skill9.textContent = "Stealth:";
            knowledges9.textContent = "Science:";
            talent10.textContent = "Subterfuge:";
            skill10.textContent = "Survival:";
            knowledges10.textContent = "Technology:";
            break;
        case "omage":
            skill1.textContent = "Crafts:";
            talent2.textContent = "Art:";
            skill2.textContent = "Drive:";
            knowledges2.textContent = "Computer:";
            talent3.textContent = "Athletics:";
            skill3.textContent = "Etiquette:";
            knowledges3.textContent = "Cosmology:";
            talent4.textContent = "Awareness:";
            skill4.textContent = "Firearms:";
            knowledges4.textContent = "Enigmas:";
            talent5.textContent = "Brawl:";
            skill5.textContent = "Martial Arts:";
            knowledges5.textContent = "Esoterica:";
            talent6.textContent = "Empathy:";
            skill6.textContent = "Meditation:";
            knowledges6.textContent = "Investigation:";
            talent7.textContent = "Intimidation:";
            skill7.textContent = "Melee:";
            knowledges7.textContent = "Law:";
            talent8.textContent = "Leadership:";
            skill8.textContent = "Research:";
            knowledges8.textContent = "Medicine:";
            talent9.textContent = "Leadership:";
            skill9.textContent = "Stealth:";
            knowledges9.textContent = "Occult:";
            talent10.textContent = "Streetwise:";
            skill10.textContent = "Survival:";
            knowledges10.textContent = "Politics:";
            break;
        case "wrto":
            skill1.textContent = "Crafts:";
            talent2.textContent = "Athletics:";
            skill2.textContent = "Drive:";
            knowledges2.textContent = "Beaurocracy:";
            talent3.textContent = "Awareness:";
            skill3.textContent = "Etiquette:";
            knowledges3.textContent = "Computer:";
            talent4.textContent = "Brawl:";
            skill4.textContent = "Firearms:";
            knowledges4.textContent = "Enigmas:";
            talent5.textContent = "Empathy:";
            skill5.textContent = "Larceny:";
            knowledges5.textContent = "Investigation:";
            talent6.textContent = "Expression:";
            skill6.textContent = "Leadership:";
            knowledges6.textContent = "Medicine:";
            talent7.textContent = "Intimidation:";
            skill7.textContent = "Meditation:";
            knowledges7.textContent = "Occult:";
            talent8.textContent = "Persuasion:";
            skill8.textContent = "Melee:";
            knowledges8.textContent = "Politics:";
            talent9.textContent = "Streetwise:";
            skill9.textContent = "Performance:";
            knowledges9.textContent = "Science:";
            talent10.textContent = "Subterfuge:";
            skill10.textContent = "Stealth:";
            knowledges10.textContent = "Technology:";
            break;
        case "ctd":
            skill1.textContent = "Animal Ken:";
            talent2.textContent = "Athletics:";
            skill2.textContent = "Crafts:";
            knowledges2.textContent = "Computer:";
            talent3.textContent = "Brawl:";
            skill3.textContent = "Drive:";
            knowledges3.textContent = "Enigmas:";
            talent4.textContent = "Empathy:";
            skill4.textContent = "Etiquette:";
            knowledges4.textContent = "Gremayre:";
            talent5.textContent = "Expression:";
            skill5.textContent = "Firearms:";
            knowledges5.textContent = "Investigation:";
            talent6.textContent = "Intimidation:";
            skill6.textContent = "Larceny:";
            knowledges6.textContent = "Law:";
            talent7.textContent = "Kenning:";
            skill7.textContent = "Melee:";
            knowledges7.textContent = "Medicine:";
            talent8.textContent = "Leadership:";
            skill8.textContent = "Performance:";
            knowledges8.textContent = "Politics:";
            talent9.textContent = "Streetwise:";
            skill9.textContent = "Stealth:";
            knowledges9.textContent = "Science:";
            talent10.textContent = "Subterfuge:";
            skill10.textContent = "Survival:";
            knowledges10.textContent = "Technology:";
            break;
        case "htr":
            skill1.textContent = "Animal Ken:";
            talent2.textContent = "Athletics:";
            skill2.textContent = "Crafts:";
            knowledges2.textContent = "Computer:";
            talent3.textContent = "Brawl:";
            skill3.textContent = "Drive:";
            knowledges3.textContent = "Finance:";
            talent4.textContent = "Empathy:";
            skill4.textContent = "Etiquette:";
            knowledges4.textContent = "Investigation:";
            talent5.textContent = "Expression:";
            skill5.textContent = "Firearms:";
            knowledges5.textContent = "Law:";
            talent6.textContent = "Intimidation:";
            skill6.textContent = "Larceny:";
            knowledges6.textContent = "Medicine:";
            talent7.textContent = "Intuition:";
            skill7.textContent = "Melee:";
            knowledges7.textContent = "Occult:";
            talent8.textContent = "Leadership:";
            skill8.textContent = "Performance:";
            knowledges8.textContent = "Politics:";
            talent9.textContent = "Streetwise:";
            skill9.textContent = "Stealth:";
            knowledges9.textContent = "Science:";
            talent10.textContent = "Subterfuge:";
            skill10.textContent = "Survival:";
            knowledges10.textContent = "Technology:";
            break;
        case "htr20_mrgone":
            skill1.textContent = "Animal Ken:";
            talent2.textContent = "Athletics:";
            skill2.textContent = "Crafts:";
            knowledges2.textContent = "Computer:";
            talent3.textContent = "Brawl:";
            skill3.textContent = "Drive:";
            knowledges3.textContent = "Finance:";
            talent4.textContent = "Empathy:";
            skill4.textContent = "Etiquette:";
            knowledges4.textContent = "Investigation:";
            talent5.textContent = "Expression:";
            skill5.textContent = "Firearms:";
            knowledges5.textContent = "Law:";
            talent6.textContent = "Intimidation:";
            skill6.textContent = "Larceny:";
            knowledges6.textContent = "Medicine:";
            talent7.textContent = "Intuition:";
            skill7.textContent = "Melee:";
            knowledges7.textContent = "Occult:";
            talent8.textContent = "Leadership:";
            skill8.textContent = "Performance:";
            knowledges8.textContent = "Politics:";
            talent9.textContent = "Streetwise:";
            skill9.textContent = "Stealth:";
            knowledges9.textContent = "Science:";
            talent10.textContent = "Subterfuge:";
            skill10.textContent = "Survival:";
            knowledges10.textContent = "Technology:";
            break;
        case "htr20_epoch":
            skill1.textContent = "Animal Ken:";
            talent2.textContent = "Athletics:";
            skill2.textContent = "Crafts:";
            knowledges2.textContent = "Computer:";
            talent3.textContent = "Brawl:";
            skill3.textContent = "Drive:";
            knowledges3.textContent = "Finance:";
            talent4.textContent = "Empathy:";
            skill4.textContent = "Etiquette:";
            knowledges4.textContent = "Investigation:";
            talent5.textContent = "Expression:";
            skill5.textContent = "Firearms:";
            knowledges5.textContent = "Law:";
            talent6.textContent = "Intimidation:";
            skill6.textContent = "Larceny:";
            knowledges6.textContent = "Medicine:";
            talent7.textContent = "Intuition:";
            skill7.textContent = "Melee:";
            knowledges7.textContent = "Occult:";
            talent8.textContent = "Leadership:";
            skill8.textContent = "Performance:";
            knowledges8.textContent = "Politics:";
            talent9.textContent = "Streetwise:";
            skill9.textContent = "Stealth:";
            knowledges9.textContent = "Science:";
            talent10.textContent = "Subterfuge:";
            skill10.textContent = "Survival:";
            knowledges10.textContent = "Technology:";
            break;
        case "dtf":
            skill1.textContent = "Animal Ken:";
            talent2.textContent = "Athletics:";
            skill2.textContent = "Crafts:";
            knowledges2.textContent = "Computer:";
            talent3.textContent = "Awareness:";
            skill3.textContent = "Drive:";
            knowledges3.textContent = "Finance:";
            talent4.textContent = "Brawl:";
            skill4.textContent = "Etiquette:";
            knowledges4.textContent = "Investigation:";
            talent5.textContent = "Empathy:";
            skill5.textContent = "Firearms:";
            knowledges5.textContent = "Law:";
            talent6.textContent = "Expression:";
            skill6.textContent = "Larceny:";
            knowledges6.textContent = "Medicine:";
            talent7.textContent = "Intimidation:";
            skill7.textContent = "Melee:";
            knowledges7.textContent = "Occult:";
            talent8.textContent = "Leadership:";
            skill8.textContent = "Performance:";
            knowledges8.textContent = "Politics:";
            talent9.textContent = "Streetwise:";
            skill9.textContent = "Stealth:";
            knowledges9.textContent = "Religion:";
            talent10.textContent = "Subterfuge:";
            skill10.textContent = "Survival:";
            knowledges10.textContent = "Science:";
            break;
        case "dtf20":
            skill1.textContent = "Animal Ken:";
            talent2.textContent = "Athletics:";
            skill2.textContent = "Crafts:";
            knowledges2.textContent = "Computer:";
            talent3.textContent = "Awareness:";
            skill3.textContent = "Drive:";
            knowledges3.textContent = "Finance:";
            talent4.textContent = "Brawl:";
            skill4.textContent = "Etiquette:";
            knowledges4.textContent = "Investigation:";
            talent5.textContent = "Empathy:";
            skill5.textContent = "Firearms:";
            knowledges5.textContent = "Law:";
            talent6.textContent = "Expression:";
            skill6.textContent = "Larceny:";
            knowledges6.textContent = "Medicine:";
            talent7.textContent = "Intimidation:";
            skill7.textContent = "Melee:";
            knowledges7.textContent = "Occult:";
            talent8.textContent = "Leadership:";
            skill8.textContent = "Performance:";
            knowledges8.textContent = "Politics:";
            talent9.textContent = "Streetwise:";
            skill9.textContent = "Stealth:";
            knowledges9.textContent = "Religion:";
            talent10.textContent = "Subterfuge:";
            skill10.textContent = "Survival:";
            knowledges10.textContent = "Science:";
            break;
        default:
            break;
    }
    changeAbilitiesAgeModifier();

}

function changeAbilitiesAgeModifier() {
    var isSavageAge = document.querySelector('input[id="savage_age"]').checked;
    var isDarkAge = document.querySelector('input[id="dark_ages"]').checked;
    var isWyldAge = document.querySelector('input[id="wyld_west"]').checked;

    var knowledges1 = document.getElementById("knowledge1_label");
    
    if(isSavageAge) {
        var knowledges2 = document.getElementById("knowledge2_label");
        var skill3 = document.getElementById("skill3_label");
        var skill5 = document.getElementById("skill5_label");
        var talent9 = document.getElementById("talent9_label");

        knowledges1.textContent = "Hearth Wisdom:";
        knowledges2.textContent = "Legends:";
        skill3.textContent = "Hunting:";
        skill5.textContent = "Territory:";
        talent9.textContent = "Thrown:";
    }
    else if(isDarkAge) {
        var knowledges2 = document.getElementById("knowledge2_label");
        var knowledges9 = document.getElementById("knowledge9_label");
        var knowledges10 = document.getElementById("knowledge10_label");
        var skill3 = document.getElementById("skill3_label");
        var skill5 = document.getElementById("skill5_label");
        var talent9 = document.getElementById("talent9_label");

        knowledges1.textContent = "Academics";
        knowledges2.textContent = "Hearth Wisdom:";
        skill3.textContent = "Ride:";
        skill5.textContent = "Archery:";
        talent9.textContent = "Legerdemain:";
        knowledges9.textContent = "Seneschal:";
        knowledges10.textContent = "Sail:";
    }
    else if(isWyldAge) {
        var skill3 = document.getElementById("skill3_label");

        knowledges1.textContent = "Academics";
        skill3.textContent = "Ride:";
    }
    else {
        knowledges1.textContent = "Academics:";
    }
}

function showAdditionalAbilityRows(game) {
    var shouldShow = game == "dtf" || game == "htr" || game == "omage";
    var elementsToToggle = ["talent11_label", "talent11_dots", "skill11_label", "skill11_dots", 
        "knowledge11_label", "knowledge11_dots", "talent12_label", "talent12_dots", "skill12_label", 
        "skill12_dots", "knowledge12_label", "knowledge12_dots"];

    elementsToToggle.forEach(function(elementId) {
        var element = document.getElementById(elementId);
        element.style.display = shouldHide ? "none" : "inline";
    });
}

function shouldHideWtaExtras(shouldHide) {
    var elementsToToggle = ["wta_naturecat", "wta_nature", "wta_demeanorcat", "wta_demeanor"];

    elementsToToggle.forEach(function(elementId) {
        var element = document.getElementById(elementId);
        element.style.display = shouldHide ? "none" : "inline";
    });
}

function addValue(id) {
    var value = parseInt(document.getElementById(id).textContent, 10);
    var overcapEnabled = document.getElementById("overcap_toggle").checked;
    if(overcapEnabled == true && value >= 10) {
        return
    }
    else if(overcapEnabled == false && value >= 5) {
        return
    }
    value = value + 1;
    document.getElementById(id).textContent = value;
}

function subtractValue(id) {
    var value = parseInt(document.getElementById(id).textContent, 10);
    if(value <= 1) {
        return
    }
    value = value - 1;
    document.getElementById(id).textContent = value;
}

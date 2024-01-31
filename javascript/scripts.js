function gameChanged() {
    var game = document.getElementById("game_id").value;
    changeBasicsTable(game);
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

function changeAbilitiesTable(game) {
    //var talent1 = document.getElementById("talent1_label");
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

    //var knowledges1 = document.getElementById("knowledge1_label");
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
            break;
        case "vtm":
            skill1.textContent = "Animal Ken:";
            talent2.textContent = "Athletics:";
            skill2.textContent = "Crafts:";
            knowledges2.textContent = "Computer:";
            break;
        case "wta":
            skill1.textContent = "Animal Ken:";
            talent2.textContent = "Athletics:";
            skill2.textContent = "Crafts:";
            knowledges2.textContent = "Computer:";
            break;
        case "omage":
            skill1.textContent = "Crafts:";
            talent2.textContent = "Art:";
            skill2.textContent = "Drive:";
            knowledges2.textContent = "Computer:";
            break;
        case "wrto":
            skill1.textContent = "Crafts:";
            talent2.textContent = "Athletics:";
            skill2.textContent = "Drive:";
            knowledges2.textContent = "Beaurocracy:";
            break;
        case "ctd":
            skill1.textContent = "Animal Ken:";
            talent2.textContent = "Athletics:";
            skill2.textContent = "Crafts:";
            knowledges2.textContent = "Computer:";
            break;
        case "htr":
            skill1.textContent = "Animal Ken:";
            talent2.textContent = "Athletics:";
            skill2.textContent = "Crafts:";
            knowledges2.textContent = "Computer:";
            break;
        case "htr20_mrgone":
            skill1.textContent = "Animal Ken:";
            talent2.textContent = "Athletics:";
            skill2.textContent = "Crafts:";
            knowledges2.textContent = "Computer:";
            break;
        case "htr20_epoch":
            skill1.textContent = "Animal Ken:";
            talent2.textContent = "Athletics:";
            skill2.textContent = "Crafts:";
            knowledges2.textContent = "Computer:";
            break;
        case "dtf":
            skill1.textContent = "Animal Ken:";
            talent2.textContent = "Athletics:";
            skill2.textContent = "Crafts:";
            knowledges2.textContent = "Computer:";
            break;
        case "dtf20":
            skill1.textContent = "Animal Ken:";
            talent2.textContent = "Athletics:";
            skill2.textContent = "Crafts:";
            knowledges2.textContent = "Computer:";
            break;
        default:
            break;
    }
    changeAbilitiesSavageAge();

}

function changeAbilitiesSavageAge() {
    var shouldChange = document.querySelector('input[id="savage_age"]').checked;
    var knowledges1 = document.getElementById("knowledge1_label");
    var knowledges2 = document.getElementById("knowledge2_label");
    if(shouldChange) {
        knowledges1.textContent = "Hearth Wisdom:";
        knowledges2.textContent = "Legends";
    }
    else {
        knowledges1.textContent = "Academics";
        //knowledges2 varies by game and is set in changeAbilitiesTable()
    }
}

function shouldHideWtaExtras(shouldHide) {
    var natureCat = document.getElementById("wta_naturecat");
    var nature = document.getElementById("wta_nature");
    var demeanorCat = document.getElementById("wta_demeanorcat");
    var demeanor = document.getElementById("wta_demeanor");
    if(shouldHide) {
        natureCat.style.display = "none";
        nature.style.display = "none";
        demeanorCat.style.display = "none";
        demeanor.style.display = "none";
    }
    else {
        natureCat.style.display = "inline";
        nature.style.display = "inline";
        demeanorCat.style.display = "inline";
        demeanor.style.display = "inline";
    }
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

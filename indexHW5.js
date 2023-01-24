// Week 5 Coding Assignment - Creating a Menu App//
// Benjamin Ratliff//

//A menu app for creating a list of card game decks //

class CardList {
    constructor(name){
        this.name = name;
    }
    describe() {
        return `${this.name}.`
    }
    }


class Deck {
    constructor(name){
        this.name = name;
        this.decklist = [];
    }
    addCard(card) {
        if (card instanceof CardList) {
            this.decklist.push(card);
        } else {
            throw new Error('This card name is invalid.');
        }
    }
        
        describe() {
            return `${this.name} has ${this.decklist.length} cards.`;
        }
    }
    

class Menu {
    constructor() {
        this.selectedDeck = null;
        this.decks = [];
    }
    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1' :
                    this.createDeck();
                    break;
                case '2' :
                    this.displayDecks();
                    break;
                case '3' :
                    this.deleteDeck();
                    break;
                case '4' :
                    this.viewDeck();
                    break;
                default :
                selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Closing App');

    }
    showMainMenuOptions() {
        return prompt(`
        0) Exit App
        1) Create New Deck
        2) View all decks
        3) Delete deck
        4) View Specific deck
        `);
    }
    showDeckMenuOptions(description) {
        return prompt(`
        0) back
        1) add card
        2) delete card
        -------------------
        ${description} \n`);
        
    }

    displayDecks() {
        let deckString = '';
        for (let i = 0; i < this.decks.length; i++) {
           deckString += i + ') ' + this.decks[i].name + '\n'; 
        }
        alert(deckString);
    }
    createDeck() {
        let name = prompt('Enter name for new deck:');
        this.decks.push( new Deck(name));
    }
    addCard() {
        let name = prompt('Enter the name of the card to add.');
        this.selectedDeck.decklist.push(new CardList(name));
}
    viewDeck() {
        let index = prompt('Enter the index of the deck you wish to view:');
        if ( index > -1 && index < this.decks.length) {
            this.selectedDeck = this.decks[index];
            let description = 'Deck Name: ' + this.selectedDeck.name + '\n';
            for (let i = 0; i < this.selectedDeck.decklist.length; i++){
                description += i + ') ' + this.selectedDeck.decklist[i].name  + '\n';
            }

            let selection = this.showDeckMenuOptions(description);
            switch (selection) {
                case '1' :
                    this.addCard();
                    break;
                case '2' :
                    this.deleteCard();
                    break;
                
            }
        }
    }
    
deleteCard(){
let index = prompt('Enter the index of the card to delete, enter -1 when finished.');
if (index > -1 && index < this.selectedDeck.decklist.length) {
    this.selectedDeck.decklist.splice(index, 1);
}
}
deleteDeck() {
    let index = prompt('Enter the index of the deck to delete:');
    if (index > -1 && index < this.decks.length) {
        this.decks.splice(index, 1);
    }
}
}




let menu = new Menu();
menu.start();
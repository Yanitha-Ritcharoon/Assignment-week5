//Create menu for Top 10 of Miss Universe 

class Country {
    constructor(name) {
        this.name = name;
    }
}

// Menu options on website
class Menu {
    constructor() {
        this.country = [];
    }
    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createCountry();
                    break;
                case '2':
                    this.viewCountry();
                    break;
                case '3':
                    this.deleteCountry();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye!');
    }
    // display interface that get input for the events
    showMainMenuOptions() {
        return prompt(`
        1) create new country
        2) view country list
        3) delete country
        4) exit
        `);
    }
    
    // code for user enter new elements to array
    createCountry() {
        let name = prompt('Enter name of new country:');
        this.country.push(new Country(name));
        alert('This country was just added to top 10', new Country(name));
    }
   //created a method that returns a list of Top 10 countries
    viewCountry() {
        let countryNameList = '';
        // for loop to iterate through current array of Top 5 countries
        for (let index = 0; index < this.country.length; index++) {
            // assigning iteration to new variable
            countryNameList += index + `) ${this.country[index].name}`+ `\n`;
        }
        alert(countryNameList)
    }
    // code for user deleting elements
    deleteCountry() {
        let x = prompt('Enter the country to delete:');
        if (x > -1 && x < this.country.length) {
            this.country = this.country.splice(x, 1);
            // after log/alert, then delete data/perform code
            console.log(`${this.country[x].name} was deleted.`);
        }
    }
         
}
// run the program on start
let menu = new Menu();
menu.start();

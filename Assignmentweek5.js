//Create menu for Top 10 of Miss Universe
console.log("testing");
class Country {
  constructor(name) {
    this.name = name;
  }
}

// Menu options on website
class Menu {
  constructor() {
    this.countries = [];
  }
  start() {
    let selection = this.showMainMenuOptions();
    while (selection != 0) {
      switch (selection) {
        case "1":
          this.createCountry();
          break;
        case "2":
          this.viewCountry();
          break;
        case "3":
          this.deleteCountry();
          break;
        default:
          selection = 0;
      }
      selection = this.showMainMenuOptions();
    }
    alert("Goodbye!");
  }
  // display interface that get input for the events
  showMainMenuOptions() {
    return prompt(`
        1) create new country
        2) view countries list
        3) delete country
        0) exit
        `);
  }

  // code for user enter new elements to array
  createCountry() {
    let name = prompt("Enter name of new country:");
    this.countries.push(new Country(name));
    alert("This country was just added to top 10", new Country(name));
  }
  //created a method that returns a list of Top 10 countries
  viewCountry() {
    let countryNameList = "";
    // for loop to iterate through current array of Top 10 countries
    for (let index = 0; index < this.countries.length; index++) {
      // assigning iteration to new variable
      countryNameList += index + `) ${this.countries[index].name}` + `\n`;
    }
    alert(countryNameList);
  }
  // code for user deleting elements
  deleteCountry() {
    let indexOfCountry = prompt("Enter the country to delete:");
    console.log("index:", indexOfCountry);
    // console.log("index logic 1", indexOfCountry > -1); // test if the first condition is true
    // console.log("index logic 2", indexOfCountry < this.country.length); // test if second the condition is true

    if (indexOfCountry > -1 && indexOfCountry < this.countries.length) {
      console.log("country before:", this.country);
      alert(`${this.countries[indexOfCountry].name} was deleted.`);
      this.countries.splice(indexOfCountry, 1); // delete 1 element at index within the country array.
      console.log("country after:", this.countries);
      // after log/alert, then delete data/perform code
    }
  }
}
// run the program on start
let menu = new Menu();
menu.start();

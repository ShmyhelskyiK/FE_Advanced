const menu = {
    size: {
        small: {
            name: 'small',
            price: 100,
            calories: 100,
        },
        large: {
            name: 'large',
            price: 250,
            calories: 350,
        },
    },
    fillings: {
        cheese: {
            name: 'cheese',
            price: 15,
            calories: 50,
        },
        salad: {
            name: 'salad',
            price: 10,
            calories: 10,
        },
        potato: {
            name: 'potato',
            price: 10,
            calories: 50,
        },
        cucumber: {
            name: 'cucumber',
            price: 20,
            calories: 30,
        },
        hamon: {
            name: 'hamon',
            price: 30,
            calories: 50,
        },
    },
    additives: {
        mayo: {
            name: 'mayo',
            price: 7,
            calories: 50,
        },
        ketchup: {
            name: 'ketchup',
            price: 6,
            calories: 40,
        },
        spice: {
            name: 'spice',
            price: 5,
            calories: 0,
        },
        mustard: {
            name: 'mustard',
            price: 5,
            calories: 5,
        },
    }
};

const BIG = menu.size.large,
    SMALL = menu.size.small;

const CHEESE = menu.fillings.cheese;
const SALAD = menu.fillings.salad;
const POTATO = menu.fillings.potato;
const CUCUMBER = menu.fillings.cucumber;
const HAMON = menu.fillings.hamon;

const MAYO = menu.additives.mayo;
const KETCHUP = menu.additives.ketchup;
const SPICE = menu.additives.spice;
const MUSTARD = menu.additives.mustard;

function Burger(size, fillings) {
    this.size = size;
    this.fillings = [fillings];

    this.showSize = function () {
        console.log(`Ви замовили ${this.size.name}`);
    };

    this.showPrice = function () {
        let fillingsPrice = 0;
        for( let fill of this.fillings) {
            fillingsPrice += fill.price;
        }
        console.log(`Price: ${this.size.price + fillingsPrice}`);
    };

    this.showCalories = function () {
        let totalCalories = 0;
        for ( let fill of this.fillings) {
            totalCalories += fill.calories;
        }
        console.log(`Total calories: ${totalCalories + this.size.calories}`);
    };

    this.addFill = function (filling) {
        if(this.fillings.includes(filling)) {
            alert(`Error, you have this filling`)
        } else {
            this.fillings.push(filling);
        }
    }

    this.showFillings = function () {
        let str = ' your burger has: ';
        for (let fill of this.fillings) {
            str = str + fill.name + ' ';
        }

        console.log(str)
    }



}
let burger1 = new Burger(SMALL, CHEESE);
    burger1.showPrice();
    burger1.showSize();
    burger1.showCalories();
    burger1.addFill(CUCUMBER);
    burger1.showFillings();
    burger1.addFill(SALAD);
    burger1.showFillings();
    // burger1.
    // burger1.
    // burger1.


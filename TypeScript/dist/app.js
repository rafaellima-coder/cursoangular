"use strict";
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
var starfighter_1 = require("./starfighter");
var _ = require("lodash");
console.log(_.pad("Typescript Examples", 40, "="));
var ship = new base_ships_1.Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();
var falcon = new starfighter_1.MilleniumFalcon();
falcon.jumpIntoHyperspace();
var goodForTheJob = function (ship) { return ship.cargoContainer > 2; };
console.log("Is falcon good for the job? " + (goodForTheJob(falcon) ? 'yes' : 'no'));

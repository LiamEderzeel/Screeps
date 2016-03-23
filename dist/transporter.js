var helpers = require('helpers');

module.exports = function (creep) {
    if(creep.carry.energy < creep.carryCapacity) {
        var targets = helpers.findStructures(creep, STRUCTURE_CONTAINER, 0.1);

        if(targets) {
            if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0]);
            }
        }
        else{
            if(Game.spawns.Spawn1.transferEnergy(creep) == ERR_NOT_IN_RANGE && Memory.roleCount.harvesterCount == Memory.roleGoal.harvesterGoal) {
                creep.moveTo(Game.spawns.Spawn1);
            }
        }
    }
    else {
        var targets = helpers.findStructures(creep, STRUCTURE_EXTENSION, 1);

        if(targets) {
            if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0]);
            }
        }
        else {
            var targets = helpers.findStructures(creep, STRUCTURE_TOWER, 1);

            if(targets) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }
        }
    }
}

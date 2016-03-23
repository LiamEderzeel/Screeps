var helpers = require('helpers');

module.exports = function (creep) {
    if(creep.carry.energy == 0) {
        //console.log("no energy");
        var targets = helpers.findStructures(creep, STRUCTURE_CONTAINER);

        if(targets) {
            if(targets[0].transfer(creep, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
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
        if (creep.room.controller.ticksToDowngrade < 15000 || creep.room.controller.level < 2) {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE){
                creep.moveTo(creep.room.controller);
            }
        }
        else {
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets) {
                if(targets.length) {
                    if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(targets[0]);
                    }
                }
                else {
                    if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE){
                        if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE){
                            creep.moveTo(creep.room.controller);
                        }
                    }
                }
            }
        }
    }
}





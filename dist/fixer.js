var helpers = require('helpers');

module.exports = function (creep) {
    if(creep.carry.energy == 0) {
        var targets = helpers.findStructures(creep, STRUCTURE_CONTAINER, 0.1);

        if(targets) {
            if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0]);
                //console.log("go to container");
            }
        }
        else{
            //console.log("go to spawn");
            if(Game.spawns.Spawn1.transferEnergy(creep) == ERR_NOT_IN_RANGE && Memory.roleCount.harvesterCount == Memory.roleGoal.harvesterGoal) {
                creep.moveTo(Game.spawns.Spawn1);
            }
        }
    }
    else {
        var targets = helpers.findStructures(creep, STRUCTURE_CONTAINER, undefined, 0.8);
        if (targets) {
            if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0]);
                console.log("gixen container");
            }
        }
        else {
            var targets = helpers.findStructures(creep, STRUCTURE_ROAD, undefined, 0.8);

            if (targets) {
                targets.sort((a,b) => a.hits - b.hits);
                if(targets.length > 0) {
                    if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(targets[0]);
                    }
                }
            }
            else{
                var targets = helpers.findStructures(creep, STRUCTURE_WALL, undefined, 0.5);

                if (targets) {
                    targets.sort((a,b) => a.hits - b.hits);
                    if(targets.length > 0) {
                        if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(targets[0]);
                        }
                    }
                }
                else{
                    if (creep.room.controller.ticksToDowngrade < 15000 || creep.room.controller.level < 2) {
                        if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE){
                            creep.moveTo(creep.room.controller);
                        }
                    } else {
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
        }
    }
}

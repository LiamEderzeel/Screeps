var helpers = require('helpers');

module.exports = function (creep) {
    if(creep.carry.energy < creep.carryCapacity) {
        if(Game.spawns.Spawn1.transferEnergy(creep) == ERR_NOT_IN_RANGE && Memory.roleCount.harvesterCount == Memory.roleGoal.harvesterGoal) {
            creep.moveTo(Game.spawns.Spawn1);
        }
        //         var containers = creep.room.find(FIND_STRUCTURES, {
        //             filter: function(object) {
        //                 if(object.structureType != STRUCTURE_CONTAINER ) {
        //                     return false;
        //                 }
        //                 return true;
        //             }
        //         });
        // //        console.log("containers" + containers);
        //
        //         if(containers) {
        //             if(containers[0].transfer(creep, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        //                 creep.moveTo(containers[0]);
        //             }
        //         }
    }
    else {
        var targets = helpers.findStructures(creep, STRUCTURE_EXTENSION, 1);

        if(targets) {
               console.log("extentions" + targets);
            if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0]);
            }
        }
        else {
            var targets = helpers.findStructures(creep, STRUCTURE_EXTENSION, 1);

            console.log("towers" + towers);
            if(targets) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }
        }
    }
}
//     else {
//         var extensions = creep.room.find(FIND_STRUCTURES, {
//             filter: function(object) {
//                 if(object.structureType != STRUCTURE_TOWER) {
//                     return false;
//                 }
//                 if(object.energy === object.energyCapacity) {
//                     return false;
//                 }
//                 return true;
//             }
//         });
//         if(extensions) {
//             if(creep.transfer(extension[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
//                 creep.moveTo(extension[0]);
//             }
//         }
//     }

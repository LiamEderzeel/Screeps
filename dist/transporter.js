module.exports = function (creep) {
    if(creep.carry.energy < creep.carryCapacity) {
        var containers = creep.room.find(FIND_STRUCTURES, {
            filter: function(object) {
                if(object.structureType != STRUCTURE_CONTAINER ) {
                    return false;
                }
            }
        });

        if(containers[0].transfer(creep) == ERR_NOT_IN_RANGE) {
            creep.moveTo(containers[0]);
        }
    }
    else {
        // if(creep.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        //     //Game.spawns.Spawn1.energy == !Game.spawns.Spawn1.energyCapacity
        //     creep.moveTo(Game.spawns.Spawn1);
        // }
        // else {
        //     var extensions = creep.room.find(FIND_STRUCTURES, {
        //         filter: function(object) {
        //             if(object.structureType != STRUCTURE_EXTENSION ) {
        //                 return false;
        //             }
        //             if(object.energy === object.energyCapacity) {
        //                 return false;
        //             }
        //             return true;
        //         }
        //     });
        //     if(extensions) {
        //         if(creep.transfer(extension[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        //             creep.moveTo(extension[0]);
        //         }
        //     }
        // }
    }
}

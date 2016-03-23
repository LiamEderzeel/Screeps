module.exports = function (roomName) {
    var hostiles = roomName.room.find(FIND_HOSTILE_CREEPS);

    if(hostiles.length > 0) {
        var username = hostiles[0].owner.username;
        Game.notify(`User ${username} spotted in room ${roomName}`);
        var towers = Game.rooms[roomName].find(
            FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_TOWER}});
            towers.forEach(tower => tower.attack(hostiles[0]));
    }
    // else {
    //
    //     var targets = tower.room.find(FIND_STRUCTURES, {
    //         filter: function(object) {
    //             if(object.structureType != STRUCTURE_CONTAINER ) {
    //                 return false;
    //             }
    //             if(object.hits > object.hits / 2) {
    //                 return false;
    //             }
    //             return true;
    //         }
    //     });
    //
    //     if (targets) {
    //         targets.sort((a,b) => a.hits - b.hits);
    //         if(targets.length > 0) {
    //             if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
    //                 creep.moveTo(targets[0]);
    //             }
    //         }
    //     }
    //     else {
    //         var targets = creep.room.find(FIND_STRUCTURES, {
    //             filter: function(object) {
    //                 if(object.structureType != STRUCTURE_ROAD ) {
    //                     return false;
    //                 }
    //                 if(object.hits > object.hits / 2) {
    //                     return false;
    //                 }
    //                 return true;
    //             }
    //         });
    //
    //         if (targets) {
    //             targets.sort((a,b) => a.hits - b.hits);
    //             if(targets.length > 0) {
    //                 if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
    //                     creep.moveTo(targets[0]);
    //                 }
    //             }
    //         }
    //     }
    // }
}

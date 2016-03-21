module.exports = function (creep) {
    if(creep.carry.energy == 0) {
        if(Game.spawns.Spawn1.transferEnergy(creep) == ERR_NOT_IN_RANGE) {
            creep.moveTo(Game.spawns.Spawn1);               
        }
    } else {
        var targets = creep.room.find(FIND_STRUCTURES, {
            filter: function(object) {
                if(object.structureType != STRUCTURE_ROAD ) {
                    return false;
                }
                if(object.hits > 4900) {
                //if(object.hits > 100) {
                    return false;
                }
                    return true;
                } 
        });
        
        if (targets) {
            targets.sort((a,b) => a.hits - b.hits);
            //console.log(targets);
            if(targets.length > 0) {
                if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]); 
                    //console.log("test");
                }
            }
        } else {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE){
                creep.moveTo(creep.room.controller);
            }
        }
    } 
}
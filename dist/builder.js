module.exports = function (creep) {
    if(creep.carry.energy == 0) {
    	if(Game.spawns.Spawn1.transferEnergy(creep) == ERR_NOT_IN_RANGE && Memory.roleCount.harvesterCount == Memory.roleGoal.harvesterGoal) {
    	    creep.moveTo(Game.spawns.Spawn1);
    	}
    } else {
        if (creep.room.controller.ticksToDowngrade < 15000 || creep.room.controller.level < 2) {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE){
                creep.moveTo(creep.room.controller);
            }
        } else {
    	    var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
	        if(targets == 0)
	        {
    	        if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE){
                    creep.moveTo(creep.room.controller);
                }
    	    } else {
	            if(targets.length) {
		            if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
		           	creep.moveTo(targets[0]);
        	    	}
	            }
	        }
        }
    }
}





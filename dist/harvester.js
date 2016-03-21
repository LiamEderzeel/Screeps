module.exports = function (creep) {

	if(creep.carry.energy < creep.carryCapacity) {
		var sources = creep.room.find(FIND_SOURCES);
		if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
			creep.moveTo(sources[0]);
		}			
	}
	else {
		if(creep.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
		    //Game.spawns.Spawn1.energy == !Game.spawns.Spawn1.energyCapacity
		    creep.moveTo(Game.spawns.Spawn1);
		}
		else
		{
// 		    var extension = creep.pos.find(FIND_STRUCTURES, { filter: function (s) {
//                 return s.structureType == STRUCTURE_EXTENSION
//             }});
			var extension = creep.room.find(FIND_STRUCTURES, { 
				filter: function(object) {
					if(object.structureType != STRUCTURE_EXTENSION ) {
						return false;
					}
					if(object.energy === object.energyCapacity) {
			            return false;
			       	}
			            return true;
			    }
			});
			if(extension){
			    console.log(extension);
		        if(creep.transfer(extension[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
	                creep.moveTo(extension[0]);
		        }
			}

		}
	}
}

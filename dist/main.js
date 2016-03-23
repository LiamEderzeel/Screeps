var creepManager = require('creepManager');
var defenseTower = require('defenseTower');

module.exports.loop = function () {
    // Config
    if(Memory.roleCount == null)
        Memory.roleCount = {};
    if(Memory.roleGoal == null)
        Memory.roleGoal = {};
    Memory.roleGoal.harvesterGoal = 3;
    Memory.roleGoal.fixerGoal = 1;
    Memory.roleGoal.builderGoal = 1;
    Memory.roleGoal.transporterGoal = 1;
    Memory.roleGoal.guardianGoal = 1;
    // clear memory form dead creeps
    for(var i in Memory.creeps){
        if(!Game.creeps[i]) {
            delete Memory.creeps[i];
        }
    }

    creepManager();
    var targets = Game.spawns.Spawn1.room.find(FIND_STRUCTURES, {
        filter: function(object) {
            if(object.structureType != STRUCTURE_TOWER ) {
                return false;
            }
            return true;
        }
    });

    defenseTower(targets[0]);


}

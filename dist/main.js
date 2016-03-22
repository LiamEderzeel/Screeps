var creepManager = require('creepManager');
var defenseTower = require('defenseTower');

// Config
Memory.roleCount = {};
Memory.roleGoal = {};
Memory.roleGoal.harvesterGoal = 3;
Memory.roleGoal.fixerGoal = 2;
Memory.roleGoal.builderGoal = 1;
Memory.roleGoal.guardianGoal = 2;

module.exports.loop = function () {
    // clear memory form dead creeps
    for(var i in Memory.creeps){
        if(!Game.creeps[i]) {
            delete Memory.creeps[i];
        }
    }

    creepManager();

    function energyAvaleble () {
        if(requiredHarversters <= harvesterCount) {
            return true;
        }
        return false;
    }

    function countProperties (obj) {
        var count = 0;

        for (var property in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, property))
                count++;
        }
        return count;
    }
}

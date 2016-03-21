//var spawning = require('spawning');
var harvester = require('harvester');
var fixer = require('fixer');
var builder = require('builder');
var guardian = require('guardian');
//var guardian = require('organizer');

module.exports.loop = function () {

    for(var i in Memory.creeps){
        if(!Game.creeps[i]) {
            delete Memory.creeps[i];
        }
    }

    function countProperties (obj) {
        var count = 0;

        for (var property in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, property)) {
                count++;
            }
        }
        return count;
    }

    function SpawnCreeps() {
        var harvesterCount = 0;
        var fixerCount = 0;
        var builderCount = 0;
        var guardianCount = 0;
        for(var name in Game.creeps){
            var creep = Game.creeps[name];
            if(creep.memory.role == 'harvester')
            {
                harvesterCount++;
                harvester(creep);
            }
            if(creep.memory.role == 'fixer')
            {
                fixerCount++;
                fixer(creep);
            }
            if(creep.memory.role == 'builder')
            {
                builderCount++;
                builder(creep);
            }
            if(creep.memory.role == 'guardian')
            {
                guardianCount++;
                guardian(creep);
            }
        }

        if (Game.spawns.Spawn1.energy > 100) {
            if(harvesterCount < 3) {
                Game.spawns.Spawn1.createCreep([WORK,CARRY,CARRY,MOVE], null, {role:'harvester'});
            }
            else if(fixerCount < 1)
            {
                Game.spawns.Spawn1.createCreep([WORK,WORK,CARRY,MOVE], null, {role:'fixer'});
            }
            else if(builderCount < 2)
            {
                Game.spawns.Spawn1.createCreep([WORK,WORK,CARRY,MOVE], null, {role:'builder'});
            }
            else if(guardianCount < 1)
            {
            //  Game.spawns.Spawn1.createCreep([ATTACK,ATTACK,MOVE,MOVE,TOUGH], null, {role:'guardian'});
            }
        }
    }
    SpawnCreeps();
}

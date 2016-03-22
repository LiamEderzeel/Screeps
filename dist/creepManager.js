var harvester = require('harvester');
var fixer = require('fixer');
var builder = require('builder');
var transporter = require('transporter');
var guardian = require('guardian');

module.exports = function () {
    var harvesterCount = 0;
    var fixerCount = 0;
    var builderCount = 0;
    var transporterCount = 0;
    var guardianCount = 0;

    for(var name in Game.creeps){
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester'){
            harvesterCount++;
            harvester(creep);
        }
        if(creep.memory.role == 'fixer'){
            fixerCount++;
            fixer(creep);
        }
        if(creep.memory.role == 'builder'){
            builderCount++;
            builder(creep);
        }
        if(creep.memory.role == 'transporter'){
            builderCount++;
            builder(creep);
        }
        if(creep.memory.role == 'guardian'){
            guardianCount++;
            guardian(creep);
        }
    }

    if (Game.spawns.Spawn1.energy > 100) {
        if(harvesterCount < 3) {
            spawnCreep('harvester', 1);
        }
        else if(fixerCount < 1) {
            spawnCreep('fixer', 1);
        }
        else if(builderCount < 2){
            spawnCreep('builder', 1);
        }
        else if(transportCount < 1) {
            spawnCreep('transporter', 1);
        }
        // else if(guardianCount < 1){
        //     spawnCreep('guardian', 1);
        // }
    }
    Memory.roleCount.harvesterCount = harvesterCount;
    Memory.roleCount.fixerCount = fixerCount;
    Memory.roleCount.builderCount = builderCount;
    Memory.roleCount.guardianCount = guardianCount;

    function spawnCreep(creepType, creepLevel)
    {
        if (creepType === "harvester") {
            if(creepLevel === 1)
                Game.spawns.Spawn1.createCreep([WORK,CARRY,CARRY,MOVE], null, {role:'harvester'});
            if(creepLevel === 2)
                Game.spawns.Spawn1.createCreep([WORK,WORK,WORK,CARRY,MOVE], null, {role:'harvester'});
        }
        if (creepType === "fixer") {
            if(creepLevel === 1)
                Game.spawns.Spawn1.createCreep([WORK,WORK,CARRY,MOVE], null, {role:'fixer'});
        }
        if (creepType === "builder") {
            if(creepLevel === 1)
                Game.spawns.Spawn1.createCreep([WORK,WORK,CARRY,MOVE], null, {role:'builder'});
            if(creepLevel === 2)
                Game.spawns.Spawn1.createCreep([WORK,WORK,CARRY,CARRY,MOVE], null, {role:'builder'});
        }
        if (creepType === "transporter") {
            if(creepLevel === 1)
                Game.spawns.Spawn1.createCreep([CARRY,CARRY,MOVE,TOUGH], null, {role:'transporter'});
            if(creepLevel === 2)
                Game.spawns.Spawn1.createCreep([CARRY,CARRY,CARRY,MOVE,MOVE,TOUGH], null, {role:'transporter'});
        }
        if (creepType === "guardian") {
            if(creepLevel === 1)
                Game.spawns.Spawn1.createCreep([ATTACK,ATTACK,MOVE,TOUGH], null, {role:'guardian'});
            if(creepLevel === 2)
                Game.spawns.Spawn1.createCreep([ATTACK,ATTACK,MOVE,MOVE,TOUGH], null, {role:'guardian'});
        }
    }
}

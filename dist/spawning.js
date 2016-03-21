
module.exports.loop = function (creepType) {
    function SpawnCreeps() {
        if (creepType === "harvester") {
            Game.spawns.Spawn1.createCreep([WORK,CARRY,CARRY,MOVE], null, {role:'harvester'});
        }
        if (creepType === "fixer") {
            Game.spawns.Spawn1.createCreep([WORK,WORK,CARRY,MOVE], null, {role:'fixer'});
        }
        if (creepType === "builder") {
            Game.spawns.Spawn1.createCreep([WORK,WORK,CARRY,MOVE], null, {role:'builder'});
        }
        if (creepType === "guardian") {
            //  Game.spawns.Spawn1.createCreep([ATTACK,ATTACK,MOVE,MOVE,TOUGH], null, {role:'guardian'});
        }
    }
}

module.exports = {
    findStructures:  function (creep, theStructureType, percentageEnergie, percentageHits) {
        // if not set it wil return false if structure at enrgy capacity
        var targets = creep.room.find(FIND_STRUCTURES, {
            filter: function(object) {
                if(object.structureType != theStructureType) {
                    return false;
                }
                // check for energy capacity
                if (typeof percentageEnergie !== 'undefined') {
                    if(object.energy >= object.energyCapacity * percentageEnergie) {
                        return false;
                    }
                }
                // check for hits
                if (typeof percentageHits !== 'undefined') {
                    if(object.hits >= object.hitsMax * percentageHits) {
                        return false;
                    }
                }
                return true;
            }
        });
        if(targets == '')
            return false
        return targets;
    }
}

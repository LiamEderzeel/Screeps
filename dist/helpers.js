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
    },

    energyAvaleble: function() {
        if(requiredHarversters <= harvesterCount) {
            return true;
        }
        return false;
    },

    countProperties: function(obj) {
        var count = 0;

        for (var property in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, property))
                count++;
        }
        return count;
    }
}

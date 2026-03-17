// edits and retrieves event history
// creates an array to store events
const events = [];

/**
 * 
 * @param {*} event 
 */
export const addEvent = (event) => {
    events.push({
        ...event,
        timestamp: Date.now(),
    });
}

export const getEvents = () => {
    return events;
}
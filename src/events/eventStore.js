// edits and retrieves event history
const events = [];

export const addEvent = (event) => {
    events.push({
        ...event,
        timestamp: Date.now(),
    });
}

export const getEvents = () => {
    return events;
}
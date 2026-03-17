/**
 * creates an event to add to the event store
 * @param {string} eventType the event type
 * @param {string} aggrId the uuid
 * @param {string} data the items data
 * @returns an event 
 */
export const createEvent = ({eventType, aggrId, data}) => ({
    eventType,
    aggrId,
    data
});
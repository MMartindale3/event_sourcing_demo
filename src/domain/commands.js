// functions which record the actions / events to event history

import { v4 as uuidv4 } from 'uuid';
import { createEvent } from "../events/event.js";

/**
 * 
 * @param {string} name name of the object
 * @returns an event for the event store
 */
export const createItem = (name) => {
    if (!name) {
        throw new Error("Item name is required.");

    };
    
    const itemId = uuidv4();

    const item = createEvent({
        eventType: "ItemCreated",
        aggrId: itemId,
        data: name
    });

    return item;
};

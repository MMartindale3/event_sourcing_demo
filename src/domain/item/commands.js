// functions which record the actions / events to event history

import { v4 as uuidv4 } from 'uuid';
import { createEvent } from "../../events/event";
import { addEvent } from "../events/eventStore";

export const createItem = (name) => {
    if (!name) {
        throw new Error("Item name is required.");

    };
    
    const itemId = uuidv4();

    return createEvent({
        type: "ItemCreated",
        aggrId: itemId,
        data: { name }
    });
};

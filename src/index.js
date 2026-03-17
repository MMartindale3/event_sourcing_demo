import { createItem } from "./domain/commands.js";
import { addEvent, getEvents } from "./events/eventstore.js";

const event = createItem("Sofa");
addEvent(event);
console.log("Events", getEvents());
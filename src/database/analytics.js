import { analytics } from "../config/firebase"

export const saveEvent = (eventName = '', eventsParams = {}) => analytics.logEvent(eventName, eventsParams)
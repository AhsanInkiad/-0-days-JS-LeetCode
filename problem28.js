// 2694. Event Emitter

class EventEmitter {
    constructor() {
        this.events = new Map();
    }

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (!this.events.has(eventName)) {
            this.events.set(eventName, []);
        }
        
        const eventListeners = this.events.get(eventName);
        eventListeners.push(callback);

        return {
            unsubscribe: () => {
                const index = eventListeners.indexOf(callback);
                if (index !== -1) {
                    eventListeners.splice(index, 1);
                }
            }
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (!this.events.has(eventName)) {
            return [];
        }

        const eventListeners = this.events.get(eventName);
        const results = [];
        for (const callback of eventListeners) {
            results.push(callback(...args));
        }
        return results;
    }
}
/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
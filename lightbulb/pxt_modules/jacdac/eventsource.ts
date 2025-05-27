namespace jacdac {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    export type EventHandler = (arg: any) => void

    export class EventListener {
        constructor(
            // use string for parity with JS
            public readonly key: string,
            public readonly handler: EventHandler
        ) {}
    }

    export const ERROR = "error"

    export class EventSource {
        // use array to save on heap
        // consider using 2 arrays
        private readonly listeners: EventListener[] = []

        constructor() {}

        on(eventName: string, handler: EventHandler) {
            this.addListenerInternal(eventName, handler)
            return this
        }

        off(eventName: string, handler: EventHandler) {
            this.removeListenerInternal(eventName, handler)
            return this
        }

        private addListenerInternal(eventName: string, handler: EventHandler) {
            if (!eventName || !handler) {
                return
            }

            // find existing one
            const previous = this.listeners.find(
                l => l.key === eventName && l.handler === handler
            )
            if (previous) {
                return
            }

            // append to list
            const listener = new EventListener(eventName, handler)
            this.listeners.push(listener)
        }

        private removeListenerInternal(
            eventName: string,
            handler: EventHandler
        ): void {
            if (!eventName || !handler) return

            const listeners = this.listeners
            const n = listeners.length
            for (let i = 0; i < n; ++i) {
                const listener = listeners[i]
                if (
                    listener.key === eventName &&
                    listener.handler === handler
                ) {
                    this.listeners.splice(i, 1)
                    return
                }
            }
        }

        /**
         * Synchronously calls each of the listeners registered for the event named eventName, in the order they were registered.
         * @param eventName
         * @param arg
         */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        emit(eventName: string, arg?: any): boolean {
            if (!eventName) return false

            // run handlers
            let useTry = false

            for (const listener of this.listeners) {
                if (listener.key == ERROR) useTry = true
            }

            for (const listener of this.listeners) {
                if (listener.key === eventName) {
                    const handler = listener.handler
                    if (useTry)
                        try {
                            handler(arg)
                        } catch (e) {
                            this.emit(ERROR, e)
                        }
                    else handler(arg)
                }
            }

            return true
        }

        hasListener(eventName: string): boolean {
            if (!eventName) return false
            for (const listener of this.listeners) {
                if (listener.key === eventName) {
                    return true
                }
            }
            return false
        }

        listenerCount(eventName: string): number {
            if (!eventName) return 0
            let k = 0
            for (const listener of this.listeners) {
                if (listener.key === eventName) {
                    k++
                }
            }
            return k
        }

        /**
         * Subscribes to an event and returns the unsubscription handler
         * @param eventName
         * @param next
         */
        subscribe<T>(eventName: string, next: (value: T) => void): () => void {
            this.addListenerInternal(eventName, next)
            const unsubscribe = () =>
                this.removeListenerInternal(eventName, next)
            return unsubscribe
        }
    }
}

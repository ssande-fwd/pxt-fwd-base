namespace jacdac {
    export class BroadcastClient extends Client {
        // workaround for https://github.com/microsoft/pxt-arcade/issues/1831
        constructor(public readonly parent: BroadcastServer, role: string) {
            super(parent.serviceClass, role)
            this.broadcast = true
        }

        handlePacket(pkt: JDPacket) {
            this.parent.handlePacket(pkt)
        }
    }

    export class BroadcastServer extends Server {
        readonly client: BroadcastClient

        constructor(name: string, serviceClass: number) {
            super(serviceClass)
            this.client = new BroadcastClient(this, name)
        }

        handlePacketOuter(pkt: JDPacket) {
            // do nothing; we're not expecting any packets addressed directly to us
        }
    }
}

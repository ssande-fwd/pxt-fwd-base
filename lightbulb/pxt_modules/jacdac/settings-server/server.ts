namespace jacdac {
    export const SETTINGS_PREFIX = "jd:"
    export class SettingsServer extends Server {
        constructor() {
            super(jacdac.SRV_SETTINGS)
        }

        handlePacket(packet: JDPacket) {
            switch (packet.serviceCommand) {
                case jacdac.SettingsCmd.Delete:
                    this.handleDeleteCommand(packet)
                    break
                case jacdac.SettingsCmd.ListKeys:
                    this.handleListKeys(packet)
                    break
                case jacdac.SettingsCmd.List:
                    this.handleList(packet)
                    break
                case jacdac.SettingsCmd.Set:
                    this.handleSetCommand(packet)
                    break
                case jacdac.SettingsCmd.Get:
                    this.handleGetCommand(packet)
                    break
                case jacdac.SettingsCmd.Clear:
                    this.handleClearCommand(packet)
                    break
                default:
                    packet.possiblyNotImplemented()
                    break
            }
        }

        list(prefix?: string): string[] {
            return settings
                .list(SETTINGS_PREFIX + (prefix || ""))
                .map(k => k.slice(SETTINGS_PREFIX.length))
        }

        readBuffer(key: string): Buffer {
            return settings.readBuffer(SETTINGS_PREFIX + key)
        }

        delete(key: string) {
            settings.remove(SETTINGS_PREFIX + key)
        }

        private handleClearCommand(packet: JDPacket) {
            settings.list(SETTINGS_PREFIX).forEach(k => settings.remove(k))
            this.sendChangeEvent()
        }

        private handleDeleteCommand(packet: JDPacket) {
            const key = packet.stringData
            const id = SETTINGS_PREFIX + key
            console.log(`delete '${key}' -> '${id}'`)
            settings.remove(id)
            this.sendChangeEvent()
        }

        private handleGetCommand(packet: JDPacket) {
            const key = packet.stringData
            const id = SETTINGS_PREFIX + key
            let value: Buffer = undefined
            if (key[0] !== "$")
                // don't leak secrets
                value = settings.readBuffer(id)
            // return empty buffer if not found
            if (!value) value = Buffer.create(0)
            console.log(`get '${key}' -> '${id}' ${value.toHex()}`)
            this.sendReport(
                JDPacket.from(jacdac.SettingsCmd.Get, packet.data.concat(value))
            )
        }

        private handleSetCommand(packet: JDPacket) {
            const [key, value] = packet.jdunpack<[string, Buffer]>("z b")
            const id = SETTINGS_PREFIX + key.trim()
            console.log(`set '${key}' -> '${id}' '${value}'`)
            if (value.length == 0) settings.remove(id)
            else settings.writeBuffer(id, value)
            this.sendChangeEvent()
        }

        private handleListKeys(packet: JDPacket) {
            const keys = this.list()
            console.log("list keys")
            console.log(keys)
            OutPipe.respondForEach(packet, keys, k => jdpack("s", [k]))
        }

        private handleList(packet: JDPacket) {
            OutPipe.respondForEach(
                packet,
                settings.list(SETTINGS_PREFIX),
                k => {
                    const key = k.slice(SETTINGS_PREFIX.length)
                    const value =
                        (key[0] === "$"
                            ? Buffer.create(0)
                            : settings.readBuffer(k)) || Buffer.create(0)
                    return jdpack("z b", [key, value])
                }
            )
        }
    }
    //% fixedInstance whenUsed weight=1 block="settings"
    export const settingsServer = new SettingsServer()
}

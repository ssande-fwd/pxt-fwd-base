namespace jacdac {
    // Service Protocol Test constants
    export const SRV_PROTO_TEST = 0x16c7466a
    export const enum ProtoTestReg {
        /**
         * Read-write bool (uint8_t). A read write bool register.
         *
         * ```
         * const [rwBool] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        RwBool = 0x81,

        /**
         * Read-only bool (uint8_t). A read only bool register. Mirrors rw_bool.
         *
         * ```
         * const [roBool] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        RoBool = 0x181,

        /**
         * Read-write uint32_t. A read write u32 register.
         *
         * ```
         * const [rwU32] = jdunpack<[number]>(buf, "u32")
         * ```
         */
        RwU32 = 0x82,

        /**
         * Read-only uint32_t. A read only u32 register.. Mirrors rw_u32.
         *
         * ```
         * const [roU32] = jdunpack<[number]>(buf, "u32")
         * ```
         */
        RoU32 = 0x182,

        /**
         * Read-write int32_t. A read write i32 register.
         *
         * ```
         * const [rwI32] = jdunpack<[number]>(buf, "i32")
         * ```
         */
        RwI32 = 0x83,

        /**
         * Read-only int32_t. A read only i32 register.. Mirrors rw_i32.
         *
         * ```
         * const [roI32] = jdunpack<[number]>(buf, "i32")
         * ```
         */
        RoI32 = 0x183,

        /**
         * Read-write string (bytes). A read write string register.
         *
         * ```
         * const [rwString] = jdunpack<[string]>(buf, "s")
         * ```
         */
        RwString = 0x84,

        /**
         * Read-only string (bytes). A read only string register. Mirrors rw_string.
         *
         * ```
         * const [roString] = jdunpack<[string]>(buf, "s")
         * ```
         */
        RoString = 0x184,

        /**
         * Read-write bytes. A read write string register.
         *
         * ```
         * const [rwBytes] = jdunpack<[Buffer]>(buf, "b")
         * ```
         */
        RwBytes = 0x85,

        /**
         * Read-only bytes. A read only string register. Mirrors ro_bytes.
         *
         * ```
         * const [roBytes] = jdunpack<[Buffer]>(buf, "b")
         * ```
         */
        RoBytes = 0x185,

        /**
         * A read write i8, u8, u16, i32 register.
         *
         * ```
         * const [i8, u8, u16, i32] = jdunpack<[number, number, number, number]>(buf, "i8 u8 u16 i32")
         * ```
         */
        RwI8U8U16I32 = 0x86,

        /**
         * A read only i8, u8, u16, i32 register.. Mirrors rw_i8_u8_u16_i32.
         *
         * ```
         * const [i8, u8, u16, i32] = jdunpack<[number, number, number, number]>(buf, "i8 u8 u16 i32")
         * ```
         */
        RoI8U8U16I32 = 0x186,

        /**
         * A read write u8, string register.
         *
         * ```
         * const [u8, str] = jdunpack<[number, string]>(buf, "u8 s")
         * ```
         */
        RwU8String = 0x87,

        /**
         * A read only u8, string register.. Mirrors rw_u8_string.
         *
         * ```
         * const [u8, str] = jdunpack<[number, string]>(buf, "u8 s")
         * ```
         */
        RoU8String = 0x187,
    }

    export namespace ProtoTestRegPack {
        /**
         * Pack format for 'rw_bool' data.
         */
        export const RwBool = "u8"

        /**
         * Pack format for 'ro_bool' data.
         */
        export const RoBool = "u8"

        /**
         * Pack format for 'rw_u32' data.
         */
        export const RwU32 = "u32"

        /**
         * Pack format for 'ro_u32' data.
         */
        export const RoU32 = "u32"

        /**
         * Pack format for 'rw_i32' data.
         */
        export const RwI32 = "i32"

        /**
         * Pack format for 'ro_i32' data.
         */
        export const RoI32 = "i32"

        /**
         * Pack format for 'rw_string' data.
         */
        export const RwString = "s"

        /**
         * Pack format for 'ro_string' data.
         */
        export const RoString = "s"

        /**
         * Pack format for 'rw_bytes' data.
         */
        export const RwBytes = "b"

        /**
         * Pack format for 'ro_bytes' data.
         */
        export const RoBytes = "b"

        /**
         * Pack format for 'rw_i8_u8_u16_i32' data.
         */
        export const RwI8U8U16I32 = "i8 u8 u16 i32"

        /**
         * Pack format for 'ro_i8_u8_u16_i32' data.
         */
        export const RoI8U8U16I32 = "i8 u8 u16 i32"

        /**
         * Pack format for 'rw_u8_string' data.
         */
        export const RwU8String = "u8 s"

        /**
         * Pack format for 'ro_u8_string' data.
         */
        export const RoU8String = "u8 s"
    }

    export const enum ProtoTestEvent {
        /**
         * Argument: bo bool (uint8_t). An event raised when rw_bool is modified
         *
         * ```
         * const [bo] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        //% block="e bool"
        EBool = 0x81,

        /**
         * Argument: u32 uint32_t. An event raised when rw_u32 is modified
         *
         * ```
         * const [u32] = jdunpack<[number]>(buf, "u32")
         * ```
         */
        //% block="e u32"
        EU32 = 0x82,

        /**
         * Argument: i32 int32_t. An event raised when rw_i32 is modified
         *
         * ```
         * const [i32] = jdunpack<[number]>(buf, "i32")
         * ```
         */
        //% block="e i32"
        EI32 = 0x83,

        /**
         * Argument: str string (bytes). An event raised when rw_string is modified
         *
         * ```
         * const [str] = jdunpack<[string]>(buf, "s")
         * ```
         */
        //% block="e string"
        EString = 0x84,

        /**
         * Argument: bytes bytes. An event raised when rw_bytes is modified
         *
         * ```
         * const [bytes] = jdunpack<[Buffer]>(buf, "b")
         * ```
         */
        //% block="e bytes"
        EBytes = 0x85,

        /**
         * An event raised when rw_i8_u8_u16_i32 is modified
         *
         * ```
         * const [i8, u8, u16, i32] = jdunpack<[number, number, number, number]>(buf, "i8 u8 u16 i32")
         * ```
         */
        //% block="e i8 u8 u16 i32"
        EI8U8U16I32 = 0x86,

        /**
         * An event raised when rw_u8_string is modified
         *
         * ```
         * const [u8, str] = jdunpack<[number, string]>(buf, "u8 s")
         * ```
         */
        //% block="e u8 string"
        EU8String = 0x87,
    }

    export namespace ProtoTestEventPack {
        /**
         * Pack format for 'e_bool' data.
         */
        export const EBool = "u8"

        /**
         * Pack format for 'e_u32' data.
         */
        export const EU32 = "u32"

        /**
         * Pack format for 'e_i32' data.
         */
        export const EI32 = "i32"

        /**
         * Pack format for 'e_string' data.
         */
        export const EString = "s"

        /**
         * Pack format for 'e_bytes' data.
         */
        export const EBytes = "b"

        /**
         * Pack format for 'e_i8_u8_u16_i32' data.
         */
        export const EI8U8U16I32 = "i8 u8 u16 i32"

        /**
         * Pack format for 'e_u8_string' data.
         */
        export const EU8String = "u8 s"
    }

    export const enum ProtoTestCmd {
        /**
         * Argument: bo bool (uint8_t). A command to set rw_bool.
         *
         * ```
         * const [bo] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        CBool = 0x81,

        /**
         * Argument: u32 uint32_t. A command to set rw_u32.
         *
         * ```
         * const [u32] = jdunpack<[number]>(buf, "u32")
         * ```
         */
        CU32 = 0x82,

        /**
         * Argument: i32 int32_t. A command to set rw_i32.
         *
         * ```
         * const [i32] = jdunpack<[number]>(buf, "i32")
         * ```
         */
        CI32 = 0x83,

        /**
         * Argument: str string (bytes). A command to set rw_string.
         *
         * ```
         * const [str] = jdunpack<[string]>(buf, "s")
         * ```
         */
        CString = 0x84,

        /**
         * Argument: bytes bytes. A command to set rw_string.
         *
         * ```
         * const [bytes] = jdunpack<[Buffer]>(buf, "b")
         * ```
         */
        CBytes = 0x85,

        /**
         * A command to set rw_bytes.
         *
         * ```
         * const [i8, u8, u16, i32] = jdunpack<[number, number, number, number]>(buf, "i8 u8 u16 i32")
         * ```
         */
        CI8U8U16I32 = 0x86,

        /**
         * A command to set rw_u8_string.
         *
         * ```
         * const [u8, str] = jdunpack<[number, string]>(buf, "u8 s")
         * ```
         */
        CU8String = 0x87,

        /**
         * Argument: p_bytes pipe (bytes). A command to read the content of rw_bytes, byte per byte, as a pipe.
         *
         * ```
         * const [pBytes] = jdunpack<[Buffer]>(buf, "b[12]")
         * ```
         */
        CReportPipe = 0x90,
    }

    export namespace ProtoTestCmdPack {
        /**
         * Pack format for 'c_bool' data.
         */
        export const CBool = "u8"

        /**
         * Pack format for 'c_u32' data.
         */
        export const CU32 = "u32"

        /**
         * Pack format for 'c_i32' data.
         */
        export const CI32 = "i32"

        /**
         * Pack format for 'c_string' data.
         */
        export const CString = "s"

        /**
         * Pack format for 'c_bytes' data.
         */
        export const CBytes = "b"

        /**
         * Pack format for 'c_i8_u8_u16_i32' data.
         */
        export const CI8U8U16I32 = "i8 u8 u16 i32"

        /**
         * Pack format for 'c_u8_string' data.
         */
        export const CU8String = "u8 s"

        /**
         * Pack format for 'c_report_pipe' data.
         */
        export const CReportPipe = "b[12]"
    }

    export const enum ProtoTestPipe {}
    /**
     * pipe_report PBytes
     * ```
     * const [byte] = jdunpack<[number]>(buf, "u8")
     * ```
     */

    export namespace ProtoTestPipePack {
        /**
         * Pack format for 'p_bytes' data.
         */
        export const PBytes = "u8"
    }
}

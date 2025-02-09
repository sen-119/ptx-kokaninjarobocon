enum MyEnum {
    //% block="前"
    前,
    //% block="後ろ"
    後ろ,
    //% block="右"
    右,
    //% block="左"
    左,
    //% block="止まる"
    止まる,
}

/**
 * Custom blocks
 */
//% weight=100 color=#ffa500 icon=Ⓡ
namespace ロボコン {
    /**
     * ロボコンのロボットを動作させる。
     */
    //% block
export function 回転サーボ(s: number , e: MyEnum): void {
    if (MyEnum.前 == 0) {
        servos.P1.run(-s) 
        servos.P2.run(s)
        }
    if (MyEnum.後ろ == 1) {
        servos.P1.run(s)
        servos.P2.run(-s)
        }
    if (MyEnum.右 == 2) {
        servos.P1.stop()
        servos.P2.run(s)
        }
    if (MyEnum.左 == 3) {
        servos.P1.run(-s)
        servos.P2.stop()
        }
    if (MyEnum.止まる == 4) {
        servos.P1.stop()
        servos.P2.stop()
        }  
}










}

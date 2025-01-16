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
//% weight=100 color=#ffa500 icon="\uf078"
namespace ロボコン {
    /**
     * ロボコンのロボットを動作させる。
     * @param n describe parameter here, eg: "速度"
     * @param s describe parameter here, eg: "速度"
     * @param e describe parameter here
     */
    //% block
export function サーボ(s: number , e: MyEnum): void {
    if (MyEnum.前 == 1) {
        servos.P1.run(s - s * 2)
        servos.P2.run(s)
        }
    else if (MyEnum.後ろ == 1) {
        servos.P1.run(s)
        servos.P2.run(s - s * 2)
        }
    else if (MyEnum.右 == 1) {
        servos.P1.stop()
        servos.P2.run(s)
        }
    else if (MyEnum.左 == 1) {
        servos.P1.run(s - s * 2)
        servos.P2.stop()
        }
    else if (MyEnum.止まる == 1) {
        servos.P1.stop()
        servos.P2.stop()
        }
    
    
        
    
}










}

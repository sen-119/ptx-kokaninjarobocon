
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://makecode.microbit.org/blocks/custom
*/

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
//% weight=100 color=#ffa500 icon="\uf075"
namespace ロボコン {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: "速度"
     * @param s describe parameter here, eg: "速度"
     * @param e describe parameter here
     */
    //% block
export function サーボ(s: number , e: MyEnum): void {
    if (true) {MyEnum.前}
    servos.P1.run(s - s * 2)
    servos.P2.run(s)
    if (true) {MyEnum.後ろ}
    servos.P1.run(s)
    servos.P2.run(s - s *2)
    if (true) {MyEnum.右}
    servos.P1.stop()
    servos.P2.run(s)
    if (true) {MyEnum.左}
    servos.P1.run(s - s * 2)
    servos.P2.stop()
    if (true) {MyEnum.止まる}
    servos.P1.stop()
    servos.P2.stop()
}










}

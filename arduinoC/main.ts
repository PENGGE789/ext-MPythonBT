
//% color="#AA278D" iconWidth=50 iconHeight=40
namespace MPythonBT {
/*
    #include "BluetoothSerial.h"
    BluetoothSerial SerialBT;

    void setup(){
         SerialBT.begin("ESP32BT");
*/    
     //% block="MPythonBT init name [NAME]" blockType="command"
    //% NAME.shadow="string" NAME.defl="ESP32BT"
    export function MPythonBTInit(parameter: any, block: any) {
        let name = parameter.NAME.code;
        console.log(name);
        Generator.addInclude('MPythonBTInitinclude', '#include "BluetoothSerial.h"');
        Generator.addObject("MPythonBTInitobject","BluetoothSerial", "SerialBT");
        Generator.addSetup("MPythonBTInitsetup", `SerialBT.begin(${name});`);

    }
    
    //% block="MPythonBT available?" blockType="boolean"
    
    export function MPythonBTAvailable(parameter: any, block: any) {
        
        Generator.addCode([ "SerialBT.available()",Generator.ORDER_UNARY_POSTFIX]);
    }
    //% block="MPythonBT read " blockType="reporter"
    export function MPythonBTRead(parameter: any, block: any) {
        
        Generator.addCode([ "SerialBT.read()",Generator.ORDER_UNARY_POSTFIX]);
    }
    //% block="MPythonBT  write[STR]" blockType="command"
    //% STR.shadow="number"STR.defl="1"
    export function MPythonBTWrite(parameter: any, block: any) {
        let str =  parameter.STR.code;
        Generator.addCode(`SerialBT.write(${str});`);
    }
}

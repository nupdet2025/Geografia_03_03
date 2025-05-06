gdjs.Cena_9505Code = {};
gdjs.Cena_9505Code.localVariables = [];
gdjs.Cena_9505Code.GDpainel_959501Objects1= [];
gdjs.Cena_9505Code.GDpainel_959501Objects2= [];
gdjs.Cena_9505Code.GDText_9595InstrucaoObjects1= [];
gdjs.Cena_9505Code.GDText_9595InstrucaoObjects2= [];
gdjs.Cena_9505Code.GDbtn_9595comecarObjects1= [];
gdjs.Cena_9505Code.GDbtn_9595comecarObjects2= [];
gdjs.Cena_9505Code.GDbtn_9595certoObjects1= [];
gdjs.Cena_9505Code.GDbtn_9595certoObjects2= [];
gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1= [];
gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects2= [];
gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1= [];
gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects2= [];
gdjs.Cena_9505Code.GDbtn_9595nextObjects1= [];
gdjs.Cena_9505Code.GDbtn_9595nextObjects2= [];
gdjs.Cena_9505Code.GDbackgroundObjects1= [];
gdjs.Cena_9505Code.GDbackgroundObjects2= [];
gdjs.Cena_9505Code.GDPergunta_959501Objects1= [];
gdjs.Cena_9505Code.GDPergunta_959501Objects2= [];
gdjs.Cena_9505Code.GDAbelhaObjects1= [];
gdjs.Cena_9505Code.GDAbelhaObjects2= [];
gdjs.Cena_9505Code.GDNewSpriteObjects1= [];
gdjs.Cena_9505Code.GDNewSpriteObjects2= [];
gdjs.Cena_9505Code.GDfolhas_959502Objects1= [];
gdjs.Cena_9505Code.GDfolhas_959502Objects2= [];
gdjs.Cena_9505Code.GDfolhas_959503Objects1= [];
gdjs.Cena_9505Code.GDfolhas_959503Objects2= [];
gdjs.Cena_9505Code.GDAcertoObjects1= [];
gdjs.Cena_9505Code.GDAcertoObjects2= [];
gdjs.Cena_9505Code.GDCursorObjects1= [];
gdjs.Cena_9505Code.GDCursorObjects2= [];


gdjs.Cena_9505Code.asyncCallback14140372 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Cena_9505Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("btn_errado_01"), gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects2);

{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects2.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}gdjs.Cena_9505Code.localVariables.length = 0;
}
gdjs.Cena_9505Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Cena_9505Code.localVariables);
for (const obj of gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1) asyncObjectsList.addObject("btn_errado_01", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Cena_9505Code.asyncCallback14140372(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Cena_9505Code.asyncCallback14142252 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Cena_9505Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("btn_errado_02"), gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects2);

{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects2.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}gdjs.Cena_9505Code.localVariables.length = 0;
}
gdjs.Cena_9505Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Cena_9505Code.localVariables);
for (const obj of gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1) asyncObjectsList.addObject("btn_errado_02", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Cena_9505Code.asyncCallback14142252(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Cena_9505Code.asyncCallback14144388 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Cena_9505Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Abelha"), gdjs.Cena_9505Code.GDAbelhaObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("NewSprite"), gdjs.Cena_9505Code.GDNewSpriteObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("Pergunta_01"), gdjs.Cena_9505Code.GDPergunta_959501Objects2);

gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.Cena_9505Code.GDbackgroundObjects2);
gdjs.copyArray(asyncObjectsList.getObjects("btn_certo"), gdjs.Cena_9505Code.GDbtn_9595certoObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("btn_errado_01"), gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects2);

gdjs.copyArray(asyncObjectsList.getObjects("btn_errado_02"), gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects2);

gdjs.copyArray(runtimeScene.getObjects("btn_next"), gdjs.Cena_9505Code.GDbtn_9595nextObjects2);
gdjs.copyArray(asyncObjectsList.getObjects("folhas_02"), gdjs.Cena_9505Code.GDfolhas_959502Objects2);

gdjs.copyArray(asyncObjectsList.getObjects("folhas_03"), gdjs.Cena_9505Code.GDfolhas_959503Objects2);

{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects2.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects2.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595certoObjects2.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595certoObjects2[i].hide();
}
for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects2.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects2[i].hide();
}
for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects2.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects2[i].hide();
}
for(var i = 0, len = gdjs.Cena_9505Code.GDPergunta_959501Objects2.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDPergunta_959501Objects2[i].hide();
}
for(var i = 0, len = gdjs.Cena_9505Code.GDAbelhaObjects2.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDAbelhaObjects2[i].hide();
}
for(var i = 0, len = gdjs.Cena_9505Code.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDNewSpriteObjects2[i].hide();
}
for(var i = 0, len = gdjs.Cena_9505Code.GDfolhas_959502Objects2.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDfolhas_959502Objects2[i].hide();
}
for(var i = 0, len = gdjs.Cena_9505Code.GDfolhas_959503Objects2.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDfolhas_959503Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.Cena_9505Code.GDbackgroundObjects2.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbackgroundObjects2[i].setTexture("assets\\background_01.jpg", runtimeScene);
}
}{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595nextObjects2.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595nextObjects2[i].hide(false);
}
}gdjs.Cena_9505Code.localVariables.length = 0;
}
gdjs.Cena_9505Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Cena_9505Code.localVariables);
for (const obj of gdjs.Cena_9505Code.GDAbelhaObjects1) asyncObjectsList.addObject("Abelha", obj);
for (const obj of gdjs.Cena_9505Code.GDNewSpriteObjects1) asyncObjectsList.addObject("NewSprite", obj);
for (const obj of gdjs.Cena_9505Code.GDPergunta_959501Objects1) asyncObjectsList.addObject("Pergunta_01", obj);
for (const obj of gdjs.Cena_9505Code.GDbtn_9595certoObjects1) asyncObjectsList.addObject("btn_certo", obj);
for (const obj of gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1) asyncObjectsList.addObject("btn_errado_01", obj);
for (const obj of gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1) asyncObjectsList.addObject("btn_errado_02", obj);
for (const obj of gdjs.Cena_9505Code.GDfolhas_959502Objects1) asyncObjectsList.addObject("folhas_02", obj);
for (const obj of gdjs.Cena_9505Code.GDfolhas_959503Objects1) asyncObjectsList.addObject("folhas_03", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Cena_9505Code.asyncCallback14144388(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Cena_9505Code.asyncCallback14146332 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Cena_9505Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cena_06", false);
}gdjs.Cena_9505Code.localVariables.length = 0;
}
gdjs.Cena_9505Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Cena_9505Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Cena_9505Code.asyncCallback14146332(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Cena_9505Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Cena_9505Code.GDCursorObjects1);
{for(var i = 0, len = gdjs.Cena_9505Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDCursorObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Cena_9505Code.GDCursorObjects1);
{for(var i = 0, len = gdjs.Cena_9505Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDCursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.Cena_9505Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDCursorObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Acerto"), gdjs.Cena_9505Code.GDAcertoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_certo"), gdjs.Cena_9505Code.GDbtn_9595certoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_01"), gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_02"), gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_next"), gdjs.Cena_9505Code.GDbtn_9595nextObjects1);
{for(var i = 0, len = gdjs.Cena_9505Code.GDAcertoObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDAcertoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Cena_9505Code.GDAcertoObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDAcertoObjects1[i].stopEmission();
}
}{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595nextObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595nextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595certoObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595certoObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Abelha"), gdjs.Cena_9505Code.GDAbelhaObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Cena_9505Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pergunta_01"), gdjs.Cena_9505Code.GDPergunta_959501Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_certo"), gdjs.Cena_9505Code.GDbtn_9595certoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_01"), gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_02"), gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1);
gdjs.copyArray(runtimeScene.getObjects("folhas_02"), gdjs.Cena_9505Code.GDfolhas_959502Objects1);
gdjs.copyArray(runtimeScene.getObjects("folhas_03"), gdjs.Cena_9505Code.GDfolhas_959503Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595certoObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595certoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595certoObjects1[k] = gdjs.Cena_9505Code.GDbtn_9595certoObjects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595certoObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1[k] = gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1[k] = gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDPergunta_959501Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDPergunta_959501Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDPergunta_959501Objects1[k] = gdjs.Cena_9505Code.GDPergunta_959501Objects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDPergunta_959501Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDAbelhaObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDAbelhaObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDAbelhaObjects1[k] = gdjs.Cena_9505Code.GDAbelhaObjects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDAbelhaObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDNewSpriteObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDNewSpriteObjects1[k] = gdjs.Cena_9505Code.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDNewSpriteObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDfolhas_959502Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDfolhas_959502Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDfolhas_959502Objects1[k] = gdjs.Cena_9505Code.GDfolhas_959502Objects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDfolhas_959502Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDfolhas_959503Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDfolhas_959503Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDfolhas_959503Objects1[k] = gdjs.Cena_9505Code.GDfolhas_959503Objects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDfolhas_959503Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1[k] = gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.2, 5, 5, 5, 0.008, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}
{ //Subevents
gdjs.Cena_9505Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Abelha"), gdjs.Cena_9505Code.GDAbelhaObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Cena_9505Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pergunta_01"), gdjs.Cena_9505Code.GDPergunta_959501Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_certo"), gdjs.Cena_9505Code.GDbtn_9595certoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_01"), gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_02"), gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1);
gdjs.copyArray(runtimeScene.getObjects("folhas_02"), gdjs.Cena_9505Code.GDfolhas_959502Objects1);
gdjs.copyArray(runtimeScene.getObjects("folhas_03"), gdjs.Cena_9505Code.GDfolhas_959503Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595certoObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595certoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595certoObjects1[k] = gdjs.Cena_9505Code.GDbtn_9595certoObjects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595certoObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1[k] = gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1[k] = gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDPergunta_959501Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDPergunta_959501Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDPergunta_959501Objects1[k] = gdjs.Cena_9505Code.GDPergunta_959501Objects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDPergunta_959501Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDAbelhaObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDAbelhaObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDAbelhaObjects1[k] = gdjs.Cena_9505Code.GDAbelhaObjects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDAbelhaObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDNewSpriteObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDNewSpriteObjects1[k] = gdjs.Cena_9505Code.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDNewSpriteObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDfolhas_959502Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDfolhas_959502Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDfolhas_959502Objects1[k] = gdjs.Cena_9505Code.GDfolhas_959502Objects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDfolhas_959502Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDfolhas_959503Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDfolhas_959503Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDfolhas_959503Objects1[k] = gdjs.Cena_9505Code.GDfolhas_959503Objects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDfolhas_959503Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1[k] = gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.2, 5, 5, 5, 0.008, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}
{ //Subevents
gdjs.Cena_9505Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Abelha"), gdjs.Cena_9505Code.GDAbelhaObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Cena_9505Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pergunta_01"), gdjs.Cena_9505Code.GDPergunta_959501Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_certo"), gdjs.Cena_9505Code.GDbtn_9595certoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_01"), gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_02"), gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1);
gdjs.copyArray(runtimeScene.getObjects("folhas_02"), gdjs.Cena_9505Code.GDfolhas_959502Objects1);
gdjs.copyArray(runtimeScene.getObjects("folhas_03"), gdjs.Cena_9505Code.GDfolhas_959503Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595certoObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595certoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595certoObjects1[k] = gdjs.Cena_9505Code.GDbtn_9595certoObjects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595certoObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1[k] = gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1[k] = gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDPergunta_959501Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDPergunta_959501Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDPergunta_959501Objects1[k] = gdjs.Cena_9505Code.GDPergunta_959501Objects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDPergunta_959501Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDAbelhaObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDAbelhaObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDAbelhaObjects1[k] = gdjs.Cena_9505Code.GDAbelhaObjects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDAbelhaObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDNewSpriteObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDNewSpriteObjects1[k] = gdjs.Cena_9505Code.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDNewSpriteObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDfolhas_959502Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDfolhas_959502Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDfolhas_959502Objects1[k] = gdjs.Cena_9505Code.GDfolhas_959502Objects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDfolhas_959502Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDfolhas_959503Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDfolhas_959503Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDfolhas_959503Objects1[k] = gdjs.Cena_9505Code.GDfolhas_959503Objects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDfolhas_959503Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595certoObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595certoObjects1[i].getVariableBoolean(gdjs.Cena_9505Code.GDbtn_9595certoObjects1[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595certoObjects1[k] = gdjs.Cena_9505Code.GDbtn_9595certoObjects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595certoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595certoObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595certoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595certoObjects1[k] = gdjs.Cena_9505Code.GDbtn_9595certoObjects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595certoObjects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Acerto"), gdjs.Cena_9505Code.GDAcertoObjects1);
/* Reuse gdjs.Cena_9505Code.GDbtn_9595certoObjects1 */
{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595certoObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595certoObjects1[i].returnVariable(gdjs.Cena_9505Code.GDbtn_9595certoObjects1[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_hit_dice.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Cena_9505Code.GDAcertoObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDAcertoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Cena_9505Code.GDbtn_9595certoObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDbtn_9595certoObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}{for(var i = 0, len = gdjs.Cena_9505Code.GDAcertoObjects1.length ;i < len;++i) {
    gdjs.Cena_9505Code.GDAcertoObjects1[i].startEmission();
}
}
{ //Subevents
gdjs.Cena_9505Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_next"), gdjs.Cena_9505Code.GDbtn_9595nextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595nextObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595nextObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595nextObjects1[k] = gdjs.Cena_9505Code.GDbtn_9595nextObjects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595nextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9505Code.GDbtn_9595nextObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9505Code.GDbtn_9595nextObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9505Code.GDbtn_9595nextObjects1[k] = gdjs.Cena_9505Code.GDbtn_9595nextObjects1[i];
        ++k;
    }
}
gdjs.Cena_9505Code.GDbtn_9595nextObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 100, 1);
}
{ //Subevents
gdjs.Cena_9505Code.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Cena_9505Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Cena_9505Code.GDpainel_959501Objects1.length = 0;
gdjs.Cena_9505Code.GDpainel_959501Objects2.length = 0;
gdjs.Cena_9505Code.GDText_9595InstrucaoObjects1.length = 0;
gdjs.Cena_9505Code.GDText_9595InstrucaoObjects2.length = 0;
gdjs.Cena_9505Code.GDbtn_9595comecarObjects1.length = 0;
gdjs.Cena_9505Code.GDbtn_9595comecarObjects2.length = 0;
gdjs.Cena_9505Code.GDbtn_9595certoObjects1.length = 0;
gdjs.Cena_9505Code.GDbtn_9595certoObjects2.length = 0;
gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1.length = 0;
gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects2.length = 0;
gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1.length = 0;
gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects2.length = 0;
gdjs.Cena_9505Code.GDbtn_9595nextObjects1.length = 0;
gdjs.Cena_9505Code.GDbtn_9595nextObjects2.length = 0;
gdjs.Cena_9505Code.GDbackgroundObjects1.length = 0;
gdjs.Cena_9505Code.GDbackgroundObjects2.length = 0;
gdjs.Cena_9505Code.GDPergunta_959501Objects1.length = 0;
gdjs.Cena_9505Code.GDPergunta_959501Objects2.length = 0;
gdjs.Cena_9505Code.GDAbelhaObjects1.length = 0;
gdjs.Cena_9505Code.GDAbelhaObjects2.length = 0;
gdjs.Cena_9505Code.GDNewSpriteObjects1.length = 0;
gdjs.Cena_9505Code.GDNewSpriteObjects2.length = 0;
gdjs.Cena_9505Code.GDfolhas_959502Objects1.length = 0;
gdjs.Cena_9505Code.GDfolhas_959502Objects2.length = 0;
gdjs.Cena_9505Code.GDfolhas_959503Objects1.length = 0;
gdjs.Cena_9505Code.GDfolhas_959503Objects2.length = 0;
gdjs.Cena_9505Code.GDAcertoObjects1.length = 0;
gdjs.Cena_9505Code.GDAcertoObjects2.length = 0;
gdjs.Cena_9505Code.GDCursorObjects1.length = 0;
gdjs.Cena_9505Code.GDCursorObjects2.length = 0;

gdjs.Cena_9505Code.eventsList4(runtimeScene);
gdjs.Cena_9505Code.GDpainel_959501Objects1.length = 0;
gdjs.Cena_9505Code.GDpainel_959501Objects2.length = 0;
gdjs.Cena_9505Code.GDText_9595InstrucaoObjects1.length = 0;
gdjs.Cena_9505Code.GDText_9595InstrucaoObjects2.length = 0;
gdjs.Cena_9505Code.GDbtn_9595comecarObjects1.length = 0;
gdjs.Cena_9505Code.GDbtn_9595comecarObjects2.length = 0;
gdjs.Cena_9505Code.GDbtn_9595certoObjects1.length = 0;
gdjs.Cena_9505Code.GDbtn_9595certoObjects2.length = 0;
gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects1.length = 0;
gdjs.Cena_9505Code.GDbtn_9595errado_959501Objects2.length = 0;
gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects1.length = 0;
gdjs.Cena_9505Code.GDbtn_9595errado_959502Objects2.length = 0;
gdjs.Cena_9505Code.GDbtn_9595nextObjects1.length = 0;
gdjs.Cena_9505Code.GDbtn_9595nextObjects2.length = 0;
gdjs.Cena_9505Code.GDbackgroundObjects1.length = 0;
gdjs.Cena_9505Code.GDbackgroundObjects2.length = 0;
gdjs.Cena_9505Code.GDPergunta_959501Objects1.length = 0;
gdjs.Cena_9505Code.GDPergunta_959501Objects2.length = 0;
gdjs.Cena_9505Code.GDAbelhaObjects1.length = 0;
gdjs.Cena_9505Code.GDAbelhaObjects2.length = 0;
gdjs.Cena_9505Code.GDNewSpriteObjects1.length = 0;
gdjs.Cena_9505Code.GDNewSpriteObjects2.length = 0;
gdjs.Cena_9505Code.GDfolhas_959502Objects1.length = 0;
gdjs.Cena_9505Code.GDfolhas_959502Objects2.length = 0;
gdjs.Cena_9505Code.GDfolhas_959503Objects1.length = 0;
gdjs.Cena_9505Code.GDfolhas_959503Objects2.length = 0;
gdjs.Cena_9505Code.GDAcertoObjects1.length = 0;
gdjs.Cena_9505Code.GDAcertoObjects2.length = 0;
gdjs.Cena_9505Code.GDCursorObjects1.length = 0;
gdjs.Cena_9505Code.GDCursorObjects2.length = 0;


return;

}

gdjs['Cena_9505Code'] = gdjs.Cena_9505Code;

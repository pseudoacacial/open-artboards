var doc = app.activeDocument
var layersets = doc.layerSets
var selection = doc.selection

function createSmartObject() {
    var idnewPlacedLayer = stringIDToTypeID( 'newPlacedLayer' );
    executeAction(idnewPlacedLayer, undefined, DialogModes.NO);

}
for (var i = 0; i < layersets.length; i++) {
    activeDocument.activeLayer = layersets[i];
    createSmartObject();
    runMenuItem(stringIDToTypeID('placedLayerEditContents'));
    //we're inside the new file now
    activeDocument.activeLayer =  activeDocument.layerSets[0];
    createSmartObject();
    var layer = activeDocument.activeLayer;
    layer.translate(new UnitValue(0-layer.bounds[0].as('px'),'px'), new UnitValue(0-layer.bounds[1].as('px'),'px'));
    runMenuItem(stringIDToTypeID('placedLayerConvertToLayers'));
    app.activeDocument = doc; 
}

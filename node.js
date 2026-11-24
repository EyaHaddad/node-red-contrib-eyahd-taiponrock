module.exports = function(RED) { 
function EyahdTaiponrockNode(config) { 
RED.nodes.createNode(this,config); 
var node = this; 
node.on('input', function(msg) { 
        msg.payload = "Eya-Taiponrock"; 
        node.send(msg); 
        }); 
    } 
    RED.nodes.registerType("eyahd-taiponrock",EyahdTaiponrockNode); 
}
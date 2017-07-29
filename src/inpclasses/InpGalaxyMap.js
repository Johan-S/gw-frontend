import {InputForm} from './InputForm.js'
import {InpGalaxyMapFrameDim} from './InpGalaxyMapFrameDim.js'
import {InpGalaxyMapSimSettings} from './InpGalaxyMapSimSettings.js'

class InpGalaxyMap extends InputForm {

   constructor(inputObject) {
      super(inputObject);

      this.template = {
         width: "number",
         height: "number",
         mapWidth: "number",
         mapHeight: "number",
         frameDim: "object",
         simSettings: "object",
         systemsList: "array"
      };

      this.validate(inputObject)

      inputObject.frameDim = new InpGalaxyMapFrameDim (inputObject.frameDim)

      inputObject.simSettings = new InpGalaxyMapSimSettings (inputObject.simSettings)

      this.assign(inputObject)


   }
}
export {InpGalaxyMap};
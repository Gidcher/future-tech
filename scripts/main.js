import Header from "./Header.js";
import TabsCollection from "./Tabs.js";
import VidoPlayerCollection from "./VideoPlayer.js";
import ExpandableContentCollection from "./ExpandableContent.js";
import InputMaskCollection from "./InputMask.js";
import SelectCollection from "./Select.js";
import defineScrollBarWidthCSSVar from './utils/defineScrollBarWidthCSSVar.js'

new Header()
new TabsCollection()
new VidoPlayerCollection()
new ExpandableContentCollection()
new InputMaskCollection()
new SelectCollection()

defineScrollBarWidthCSSVar()
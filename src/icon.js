import Vue from "vue";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faSpinner, faTree, faSearch,faQuestionCircle, faShoppingCart, faUserCircle, faCaretDown, faPlaneArrival, faPlane, faArrowAltCircleRight,faDollarSign, faCartPlus, faSnowflake, faCircleNotch, faSignInAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faSpinner, faTree, faSearch, faQuestionCircle, faShoppingCart, faUserCircle, faCaretDown, faPlaneArrival, faPlane, faArrowAltCircleRight,faDollarSign, faCartPlus, faSnowflake, faCircleNotch, faSignInAlt)

Vue.component('fa-icon', FontAwesomeIcon)

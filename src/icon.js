import Vue from "vue";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInbox, faTrashRestoreAlt, faFolderPlus, faFolderMinus, faImage,faTimesCircle, faCheckCircle, faExclamationTriangle, faChartLine, faChevronRight, faChevronLeft, faEllipsisV, faRedoAlt, faPlusSquare, faPlus,faEye,faTrashAlt,faEdit ,faUserSecret, faSpinner, faTree, faSearch,faQuestionCircle, faShoppingCart, faUserCircle, faCaretDown, faPlaneArrival, faPlane, faArrowAltCircleRight,faDollarSign, faCartPlus, faSnowflake, faCircleNotch, faSignInAlt,} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add( faInbox, faTrashRestoreAlt, faFolderPlus, faFolderMinus,  faImage,faTimesCircle, faCheckCircle, faExclamationTriangle, faChartLine,faChevronRight, faChevronLeft,faEllipsisV, faRedoAlt, faPlusSquare, faPlus,faEye,faTrashAlt,faEdit,faUserSecret, faSpinner, faTree, faSearch, faQuestionCircle, faShoppingCart, faUserCircle, faCaretDown, faPlaneArrival, faPlane, faArrowAltCircleRight,faDollarSign, faCartPlus, faSnowflake, faCircleNotch, faSignInAlt)

Vue.component('fa-icon', FontAwesomeIcon)

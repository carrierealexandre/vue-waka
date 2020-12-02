import Vue from "vue";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUnlock, faLock, faCogs, faUserShield, faCheckSquare , faInbox, faTrashRestoreAlt, faFolderPlus, faFolderMinus, faImage,faTimesCircle, faCheckCircle, faExclamationTriangle, faChartLine, faChevronRight, faChevronLeft, faEllipsisV, faRedoAlt, faPlusSquare, faPlus,faEye,faTrashAlt,faEdit ,faUserSecret, faSpinner, faTree, faSearch,faQuestionCircle, faShoppingCart, faUserCircle, faChevronDown, faPlaneArrival, faPlane, faArrowAltCircleRight,faDollarSign, faCartPlus, faSnowflake, faCircleNotch, faSignInAlt, faSignOutAlt,} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add( faUnlock, faLock, faCogs, faUserShield, faCheckSquare , faInbox, faTrashRestoreAlt, faFolderPlus, faFolderMinus,  faImage,faTimesCircle, faCheckCircle, faExclamationTriangle, faChartLine,faChevronRight, faChevronLeft,faEllipsisV, faRedoAlt, faPlusSquare, faPlus,faEye,faTrashAlt,faEdit,faUserSecret, faSpinner, faTree, faSearch, faQuestionCircle, faShoppingCart, faUserCircle, faChevronDown, faPlaneArrival, faPlane, faArrowAltCircleRight,faDollarSign, faCartPlus, faSnowflake, faCircleNotch, faSignInAlt, faSignOutAlt,)

Vue.component('fa-icon', FontAwesomeIcon)

import Vue from 'vue'

// import Vant from 'vant'
import 'vant/lib/index.css'

import { 
  DropdownMenu, 
  DropdownItem,
  Dialog,
  Tabbar, 
  TabbarItem,
  Icon,
  List,
  Popup, 
  DatetimePicker,
  PullRefresh,
  Tag,
  NavBar,
  Button,
  Checkbox, 
  CheckboxGroup,
  Cell,
  CellGroup,
  Field,
  Collapse,
  CollapseItem,
  NumberKeyboard,
  Switch,
  Notify,
  RadioGroup, 
  Radio,
  Toast,
  SwipeCell,
  Stepper,
  Picker,
  Tab,
  Tabs,
  Loading,
  Pagination




} from 'vant';

Vue.use(Loading)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Dialog)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(List)
Vue.use(Icon)
Vue.use(Popup)
Vue.use(DatetimePicker);
Vue.use(PullRefresh)
Vue.use(Tag)
Vue.use(NavBar)
Vue.use(Button)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Field)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(NumberKeyboard)
Vue.use(Switch)
Vue.use(Notify)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Toast)
Vue.use(SwipeCell)
Vue.use(Stepper)
Vue.use(Picker)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Pagination)




// Vue.prototype.$loading = Loading.service
// Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = Dialog.alert
Vue.prototype.$confirm = Dialog.confirm
// Vue.prototype.$prompt = MessageBox.prompt
// Vue.prototype.$notify = Notification
Vue.prototype.$message = Notify
Vue.prototype.$toast = Toast
Vue.prototype.window = window

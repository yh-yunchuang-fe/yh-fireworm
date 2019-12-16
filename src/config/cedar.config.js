import Rate from '../containers/Cedar/Rate'
import SearchBar from '../containers/Cedar/SearchBar'
import SwipeAction from '../containers/Cedar/SwipeAction'
import Switch from '../containers/Cedar/Switch'
import TabBar from '../containers/Cedar/TabBar'
import Tag from '../containers/Cedar/Tag'
import Badge from '../containers/Cedar/Badge'
import Alert from '../containers/Cedar/Alert'
import IconComponent from '../containers/Cedar/Icon'
import IndicatorComponent from '../containers/Cedar/Indicator'
import InputNumberComponent from '../containers/Cedar/InputNumber'
import LabelComponent from '../containers/Cedar/Label'
import PickerComponent from '../containers/Cedar/Picker'
import MultipleLineTextComponent from '../containers/Cedar/MultipleLineText'
import PullToRefreshComponent from '../containers/Cedar/PullToRefresh'
import ModalComponent from '../containers/Cedar/Modal'
import PopupComponent from '../containers/Cedar/Popup'
import Button from '../containers/Cedar/Button'
import Checkbox from '../containers/Cedar/CheckBox'
import DatePicker from '../containers/Cedar/DatePicker'
import Toast from '../containers/Cedar/Toast'
import CedarIntroduction from '../containers/Cedar/CedarIntroduction'

export default [{
    name: '简介',
    path: '/cedar/cedarIntroduction',
    component: CedarIntroduction,
}, {
    name: 'Alert 提示框',
    path: '/cedar/alert',
    component: Alert,
},{
    name: 'Badge 角标',
    path: '/cedar/badge',
    component: Badge,
},{
    name: 'Button 按钮',
    path: '/cedar/button',
    component: Button,
},{
    name: 'Checkbox 多选框',
    path: '/cedar/checkbox',
    component: Checkbox,
},{
    name: 'DatePicker 日期选择',
    path: '/cedar/datePicker',
    component: DatePicker,
},{
    name: 'Icon 图标',
    path: '/cedar/icon',
    component: IconComponent,
},{
    name: 'Indicator 提示',
    path: '/cedar/indicator',
    component: IndicatorComponent,
},{
    name: 'InputNumber 数字输入',
    path: '/cedar/inputNumber',
    component: InputNumberComponent,
},{
    name: 'Label 标签',
    path: '/cedar/label',
    component: LabelComponent,
},{
    name: 'Modal 蒙层',
    path: '/cedar/modal',
    component: ModalComponent,
},{
    name: 'MultipleLineText 多行省略',
    path: '/cedar/multipleLineText',
    component: MultipleLineTextComponent,
},{
    name: 'Picker 选择器',
    path: '/cedar/picker',
    component: PickerComponent,
},{
    name: 'Popup 弹出层',
    path: '/cedar/popup',
    component: PopupComponent,
},{
    name: 'PullToRefersh 下拉刷新',
    path: '/cedar/pullToRefersh',
    component: PullToRefreshComponent,
},{
    name: 'Rate 百分比',
    path: '/cedar/rate',
    component: Rate,
},{
    name: 'SearchBar 搜索栏',
    path: '/cedar/searchBar',
    component: SearchBar,
},{
    name: 'SwipeAction 滑动操作',
    path: '/cedar/swipeAction',
    component: SwipeAction,
},{
    name: 'Switch 开关',
    path: '/cedar/switch',
    component: Switch,
},{
    name: 'TabBar 标签页栏',
    path: '/cedar/tabBar',
    component: TabBar,
},{
    name: 'Tag 标签',
    path: '/cedar/tag',
    component: Tag,
},{
    name: 'Toast 轻提示',
    path: '/cedar/toast',
    component: Toast,
}]

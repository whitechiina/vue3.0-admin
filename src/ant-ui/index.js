// 封装UI组件
import {Button, Input, Form, Layout, Menu} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

const components = [
    Button,
    Input,
    Form,
    Layout,
    Menu
]
export function setupAntd(app) {
    components.forEach(component => {
        app.use(component)
    })
}
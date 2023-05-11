import type { App } from 'vue';
import { Button } from './Button';
import {
  Input,
  Layout,
  Space,
  Checkbox,
  Divider,
  Select,
  Form,
  Modal,
  Radio,
} from 'ant-design-vue';

export function registerGlobComp(app: App) {
  app
    .use(Input)
    .use(Button)
    .use(Layout)
    .use(Space)
    .use(Checkbox)
    .use(Divider)
    .use(Select)
    .use(Form)
    .use(Radio)
    .use(Modal);
}

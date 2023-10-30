import Input from './Input.vue'
import CheckBox from './CheckBox.vue'
import Radio from './Radio.vue'
import { ComponentOptionsMixin, DefineComponent } from 'vue'

interface Props {
  text: DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, Readonly<ExtractPropTypes<{}>>, {}, {}>
  radio: DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, Readonly<ExtractPropTypes<{}>>, {}, {}>
  checkbox: DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, Readonly<ExtractPropTypes<{}>>, {}, {}>
}

const COMPONENTS: Props = {
  text: Input,
  radio: Radio,
  checkbox: CheckBox
}

export const getComponent = (type: keyof Props) => {
  return COMPONENTS[type]
}
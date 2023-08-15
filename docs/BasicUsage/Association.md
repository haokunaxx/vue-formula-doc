
<script setup>
  import ContainerDemo from '../packages/BasicUsage/Association/Editable.vue'
  import VisibleDemo from '../packages/BasicUsage/Association/Visible.vue'
</script>

# 表单联动

## 只读/必填

### 尝试操作一下表单

下面的表单存在以下规则：

- `是否禁用姓名、邮件和年龄` 表单项 **选中** 时会 **禁用姓名、邮件和年龄这三个表单项**
- `是否禁用容器` 表单项 **选中** 时，会 **禁用整个容器下的所有字段**
- `是否禁用列表` 表单项 **选中** 是，会 **禁用整个列表下的所有字段**
- 当 `姓名` 为 `required` 时，容器下的第二个字段会被设置成**必填**
- 当列表中**每一行的第一个表单项没有值**时，右侧的表单项状态将为**只读**

::: raw
   <ContainerDemo />
:::

> 只读和必填通过指定 disabled 属性（只读）required 属性（必填）来进行设置。

如果控制只读/必填的条件是简单的、不变的逻辑时，可以直接写在表单的布局 Schema 数据中。disabled 属性和 required 属性接受一个回调函数，这个回调函数的返回值为 true 时，该表单项的状态会进行相应的更新。这个回调函数接受一个参数（如下），可以通过参数进行相应的条件判断。

```typescript
interface CallbackParams {
  formModel: Recordable //整个表单数据
  formSchema?: any //整个表单布局数据
  schema: Schema //当前表单项的布局数据
  setSchemaByPath: FormActionType['setSchemaByPath']
  setModelByPath: FormActionType['setModelByPath']
  //...其他
}
```

比如，`当A字段为required时，B字段必填；当A字段为disabled时，B字段只读` 则可以这样描述：

```typescript
import { type LayoutSchema, Field } from 'vue-formula'
const schema: LayoutSchema = {
  A: {
    type: 'field',
    field: 'A',
    label: 'A',
    component: Field.Input
  },
  B: {
    type: 'field',
    field: 'B',
    label: 'B',
    component: Field.Input,
    disabled: ({ formModel }) => formModel['A'] === 'disabled',
    required: ({ formModel }) => formModel['A'] === 'required'
  }
}
```

## 显示/隐藏
### 尝试操作一下表单

<VisibleDemo />


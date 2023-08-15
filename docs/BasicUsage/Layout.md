# 表单布局

表单根据布局数据进行布局渲染。

当布局数据全部是表单项字段时，表单的布局为默认的从上到下进行排列。

当使用容器组件（盒子容器、列表容器）对表单项进行包裹后，表单的布局则取决的容器组件如何渲染表单项。

## 布局思想

通过容器组件包裹多个表单项进行布局渲染是更为**推荐**的做法（但是如果表单很简单，也可以直接渲染表单项）。
合理使用容器组件不仅可以对表单进行更加定制化的布局渲染，而且使用容器还可以进行嵌套渲染达到归类的目的。其次如果设计表单项之间存在联动的时候，使用容器进行包裹的优点将更为明显

> 不同的复杂表单可以通过开发不同的容器来定制表单布局
>
> 容器可以复用
>
> 容器可以嵌套容器
>
> 涉及多个表单联动时，使用容器进行包裹的优点更为明显

## 使用容器

这里的容器指的是 `Container`（盒子容器）和 `List`（列表容器）。

### 盒子容器

<ContainerDemo />

### 列表容器

<ListDemo />

## 容器嵌套

<NestDemo />

## 内置盒子容器和列表容器

### 内置盒子容器

目前内置的盒子容器只有一个，即 `Container.Container`。

> Container 从 `vue-formula`中导入

```typescript
import { Container, type ContainerSchema, type LayoutSchema } from 'vue-formula'

const containerSchema: ContainerSchema = {
  type: 'container',
  name: 'containerDemo',
  title: 'Container Demo',
  component: Container.Container, //在此使用
  properties: {
    //内部渲染组件...
  }
}

const formSchema: LayoutSchema = {
  containerDemo: containerSchema
}
```

此处只是对内置盒子容器进行一个粗略的介绍，更多详细的信息可以查看\*\*\*

### 内置列表容器

目前内置的列表容器也只有一个 :clown_face: ，即 `List.List`

> List 从 `vue-formula`中导入

```typescript
import { List, type ListSchema, type LayoutSchema } from 'vue-formula'

const listSchema: ListSchema = {
  type: 'list',
  name: 'listDemo',
  title: 'List Demo',
  component: List.List, //在此使用
  items: [
    {
      //内部渲染组件...
    }
  ]
}

const formSchema: LayoutSchema = {
  listDemo: listSchema
}
```

此处只是对内置盒子容器进行一个粗略的介绍，更多详细的信息可以查看\*\*\*

## 如何自定义容器组件

**TODO(Next Version)**

<script setup>
  import ContainerDemo from '../packages/BasicUsage/Layout/Container.vue'
  import ListDemo from '../packages/BasicUsage/Layout/List.vue'
  import NestDemo from '../packages/BasicUsage/Layout/Nest.vue'
</script>

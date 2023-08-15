<template>
  <BasicForm :schema="schema" label-position="top" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  BasicForm,
  Field,
  type LayoutSchema,
  ContainerSchema,
  Container,
  List
} from 'vue-formula'
import 'vue-formula/lib/style.css'

const schema = ref<LayoutSchema>({
  controlContainer: {
    type: 'container',
    component: Container.Container,
    name: 'controlContainer',
    title: '控制表单项的显示与隐藏',
    properties: {
      cssHide: {
        type: 'field',
        field: 'cssHide',
        component: Field.Checkbox,
        label: '控制邮件表单项（样式上）',
        defaultValue: true,
        colProps: {
          span: 12
        }
      },
      domTreeRemove: {
        type: 'field',
        field: 'domTreeRemove',
        component: Field.Checkbox,
        label: '控制姓名表单项（渲染上）',
        defaultValue: true,
        colProps: {
          span: 12
        }
      }
    }
  },
  // container: {
  //   type: 'container',
  //   component: Container.Container,
  //   name: 'container',
  //   title: '部分一',
  //   show: ({ formModel }) => formModel['cssHide'],
  //   properties: {
  //     name: {
  //       type: 'field',
  //       field: 'name',
  //       component: Field.Input,
  //       label: '姓名',
  //       ifShow: ({ formModel }) => formModel['domTreeRemove']
  //     },
  //     email: {
  //       type: 'field',
  //       field: 'email',
  //       component: Field.Input,
  //       label: '邮件',
  //       show: ({ formModel }) => formModel['cssHide']
  //     }
  //   }
  // },
  name: {
    type: 'field',
    field: 'name',
    component: Field.Input,
    label: '姓名',
    ifShow: ({ formModel }) => formModel['domTreeRemove']
  },
  email: {
    type: 'field',
    field: 'email',
    component: Field.Input,
    label: '邮件',
    show: ({ formModel }) => formModel['cssHide']
  },
  count: {
    type: 'field',
    field: 'count',
    component: Field.InputNumber,
    label: '数字'
  }
})
</script>

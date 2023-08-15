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
    // title: '控制表单项',
    componentProps: {
      expandCollapseEnabled: false
    },
    properties: {
      disabled: {
        type: 'field',
        field: 'disabled',
        component: Field.Checkbox,
        label: '是否禁用姓名、邮件和年龄',
        colProps: {
          span: 8
        }
      },
      containerDisabled: {
        type: 'field',
        field: 'containerDisabled',
        component: Field.Checkbox,
        helpMessage: '选中会禁用 容器 下的所有字段',
        label: '是否禁用目标容器',
        colProps: {
          span: 8
        }
      },
      listDisabled: {
        type: 'field',
        field: 'listDisabled',
        component: Field.Checkbox,
        helpMessage: '选中会禁用 列表 下的所有字段',
        label: '是否禁用目标列表',
        colProps: {
          span: 8
        }
      }
    }
  },
  name: {
    type: 'field',
    field: 'name',
    component: Field.Input,
    label: '姓名',
    disabled: ({ formModel }) => formModel['editable']
  },
  // rowContainer: {
  //   type: 'container',
  //   component: Container.Container,
  //   title: '横向布局容器',
  //   rowProps: {
  //     justify: 'space-between'
  //   },
  //   properties: {
  //     email: {
  //       type: 'field',
  //       field: 'email',
  //       component: Field.Input,
  //       label: '邮件',
  //       disabled: ({ formModel }) => formModel['editable'],
  //       colProps: {
  //         span: 10
  //       }
  //     },
  //     count: {
  //       type: 'field',
  //       field: 'count',
  //       component: Field.InputNumber,
  //       label: '数字',
  //       disabled: ({ formModel }) => formModel['editable'],
  //       colProps: {
  //         span: 10
  //       }
  //     }
  //   }
  // },
  list: {
    type: 'list',
    component: List.List,
    name: 'list',
    title: '目标列表',
    disabled: ({ formModel }) => formModel['listDisabled'],
    items: {
      field1: {
        type: 'field',
        field: 'field1',
        component: Field.Input,
        label: 'list-field-1',
        colProps: {
          span: 12
        }
      },
      field2: {
        type: 'field',
        field: 'field2',
        component: Field.Input,
        label: 'list-field-2',
        colProps: {
          span: 12
        },
        disabled: ({model}) => !model['field1']
      }
    }
  },
  container: {
    type: 'container',
    component: Container.Container,
    name: 'container',
    title: '目标容器',
    disabled: ({ formModel }) => formModel['containerDisabled'],
    properties: {
      field1: {
        type: 'field',
        field: 'field1',
        component: Field.Input,
        label: 'container-field-1'
      },
      field2: {
        type: 'field',
        field: 'field2',
        component: Field.Input,
        label: 'container-field-2',
        disabled: ({ formModel }) => formModel['name'] === 'required'
      }
    }
  }
})
</script>

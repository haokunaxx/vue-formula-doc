<script setup lang="ts">
import { ref } from 'vue'
import { BasicForm, Field, type LayoutSchema, Container, List } from 'vue-formula'
import 'vue-formula/lib/style.css'

const nestFormSchema: LayoutSchema = {
  container1: {
    type: 'container',
    name: 'container1',
    title: '最外层容器',
    component: Container.Container,
    properties: {
      container2: {
        type: 'container',
        component: Container.Container,
        name: 'container2',
        title: '内部嵌套的容器',
        properties: {
          name: {
            type: 'field',
            field: 'name',
            component: Field.Input,
            label: '姓名'
          },
          age: {
            type: 'field',
            field: 'age',
            component: Field.InputNumber,
            label: '年龄'
          }
        }
      },
      list1: {
        type: 'list',
        title: '内部嵌套的列表',
        name: 'list1',
        component: List.List,
        items: {
          name: {
            type: 'field',
            field: 'name',
            component: Field.Input,
            label: '姓名'
          },
          age: {
            type: 'field',
            field: 'age',
            component: Field.InputNumber,
            label: '年龄'
          }
        }
      }
    }
  },
  name: {
    type: 'field',
    field: 'name',
    component: Field.Input,
    label: '不在容器内的表单项'
  },
}

const schema = ref<LayoutSchema>(nestFormSchema)
</script>

<template>
  <BasicForm :schema="schema" />
</template>

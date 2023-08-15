<template>
  <BasicForm :schema="schema" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  BasicForm,
  Field,
  List,
  ListSchema,
  type LayoutSchema
} from 'vue-formula'
import 'vue-formula/lib/style.css'

const ListFormSchema: ListSchema = {
  type: 'list',
  name: 'demoList',
  component: List.List,
  title: '列表容器',
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

const schema = ref<LayoutSchema>({
  demoList: ListFormSchema
})
</script>

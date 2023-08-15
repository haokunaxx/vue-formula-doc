<template>
  <BasicForm :schema="schema" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  BasicForm,
  Field,
  type LayoutSchema,
  ContainerSchema,
  Container
} from 'vue-formula'
import 'vue-formula/lib/style.css'

const ContainerFormSchema: ContainerSchema = {
  type: 'container',
  name: 'demoContainer',
  title: 'Demo Container',
  component: Container.Container,
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
}

const schema = ref<LayoutSchema>({
  demoContainer: ContainerFormSchema
})
</script>

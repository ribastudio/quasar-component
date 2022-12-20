<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Botão',
  },
  iconProps: {
    type: String,
    default: '',
  },
});
</script>

<template>

<!-- <q-btn color="primary" :icon="props.iconProps" :label="props.title"> -->
<q-btn color="primary" :icon="props.iconProps" :label="props.title">
<!--  <slot >Bo</slot>-->
</q-btn>
</template>

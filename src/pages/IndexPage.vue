<script setup>
import slotComponentVue from 'src/components/slotComponent.vue';
import { ref, onMounted } from 'vue';

// import pdf from 'vue-pdf';

const dados = ref('');
const bgColor = ref('');

onMounted(() => {
  const styleRef = document.querySelector('.styleRef');
  bgColor.value = () => {
    styleRef.setAttribute('background-color', 'red');
  };
});
</script>

<template>
  <q-page class="flex column justify-center items-center">
    <div class="no-wrap">
      <h4 class="bg-red no-margin">Teste</h4>
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >

    </div>

    <slotComponentVue icon="mdi-content-save" >
      Salvar
    </slotComponentVue>

     <slotComponentVue title="Editar" iconProps="mdi-pencil"/>

     <q-input label="teste" v-model="dados" @change="dados"
     mask="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" max="1000"/>
     {{dados}}
<!--
     <input
      :value="dados"
      @input="event => dados = event.target.value.toUpperCase()"> -->

      <!-- <q-input
      :value="dados" @input="m => { dados = typeof m === 'string' ? m.toUpperCase() : m }"
        class="text-uppercase" >
        <slot>teste</slot>
      </q-input> -->

     <!-- <pdf src="https://apis.gx360.com.br/bot_amb_dev/cadastro/termo-de-uso"></pdf> -->

    <q-icon color="primary" name="font_download" size="40px" ref="styleRef"
            @mouseover="bgColor" class="cursor-pointer styleRef"/>
  </q-page>
</template>

<style >
:placeholder {
  color: red;
}
</style>

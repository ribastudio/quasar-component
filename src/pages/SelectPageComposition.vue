<script setup>
import { ref } from 'vue';
import { useBanksStore } from 'stores/bancos-store';

const banks = ref(null);
const storeBanks = useBanksStore();
const optionsBanks = ref([]);

const filtrarOcupacoes = (val, update) => {
  if (val === '') {
    update(() => {
      optionsBanks.value = storeBanks.optionsBanks;

      // here you have access to "ref" which
      // is the Vue reference of the QSelect
    });
    return;
  }

  update(() => {
    const banco = val.toUpperCase();
    optionsBanks.value = storeBanks.optionsBanks
      .filter((opt) => opt.label.indexOf(banco) > -1);
  });
};

// .toLowerCase()
</script>

<template>
  <q-page class="flex column justify-center items-center">
    <div class="full-width q-px-md">
      <q-select
        label="Lista de Bancos"
        v-model="banks"
        :options="optionsBanks"
        option-label="label"
        option-value="value"
        input-class="text-uppercase"
        @filter="filtrarOcupacoes"
        use-input/>
    </div>

    {{banks?.value}}
  </q-page>
</template>

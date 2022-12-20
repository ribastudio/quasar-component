<script>
import { useBanksStore } from 'stores/bancos-store';

export default {
  data() {
    return {
      banks: null,
      storeBanks: useBanksStore(),
      optionsBanks: [],
    };
  },

  methods: {
    filtrarOcupacoes(val, update) {
      if (val === '') {
        update(() => {
          this.optionsBanks = this.storeBanks.optionsBanks;

          // here you have access to "ref" which
          // is the Vue reference of the QSelect
        });
        return;
      }

      update(() => {
        const banco = val.toUpperCase();
        this.optionsBanks = this.storeBanks.optionsBanks
          .filter((opt) => opt.label.indexOf(banco) > -1);
      });
    },
  },
};
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

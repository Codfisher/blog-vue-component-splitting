<script
  setup
  lang="ts"
>
import BaseMenu from './components/base-menu.vue';
import { openUsingDialog } from './common/utils-quasar';
import { useQuasar, QDialog } from 'quasar';
import { h } from 'vue';

const $q = useQuasar();

</script>

<template>
  <div class="fit flex flex-col gap-4">
    <base-menu />
  </div>
</template>

<style scoped></style>

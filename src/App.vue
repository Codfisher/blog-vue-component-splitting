<script setup lang="ts">
import SingleMenuManger from './components/single-menu-manger.vue';
import { openUsingDialog } from './common/utils-quasar';
import { useQuasar, QDialog } from 'quasar';
import { h } from 'vue';

const $q = useQuasar();

</script>

<template>
  <div class="fit flex flex-col gap-4">
    <single-menu-manger />
  </div>
</template>

<style scoped></style>

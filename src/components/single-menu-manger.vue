<template>
  <q-card>
    <q-card-section class="bg-teal text-white">
      菜單管理
    </q-card-section>

    <q-form @submit="handleSubmit">
      <q-card-section class="flex flex-col gap-2">
        <div class="flex gap-2">
          <q-input
            v-model="newDish.name"
            label="名稱"
            outlined
            class="flex-1"
          ></q-input>
          <q-input
            v-model.number="newDish.price"
            label="價格"
            outlined
            class="w-24"
          ></q-input>
        </div>

        <div class="flex gap-2">
          <q-btn
            label="清空"
            unelevated
            @click="reset()"
          />
          <q-btn
            label="新增"
            unelevated
            type="submit"
            class="flex-1"
            color="teal"
          />
        </div>
      </q-card-section>
    </q-form>

    <hr />

    <q-card-section>
      <div class="flex gap-2">
        <div class="flex-1">
          名稱
        </div>
        <div class="w-24">
          價格
        </div>
        <div class="flex-[2]">
          描述
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <div
          v-for="(item, i) of modelValue.dishes"
          :key="i"
          class="flex gap-2"
        >
          <q-input
            v-model="item.name"
            class="flex-1"
            dense
          ></q-input>
          <q-input
            v-model="item.price"
            class="w-24"
            input-class="text-center"
            dense
          ></q-input>
          <q-input
            v-model="item.description"
            class="flex-[2]"
            dense
          ></q-input>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script
  setup
  lang="ts"
>
import { ref } from 'vue';
import { Dish, Menu } from '../types';

interface Props {
  modelValue?: Menu;
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: () => ({
    dishes: [],
  }),
});

const emit = defineEmits<{
  (e: 'reset'): void;
  (e: 'update:modelValue', value: NonNullable<Props['modelValue']>): void;
}>();

const modelValue = ref({ ...props.modelValue });

const newDish = ref<Dish>({
  name: '',
  price: 0,
  description: '',
});

function reset() {
  newDish.value = {
    name: '',
    price: 0,
    description: '',
  }
  emit('reset');
}

function handleSubmit() {
  modelValue.value.dishes.push({ ...newDish.value });
}
</script>

<style
  scoped
  lang="sass"
></style>

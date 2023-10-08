<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ msg: string }>()

const altura = 2.20;
const largura = 1.55;
const priceTecidoComprado = 23;
const areaTecidoComprado = altura * largura;
const custoMetroQuadrado = priceTecidoComprado / areaTecidoComprado;
const areaTecidoUsado = altura * 1.50;
const custoTecidoUsado = custoMetroQuadrado * areaTecidoUsado;

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <div>
    <h1>{{  `A dimensão ${altura} x ${largura} = ${custoTecidoUsado}` }}</h1>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

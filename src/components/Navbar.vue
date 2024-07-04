<script setup></script>

<template>
  <nav class="navbar">
    <button class="toggle" @click="$store.commit('toggleButton')">
      <font-awesome-icon :icon="['fas', 'bars-staggered']" class="icon" />
    </button>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  background: #fff;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: end;

  button {
    border: none;
    background: transparent;
    cursor: pointer;
  }

  .icon {
    color: #333;
    font-size: 24px;
  }
}
</style>

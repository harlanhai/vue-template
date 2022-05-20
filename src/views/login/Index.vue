<template>
  <div>
    <a-input :value="userName" placeholder="Basic usage">
      <template #prefix>
        <user-outlined type="user" />
      </template>
      <template #suffix>
        <a-tooltip title="Extra information">
          <info-circle-outlined style="color: rgba(0, 0, 0, 0.45)" />
        </a-tooltip>
      </template>
    </a-input>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  let userName = ref<string>('');
</script>
 
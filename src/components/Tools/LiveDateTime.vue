<template>
  <div class="text-subtitle-1 ml-2">
    {{ date }}
  </div>
</template>

<script>
import { formatWithOptions } from "date-fns/fp";
import { it } from "date-fns/locale";

export default {
  data() {
    return {
      date: "",
    };
  },
  methods: {
    getDate() {
      this.date = formatWithOptions(
        { locale: it },
        "EEEE d MMMM, H:mm "
      )(new Date());
      setTimeout(this.getDate, 1000);
    },
  },
  mounted() {
    this.getDate();
  },
};
</script>

<style>
/* signopost */
</style>

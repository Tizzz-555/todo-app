<template>
  <div class="albo pa-4">
    <h1>Albo</h1>

    <div class="comic">
      <h2>{{ comic.safe_title }}</h2>
      <span>
        <strong>#{{ comic.num }}</strong> - {{ comic.day }}/{{ comic.month }}/{{
          comic.year
        }}
      </span>
      <img
        :src="comic.img"
        :alt="comic.safe_title"
      />
    </div>

    <div class="buttons">
      <v-icon
        @click="fetchComic(comic.num - 1)"
        large
        color="primary"
        >mdi-skip-previous-circle</v-icon
      >

      <v-icon
        @click="fetchComic(comic.num + 1)"
        large
        color="primary"
        >mdi-skip-next-circle</v-icon
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comic: {},
    };
  },
  created() {
    this.fetchComic(100);
  },
  methods: {
    fetchComic(num) {
      this.$axios
        .get(`http://localhost:8888/.netlify/functions/xkcd?number=${num}`)
        .then((response) => {
          this.comic = response.data;
        });
    },
  },
};
</script>
<style lang="sass">
.albo
  display: flex
  flex-direction: column
  justify-content: flex-start
  padding: 1rem

.comic
  text-align: center
  height: 400px
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  margin-bottom: 2rem
  img
    max-height: 100%
    max-width: 100%
    object-fit: contain

.buttons
  display: flex
  justify-content: center
  gap: 2rem
</style>

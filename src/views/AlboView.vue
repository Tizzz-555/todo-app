<template>
  <div>
    <h1>{{ comic.safe_title }}</h1>
    <p>{{ comic.day }}/{{ comic.month }}/{{ comic.year }}</p>
    <p>#{{ comic.num }}</p>
    <img
      :src="comic.img"
      :alt="comic.safe_title"
    />
    <button @click="fetchComic(comic.num - 1)">Previous</button>
    <button @click="fetchComic(comic.num + 1)">Next</button>
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
        .get(
          `https://cors-anywhere.herokuapp.com/https://xkcd.com/${num}/info.0.json`
        )
        .then((response) => {
          this.comic = response.data;
        });
    },
  },
};
</script>

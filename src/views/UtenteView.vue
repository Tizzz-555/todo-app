<template>
  <div class="utente pa-6">
    <form>
      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        :counter="20"
        label="Nome utente"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
        @keyup.enter="submit"
      ></v-text-field>

      <v-btn
        class="mr-4 mt-4"
        @click="submit"
      >
        submit
      </v-btn>
      <v-btn
        class="mr-4 mt-4"
        @click="clear"
      >
        clear
      </v-btn>
    </form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";
import { mapMutations } from "vuex"; // import mapMutations from Vuex

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(20) },
  },

  data: () => ({
    name: "",
  }),

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$store.dispatch("setUser", this.name); // call the action instead of the mutation
        this.$router.push("/");
      }
    },
    clear() {
      this.$v.$reset();
      this.name = "";
    },
  },
};
</script>

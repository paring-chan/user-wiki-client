<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
        dark
        style="position: fixed;"
    >
      <router-link to="/" style="color: #fff; text-decoration: none;">
        UserWiki
      </router-link>
      <v-spacer></v-spacer>

      <v-dialog max-width="500" v-model="searchDialog">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-container>
            <v-autocomplete @select.stop="console.log('selected')" :loading="searching" :items="items" :search-input.sync="search" v-model="selected"
                            placeholder="검색어를 입력하세요" no-data-text="검색 결과 없음"></v-autocomplete>
          </v-container>
        </v-card>
      </v-dialog>

    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Axios from 'axios'

export default {
  name: 'App',
  components: {},
  data: () => ({
    results: [],
    searching: false,
    searchDialog: false,
    showSearch: false,
    search: null,
    selected: null
  }),
  watch: {
    search(val) {
      if (val === '') return
      this.searching = true
      Axios.get('/api/search/' + encodeURIComponent(val)).then(res => {
        this.results = res.data
      }).catch(err => console.error(err))
          .finally(() => this.searching = false)
    },
    selected(val) {
      this.searchDialog = false
      this.$router.push(`/users/${this.results.find(r => r.name === val).id}`)
    }
  },
  computed: {
    items() {
      return this.results.map(entry => {
        return entry.name
      })
    },
  }
};
</script>

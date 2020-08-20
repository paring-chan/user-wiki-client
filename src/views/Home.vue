<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <v-col sm="12" md="6">
        <v-autocomplete no-data-text="검색 결과 없음" solo @select.stop="console.log('selected')" :loading="searching" :items="items" :search-input.sync="search" v-model="selected"
                        placeholder="검색어를 입력하세요"></v-autocomplete>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import Axios from "axios";

export default {
  name: 'Home',
  components: {
  },
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
}
</script>

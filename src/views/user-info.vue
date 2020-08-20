<template>
  <div>
    <v-container fluid>
      <v-row justify="center">
        <v-col sm="12" md="6">
          <v-card :loading="loading" :disabled="loading">
            <v-card-title v-if="loading">
              로딩중...
            </v-card-title>
            <div v-else>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>{{ user.name }}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-avatar>
                  <v-img :src="user.img" tile size="80"></v-img>
                </v-list-item-avatar>
              </v-list-item>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  name: 'UserInfo',
  components: {
  },
  data() {
    return {
      user: undefined,
      loading: true
    }
  },
  async mounted() {
    this.user = (await Axios.get('/api/search/' + this.$route.params.id)).data[0]
    this.loading = false
  }
}
</script>

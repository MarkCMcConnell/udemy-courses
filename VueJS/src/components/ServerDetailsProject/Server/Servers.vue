<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <app-server
        v-for="server in servers"
        :key="server"
        :server="server"
      >
      </app-server>
    </ul>
  </div>
</template>

<script>
import Server from './Server.vue';

export default {
  data() {
    return {
      servers: [
        { id: 1, status: 'Normal' },
        { id: 2, status: 'Critical' },
        { id: 3, status: 'Unknown' },
        { id: 4, status: 'Normal' },
      ],
    };
  },
  components: {
    // Can be used as appServer or app-server in the template
    appServer: Server,
  },
};
</script>

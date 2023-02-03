<template>
    <v-footer
    v-bind="localAttrs"
    :padless="padless"
    color="indigo-darken-4
    "
  >
    <v-card
      flat
      tile
      width="100%"
      class="bg-indigo-darken-4 text-center"
      
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4" 
          icon
          color="transparent"  
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
        <p class="pa-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium vel quia nulla architecto fugiat numquam debitis unde fugit, placeat tenetur cumque. Quasi suscipit, expedita iste quae quia quod tenetur. Laboriosam, iusto assumenda incidunt at non, aspernatur eos atque quam quis veritatis officiis. Impedit ullam distinctio exercitationem voluptas consectetur nemo. Inventore eaque, libero quos, possimus veniam eveniet numquam facilis dolores expedita odio laudantium natus quae molestias magnam molestiae modi, facere voluptatum.</p>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>ShipIT</strong>
      </v-card-text>
    </v-card>
  </v-footer>

</template>

<script>
  export default {
    name:'Footer',
    data: () => ({
      icons: [
        'mdi-home',
        'mdi-email',
        'mdi-calendar',
        'mdi-delete',
      ],
      items: [
        'default',
        'absolute',
        'fixed',
      ],
      padless: false,
      variant: 'default',
    }),
    computed: {
      localAttrs () {
        const attrs = {}

        if (this.variant === 'default') {
          attrs.absolute = false
          attrs.fixed = false
        } else {
          attrs[this.variant] = true
        }
        return attrs
      },
    },
  }
</script>
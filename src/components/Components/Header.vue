<template>
  <div id="app-c-header">
    <div id="h-bar">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="dropdown text-right">
              <a class="dropdown-toggle" href="#" role="button" id="h-cart-text" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <template v-if="items">
                  My Cart ({{ items.length }})
                </template>
                <template v-else>
                  My Cart (0)
                </template>
              </a>
              <div class="dropdown-menu" aria-labelledby="h-cart-text">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    items: Array
  },
  data () {
    return {
      /** golden */
    }
  }
}
</script>

<style lang="scss">
  @import '~scss/components/header/_root.scss';
</style>

<template>
  <div id="app-c-header">
    <nav id="h-bar" role="navigation">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <ul class="nav navbar-nav navbar-right">
              <li class="dropdown text-right">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false" id="h-cart-text">
                  <span class="d-inline-block d-md-none">
                    <template v-if="items">
                      <i class="fa fa-shopping-cart"></i> ({{ items.length }})
                    </template>
                    <template v-else>
                      <i class="fa fa-shopping-cart"></i> (0)
                    </template>
                  </span>
                  <span class="d-none d-md-inline-block">
                    <template v-if="items">
                      My Cart ({{ items.length }})
                    </template>
                    <template v-else>
                      My Cart (0)
                    </template>
                  </span>
                </a>
                <ul class="dropdown-menu dropdown-cart" role="menu">
                  <template v-if="items.length > 0">
                    <li :key="index" v-for="(item, index) in items">
                      <span class="item">
                        <span class="item-left">
                          <img src="~img/classic_tee.jpg" alt="eShop classic tee image" id="h-item-img" class="img-fluid">
                          <span class="item-info">
                            <h6 id="h-cart-title-text">
                              {{ item.title }}
                            </h6>
                            <h6 id="h-cart-value-text" class="py-md-2">
                              1x <span id="h-cart-cost-text">$75.00</span>
                            </h6>
                            <h6 id="h-cart-size-text" class="mb-md-0">
                              Size: {{ item.size }}
                            </h6>
                          </span>
                        </span>
                      </span>
                    </li>
                  </template>
                  <template v-else>
                    <li>
                      <span class="item">
                        <h6 class="font-weight-light text-center">
                          <small>No items yet</small>
                        </h6>
                      </span>
                    </li>
                  </template>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
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
      isCartVisible: false
    }
  }
}
</script>

<style lang="scss">
  @import '~scss/components/header/_root.scss';
</style>

<template>
  <div id="app-c-header">
    <div id="h-bar">
      <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown link
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </ul>
        </div>
      </nav> -->
      <!-- <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="dropdown dropleft text-right">
              <a class="dropdown-toggle dropleft" href="#" role="button" id="h-cart-text" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <template v-if="items">
                  My Cart ({{ items.length }})
                </template>
                <template v-else>
                  My Cart (0)
                </template>
              </a>
              <div class="dropdown-menu" aria-labelledby="h-cart-text">
                <div class="container dropdown-item">
                  <div class="row">
                    <div class="col-4 text-center debugger">
                      <img src="~img/classic_tee.jpg" alt="eShop classic tee image" id="h-item-img" class="img-fluid">
                    </div>
                    <div class="col-4 text-left debugger">
                      <div class="row">
                        <div class="col-12">
                          <h6>
                            Classic Tee
                          </h6>
                        </div>
                        <div class="col-12">
                          1x $75.00
                        </div>
                        <div class="col-12">
                          Size: S
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <!-- <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="dropdown">
              <a href="#!" class="text-right" id="h-cart-text" @click="isCartVisible = !isCartVisible">
                <template v-if="items">
                  My Cart ({{ items.length }})
                </template>
                <template v-else>
                  My Cart (0)
                </template>
              </a>
              <div class="dropdown-content" :class="{ 'shown': isCartVisible }">
                <div class="container">
                  <div class="row">
                    <div class="col-6">
                      <img src="~img/classic_tee.jpg" alt="eShop classic tee image" id="h-item-img" class="img-fluid">
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col-12">
                          <h6>
                            Classic Tee
                          </h6>
                        </div>
                        <div class="col-12">
                          1x $75.00
                        </div>
                        <div class="col-12">
                          Size: S
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <!-- Toolbar -->
      <nav id="h-bar" role="navigation">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <ul class="nav navbar-nav navbar-right">
                <li class="dropdown text-right">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false" id="h-cart-text">
                    <i class="fa fa-shopping-cart d-md-none"></i>
                    <span class="d-xs-none d-md-inline-block">
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

<template>
  <!-- main screen -->
  <div id="app-s-main">
    <!-- header -->
    <c-header :items="items" />
    <!-- main -->
    <div class="container" id="main-s-container">
      <div class="row">
        <div class="col-12 col-md-7 pt-3 pt-md-5 text-center">
          <img src="~img/classic_tee.jpg" alt="eShop classic tee image" id="main-item-img" class="img-fluid">
        </div>
        <div class="col-12 col-md-5 pt-3 pt-md-5">
          <div class="row">
            <div class="col-12">
              <h5 id="main-title-text" class="pt-3 pb-3 pt-md-0">
                Classic Tee
              </h5>
            </div>
            <div class="col-12">
              <h6 id="main-cost-text" class="border-top border-bottom py-md-2">
                $75.00
              </h6>
            </div>
            <div class="col-12 pt-3">
              <p id="main-desc-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias iure animi voluptates, rerum eaque quibusdam consequatur molestiae similique, architecto eum laborum enim aut harum dolor delectus aliquid ducimus placeat ut optio ea!
              </p>
            </div>
            <div class="col-12 pt-3 pb-2">
              <h6 id="main-size-text">
                SIZE<span id="main-size-star">*</span> <span id="main-selected-size-text" class="pl-1">{{ selectedSize }}</span>
              </h6>
            </div>
            <div class="col-12">
              <ul class="list-inline">
                <li class="list-inline-item">
                  <button type="button" class="btn" :class="{'active': selectedSize === 'S'}" @click="changeSelectedSize('S')">S</button>
                </li>
                <li class="list-inline-item">
                  <button type="button" class="btn" :class="{'active': selectedSize === 'M'}" @click="changeSelectedSize('M')">M</button>
                </li>
                <li class="list-inline-item">
                  <button type="button" class="btn" :class="{'active': selectedSize === 'L'}" @click="changeSelectedSize('L')">L</button>
                </li>
              </ul>
            </div>
            <div class="col-12 pb-3 pb-md-0">
              <button type="button" id="main-add-cart-button" class="btn" @click="addToCart">ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * import component
 */
import Header from '../Components/Header'
/**
 * import vuex
 */
import {
  mapState,
  mapActions
} from 'vuex'
/**
 * export
 */
export default {
  name: 'MainScreen',
  components: {
    'c-header': Header
  },
  data () {
    return {
      selectedSize: null
    }
  },
  computed: {
    ...mapState({
      'items': ({main}) => main.items
    })
  },
  methods: {
    ...mapActions(['setItemToCart']),
    changeSelectedSize (size) {
      // Update local reactive selectedSize
      this.selectedSize = size
    },
    addToCart () {
      // Check if there's a selected size
      if (this.selectedSize !== null) {
        // Set the item to store state
        this.setItemToCart({
          title: 'Classic Tee',
          size: this.selectedSize
        }).then(() => {
          // Notify the user
          alert('Classic Tee is added to the cart.')
        })
      } else {
        // Notify user, needs to select a size
        alert('Please select your desired shirt size.')
      }
    }
  }
}
</script>

<style lang="scss">
  @import '~scss/screens/main/_root.scss';
</style>

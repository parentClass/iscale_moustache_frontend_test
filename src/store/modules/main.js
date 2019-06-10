/**
 * Main module
 */

/**
 * @const state
 * @type {object}
 */
const state = {
  items: []
}

/**
 * @const actions
 * @type {object}
 */
const actions = {
  /**
  * Set item to cart
  * @param  context
  * @return {Promise}
  */
  setItemToCart: async (context, payload) => {
    try {
      context.commit('setItemCart', payload)
    } catch (error) {
      context.commit('setItemCart', null)
    }
  }
}
/**
* @const mutations
* @type {object}
*/
const mutations = {
  /**
    * Set payload to items state
    * @param state
    * @param data
    */
  setItemCart: (state, data) => {
    state.items.push(data)
  }
}

export default { state, actions, mutations }

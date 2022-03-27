<template>
  <div class="container">
    App
    {{ $store.state.user.profile }}
    <button
      @click="
        $store.commit('user/setUser', {
          id: '2',
          avater: 'pic',
          account: '23$',
          mobile: '1222',
          token: 'as'
        })
      "
    >
      设置用户信息
    </button>
  </div>
</template>

<script>
export default {}
</script>

<style></style>

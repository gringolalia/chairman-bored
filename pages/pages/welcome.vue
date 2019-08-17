<template lang="pug">
div
  FullPage
    .u-text-center
      img(src='~assets/img/welcome.png', srcset='~assets/img/welcome.png 1x, ~assets/img/welcome@2x.png 2x')

      h1
        i.material-icons directions_boat
        | Addio, Mondo Crudele
      h2 Bored With The Hoard
      button.button.is-primary Anchors Aweigh

</template>

<script>
import FullPage from '~/components/FullPage'
export default {
  layout: 'minimal',
  components: {
    FullPage
  }
}
</script>

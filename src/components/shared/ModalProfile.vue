<template lang="pug">
  main.col
    img.img-responsive.img-circle(:src='baseUrl+this.$store.state.clientSelect.profileImageRoute')
    .text-center
      h3 {{ this.$store.state.clientSelect.name }}
    .row.padding.list-group-item(title="Cedula")
      i.fa.fa-id-card.fa-lg.col-md-1.col-xs-1.col-sm-1
      p.col-md-10.col-xs-10.col-sm-10
        | {{ this.$store.state.clientSelect.idNumber }}
    .row.padding.list-group-item(title="Correo")
      i.fa.fa-envelope-o.fa-lg.col-md-1.col-xs-1.col-sm-1
      p.col-md-10.col-xs-10.col-sm-10
        | {{ this.$store.state.clientSelect.email }}
    .row.padding.list-group-item(title="Telefono")
      i.fa.fa-phone.fa-lg.col-md-1.col-xs-1.col-sm-1
      p.col-md-10.col-xs-10.col-sm-10
        | {{ this.$store.state.clientSelect.phone }}
    .row.padding.list-group-item(title="mensualidad")
      i.fa.fa-money.fa-lg.col-md-1.col-xs-1.col-sm-1
      p.col-md-10.col-xs-10.col-sm-10
        | {{ this.$store.state.clientSelect['membership.amount'] }}
    .row.padding.list-group-item(title="Fecha de inicio")
      i.fa.fa-calendar.fa-lg.col-md-1.col-xs-1.col-sm-1
      p.col-md-10.col-xs-10.col-sm-10
        | {{ this.$store.state.clientSelect.createdAt }}
    .row.padding.list-group-item.last(title="Fecha de pago")
      i.fa.fa-calendar.fa-lg.col-md-1.col-xs-1.col-sm-1
      p.col-md-10.col-xs-10.col-sm-10
        | {{ this.$store.state.clientSelect.payDay }}  
    button.btn.btn-primary.btn-sm.btn-block(@click='hide') Cerrar
</template>

<script>
import { constants } from '../../services/config'

export default {
  methods: {
    hide () {
      this.$store.commit('switchProfile')
    }
  },
  computed: {
    baseUrl () {
      return constants.baseUploadsURL
    }
  }
}
</script>

<style lang="css" scoped>
  img{
    width: 200px;
    margin: 0 auto;
  }

  .padding{
    padding-bottom:0px;
  }

  .last {
    margin-bottom:10px;
  }

  @media screen and (max-device-width : 480px) {
    img{
      width: 160px;
      padding: 0 auto;
    }
  }
</style>
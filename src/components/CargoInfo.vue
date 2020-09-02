/* eslint-disable */ 
<template>
  <div class="cargoinfo">
    <div class="waka-information">
      <div class="info-title">
        <span class="cargo-office">Cargo Office</span>
        <span class="cargo-info">Cargo Reservations and Information</span>
        <div class="cargo-contacts">
          <span >Tel: +1 (514) 220-8591</span>
          <span >Email: cargo@wakaconnection.com</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CargoInfo",
  props: {
  
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.waka-information{
  margin: 30px 0 30px 0;
}
.info-title{
  display: flex;
  flex-direction: column;
  color: var(--blue);
}
.cargo-office{
  font-size: 2.5rem;
}
.cargo-info{
  font-size: 1.5rem;
  
}
.cargo-contacts{
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  color: var(--dark);
}
</style>

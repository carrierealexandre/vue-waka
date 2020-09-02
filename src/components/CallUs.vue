/* eslint-disable */ 
<template>
  <div class="callus">
    <div class="bottom-footer">
        <div class="callus__wrapper">
          <span class="call-us" >You have questions?</span><span class="at">Call us at (514)-220 8591</span>
        </div>
    </div> 
  </div>
</template>

<script>
export default {
  name: "CallUs",
  props: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bottom-footer{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary);
}
.callus__wrapper{
  display: grid;
  align-items: end;
  justify-content: center;
  grid-template-columns: auto auto;
  margin: 20px 0 20px 0;
  text-transform: uppercase;
}
.call-us{
  font-size: 2rem;
  font-weight: 700;
  color: var(--orange);
}
.at{
  font-size: 1.2rem;
  font-weight: 500;
  padding-left: 10px;
  color: var(--blue);
  padding-bottom: 5px;
}
</style>

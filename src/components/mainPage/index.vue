<template lang="pug">
  section
    .container
      .wrap
        .col
          label Value to sell
          multiselect(
            v-model="valueToSell"
            :searchable="false"
            :show-labels="false"
            :allow-empty="false"
            :options="currencyToGet"
            @input="getLatest()"
          )

          .result
            template(v-if="valueToSell")
              i 1 {{valueToSell}}
            template(v-else) 
              i.warning Select value

          input(type="number"  v-model="count").value

        .col
          label Value to buy
          multiselect(
            v-model="valueToBuy"
            :searchable="false"
            :show-labels="false"
            :allow-empty="false"
            :options="currencyToGet"
            @input="getLatest()"
          )

          .result
            template(v-if="rates &&  rates[valueToBuy]")
              i  {{ rates[valueToBuy].toFixed(2)}}  {{valueToBuy}}
            template(v-else-if="valueToSell && valueToSell == valueToBuy")
              i.warning Select onother
            template(v-else) 
              i.warning Select value

          .result
            template(v-if="rates && valueToBuy && valueToSell != valueToBuy")
              b {{convert}}
           
</template>

<script src="./script.js"></script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style src="./style.scss" lang="scss" scoped></style>

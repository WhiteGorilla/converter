import Vue from "vue";
import axios from "axios";
import Multiselect from "vue-multiselect";

// register globally
Vue.component("multiselect", Multiselect);

export default {
  name: "MainPage",

  data() {
    return {
      valueToSell: null,
      valueToBuy: null,
      currencyData: {},
      rates: null,
      currencyToGet: ["USD", "EUR", "PLN", "CZK"],
      count: 1
    };
  },

  components: { Multiselect },

  computed: {
    convert() {
      let sum = this.count * this.rates[this.valueToBuy];
      if (sum) {
        return sum.toFixed(2);
      }
    }
  },

  methods: {
    getLatest() {
      if (
        this.valueToSell &&
        this.valueToBuy &&
        this.valueToSell != this.valueToBuy
      ) {
        axios
          .get(
            "https://api.exchangeratesapi.io/latest" +
              `?base=${this.valueToSell}` +
              `&symbols=${this.valueToBuy}`
          )
          .then(response => {
            this.currencyData = response;
            this.rates = this.currencyData.data.rates;
          })
          .catch(response => {
            console.log(response);
          });
      }
    }
  }
};

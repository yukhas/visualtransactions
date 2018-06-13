import VueC3 from 'vue-c3'
import Chart from '../Chart/Chart.vue'
import Selector from '../Selector/Selector.vue'

const App = {
    name: 'App',

    components: {
        Chart: Chart,
        Selector: Selector
    },


    /* methods: {
        getRegions: function () {
            return fetch('http://api.spending.gov.ua/api/v2/regions')
                .then((res) => res.json())
                .then((data) => {
                    this.addItemsToCollection(data)
                })
        }
    } */
}

export default App
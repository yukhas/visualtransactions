/* import Moviecard from '../../components/Moviecard/Moviecard.vue'
import MovieDB from '../../components/MovieDB/MovieDB.js' */
import axios from 'axios'
import { error } from 'util';

const Selector = {
    name: 'selector',

    /* components: { Moviecard }, */

    data() {
        return {
            regions: ['Kyiv', 'Vinnytsia', 'Chernigiv'],
            selected: ''
            /* key: 'c81343bf63c046d36f06ab1d5c8c1e6b',
            itemsColection: [],
            storedIds: [] */
        }
    },

    created() {
        this.getRegions()
    },

    watch: {
        selected: function () {
            this.fuckingShit();
        }
    },

    methods: {
        fuckingShit() {
            console.log(this.selected);
        },
        getRegions: function () {
            return axios.get('http://api.spending.gov.ua/api/v2/regions', {
                headers: { 'Access-Control-Allow-Origin': 'localhost:8080' }
            })
            .then(response => {
                console.log(response);
            })
            .catch(e => {
                console.log(error);
            });/* {
                method: 'get',
                headers: new Headers({
                    'Access-Control-Allow-Origin': 'http://localhost:8080',
                    'Content-Type': 'application / json'
                }) */
                /* .then((res) => res.json()) */
                /* .then((data) => {
                    data.results.forEach((element) => {
                        this.regions.push(element);
                    });
                    console.log(this.regions);
                }) */
        }
    }
}

export default Selector
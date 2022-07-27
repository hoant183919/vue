<template>
    <div>
        <table style="width: 100%">
            <tr id="bgHeader">
                <th v-for="(header, i) in headers" :key="i">{{ header }}</th>
            </tr>
            <tr v-for="(info, i) in infos" :key="i">
                <th>{{ info.id }}</th>
                <th>{{ info.name }}</th>
                <th>{{ info.class }}</th>
                <th>{{ info.math }}</th>
                <th>{{ info.literature }}</th>
                <th>{{ info.english }}</th>
                <th id="bgButton">
                    <button
                        @click="goToUpdatePage(info.id, info.name, info.class, info.math, info.literature, info.english)">{{
                                info.button
                        }}</button>
                </th>
            </tr>
        </table>
    </div>
    <router-view />
</template>

<script>
import axios from 'axios'
let id = 0;
export default {
    data() {
        return {
            headers: [
                "ID",
                "Name",
                "Class",
                "Math",
                "Literature",
                "English",
                "Button",
            ],
            infos: [
                {
                    id: ++id,
                    name: "A",
                    class: "11A",
                    math: 10,
                    literature: 10,
                    english: 10,
                    button: "Edit",
                },
                {
                    id: ++id,
                    name: "B",
                    class: "11B",
                    math: 10,
                    literature: 10,
                    english: 10,
                    button: "Edit",
                },
            ],
            info: null
        };
    },
    methods: {
        async fetchData() {
            axios
                .get('https://api.coindesk.com/v1/bpi/currentprice.json')
                .then(response => (this.info = response.data))
        },
        goToUpdatePage(idClick, name, className, math, literature, english) {
            window.open(`http://127.0.0.1:5173/update/${idClick}?name=${name}&class=${className}&math=${math}&literature=${literature}&english=${english}`);
        },
    },
    mounted() {
        this.fetchData();
    },
}
</script>

<style>
table,
th,
td {
    border: 1px solid black;
    border-collapse: collapse;
}

#bgHeader {
    background-color: rgb(10, 182, 240);
}

#bgButton {
    background-color: rgb(14, 105, 184);
}

button {
    background-color: rgb(14, 105, 184);
    border: none;
}
</style>
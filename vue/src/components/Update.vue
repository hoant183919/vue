<template>
   <div class="form">
      <div>
         <h2>Update infomation student</h2>
         <form name="form" onsubmit="false">
            <div class="form-text">ID: <h3>{{ this.$route.params.id }}</h3>
            </div>
            <br>
            <div class="form-text">Name: <input type="text" v-model="info.name" required=""></div>
            <br>
            <div class="form-text">Class: <input type="text" v-model="info.class" required=""></div>
            <br>
            <div class="form-text">Math: <input type="number" v-model="info.math" required=""></div>
            <br>
            <div class="form-text">Literature: <input type="number" v-model="info.literature" required=""></div>
            <br>
            <div class="form-text">English: <input type="number" v-model="info.english" required=""></div>
            <br>
            <div @click="updateData()" class="submit"><input type="button" value="Submit"></div>
         </form>
      </div>
   </div>
</template>

<script>
import axios from 'axios';
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
         ],
         info:
         {
            id: 1,
            name: "",
            class: "",
            math: 10,
            literature: 10,
            english: 10,
         },
      };
   },
   mounted() {
      this.info.id = this.$route.params.id;
      this.info.name = this.$route.query.name;
      this.info.class = this.$route.query.class;
      this.info.math = this.$route.query.math;
      this.info.literature = this.$route.query.literature;
      this.info.english = this.$route.query.english;
   },
   methods: {
      updateData(id, name, className, math, literature, english) {
         axios
            .put('https://jsonplaceholder.typicode.com/posts/1', {
               id: this.info.id,
               name: this.info.name,
               class: this.info.class,
               math: this.info.math,
               literature: this.info.literature,
               english: this.info.english,
            })
            .then((response) => console.log(response))
      }
   }
}
</script>

<style>
h2 {
   margin: 0 0 20px 0;
   text-align: center;
}

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

.form {
   width: 600px;
   height: auto;
   background: #add8e6;
   margin: 20px auto;
   padding: 40px;
   display: flex;
   justify-content: center;
   align-items: center;
   border: 2px solid #00f;
}

.form-text {
   font-size: large;
   display: flex;
   justify-content: space-between;
   align-items: center;
}

.submit {
   display: flex;
   justify-content: flex-end;
}

input[type="text"] {
   font-size: medium;
   width: 200px;
   height: 40px;
   margin: 0 0 5px 0;
   border-radius: 3px;
   border: 0 solid #ddd;
}

input[type="number"] {
   font-size: medium;
   width: 200px;
   height: 40px;
   margin: 0 0 5px 0;
   border-radius: 3px;
   border: 0 solid #ddd;
}

input[type="button"] {
   font-size: large;
   background: #00f;
   color: #fff;
   padding: 10px 20px;
   border-radius: 3px;
   border: 0 solid #9eb3ff;
   text-transform: uppercase;
   cursor: pointer;
}
</style>
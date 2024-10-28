// Vue instance
const main = Vue.createApp({

    // Data Properties
    data() {
        return {
            greeting: "Hello People",

            man_gender: "Man",
            man_name: "Michael Scott",
            man_title: "Regional Manager of Scranton Branch",
            man_shout: "That's what she said!",

            woman_gender: "Woman",
            woman_name: "Jan Levinson",
            woman_title: "Vice President of Northeast Sales",
            woman_shout: "I don't care how your day was!"
        }
    }
    
});

// Create a new component 'person-component'
// Child of the parent Vue instance

main.component('person-component', {
// Receive the data passed down from outside (HTML)
// 'props' are like component's data properties
// they come from outside (HTML)
props: ['name','gender','title'],

    template: 
    `
        <h1> Gender: {{gender}} </h1>
        <p> Name: {{name}} </p>
        <p> Title: {{title}} </p>
    `
})

main.component('button-component',{
    props: ['name', 'shout'],

    // Data Properties
    data(){
        return {
            message: ""
        }
    },

    // <h2> {{name}} shouts {{shout}} </h2>

    template: 
    `
    <h2> {{message}}</h2>
    <button v-on:click='make_shout()'> 
    Hear {{name}} Shout</button>
    `,

    methods: {
        make_shout(){
            let shoutingStr = this.name + ' shouts ' + this.shout;
            this.message = shoutingStr;
            alert(shoutingStr);
        }
    }
})

// Link this Vue instance with <div id="main">
main.mount("#main");
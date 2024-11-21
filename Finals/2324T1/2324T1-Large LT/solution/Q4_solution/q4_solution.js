// q4.js (Vue code) solution

// (1) Vue instance
const app = Vue.createApp({ 
	data() {
		return {
			videos:[
				{title:"Prof Kyong dancing", url:"https://www.youtube.com/embed/Pbo1-H1PxBQ?controls=1", likes:0},
				{title:"History of SCIS", url:"https://www.youtube.com/embed/MqfijJHnEBM?controls=1", likes:0},
				{title:"SCIS Voix", url:"https://www.youtube.com/embed/bKnICWSveko?controls=1", likes:0}
				]
		}
	},
	methods: {
		onLike(index){
			this.videos[index].likes++;
		}
	},
})
// ------------- Do not edit the code above this line ------------------

// (2) Define Vue component (vote-video)
app.component('vote-video', {
	props:["url", "vindex", "title"],  // insert props
	template: `<div class="p-2">
				<div>
					<iframe width="180" height="100" :src="url"  />             <!-- edit src -->
				</div>
				<div>	
					<button style="border:none" @click="this.$emit('like',this.vindex)">&#10084</button>  <!-- add @click -->
					Video Index: {{vindex}} &nbsp;                                                        <!-- add moustache -->
					<a :href="url" target="_new">{{this.title}}</a>                                       <!-- add moustache -->
			   </div>
			  </div>`
})

// (3) mount Vue instance to HTML element
const vm = app.mount('#root')

/*
    Name  : Jin Yun Lin
    Email : yunlin.jin.2022
*/
const app = Vue.createApp({

    data() {
        return {
            singers: {}, // DO NOT MODIFY/REMOVE THIS
            selectedSinger:null,
            // YOU MAY ADD MORE
            // DATA PROPERTIES
            playlistSongs:[]


        };
    },

    // DO NOT MODIFY THIS SECTION
    created() {
        // Fetch data from JSON file using Axios
        var self = this;
        axios.get('q3_data.json')  // Updated to fetch from JSON file
        .then(response => {
            self.singers = response.data;
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
    },

    methods: {
        
        // YOU MAY ADD MORE METHODS
        // listAwards(){
        //     // console.log(this.singers);
        //     let ul = document.getElementsByClassName("awards-list")[0];
        //     let li = document.createElement("li");
        //     console.log(ul);

        //     for (singer in this.singers){
        //         let singerObj = this.singers[singer];
        //         for (let i=0;i<singerObj.awards.length;i++){
        //             ul += 
        //             `
        //             <li>{{singerObj.awards[i]}}</li>
        //             `
        //             let award = document.createTextNode(singerObj.awards[i]);
        //             console.log(singerObj.awards[i]);
        //             li.appendChild(award);
        //             return singerObj.awards[i];
                    
        //         }
                
        //         ul.appendChild(li);
        //     }
            
            
            
        // }
        addSongToPlaylist(songDetails){
            this.playlistSongs.push(songDetails)
        }
    },

    computed : {
        singerDetails(){
            if (this.selectedSinger == null){
                return {
                    songs : [],
                    awards : []
                }
            }
            return this.singers[this.selectedSinger]
        }
    }

});


app.mount('#app');

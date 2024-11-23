const app = Vue.createApp({

    data() {
        return {
            
            // DO NOT MODIFY THE NAME OF THIS DATA PROPERTY
            // DO NOT MODIFY THE DATA TYPE OF THIS DATA PROPERTY
            availableBooks: {}, // Grouped by genres

            // DO NOT MODIFY THE NAME OF THIS DATA PROPERTY
            // DO NOT MODIFY THE DATA TYPE OF THIS DATA PROPERTY
            borrowedBooks: []

        };
    },

    // DO NOT MODIFY THIS
    created() {
        axios.get("books_data.json")
        .then((response) => {
            this.availableBooks = response.data;
        })
        .catch((error) => {
            console.error("Error fetching books data:", error);
        });
    },

    methods: {

        // COMPLETE THIS
        borrowBook(book, genre) {
            
            // YOUR CODE GOES HERE

        },
        
        // COMPLETE THIS
        returnBook(index) {
            
            // YOUR CODE GOES HERE

        }
    }
});

// DO NOT MODIFY THIS
app.component("book-list", {

    props: ["books"],

    emits: ["borrow-book"],

    template: `
        <div>
            <div v-for="(books, genre) in books" :key="genre">
                <h3>{{ genre }}</h3>
                <ul>
                    <li v-for="book in books" :key="book.title">
                        {{ book.title }} by {{ book.author }}
                        <button class="borrow" @click="$emit('borrow-book', book, genre)">
                            Borrow
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    `
});

app.mount("#app");

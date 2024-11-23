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
            this.borrowedBooks.push(book);

            // Find and remove the book from the availableBooks list
            const genreBooks = this.availableBooks[genre];
            const bookIndex = genreBooks.findIndex(b => b.title === book.title);
            if (bookIndex !== -1) {
                genreBooks.splice(bookIndex, 1);
            }

            // Remove the genre key if there are no more books in this genre
            if (this.availableBooks[genre].length === 0) {
                delete this.availableBooks[genre];
            }
            // for (genre in this.availableBooks){
            //     console.log(genre);
            //     for (book of genre){
            //         console.log(genre[book].title);
            //     }
            // }
            

        },
        
        // COMPLETE THIS
        returnBook(index) {
            
            // YOUR CODE GOES HERE
            // Find and remove the book from the borrowedBooks list
            let returnedBook = this.borrowedBooks.splice(index, 1)[0];

            // Add it back to the appropriate genre in availableBooks
            const genre = returnedBook.genre; // Assuming the book object has a 'genre' property
            if (!this.availableBooks[genre]) {
                this.availableBooks[genre] = [];
            }
            this.availableBooks[genre].push(returnedBook);

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

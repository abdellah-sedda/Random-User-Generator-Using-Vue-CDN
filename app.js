const app = Vue.createApp({
    // template: `<h1>Hello {{ firstName }}</h1>`,
    data() {
        return {
            firstName: 'Abdellah',
            lastName: 'Sedda',
            email: 'abdellah.sedda08@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },
    methods: {
        async getUser() {
            // console.log(this.firstName)
            const res = await fetch('https://randomuser.me/api')
            // const data = res.json()
            // console.log(data)
            const { results } = await res.json()
            // console.log(results)


            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        }
    }
})


app.mount('#app')
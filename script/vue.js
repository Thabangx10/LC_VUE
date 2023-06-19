let test = Vue.createApp({
    // make a function that will return data from a certain event of a persons details  
    data(){
        return{
            // We will be also using a rendering condition that will not display the content if 'false'
            
            // Person1 : true,
            details : true,
            firstName : 'Thabang',
            lastName : 'Kganana',
            Age : 24
        }
    },
    
    // Create a function to change the components of our originals persons details using the methods
    methods :{
        changeContent(){
            // We use 'this.' to allow us dynamic access via html element 'changeContent' 
            this.firstName = 'Thabang',
            this.lastName = 'Bloem',
            this.Age = 24
        }
    },
    
    // We can use various way to toggle and show /hide information we want e.g ==, != etc
    methods :{
        showfirstname(){
            this.details = !this.details
        }
    }
})

test.mount('.vueContent')

let test2 = Vue.createApp({
    // Creating a dynamic template
    template : '<h2>F**ck yeah!</h2>',

    methods :{

    }
})

test2.mount('#template')
const categories = [
    {
        id:'1',
        image:'https://th.bing.com/th/id/OIP.KEOhhukH7Raj6VyVdB40lAHaHa?pid=ImgDet&w=190&h=190&c=7&dpr=1.4',
        name:' Popular'

    },

    {
        id:'2',
        image:'https://th.bing.com/th/id/R.4261d48a138f72bdc703a6f935f18717?rik=EWjTjsZTVufJdA&pid=ImgRaw&r=0 ',
        name:' Bricklayers'

    },

    {
        id:'3',
        image:'https://th.bing.com/th/id/OIP.aKzx8RNpERKkAB9QmqzQNAHaHa?w=211&h=211&c=7&r=0&o=5&dpr=1.4&pid=1.7 ',
        name:' Painters'

    },

    {
        id:'4',
        image:'https://th.bing.com/th/id/OIP.PrLQ5Zahs5MX7G9xsnQtvgHaHa?w=188&h=188&c=7&r=0&o=5&dpr=1.4&pid=1.7 ',
        name:'Artists'

    },

    {
        id:'5',
        image:'https://th.bing.com/th/id/OIP.-c435afYaKk0JMcZHz5DlgHaGe?w=220&h=194&c=7&r=0&o=5&dpr=1.4&pid=1.7',
        name:' Hair stylists'

    },

    {
        id:'6',
        image:'https://th.bing.com/th/id/R.cf17e9b089ea3067e8c31143fbf5cac2?rik=MvpciOFASafpxA&pid=ImgRaw&r=0 ',
        name:'Woodworkers'

    },

    {
        id:'7',
        image:'data:image/jpeg;base64,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 ',
        name:'Jewellers '

    },

    {
        id:'8',
        image:'https://th.bing.com/th/id/R.6bcb6252628cce41b0ae7600af635619?rik=XUwmUtPEQEDI%2fQ&pid=ImgRaw&r=0',
        name:'Bead makers'

    },

    {
        id:'8',
        image:'https://th.bing.com/th/id/OIP.u_PEeqXik2kGujyF9Krk0wHaD4?w=339&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7 ',
        name:'Barbers '

    },

    {
        id:'9',
        image:'https://th.bing.com/th/id/OIP.51BnsJrcfeB4lRB1wBFVlAHaHa?w=187&h=186&c=7&r=0&o=5&dpr=1.4&pid=1.7 ',
        name:'Tilers '

    },

    {
        id:'10',
        image:'https://th.bing.com/th/id/R.2e767e15ae153cbc89153f3331aa7a5c?rik=RpcU6itIPQ6WOw&pid=ImgRaw&r=0',
        name:' Sculptors'

    },

    {
        id:'11',
        image:'https://th.bing.com/th/id/OIP.0PPI_cuw_LuW8LMB7rUvbAHaHa?rs=1&pid=ImgDetMain',
        name:'Dressmakers '

    },

    {
        id:'12',
        image:'https://th.bing.com/th/id/R.7f83bfe03917938c489efa510764e96c?rik=ff%2fIsZl1jN%2f%2bbQ&riu=http%3a%2f%2fwww.brokenworldrp.com%2fassets%2fimages%2fProfessions%2fLeatherworker.png&ehk=Hk%2fj8II5Y8teD7y0DFU%2b2ousbNdzEF7Rb5EU4nCY63E%3d&risl=&pid=ImgRaw&r=0 ',
        name:'Leatherworks'

    },

    {
        id:'13',
        image:'https://th.bing.com/th/id/OIP.5rewzZKYCqC_FmkTOfOIDQHaHa?rs=1&pid=ImgDetMain ',
        name:'MetalWorkers'

    },

    {
        id:'14',
        image:'https://th.bing.com/th/id/OIP.oGWc4iRg36gwB9y14_mmSAHaHa?rs=1&pid=ImgDetMain ',
        name:'Moulders'

    },













]
export default categories;


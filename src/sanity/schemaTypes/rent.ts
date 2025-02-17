

export default{
    name: 'rent',
    type:'document',
    title:'rent',
    fields:[
        {
            name:'firstName',
            title:'First Name',
            type:'string',

        },
        
        {
            name:'lastName',
            title:'Last Name',
            type:'string',

        },

        


        {
            name:'address',
            title:'Address',
            type:'string',

        },

        {
            name:'city',
            title:'City',
            type:'string',

        },

        {
            name:'zipCode',
            title:'Zip Code',
            type:'string',

        },

        {
            name:'phone',
            title:'Phone',
            type:'string',

        },

        {
            name:'email',
            title:'Email',
            type:'string',

        },

        {
            name:'cartItems',
            title:'Cart Items',
            type:'array',
            of:[{ type:'reference', to:{type:'car'}}]

        },

        {
            name:'total',
            title:'Total',
            type:'number',

        },

        {
            name:'status',
            title:' Rent Status',
            type:'string',
            options:{
                list:[
                   {title:'pending',value:'pending'} ,
                {title:'Success',value:'success'},
                {title:'Dispatch',value:'dispatch'},
                ],

                layout:'radio'
            },
            initialValue:'pending'

        },


    ]
}
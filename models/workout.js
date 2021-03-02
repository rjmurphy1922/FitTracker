const mongoose = require("mongoose");
const Schema = mongoose.Schema

const exerciseSchema = new Schema(

    {
        day: {
            type: Date,
            default: getDate = new Date()
        },

        exercises: [
        
            {           
            type: {
                type: String,
                required: "Enter Exercise Type"
            },

            name:{

                type: String,
                required: "Enter an Exercise Name"
            },

            duration:{

                   type: Number
                
            },
                weight:{
                    type: Number

                },

                reps:{
                    type: Number

                },

                sets:{
                    type: Number

                },

                distance:{
                    type: Number

                }



                

            }
        ]

    },

    {
            toJSON: {
                virtuals: true
            }

    }
);

const Workout = mongoose.model("Workout", exerciseSchema);

module.exports = Workout;

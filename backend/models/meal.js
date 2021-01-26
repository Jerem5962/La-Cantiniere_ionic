const mongoose = require('mongoose')

const MealSchema = mongoose.Schema({
    idMeal: { type: String },
    strMeal: { type: String },
    strDrinkAlternate: { type: String },
    price: { type: Number },
    strArea: { type: String },
    strInstructions: { type: String },
    strMealThumb: { type: String },
    strTags: { type: String },
    strYoutube: { type: String },
    strIngredients: { type: Array },
    strSource: { type: String },
    dateModified: { type: String },
})

module.exports = mongoose.model('Meal', MealSchema)
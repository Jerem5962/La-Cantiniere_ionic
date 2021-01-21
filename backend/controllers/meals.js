const Meal = require('../models/meal');

exports.showAllMeals = (req, res) => {
    Meal.find()
        .then((meals) => { res.status(200).json(meals)})
        .catch(error => res.status(400).json(error))
}

exports.createMeal = (req, res) => {
    const meal = new Meal({
        ...req.body
    })
    console.log(req.body)
    meal.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !', meal: meal}))
        .catch(error => res.status(400).json({ error }));
}

exports.showSimpleMeal = (req, res, next) => {
    Meal.findOne({ _id: req.params.id })
      .then(meal => res.status(200).json(meal))
      .catch(error => res.status(404).json({ error }));
}

exports.modifyMeal = (req, res, next) => {
    Meal.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet modifié !'}))
        .catch(error => res.status(400).json({ error }));
}

exports.deleteMeal = (req, res, next) => {
    Meal.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  }

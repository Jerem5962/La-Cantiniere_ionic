const express = require('express');
const router = express.Router();
const mealController = require('../controllers/meals');

router.get('/', mealController.showAllMeals)

router.get('/:id', mealController.showSimpleMeal);

router.put('/:id', mealController.modifyMeal);

router.post('/', mealController.createMeal)

router.delete('/:id', mealController.deleteMeal);

module.exports = router;
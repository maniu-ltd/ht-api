<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\Models\Cms\Category::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'keywords' => $faker->title,
        'description' => $faker->title,
        'logo' => $faker->imageUrl(100, 100),
        'sort' => rand(0, 1000),
        'type' => rand(1, 2),
        'status' => rand(0, 1),
    ];
});

$factory->define(App\Models\Cms\Article::class, function (Faker $faker) {
    return [
        'user_id' => 1,
        'title' => $faker->name,
        'category_id' => rand(1, 50),
        'thumb' => $faker->imageUrl(300, 170),
        'keywords' => $faker->title,
        'description' => $faker->title,
        'content' => $faker->text,
        'views' => rand(0, 1000),
        'sort' => rand(0, 1000),
    ];
});

$factory->define(App\Models\Cms\Project::class, function (Faker $faker) {
    return [
        'user_id' => getUserId(),
        'category_id' => rand(1, 20),
        'title' => $faker->title,
        'thumb' => $faker->imageUrl(300, 300),
        'keywords' => $faker->title,
        'description' => $faker->title,
        'content' => $faker->text,
        'views' => rand(100, 9999), //浏览量
        'sort' => rand(10, 99), //排序
    ];
});

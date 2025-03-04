<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Modules\Inventory\Models\Car;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\Modules\Inventory\Models\Model>
 */
class CarFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->unique()->name(),
            'year' => $this->faker->year(),
            'kilometers' => $this->faker->numberBetween(10000, 30000),
            'transmission' => $this->faker->randomElement(['AUTOMATICA', 'MANUAL']),
            'price' => $this->faker->numberBetween(8000, 35000),
        ];
    }

    /**
     * Get the name of the model that is generated by the factory.
     *
     * @return string
     */
    public function modelName()
    {
        return Car::class;
    }
}

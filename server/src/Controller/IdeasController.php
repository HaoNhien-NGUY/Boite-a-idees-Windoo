<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Faker;

class IdeasController extends AbstractController
{
    /**
     * @Route("/api/ideas", name="ideas_index", methods="GET")
     */
    public function ideasIndex()
    {
        $faker = Faker\Factory::create('fr_FR');

        $nbIdeas = $faker->numberBetween(10, 50);
        $ideas = [];

        for($i = 0; $i < $nbIdeas; $i++) {
            $ideas[] = [
                "id" => $i, 
                "title" => $faker->text(25), "createdAt" => $faker->dateTimeBetween('-6 months', 'now', 'Europe/Paris'),
                "author" => $faker->name,
                "score" => $faker->numberBetween(0, 50)
            ];
        }

        return $this->json($ideas , 200, []);
    }
}

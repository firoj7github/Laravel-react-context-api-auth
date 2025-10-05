<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [

            [
                "email" => "user@gmail.com",
                "password" => Hash::make("12345678"),
                "name"=>"user",
                "created_at" => now()
            ]

        ];
        
        User::insert($users);
}

}

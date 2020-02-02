<?php

use App\Media;
use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $user = new User;

        $user->email = 'admin';
        $user->password = Hash::make('admin');
        $user->token = 'initial';

        $user->save();

        $media_list = [
            [
                'title'         => 'Image title',
                'path'          => 'image.jpeg',
                'alt'           => 'Image alt',
            ]
        ];

        Media::insert($media_list);
    }
}

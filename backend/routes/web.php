<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::post('api/login', 'Api\LoginController@login');

Route::get('api/pages/find', 'Api\PageController@find');

Route::middleware(['cors', 'auth'])->group(function () {
    Route::get('/test', function () {
        return 'middleware passed';
    });

    Route::resource('api/blocks', 'Api\BlockController', [
        'except'    => ['create', 'edit']
    ]);

    Route::resource('api/pages', 'Api\PageController', [
        'except'    => ['create', 'edit']
    ]);

    Route::resource('api/media', 'Api\MediaController', [
        'except'    => ['create', 'edit']
    ]);

    Route::get('api/header', 'Api\HeaderItemController@index');
    Route::get('api/footer', 'Api\FooterController@show');
    Route::put('api/footer', 'Api\FooterController@update');


    Route::post('api/header', 'Api\HeaderItemController@sync');
});

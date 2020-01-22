<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function login(Request $request) 
    {
        $user = User::where('email', $request->body->email)->first();
        if(!isset($user) || !$user) {
            return [
                'success'   => false,
                'errors'    => ['User not found']
            ];
        }

        if(!Hash::check($request->body->password, $user->password)) {
            return [
                'success'   => false,
                'errors'    => ['Password do not match']
            ];
        }

        $token = Hash::make(time() . 'Aas*%^a!@3213#as');
        $user->token = $token;
        $user->save();

        return [
            'success'   => true,
            'data'      => [
                'token'     => $token,
                'email'     => $user->email
            ]
        ];
    }
}

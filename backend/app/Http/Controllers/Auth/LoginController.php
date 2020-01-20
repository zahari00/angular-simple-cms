<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\User;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }


    public function login(Request $request) 
    {
        $user = User::where('email', $request->email)->first();
        if(!isset($user) || !$user) {
            return [
                'success'   => false,
                'errors'    => ['User not found']
            ];
        } 

        if(!Hash::check($request->password, $user->password)) {
            return [
                'success'   => false,
                'errors'    => ['Password do not match']
            ];
        }

        $token = md5(time() . 'Aas*%^a!@3213#as');
        $user->token = $token;
        $user->save();

        return [
            'success'   => true,
            'data'      => [
                'token' => $token,
                'email' => $user->email
            ]
        ];
        
    }
}

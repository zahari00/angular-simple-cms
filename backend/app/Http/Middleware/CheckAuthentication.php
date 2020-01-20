<?php

namespace App\Http\Middleware;

use App\User;
use Closure;

class CheckAuthentication
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $user = User::where('token', $request->token)->first();

        if(!isset($user) || !$user) {
            print json_encode([
                'succes' => false,
                'errors'    => [
                    'Not allowed'
                ]
            ]);
            exit();
        }

        $request->merge(['user' => $user]);
        return $next($request);
    }
}

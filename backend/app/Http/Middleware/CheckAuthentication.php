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
        $user = User::where('token', $request->header('Authorization'))->first();

        if (!isset($user) || !$user->token) {
            return response()
                ->json([
                    'code'      => 403,
                    'success'   => false,
                    'errors'    => [
                        'Not allowed'
                    ]
                ]);
        }

        $request->merge(['user' => $user]);
        return $next($request);
    }
}

<?php

namespace App\Http\Middleware;

use Closure;

class ValidateRequestFormat
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
        if (is_array($request->body)) {
            print json_encode([
                'success'   => false,
                'errors'    => [
                    'Request format is invalid'
                ]
            ]);
            exit();
        }
        return $next($request);
    }
}

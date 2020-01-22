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
        if (!isset($request->body)) {
            $request->merge(['body' => []]);
        }
        
        return $next($request);
    }
}

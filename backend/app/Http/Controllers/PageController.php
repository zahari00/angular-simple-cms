<?php

namespace App\Http\Controllers;

use App\Page;
use Illuminate\Http\Request;

class PageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // add ?page=n to get the page you want
        $per_page = (int)$request->body['per_page'];
        $pages = Page::paginate($per_page);
        return [
            'success'   => true,
            'data'      => $pages
        ];
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // TODO: validation
        $page = Page::create($request->body);
        $page->blocks()->sync(json_decode($request->body['blocks']));

        return [
            'success'   => true,
            'data'      => $page->load('blocks')  
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Page::find($id)->first();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $page = Page::where('id', $id);
        
        if(!isset($page) || !$page) {
            return [
                'success'   => false,
                'errors'    => ['Page not found']
            ];
        }

        $page->blocks()->sync(json_decode($request->body['blocks']));
        return [
            'success'   => true,
            'data'      => $page->load('blocks')  
        ];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

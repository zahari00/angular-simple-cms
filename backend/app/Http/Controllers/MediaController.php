<?php

namespace App\Http\Controllers;

use App\Jobs\SaveMedia;
use App\Media;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\ImageManagerStatic as Image;

class MediaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        /**
         * Validate file mime type
         */
        $validator = Validator::make($request->all(), [
            'file' => 'required|mimes:jpeg,png,jpg,gif,webp,svg'
        ]);

        // if validate fails abort with 400
        if ($validator->fails()) {
            return response('No file is provided', 400);
        }

        try {
            // get the file
            $file = $request->file;

            // get the public path
            $path = public_path('uploads') . '/130x130/';

            // get the file extension
            $extension = '.' . $file->getClientOriginalExtension();

            // get the file name
            $file_name = $file->getClientOriginalName();
            // remove the extension from the file name
            $file_name = str_replace($extension, '', $file_name);
            $file_name .= '-1';

            $int = 2;

            // while file exists increase the last digit with 1
            // example file-1.txt, file-2.txt etc
            while (file_exists($path . $file_name . $extension)) {
                $file_name = substr_replace($file_name, '', -1);
                $file_name .= $int;
                $int++;
                if ($int > 100) {
                    return response('Failed to save file', 500);
                }
            };

            // save to DB
            $media = new Media;
            $media->path = $file_name . $extension;
            $media->save();

            /**
             * Dispatch job to save media
             */
            dispatch(new SaveMedia($file, $file_name . $extension, $extension));

            // return the file
            return [
                'success'   => true,
                'data'      => $media    
            ];

        } catch (Exception $e) {
            var_dump($e);
            print json_encode([
                'success'   => false,
                'errors'    => ['Server error']
            ]);
            exit();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $media = Media::find($id)->first();

        if(!isset($media) || !$media) {
            return [
                'success'   => false,
                'errors'    => ['Media not found']
            ];
        }

        $media->destroy();
    }
}
